import Logo from "../assets/images/logo.svg";
import UnitLogo from "../assets/images/icon-units.svg";
import Dropdown from "../assets/images/icon-dropdown.svg";
import { useState } from "react";
function Header() {

    const[units, setUnits] = useState("metric");
    const[dropdown, setDropdown] = useState(true);

    function handleDropdown() {
        setDropdown(!dropdown);
    }

    return(
        <header >
            <div className="flex justify-between px-28 pt-12">
                <div>
                    <img src={Logo} alt="logo" />
                </div>
                <div>
                    <button className="flex text-Neutral-0 px-4 py-3 bg-Neutral-800 gap-2.5 rounded-lg cursor-pointer"
                        onClick={handleDropdown}>
                        <img src={UnitLogo} alt="" />
                        Units 
                        <img src={Dropdown} alt="" />
                    </button>
                </div>
            </div>
            {!dropdown && (
                <span className="text-Neutral-0">Suiiiiiiiiiiiii</span>)}
        </header>
    );
}
export default Header;