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


    async function handleSelectedCity(city) {
        setSelectedCity(city);
        setLat(city.latitude);
        setLon(city.longitude);

        const response = await getWeather(city.latitude, city.longitude);
        setWeatherData(response);

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

    return (
        <WeatherContext.Provider
        value={{
            handleSelectedCity, handleGlobalUnit,
            selectedCity, weatherData, setLat, setLon,
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