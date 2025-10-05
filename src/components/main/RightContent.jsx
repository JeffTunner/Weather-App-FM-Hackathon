import dropdownIcon from "../../assets/images/icon-dropdown.svg";
import overcastIcon from "../../assets/images/icon-overcast.webp";
import drizzleIcon from "../../assets/images/icon-drizzle.webp";
import fogIcon from "../../assets/images/icon-fog.webp";
import partlyIcon from "../../assets/images/icon-partly-cloudy.webp";
import rainIcon from "../../assets/images/icon-rain.webp";
import snowIcon from "../../assets/images/icon-snow.webp";
import stormIcon from "../../assets/images/icon-storm.webp";
import sunIcon from "../../assets/images/icon-sunny.webp";
import { useState } from "react";
import { useWeather } from "../../context/WeatherContext.jsx";

function RightContent() {

    const today = new Date();

    const {weatherData, loading} = useWeather();
    const [weekday, setWeekDay] = useState(false);
    const daysOfWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    const [selectedDay, setSelectedDay] = useState(getDayName(today));

    function handleWeek() {
        setWeekDay(!weekday);
    }

    function getWeatherIcon(code) {
    if (code === 0 || code === 1) return sunIcon;
    if (code === 2) return partlyIcon;
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
        return date.toLocaleDateString("en-US", {weekday: "long"});
    }

    function getHourLabel(dateString) {
        const date = new Date(dateString);
        return date.toLocaleTimeString("en-US", {hour: "numeric"})
    }

    const filteredHours = weatherData?.hourly?.time
    .map((time, i) => ({
        time,
        temp: weatherData.hourly.temperature_2m[i],
        code: weatherData.hourly.weather_code[i],
    }))
    .filter(entry => getDayName(entry.time) === selectedDay)
    .slice(12, 20);


    return (
        <main className="bg-Neutral-800 px-4 py-5 rounded-[20px] flex flex-col gap-4 md:p-6 w-full lg:max-w-[384px]">
            <section className="flex items-center justify-between relative">
                <h1 className="text-Neutral-0 font-dm font-semibold text-xl leading-[120%]">Hourly Forecast</h1>
                <div className="relative">
                <button className="bg-Neutral-600 flex px-4 py-2 gap-3 rounded-lg cursor-pointer" onClick={handleWeek}>
                    <p className="text-Neutral-0 font-dm font-medium text-[16px] leading-[120%]">{loading ? "-" : selectedDay}</p> 
                    <img src={dropdownIcon} alt="dropdownIcon" className="w-[12] h-[18]" />
                </button>
                {weekday && (
                    <section className="flex flex-col gap-1 p-2 bg-Neutral-800 border border-Neutral-600 rounded-xl w-[214px] absolute top-full -left-23 mt-2.5">
                        {daysOfWeek.map((day, i) => (
                            <button key={day}
                            onClick={() => {
                                setSelectedDay(day);
                                setWeekDay(false);
                            }}
                            className={`font-dm font-medium text-Neutral-0 text-[16px] leading-[120%] px-2 py-2.5 rounded-lg text-left cursor-pointer ${day === selectedDay ? 'bg-Neutral-700' : 'hover:bg-Neutral-700 hover:text-Neutral-200'}`}>
                                {day}
                            </button>
                        ))
                        }
                    </section>
                )}
                </div>
            </section>

            <section className="flex flex-col gap-4">
                {loading ? (
                    Array.from({ length: 8 }).map((_, index) => (
                        <div
                        key={index}
                        className="flex items-center bg-Neutral-700 border border-Neutral-600 pl-3 pt-2.5 pr-4 pb-2.5 rounded-lg justify-between"
                        >
                        <span className="flex items-center gap-2 h-[40px]" />
                        <span className="h-[24px]" />
                        </div>
                ))) : 
                weatherData ? ( filteredHours.map((entry) => (
                    <div key={entry.time} className="flex items-center bg-Neutral-700 border border-Neutral-600 pl-3 pt-2.5 pr-4 pb-2.5 rounded-lg justify-between">
                    {!loading ? (
                        <>
                    <span className="flex items-center gap-2">
                        <img src={getWeatherIcon(entry.code)} alt="overcastIcon" className="w-[40px] h-[40px]" />
                        <p className="font-dm font-medium text-Neutral-0 text-xl leading-[120%]">{getHourLabel(entry.time)}</p>
                    </span>
                    <span>
                        <p className="font-dm font-medium text-Neutral-0 text-[16px] leading-[120%]">{entry.temp}°</p>
                    </span>
                        </>
                    ) : (
                        <>
                        <span className="flex items-center gap-2 h-[40px]" />
                        <span className="h-[24px]" />
                        </>
                    )}

                </div>
                ))
                ) 
                : 
                (<>
                    <div className="flex items-center bg-Neutral-700 border border-Neutral-600 pl-3 pt-2.5 pr-4 pb-2.5 rounded-lg justify-between">
                    <span className="flex items-center gap-2">
                        <img src={overcastIcon} alt="overcastIcon" className="w-[40px] h-[40px]" />
                        <p className="font-dm font-medium text-Neutral-0 text-xl leading-[120%]">3 PM</p>
                    </span>
                    <span>
                        <p className="font-dm font-medium text-Neutral-0 text-[16px] leading-[120%]">20°</p>
                    </span>
                </div>

                <div className="flex items-center bg-Neutral-700 border border-Neutral-600 pl-3 pt-2.5 pr-4 pb-2.5 rounded-lg justify-between">
                    <span className="flex items-center gap-2">
                        <img src={partlyIcon} alt="overcastIcon" className="w-[40px] h-[40px]" />
                        <p className="font-dm font-medium text-Neutral-0 text-xl leading-[120%]">4 PM</p>
                    </span>
                    <span>
                        <p className="font-dm font-medium text-Neutral-0 text-[16px] leading-[120%]">20°</p>
                    </span>
                </div>

                <div className="flex items-center bg-Neutral-700 border border-Neutral-600 pl-3 pt-2.5 pr-4 pb-2.5 rounded-lg justify-between">
                    <span className="flex items-center gap-2">
                        <img src={sunIcon} alt="overcastIcon" className="w-[40px] h-[40px]" />
                        <p className="font-dm font-medium text-Neutral-0 text-xl leading-[120%]">5 PM</p>
                    </span>
                    <span>
                        <p className="font-dm font-medium text-Neutral-0 text-[16px] leading-[120%]">20°</p>
                    </span>
                </div>

                <div className="flex items-center bg-Neutral-700 border border-Neutral-600 pl-3 pt-2.5 pr-4 pb-2.5 rounded-lg justify-between">
                    <span className="flex items-center gap-2">
                        <img src={overcastIcon} alt="overcastIcon" className="w-[40px] h-[40px]" />
                        <p className="font-dm font-medium text-Neutral-0 text-xl leading-[120%]">6 PM</p>
                    </span>
                    <span>
                        <p className="font-dm font-medium text-Neutral-0 text-[16px] leading-[120%]">19°</p>
                    </span>
                </div>

                <div className="flex items-center bg-Neutral-700 border border-Neutral-600 pl-3 pt-2.5 pr-4 pb-2.5 rounded-lg justify-between">
                    <span className="flex items-center gap-2">
                        <img src={snowIcon} alt="overcastIcon" className="w-[40px] h-[40px]" />
                        <p className="font-dm font-medium text-Neutral-0 text-xl leading-[120%]">7 PM</p>
                    </span>
                    <span>
                        <p className="font-dm font-medium text-Neutral-0 text-[16px] leading-[120%]">18°</p>
                    </span>
                </div>

                <div className="flex items-center bg-Neutral-700 border border-Neutral-600 pl-3 pt-2.5 pr-4 pb-2.5 rounded-lg justify-between">
                    <span className="flex items-center gap-2">
                        <img src={fogIcon} alt="overcastIcon" className="w-[40px] h-[40px]" />
                        <p className="font-dm font-medium text-Neutral-0 text-xl leading-[120%]">8 PM</p>
                    </span>
                    <span>
                        <p className="font-dm font-medium text-Neutral-0 text-[16px] leading-[120%]">18°</p>
                    </span>
                </div>

                <div className="flex items-center bg-Neutral-700 border border-Neutral-600 pl-3 pt-2.5 pr-4 pb-2.5 rounded-lg justify-between">
                    <span className="flex items-center gap-2">
                        <img src={snowIcon} alt="overcastIcon" className="w-[40px] h-[40px]" />
                        <p className="font-dm font-medium text-Neutral-0 text-xl leading-[120%]">9 PM</p>
                    </span>
                    <span>
                        <p className="font-dm font-medium text-Neutral-0 text-[16px] leading-[120%]">17°</p>
                    </span>
                </div>

                <div className="flex items-center bg-Neutral-700 border border-Neutral-600 pl-3 pt-2.5 pr-4 pb-2.5 rounded-lg justify-between">
                    <span className="flex items-center gap-2">
                        <img src={overcastIcon} alt="overcastIcon" className="w-[40px] h-[40px]" />
                        <p className="font-dm font-medium text-Neutral-0 text-xl leading-[120%]">10 PM</p>
                    </span>
                    <span>
                        <p className="font-dm font-medium text-Neutral-0 text-[16px] leading-[120%]">17°</p>
                    </span>
                </div>
                </>)}
                
            </section>
        </main>
    );
}
export default RightContent;