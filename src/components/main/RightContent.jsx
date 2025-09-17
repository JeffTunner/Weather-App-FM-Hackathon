import dropdownIcon from "../../assets/images/icon-dropdown.svg";
import overcastIcon from "../../assets/images/icon-overcast.webp";
import { useState } from "react";

function RightContent() {

    const [weekday, setWeekDay] = useState(false);

    function handleWeek() {
        setWeekDay(!weekday);
    }

    return (
        <main className="bg-Neutral-800 p-6 w-[384px] rounded-[20px] flex flex-col gap-4">
            <section className="flex items-center justify-between relative">
                <h1 className="text-Neutral-0 font-dm font-semibold text-xl leading-[120%]">Hourly Forecast</h1>
                <div className="relative">
                <button className="bg-Neutral-600 flex px-4 py-2 gap-3 rounded-lg cursor-pointer" onClick={handleWeek}>
                    <p className="text-Neutral-0 font-dm font-medium text-[16px] leading-[120%]">Tuesday</p> 
                    <img src={dropdownIcon} alt="dropdownIcon" className="w-[12] h-[18]" />
                </button>
                {weekday && (
                    <section className="flex flex-col gap-1 p-2 bg-Neutral-800 border border-Neutral-600 rounded-xl w-[214px] absolute top-full -left-23 mt-2.5">
                        <button className="font-dm font-medium text-Neutral-200 text-[16px] leading-[120%] px-2 py-2.5 bg-Neutral-700 rounded-lg text-left ">Monday</button>
                        <button className="font-dm font-medium text-Neutral-0 text-[16px] leading-[120%] px-2 py-2.5 rounded-lg text-left hover:bg-Neutral-700 hover:text-Neutral-200">Tuesday</button>
                        <button className="font-dm font-medium text-Neutral-0 text-[16px] leading-[120%] px-2 py-2.5 rounded-lg text-left hover:bg-Neutral-700 hover:text-Neutral-200">Wednesday</button>
                        <button className="font-dm font-medium text-Neutral-0 text-[16px] leading-[120%] px-2 py-2.5 rounded-lg text-left hover:bg-Neutral-700 hover:text-Neutral-200">Thursday</button>
                        <button className="font-dm font-medium text-Neutral-0 text-[16px] leading-[120%] px-2 py-2.5 rounded-lg text-left hover:bg-Neutral-700 hover:text-Neutral-200">Friday</button>
                        <button className="font-dm font-medium text-Neutral-0 text-[16px] leading-[120%] px-2 py-2.5 rounded-lg text-left hover:bg-Neutral-700 hover:text-Neutral-200">Saturday</button>
                        <button className="font-dm font-medium text-Neutral-0 text-[16px] leading-[120%] px-2 py-2.5 rounded-lg text-left hover:bg-Neutral-700 hover:text-Neutral-200">Sunday</button>
                    </section>
                )}
                </div>
            </section>

            <section className="flex flex-col gap-4">
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
                        <img src={overcastIcon} alt="overcastIcon" className="w-[40px] h-[40px]" />
                        <p className="font-dm font-medium text-Neutral-0 text-xl leading-[120%]">3 PM</p>
                    </span>
                    <span>
                        <p className="font-dm font-medium text-Neutral-0 text-[16px] leading-[120%]">20°</p>
                    </span>
                </div>

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
                        <img src={overcastIcon} alt="overcastIcon" className="w-[40px] h-[40px]" />
                        <p className="font-dm font-medium text-Neutral-0 text-xl leading-[120%]">3 PM</p>
                    </span>
                    <span>
                        <p className="font-dm font-medium text-Neutral-0 text-[16px] leading-[120%]">20°</p>
                    </span>
                </div>
            </section>
        </main>
    );
}
export default RightContent;