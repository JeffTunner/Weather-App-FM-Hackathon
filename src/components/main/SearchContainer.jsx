import { useState } from "react";
import SearchIcon from "../../assets/images/icon-search.svg";

function SearchContainer() {

    return (
        <section className="md:flex md:items-center md:justify-center gap-3 lg:gap-4 grid">
            <div className="flex bg-Neutral-800 px-6 py-4 gap-4 items-center justify-center rounded-xl w-full md:max-w-[590px] lg:max-w-[526px] hover:bg-Neutral-700">
                <img src={SearchIcon} alt="search-icon"/>
                <input type="text" placeholder="Search for a place..." className="font-dm font-medium text-Neutral-200 text-xl leading-[120%] w-full border-none"/>
            </div>
            <div>
                <button className="bg-LightBlue h-14 flex items-center justify-center text-xl font-dm font-medium text-Neutral-0 px-6 py-4 rounded-xl w-full cursor-pointer hover:bg-DarkBlue">
                    Search
                </button>
            </div>
        </section>
    );
}
export default SearchContainer;