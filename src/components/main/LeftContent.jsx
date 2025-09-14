import DailyForecast from "./DailyForecast.jsx";
import WeatherDetail from "./WeatherDetail.jsx";
import WeatherInfo from "./WeatherInfo.jsx";

function LeftContent() {

    return (
        <section>
            <WeatherInfo />
            <WeatherDetail />
            <DailyForecast />
        </section>
    );
}
export default LeftContent;