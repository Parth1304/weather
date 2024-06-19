import { useState } from "react"
import React from 'react'


function fetchFromApi(city){
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  return fetch (`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`)
  
} 

export default function Weather(){
  const [city,setCity] = useState("")
  const [humidity, setHumidity] = useState(null)
  const [feelslike_c,setTemp] = useState(null)


  const fetchWeather = async() => {
    const response = await fetchFromApi(city)
    const data = await response.json()
    console.log(data)
    setHumidity(data.current.humidity)
    setTemp(data.current.feelslike_c)
    debugger
  }


  return (
    <>
      <div>
        <h1>Check Weather</h1>
      </div>
      <label htmlFor="city">Enter City: </label>
      <input type="text" id='city' value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={fetchWeather}>
        Check Weather
      </button>
      
      <h1>{city}</h1>
      <h3>Humidity: {humidity}</h3>
      <h3>Temperature: {feelslike_c}</h3>
   
    </>
  )
}


