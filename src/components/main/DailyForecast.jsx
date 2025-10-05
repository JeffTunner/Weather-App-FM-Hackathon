import rainIcon from "../../assets/images/icon-rain.webp";
import drizzleIcon from "../../assets/images/icon-drizzle.webp";
import sunIcon from "../../assets/images/icon-sunny.webp";
import pCloudyIcon from "../../assets/images/icon-partly-cloudy.webp";
import stormIcon from "../../assets/images/icon-storm.webp";
import snowIcon from "../../assets/images/icon-snow.webp";
import fogIcon from "../../assets/images/icon-fog.webp";
import overcastIcon from "../../assets/images/icon-overcast.webp";
import { useWeather } from "../../context/WeatherContext.jsx";

function DailyForecast() {
  const { weatherData, loading } = useWeather();

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
    return date.toLocaleDateString("en-US", { weekday: "short" });
  }


  const daysToShow = 7;

  return (
    <section className="flex flex-col gap-5">
      <div>
        <h1 className="text-Neutral-0 font-dm font-semibold text-xl leading-[120%]">Daily Forecast</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 md:grid-cols-7">
        {loading
          ? 
            Array.from({ length: daysToShow }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-Neutral-800 border border-Neutral-600 rounded-xl px-2.5 py-4 gap-4 animate-pulse"
              >
                <div className="h-5 w-10 bg-Neutral-700 rounded" />
                <div className="h-14 w-14 bg-Neutral-700 rounded-full" />
                <div className="flex gap-[33.57px]">
                  <div className="h-4 w-6 bg-Neutral-700 rounded" />
                  <div className="h-4 w-6 bg-Neutral-700 rounded" />
                </div>
              </div>
            ))
          : weatherData
          ? 
            weatherData.daily.time.slice(0, daysToShow).map((date, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-Neutral-800 border border-Neutral-600 rounded-xl px-2.5 py-4 gap-4"
              >
                <h2 className="font-dm font-medium text-lg leading-[120%] text-Neutral-0">{getDayName(date)}</h2>
                <img
                  src={getWeatherIcon(weatherData.daily.weather_code[i])}
                  alt="weatherIcon"
                  className="w-[60px] h-[60px]"
                />
                <span className="flex gap-[33.57px]">
                  <p className="text-Neutral-0 font-dm font-medium text-[16px] leading-[120%]">
                    {Math.round(weatherData.daily.temperature_2m_max[i])}°
                  </p>
                  <p className="text-Neutral-200 font-dm font-medium text-[16px] leading-[120%]">
                    {Math.round(weatherData.daily.temperature_2m_min[i])}°
                  </p>
                </span>
              </div>
            ))
          : 
            [
              { day: "Tue", icon: rainIcon, max: 20, min: 14 },
              { day: "Wed", icon: drizzleIcon, max: 21, min: 15 },
              { day: "Thu", icon: sunIcon, max: 24, min: 14 },
              { day: "Fri", icon: pCloudyIcon, max: 25, min: 13 },
              { day: "Sat", icon: stormIcon, max: 21, min: 15 },
              { day: "Sun", icon: snowIcon, max: 25, min: 16 },
              { day: "Mon", icon: fogIcon, max: 24, min: 15 },
            ].map((entry, i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-Neutral-800 border border-Neutral-600 rounded-xl px-2.5 py-4 gap-4"
              >
                <h2 className="font-dm font-medium text-lg leading-[120%] text-Neutral-0">{entry.day}</h2>
                <img src={entry.icon} alt="weatherIcon" className="w-[60px] h-[60px]" />
                <span className="flex gap-[33.57px]">
                  <p className="text-Neutral-0 font-dm font-medium text-[16px] leading-[120%]">{entry.max}°</p>
                  <p className="text-Neutral-200 font-dm font-medium text-[16px] leading-[120%]">{entry.min}°</p>
                </span>
              </div>
            ))}
      </div>
    </section>
  );
}

export default DailyForecast;
