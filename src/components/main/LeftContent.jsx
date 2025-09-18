import DailyForecast from "./DailyForecast.jsx";
import WeatherDetail from "./WeatherDetail.jsx";
import WeatherInfo from "./WeatherInfo.jsx";

function LeftContent() {

    return (
        <section className="flex flex-col gap-8 lg:gap-12 lg:w-[800px]">
            <div>
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