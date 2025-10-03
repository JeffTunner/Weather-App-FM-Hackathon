import { createContext, useContext, useState, useEffect } from "react";
import getWeather from "../api/weatherAPI.js";
import getLocation from "../api/geocoding.js";

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
    const [locationLoading, setLocationLoading] = useState(false);
    const [locationError, setLocationError] = useState(null);
    const [locationResults, setLocationResults] = useState([]);

    async function searchCity(query) {
        if(!query.trim()) return;
        setLocationLoading(true);
        setLocationError(null);
        try {
            const response = await getLocation(query);
            if(!response || response.length === 0){
                setLocationError("No search result found!");
                setLocationResults([]);
            }else {
                setLocationResults(response);
            }
        } catch (err) {
            setLocationError("No search result found!");
        } finally {
            setLocationLoading(false);
        }
    }

    async function handleSelectedCity(city) {
        setSelectedCity(city);
        setLat(city.latitude);
        setLon(city.longitude);
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

    const fetchWeather = async () => {
        if(!lat || !lon) return;
        setLoading(true);
        setError(null);
        try {
            const response = await getWeather(lat, lon, windUnit, temperatureUnit, precipitationUnit);
            setWeatherData(response);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWeather();
    }, [lat, lon, temperatureUnit, windUnit, precipitationUnit]);

    const retryFetch = () => {
        fetchWeather();
    };

    return (
        <WeatherContext.Provider
        value={{
            handleSelectedCity, handleGlobalUnit,
            selectedCity, weatherData,
            temperatureUnit, setTemperatureUnit,
            precipitationUnit, setPrecipitationUnit,
            windUnit, setWindUnit,
            locationLoading, locationError, locationResults,
            searchCity, error, loading, retryFetch
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