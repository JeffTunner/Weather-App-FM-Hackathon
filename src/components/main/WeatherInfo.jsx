import BgLarge from "../../assets/images/bg-today-large.svg";
import BgSmall from "../../assets/images/bg-today-small.svg";
import sunIcon from "../../assets/images/icon-sunny.webp";
import drizzleIcon from "../../assets/images/icon-drizzle.webp";
import fogIcon from "../../assets/images/icon-fog.webp";
import overcastIcon from "../../assets/images/icon-overcast.webp";
import partlyCloudyIcon from "../../assets/images/icon-partly-cloudy.webp";
import rainIcon from "../../assets/images/icon-rain.webp";
import snowIcon from "../../assets/images/icon-snow.webp";
import stormIcon from "../../assets/images/icon-storm.webp";
import { useState, useEffect } from "react";
import { useWeather } from "../../context/WeatherContext.jsx";

function WeatherInfo() {

    const {selectedCity, weatherData} = useWeather();
    const [width, setWidth] = useState(window.innerWidth);
    const [weatherIcon, setWeatherIcon] = useState(sunIcon);

    useEffect(() => {
    if (!weatherData?.current?.weather_code) {
      setWeatherIcon(sunIcon);
      return;
    }

    const code = weatherData.current.weather_code;
    if (code === 0 || code === 1) setWeatherIcon(sunIcon);
    else if (code === 2) setWeatherIcon(partlyCloudyIcon);
    else if (code === 3) setWeatherIcon(overcastIcon);
    else if (code === 45 || code === 48) setWeatherIcon(fogIcon);
    else if (code >= 51 && code <= 57) setWeatherIcon(drizzleIcon);
    else if (code >= 61 && code <= 67) setWeatherIcon(rainIcon);
    else if (code >= 71 && code <= 77) setWeatherIcon(snowIcon);
    else if (code >= 80 && code <= 82) setWeatherIcon(rainIcon);
    else if (code === 85 || code === 86) setWeatherIcon(snowIcon);
    else if (code >= 95 && code <= 99) setWeatherIcon(stormIcon);
    else setWeatherIcon(sunIcon);
    }, [weatherData]);

    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    },[]);

    return (
        <>
        <section className="flex flex-col items-center">
            <div className="relative h-[286px] w-full bg-cover bg-center rounded-[20px]"
            style={{backgroundImage: width > 768 ? `url(${BgLarge})` : `url(${BgSmall})`}}>
                <div className="absolute inset-0 flex flex-col justify-center items-center px-6 md:flex-row md:justify-between">
                    <div className="flex flex-col gap-3">
                        <h1 className="font-dm font-bold text-Neutral-0 text-[28px] leading-[120%]">
                            {selectedCity ? `${selectedCity.name}, ${selectedCity.country}` : "Berlin, Germany"}
                        </h1>
                        <p className="font-dm font-medium text-Neutral-200 text-[18px] leading-[120%]">{formattedDate}</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <img src={weatherIcon} alt="sunIcon" className="w-[120px] h-[120px]"/>
                        <h2 className="font-dm font-semibold italic text-Neutral-0 text-8xl tracking-[-2px] leading-[100%]">
                            {weatherData ? `${weatherData?.current?.temperature_2m}°` : "20°"}
                        </h2>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
export default WeatherInfo;