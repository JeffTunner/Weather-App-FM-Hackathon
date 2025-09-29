import { createContext, useContext, useState, useEffect } from "react";

const WeatherCOntext = createContext();

export function WeatherProvider({children}) {

    const [selectedCity, setSelectedCity] = useState({});
    const [weatherData, setWeatherData] = useState({});
    const [unit, setUnit] = useState('celsius');

    function handleSelectedCity() {

    }

    function handleUnit() {

    }

    function handleWeatherData() {

    }

    return (
        <WeatherCOntext.Provider
        value={{handleSelectedCity, handleUnit, handleWeatherData}}
        >
            {children}
        </WeatherCOntext.Provider>
    );
}

export function useWeather() {
    const ctx = useContext(WeatherCOntext);
    if(!ctx) throw new Error("error");
    return ctx;
}