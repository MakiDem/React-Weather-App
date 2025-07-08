import '../css/results.css'
import {useState} from 'react'
import { getWeather } from '../services/api'
import { useWeatherContext } from '../weatherContext/WeatherContext'


const Results = () => {
  

  const {city} = useWeatherContext()
  const getData = () => {
    try {

    } catch (err) {

    } finally {

    }
  }

  return (
    <div className="container">
    <h1>📍 Weather in <span id="city-name">{city}</span></h1>

    <div className="weather-card">
      <p className="temperature">🌡️ 26°C</p>
      <p className="description">☁️ Cloudy</p>
    </div>
  </div>
  )
}

export default Results