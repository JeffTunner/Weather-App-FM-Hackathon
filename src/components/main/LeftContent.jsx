import WeatherDetail from "./WeatherDetail.jsx";
import WeatherInfo from "./WeatherInfo.jsx";

function LeftContent() {

    return (
        <section>
            <WeatherInfo />
            <WeatherDetail />
        </section>
    );
}
export default LeftContent;