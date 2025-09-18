import { useState } from "react";
import SearchIcon from "../../assets/images/icon-search.svg";

function SearchContainer() {

    return (
        <section className="md:flex-row items-center justify-center gap-3 lg:gap-4 flex flex-col">
            <div className="flex gap-4 bg-Neutral-800 px-6 py-4 w-screen md:w-full lg:max-w-[526px] rounded-xl cursor-pointer hover:bg-Neutral-700">
                <img src={SearchIcon} alt="search-icon"/>
                <p className="text-Neutral-200 font-dm font-medium text-xl cursor-pointer">
                    Search for a place...
                </p>
            </div>
            <div>
                <button className="bg-LightBlue text-xl font-dm font-medium text-Neutral-0 px-6 py-4 rounded-xl w-screen lg:w-full hover:bg-DarkBlue">
                    Search
                </button>
            </div>
        </section>
    );
}
export default SearchContainer;