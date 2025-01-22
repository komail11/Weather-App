import React, { useState } from "react";
import "../styles/Weather.css";
import search from "../assets/search.png";


const Weather = () => {

    const [query, setQuery] = useState("");
    
    const display = (e) => {
        setQuery(e.target.value);
    }

    return (
        <div className="weather">
            <div className="search-bar">
                <input type="text" onChange={display} placeholder="Search" className="search-input" />
                <img src={search} alt="search" className="search-icon" />
            </div>
            <h1>{query}</h1>
        </div>
    );
};

export default Weather;
