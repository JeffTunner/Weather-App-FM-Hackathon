import { createContext, useContext, useState, useEffect } from "react";

const WeatherContext = createContext();

export function WeatherProvider({children}) {

    const [selectedCity, setSelectedCity] = useState(null);
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [unit, setUnit] = useState('celsius');

    function handleSelectedCity(city) {
        setSelectedCity(city);
        setLat(city.latitude);
        setLon(city.longitude);
    }

    function handleUnit(newUnit) {
        setUnit(newUnit);
    }

    function handleWeatherData(data) {
        setWeatherData(data);
    }

    return (
        <WeatherContext.Provider
        value={{
            handleSelectedCity, handleUnit, handleWeatherData, selectedCity, unit, weatherData, setLat, setLon
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