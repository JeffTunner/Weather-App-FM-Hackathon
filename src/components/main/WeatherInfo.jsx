import BgLarge from "../../assets/images/bg-today-large.svg";
import BgSmall from "../../assets/images/bg-today-small.svg";
import sunIcon from "../../assets/images/icon-sunny.webp";
import { useState, useEffect } from "react";

function WeatherInfo() {

    const [width, setWidth] = useState(window.innerWidth);

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
                        <h1 className="font-dm font-bold text-Neutral-0 text-[28px] leading-[120%]">Berlin, Germany</h1>
                        <p className="font-dm font-medium text-Neutral-200 text-[18px] leading-[120%]">Tuesday, Aug 5, 2025</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <img src={sunIcon} alt="sunIcon" className="w-[120px] h-[120px]"/>
                        <h2 className="font-dm font-semibold italic text-Neutral-0 text-8xl tracking-[-2px] leading-[100%]">20°</h2>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
export default WeatherInfo;