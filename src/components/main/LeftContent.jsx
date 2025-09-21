import DailyForecast from "./DailyForecast.jsx";
import WeatherDetail from "./WeatherDetail.jsx";
import WeatherInfo from "./WeatherInfo.jsx";

function LeftContent() {

    return (
        <section className="flex flex-col gap-8 lg:gap-12 lg:max-w-[800px]">
            <div className="flex flex-col gap-5 lg:gap-8">
                <WeatherInfo />
                <WeatherDetail />
            </div>
            <div>
                <DailyForecast />
            </div>

        </section>
    );
}
export default LeftContent;