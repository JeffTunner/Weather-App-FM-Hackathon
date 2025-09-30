import { createContext, useContext, useState, useEffect } from "react";
import getWeather from "../api/weatherAPI.js";

const WeatherContext = createContext();

export function WeatherProvider({children}) {

    const [selectedCity, setSelectedCity] = useState(null);
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [temperatureUnit, setTemperatureUnit] = useState('celsius');
    const [windUnit, setWindUnit] = useState('kmh');
    const [precipitationUnit, setPrecipitationUnit] = useState('mm');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    async function handleSelectedCity(city) {
        setSelectedCity(city);
        setLat(city.latitude);
        setLon(city.longitude);
        setLoading(true);
        setError(null);

        try {
            const response = await getWeather(city.latitude, city.longitude, windUnit, temperatureUnit, precipitationUnit);
            setWeatherData(response);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    function handleGlobalUnit(mode) {
        if(mode === 'Metric') {
            setTemperatureUnit('celsius');
            setWindUnit('kmh');
            setPrecipitationUnit('mm');
        } else if(mode === 'Imperial') {
            setTemperatureUnit('fahrenheit');
            setWindUnit('mph');
            setPrecipitationUnit('inch');
        }
    }

    useEffect(() => {
        setLoading(true);
        setError(null);
        try {
            if (lat && lon) {
            (async () => {
            const response = await getWeather(lat, lon, windUnit, temperatureUnit, precipitationUnit);
            setWeatherData(response);
            })();
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, [lat, lon, temperatureUnit, windUnit, precipitationUnit]);


    return (
        <WeatherContext.Provider
        value={{
            handleSelectedCity, handleGlobalUnit,
            selectedCity, weatherData,
            temperatureUnit, setTemperatureUnit,
            precipitationUnit, setPrecipitationUnit,
            windUnit, setWindUnit
        }}
        >
            {children}
        </WeatherContext.Provider>
    );
}

export function useWeather() {
    const ctx = useContext(WeatherContext);
    if(!ctx) throw new Error("error");
    return ctx;
}