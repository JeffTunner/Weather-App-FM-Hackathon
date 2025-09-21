
function WeatherDetail() {

    return (
        <section className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5 lg:gap-6">
            <div className="bg-Neutral-800 p-5 rounded-xl border border-Neutral-600 flex flex-col gap-6">
                <h1 className="font-dm font-medium text-lg leading-[120%] text-Neutral-200">Feels Like</h1>
                <p className="font-dm font-light text-[32px] leading-[100%] text-Neutral-0">18°</p>
            </div>
            <div className="bg-Neutral-800 p-5 rounded-xl border border-Neutral-600 flex flex-col gap-6">
                <h1 className="font-dm font-medium text-lg leading-[120%] text-Neutral-200">Humidity</h1>
                <p className="font-dm font-light text-[32px] leading-[100%] text-Neutral-0">46%</p>
            </div>
            <div className="bg-Neutral-800 p-5 rounded-xl border border-Neutral-600 flex flex-col gap-6">
                <h1 className="font-dm font-medium text-lg leading-[120%] text-Neutral-200">Wind</h1>
                <p className="font-dm font-light text-[32px] leading-[100%] text-Neutral-0">14 km/h</p>
            </div>
            <div className="bg-Neutral-800 p-5 rounded-xl border border-Neutral-600 flex flex-col gap-6">
                <h1 className="font-dm font-medium text-lg leading-[120%] text-Neutral-200">Precipitation</h1>
                <p className="font-dm font-light text-[32px] leading-[100%] text-Neutral-0">0 mm</p>
            </div>
        </section>
    );
}
export default WeatherDetail;