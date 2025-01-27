import React, { useEffect, useState, useRef } from "react";
import "../styles/Weather.css";
import search from '../assets/search.png';
import humidity from '../assets/humidity.png';
import wind from '../assets/wind.png';

const Weather = () => {

    const inputRef = useRef();
    const [weatherData, setWeatherData] = useState({
        humidity: '', 
        wind: '', 
        temperature: '',
        location: '',
        icon: ''
    });
    const [error, setError] = useState(null);

    // Retreive API for weather
    const searchWeather = async (city) => {
        if (city === '') {
            setError("Please enter a city name");
            return;
        }
        try {
            setError(null);
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

            const response = await fetch(url);
            const data = await response.json();
            
            if (data.cod && data.cod !== 200) {
                throw new Error(data.message);
            }
            
            setWeatherData({
                humidity: data.main.humidity, 
                wind: data.wind.speed, 
                temperature: Math.floor(data.main.temp), 
                location: data.name,
                icon: data.weather[0].icon
            });
        } catch (error) {
            console.log(error);
            setError("City not found. Please try again.");
            setWeatherData({
                humidity: '', 
                wind: '', 
                temperature: '',
                location: '',
                icon: ''
            });
        }
    };


    // Load london as default city
    useEffect(() => {
        searchWeather("London");
    }, []);

    return (
        <div>
            <div className="weather-container">
                <div className="weather">
                    <div className="search-bar">
                        <input type="text" placeholder="Search" ref={inputRef} />   
                        <img src={search} alt="search" onClick={() => searchWeather(inputRef.current.value)} />
                    </div>
                    {error ? (
                        <p className="error-message">{error}</p>
                    ) : weatherData.location ? (
                        <>
                            {weatherData.icon && (
                                <img 
                                    src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} 
                                    alt="weather" 
                                    className="weather-icon"
                                />
                            )}
                            <p className="temperature">{weatherData.temperature}°C</p>
                            <p className="location">{weatherData.location}</p>
                            <div className="weather-details">
                                <div className="col">
                                    <img src={humidity} alt="humidity" />
                                    <div>
                                        <p>{weatherData.humidity}%</p>
                                        <span>Humidity</span>
                                    </div>
                                </div>
                                <div className="col">
                                    <img src={wind} alt="wind" />
                                    <div>
                                        <p>{weatherData.wind} km/h</p>
                                        <span>Wind Speed</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <p className="error-message">Enter a city name to get weather information</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Weather;
