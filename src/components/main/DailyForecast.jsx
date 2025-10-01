import rainIcon from "../../assets/images/icon-rain.webp";
import drizzleIcon from "../../assets/images/icon-drizzle.webp";
import sunIcon from "../../assets/images/icon-sunny.webp";
import pCloudyIcon from "../../assets/images/icon-partly-cloudy.webp";
import stormIcon from "../../assets/images/icon-storm.webp";
import snowIcon from "../../assets/images/icon-snow.webp";
import fogIcon from "../../assets/images/icon-fog.webp";
import overcastIcon from "../../assets/images/icon-overcast.webp";
import { useWeather } from "../../context/WeatherContext.jsx";
import { useState, useEffect } from "react";

function DailyForecast() {

    const {weatherData} = useWeather();

    function getWeatherIcon(code) {
    if (code === 0 || code === 1) return sunIcon;
    if (code === 2) return pCloudyIcon;
    if (code === 3) return overcastIcon;
    if (code === 45 || code === 48) return fogIcon;
    if (code >= 51 && code <= 57) return drizzleIcon;
    if (code >= 61 && code <= 67) return rainIcon;
    if (code >= 71 && code <= 77) return snowIcon;
    if (code >= 80 && code <= 82) return rainIcon;
    if (code === 85 || code === 86) return snowIcon;
    if (code >= 95 && code <= 99) return stormIcon;
    return sunIcon;
    }

    function getDayName(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {weekday: "short"});
    }

    return(
        <section className="flex flex-col gap-5">
            <div>
                <h1 className="text-Neutral-0 font-dm font-semibold text-xl leading-[120%]">Daily Forecast</h1>
            </div>
            <div className="grid grid-cols-3 gap-4 md:grid-cols-7">
                {weatherData ? (weatherData?.daily?.time.map((date, i) => (
                    <div key={i} className="flex flex-col items-center bg-Neutral-800 border border-Neutral-600 rounded-xl px-2.5 py-4 gap-4">
                        <h2 className="font-dm font-medium text-lg leading-[120%] text-Neutral-0">{getDayName(date)}</h2>
                        <img src={getWeatherIcon(weatherData.daily.weather_code[i])} alt="rainIcon" className="w-[60px] h-[60px]"/>
                        <span className="flex gap-[33.57px]">
                            <p className="text-Neutral-0 font-dm font-medium text-[16px] leading-[120%]">
                                {Math.round(weatherData.daily.temperature_2m_max[i])}°
                            </p>
                            <p className="text-Neutral-200 font-dm font-medium text-[16px] leading-[120%]">
                                {Math.round(weatherData.daily.temperature_2m_min[i])}°
                            </p>
                        </span>
                    </div>
                ))): 
                (<>
                                <div className="flex flex-col items-center bg-Neutral-800 border border-Neutral-600 rounded-xl px-2.5 py-4 gap-4">
                    <h2 className="font-dm font-medium text-lg leading-[120%] text-Neutral-0">Tue</h2>
                    <img src={rainIcon} alt="rainIcon" className="w-[60px] h-[60px]"/>
                    <span className="flex gap-[33.57px]">
                        <p className="text-Neutral-0 font-dm font-medium text-[16px] leading-[120%]">20°</p>
                        <p className="text-Neutral-200 font-dm font-medium text-[16px] leading-[120%]">14°</p>
                    </span>
                </div>

                <div className="flex flex-col items-center  bg-Neutral-800 border border-Neutral-600 rounded-xl px-2.5 py-4 gap-4">
                    <h2 className="font-dm font-medium text-lg leading-[120%] text-Neutral-0">Wed</h2>
                    <img src={drizzleIcon} alt="drizzleIcon" className="w-[60px] h-[60px]"/>
                    <span className="flex gap-[33.57px]">
                        <p className="text-Neutral-0 font-dm font-medium text-[16px] leading-[120%]">21°</p>
                        <p className="text-Neutral-200 font-dm font-medium text-[16px] leading-[120%]">15°</p>
                    </span>
                </div>

                <div className="flex flex-col items-center  bg-Neutral-800 border border-Neutral-600 rounded-xl px-2.5 py-4 gap-4">
                    <h2 className="font-dm font-medium text-lg leading-[120%] text-Neutral-0">Thu</h2>
                    <img src={sunIcon} alt="sunIcon" className="w-[60px] h-[60px]"/>
                    <span className="flex gap-[33.57px]">
                        <p className="text-Neutral-0 font-dm font-medium text-[16px] leading-[120%]">24°</p>
                        <p className="text-Neutral-200 font-dm font-medium text-[16px] leading-[120%]">14°</p>
                    </span>
                </div>

                <div className="flex flex-col items-center bg-Neutral-800 border border-Neutral-600 rounded-xl px-2.5 py-4 gap-4">
                    <h2 className="font-dm font-medium text-lg leading-[120%] text-Neutral-0">Fri</h2>
                    <img src={pCloudyIcon} alt="pCloudyIcon" className="w-[60px] h-[60px]"/>
                    <span className="flex gap-[33.57px]">
                        <p className="text-Neutral-0 font-dm font-medium text-[16px] leading-[120%]">25°</p>
                        <p className="text-Neutral-200 font-dm font-medium text-[16px] leading-[120%]">13°</p>
                    </span>
                </div>

                <div className="flex flex-col items-center  bg-Neutral-800 border border-Neutral-600 rounded-xl px-2.5 py-4 gap-4">
                    <h2 className="font-dm font-medium text-lg leading-[120%] text-Neutral-0">Sat</h2>
                    <img src={stormIcon} alt="stormIcon" className="w-[60px] h-[60px]"/>
                    <span className="flex gap-[33.57px]">
                        <p className="text-Neutral-0 font-dm font-medium text-[16px] leading-[120%]">21°</p>
                        <p className="text-Neutral-200 font-dm font-medium text-[16px] leading-[120%]">15°</p>
                    </span>
                </div>

                <div className="flex flex-col items-center  bg-Neutral-800 border border-Neutral-600 rounded-xl px-2.5 py-4 gap-4">
                    <h2 className="font-dm font-medium text-lg leading-[120%] text-Neutral-0">Sun</h2>
                    <img src={snowIcon} alt="snowIcon" className="w-[60px] h-[60px]"/>
                    <span className="flex gap-[33.57px]">
                        <p className="text-Neutral-0 font-dm font-medium text-[16px] leading-[120%]">25°</p>
                        <p className="text-Neutral-200 font-dm font-medium text-[16px] leading-[120%]">16°</p>
                    </span>
                </div>

                <div className="flex flex-col items-center bg-Neutral-800 border border-Neutral-600 rounded-xl px-2.5 py-4 gap-4">
                    <h2 className="font-dm font-medium text-lg leading-[120%] text-Neutral-0">Mon</h2>
                    <img src={fogIcon} alt="fogIcon" className="w-[60px] h-[60px]"/>
                    <span className="flex gap-[33.57px]">
                        <p className="text-Neutral-0 font-dm font-medium text-[16px] leading-[120%]">24°</p>
                        <p className="text-Neutral-200 font-dm font-medium text-[16px] leading-[120%]">15°</p>
                    </span>
                </div>
                </>)}

            </div>
        </section>
    );
}
export default DailyForecast;