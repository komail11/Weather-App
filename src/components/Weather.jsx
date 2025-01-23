import React, { useState } from "react";
import "../styles/Weather.css";
import search from '../assets/search.png';
import clear from '../assets/clear.png';
import cloud from '../assets/cloud.png';
import drizzle from '../assets/drizzle.png';
import humidity from '../assets/humidity.png';
import rain from '../assets/rain.png';
import snow from '../assets/snow.png';
import wind from '../assets/wind.png';

const Weather = () => {

    return (
        <div>
            <div className="weather-container">
                <div className="weather">
                    <div className="search-bar">
                        <input type="text" placeholder="Search" />   
                        <img src={search} alt="search" />
                    </div>
                    <img src={clear} alt="clear" className="weather-icon"></img>
                    <p className="temperature">60°C</p>
                    <p className="location">London</p>
                    <div className="weather-details">
                        <div className="col">
                            <img src={humidity} alt="humidity" />
                            <div>
                                <p>80%</p>
                                <span>Humidity</span>
                            </div>
                        </div>
                        <div className="col">
                            <img src={wind} alt="wind" />
                            <div>
                                <p>15 km/h</p>
                                <span>Wind Speed</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
           
        </div>
    ); 
};

export default Weather;
