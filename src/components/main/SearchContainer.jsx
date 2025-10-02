import { useState, useEffect } from "react";
import SearchIcon from "../../assets/images/icon-search.svg";
import getLocation from "../../api/geocoding.js";
import getWeather from "../../api/weatherAPI.js";
import { useWeather } from "../../context/WeatherContext.jsx";
import loadingIcon from "../../assets/images/icon-loading.svg";

function SearchContainer() {

    const {handleSelectedCity, searchCity, locationLoading, locationError, locationResults} = useWeather();

    const [dropdown, setDropdown] = useState(false);
    const [input, setInput] = useState("");
    const [options, setOptions] = useState([]);

    function handleInput(e) {
        setInput(e.target.value);
        if(e.target.value.trim() === ""){
            setDropdown(false);
        }
    }

    function handleDropdown() {
        if(input.trim() !== ""){
            searchCity(input);
            setDropdown(true);
        } else {
            setDropdown(false);
        }
    }

    async function handleCity(i) {
        await handleSelectedCity(locationResults[i]);
        setDropdown(false);
        setInput(`${locationResults[i].name}, ${locationResults[i].country}`);
    }

    return (
        <section className="md:flex md:items-center md:justify-center gap-3 lg:gap-4 grid">

            <div className="relative w-full md:max-w-[590px] lg:max-w-[526px]">
            <img
                src={SearchIcon}
                alt="search icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
            />
            <input
                type="text"
                placeholder="Search for a place..."
                value={input}
                className="pl-12 pr-4 py-4 font-dm font-medium text-Neutral-200 text-xl leading-[120%] border-none bg-Neutral-800 rounded-xl w-full hover:bg-Neutral-700"
                onChange={(e) => handleInput(e)}
            />
            {dropdown && (
                <div className="absolute top-full mt-2.5 z-50 w-full md:max-w-[590px] lg:max-w-[526px] flex flex-col gap-1 p-2 bg-Neutral-800 border border-Neutral-700 rounded-xl">

                    {locationLoading && (
                        <div className="flex gap-2.5 font-dm font-medium text-Neutral-0 text-[16px] leading-[120%] px-2 py-2.5 rounded-lg text-left">
                            <img src={loadingIcon} alt="loading"/>
                            <p>Search in progress</p>
                        </div>
                    )}
                    {!locationLoading && !locationError && locationResults && (locationResults.map((city, index) => (
                        <button
                        key={index}
                        id={city.id} 
                        className="font-dm font-medium text-Neutral-0 text-[16px] leading-[120%] px-2 py-2.5 rounded-lg text-left hover:bg-Neutral-700"
                        onClick={() => handleCity(index)}
                        >
                            {city.name}, {city.country}
                        </button>
                    )))}
                </div>
            )}
            </div>

            <div>
                <button 
                className="bg-LightBlue h-14 flex items-center justify-center text-xl font-dm font-medium text-Neutral-0 px-6 py-4 rounded-xl w-full cursor-pointer hover:bg-DarkBlue"
                onClick={handleDropdown}             
                >
                    Search
                </button>
            </div>
        </section>
    );
}
export default SearchContainer;