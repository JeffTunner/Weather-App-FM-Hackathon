import dropdownIcon from "../../assets/images/icon-dropdown.svg";
import overcastIcon from "../../assets/images/icon-overcast.webp";

function RightContent() {

    return (
        <main className="bg-Neutral-800 p-6 w-[384px] rounded-[20px] flex flex-col gap-4">
            <section className="flex items-center justify-between">
                <h1 className="text-Neutral-0 font-dm font-semibold text-xl leading-[120%]">Hourly Forecast</h1>
                <button className="bg-Neutral-600 flex px-4 py-2 gap-3 rounded-lg cursor-pointer">
                    <p className="text-Neutral-0 font-dm font-medium text-[16px] leading-[120%]">Tuesday</p> 
                    <img src={dropdownIcon} alt="dropdownIcon" className="w-[12] h-[18]" />
                </button>
            </section>

            <section>
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