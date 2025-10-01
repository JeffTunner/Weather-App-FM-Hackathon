import { useState } from "react";
import { useWeather } from "../../context/WeatherContext.jsx";

function WeatherDetail() {

    const {weatherData, windUnit, precipitationUnit} = useWeather();

    return (
        <section className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5 lg:gap-6">
            <div className="bg-Neutral-800 p-5 rounded-xl border border-Neutral-600 flex flex-col gap-6">
                <h1 className="font-dm font-medium text-lg leading-[120%] text-Neutral-200">Feels Like</h1>
                <p className="font-dm font-light text-[32px] leading-[100%] text-Neutral-0">
                    {weatherData ? `${weatherData?.current?.apparent_temperature}°` : "18°"}
                </p>
            </div>
            <div className="bg-Neutral-800 p-5 rounded-xl border border-Neutral-600 flex flex-col gap-6">
                <h1 className="font-dm font-medium text-lg leading-[120%] text-Neutral-200">Humidity</h1>
                <p className="font-dm font-light text-[32px] leading-[100%] text-Neutral-0">
                    {weatherData ? `${weatherData?.current?.relative_humidity_2m}%` : "46%"}
                </p>
            </div>
            <div className="bg-Neutral-800 p-5 rounded-xl border border-Neutral-600 flex flex-col gap-6">
                <h1 className="font-dm font-medium text-lg leading-[120%] text-Neutral-200">Wind</h1>
                <p className="font-dm font-light text-[32px] leading-[100%] text-Neutral-0">
                    {weatherData ? `${weatherData?.current?.wind_speed_10m}` : "14"} {windUnit}
                </p>
            </div>
            <div className="bg-Neutral-800 p-5 rounded-xl border border-Neutral-600 flex flex-col gap-6">
                <h1 className="font-dm font-medium text-lg leading-[120%] text-Neutral-200">Precipitation</h1>
                <p className="font-dm font-light text-[32px] leading-[100%] text-Neutral-0">
                    {weatherData ? `${weatherData?.current?.precipitation}` : "0"} {precipitationUnit}
                </p>
            </div>
        </section>
    );
}
export default WeatherDetail;