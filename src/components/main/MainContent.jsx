import SearchContainer from "./SearchContainer.jsx";
import ContentContainer from "./ContentContainer.jsx";
import { useWeather } from "../../context/WeatherContext.jsx";

function MainContent() {

    const {locationError} = useWeather();

    return (
        <main className="flex flex-col gap-8 lg:gap-12">
            {!locationError ? (
                <>
                    <SearchContainer />
                    <ContentContainer />
                </>
            ) : (
                <section className="flex flex-col h-screen gap-12">
                    <SearchContainer />
                    <div className="font-dm font-bold text-Neutral-0 text-[28px] text-center leading-[120%]">
                        {locationError}
                    </div>
                </section>
            )}
        </main>
    );
}
export default MainContent;