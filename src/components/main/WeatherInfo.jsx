import BgLarge from "../../assets/images/bg-today-large.svg";
import sunIcon from "../../assets/images/icon-sunny.webp";

function WeatherInfo() {

    return (
        <section className="flex flex-col items-center">
            <div className="relative h-[286px] w-screen lg:max-w-[800px]"
            style={{backgroundImage: `url(${BgLarge})`}}>                
                <div className="absolute inset-0 flex flex-col justify-center rounded-[20px] gap-4 lg:flex-row items-center text-Neutral-0 px-6 lg:py-20 lg:justify-between">
                    <div className="flex flex-col gap-3 font-dm text-Neutral-0">
                        <h1 className="font-bold text-[28px]">Berlin, Germany</h1>
                        <p className="font-medium text-[18px]">Tuesday, Aug 5, 2025</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <img src={sunIcon} alt="sunIcon" className="w-[120px] h-[120px]"/>
                        <h2 className="font-dm font-semibold italic text-8xl tracking-[-2px]">20°</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default WeatherInfo;