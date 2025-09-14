import DailyForecast from "./DailyForecast.jsx";
import WeatherDetail from "./WeatherDetail.jsx";
import WeatherInfo from "./WeatherInfo.jsx";

function LeftContent() {

    return (
        <section className="flex flex-col gap-12 w-[800px]">
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