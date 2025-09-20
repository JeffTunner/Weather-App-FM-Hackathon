import Logo from "../assets/images/logo.svg";
import UnitLogo from "../assets/images/icon-units.svg";
import Dropdown from "../assets/images/icon-dropdown.svg";
import checkIcon from "../assets/images/icon-checkmark.svg";
import { useState } from "react";
function Header() {

    const[units, setUnits] = useState("Imperial");
    const[dropdown, setDropdown] = useState(true);

    function handleDropdown() {
        setDropdown(!dropdown);
    }

    function handleUnit() {
        if(units === "Imperial") {
            setUnits("Metric");
            setDropdown(!dropdown);
        } else {
            setUnits("Imperial");
            setDropdown(!dropdown);
        }
    }

    return(
        <header className="flex justify-center">
            <div className="flex items-center justify-between w-full lg:max-w-[1216px]">
                <div>
                    <img src={Logo} alt="logo" />
                </div>
                <div className="relative">
                    <button className="flex text-Neutral-0 px-2.5 py-2 bg-Neutral-800 gap-1.5 rounded-[6px] cursor-pointer md:px-4 md:py-3 md:gap-2.5 md:rounded-lg"
                        onClick={handleDropdown}>
                        <img src={UnitLogo}/>
                        <span className="font-dm font-medium text-sm leading-[120%] md:text-[16px]">Units</span> 
                        <img src={Dropdown}/>
                    </button>
                </div>
            </div>
            {/*!dropdown && (
                <section className="bg-Neutral-800 border border-Neutral-600 rounded-xl px-2 py-1.5 w-[214px] h-[412px] absolute right-0 mr-28 mt-2.5">
                    <button className="px-2 py-2.5 hover:bg-Neutral-700 w-full rounded-lg cursor-pointer flex"
                    onClick={handleUnit}>
                        <h1 className="font-dm font-medium text-Neutral-0 text-[16px] leading-[120%]">Switch to {units}</h1>
                    </button> 

                    <div className="flex flex-col gap-2 mb-1">
                        <p className="font-dm font-medium text-Neutral-300 text-sm leading-[120%] px-2 pt-1.5">Temperature</p>
                        <div className="flex flex-col gap-1">
                            <span className={`flex px-2 py-2.5 rounded-lg justify-between ${units === "Imperial" ? 'bg-Neutral-700' : 'hover:bg-Neutral-700 cursor-pointer'}`}>
                                <p className="font-dm font-medium text-Neutral-0 text-[16px] leading-[120%]">Celcius (°C)</p>
                                {(units === "Imperial" && <img src={checkIcon} />)}
                            </span>
                            <span className={`flex px-2 py-2.5 rounded-lg justify-between ${units === "Metric" ? 'bg-Neutral-700' : 'hover:bg-Neutral-700 cursor-pointer'}`}>
                                <p className="font-dm font-medium text-Neutral-0 text-[16px] leading-[120%]">Fahrenheit (°F)</p>
                                {(units === "Metric" && <img src={checkIcon} />)}
                            </span>
                        </div>
                    </div>

                    <span className="border border-Neutral-600 flex mb-1"></span>

                    <div className="flex flex-col gap-2 mb-1">
                        <p className="font-dm font-medium text-Neutral-300 text-sm leading-[120%] px-2 pt-1.5">Wind Speed</p>
                        <div className="flex flex-col gap-1">
                            <span className={`flex px-2 py-2.5 rounded-lg justify-between ${units === "Imperial" ? 'bg-Neutral-700' : 'hover:bg-Neutral-700 cursor-pointer'}`}>
                                <p className="font-dm font-medium text-Neutral-0 text-[16px] leading-[120%]">km/h</p>
                                {(units === "Imperial" && <img src={checkIcon} />)}
                            </span>
                            <span className={`flex px-2 py-2.5 rounded-lg justify-between ${units === "Metric" ? 'bg-Neutral-700' : 'hover:bg-Neutral-700 cursor-pointer'}`}>
                                <p className="font-dm font-medium text-Neutral-0 text-[16px] leading-[120%]">mph</p>
                                {(units === "Metric" && <img src={checkIcon} />)}
                            </span>
                        </div>
                    </div>
                    <span className="border border-Neutral-600 flex mb-1"></span>

                    <div className="flex flex-col gap-2">
                        <p className="font-dm font-medium text-Neutral-300 text-sm leading-[120%] px-2 pt-1.5">Precipitation</p>
                        <div className="flex flex-col gap-1">
                            <span className={`flex px-2 py-2.5 rounded-lg justify-between ${units === "Imperial" ? 'bg-Neutral-700' : 'hover:bg-Neutral-700 cursor-pointer'}`}>
                                <p className="font-dm font-medium text-Neutral-0 text-[16px] leading-[120%]">Millimeters (mm)</p>
                                {(units === "Imperial" && <img src={checkIcon} />)}
                            </span>
                            <span className={`flex px-2 py-2.5 rounded-lg justify-between ${units === "Metric" ? 'bg-Neutral-700' : 'hover:bg-Neutral-700 cursor-pointer'}`}>
                                <p className="font-dm font-medium text-Neutral-0 text-[16px] leading-[120%]">Inches (in)</p>
                                {(units === "Metric" && <img src={checkIcon} />)}
                            </span>
                        </div>
                    </div>                   
                </section>
                )*/}
        </header>
    );
}
export default Header;