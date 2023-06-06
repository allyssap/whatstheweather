import './App.css';
import Weather from './components/weather';
import React, { useEffect, useState } from "react";

export default function App() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      }); 
      
      const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=' + lat + '%2C'+ long;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
          'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
        }
      };

      await fetch(url, options)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])
  
  return (
    <div className="App">
      <h1 className="title">
        Whats the Weather?
      </h1>
      <div className="weatherBubbles">
      {(typeof data.location != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <div></div>
      )}
      </div>
  </div>
  );
}



