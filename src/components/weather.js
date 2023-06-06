import React from 'react';
import '../App.css';

let isDay = true;

const Weather= ({weatherData}) => (
    <div className={isDay ? 'weather day' : 'weather night'}>
        <h1>{weatherData.location.name}, {weatherData.location.region}</h1>
        <p>{weatherData.location.localtime}</p>
        <p>{weatherData.current.temp_c} &deg;C</p>
        <p>{weatherData.current.condition.text}</p>
    </div>

)

export default Weather;