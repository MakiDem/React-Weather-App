import '../css/results.css'
import { useState, useEffect } from 'react'
import { getWeather } from '../services/api'
import { useSearchParams } from 'react-router-dom'


const Results = () => {
  const [ data, setData] = useState({})
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(null)

  const [searchParams] = useSearchParams()
  const city  = searchParams.get('city')

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const res = await getWeather(city)
        setData(res)
        setError(null)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    
    if (city) {
      getData()
    }
      
  }, [city])

  console.log('Current state:', { data, loading, error, city })

  return (
  data && Object.keys(data).length > 0 ? (
    <div className="weather-container">
      <div className="weather-card">
        <div className="header">
          <h1 id="city-name">{data.name}, {data.sys?.country}</h1>
          <p id="description">{data.weather?.[0]?.description}</p>
          <img
            id="weather-icon"
            src={`https://openweathermap.org/img/wn/${data.weather?.[0]?.icon}@4x.png`}
            alt="weather icon"
          />
        </div>

        <div className="stats">
          <div className="stat"><p className="label">Temperature</p><p className="value">{Math.round(data.main?.temp - 273.15)}°C</p></div>
          <div className="stat"><p className="label">Feels Like</p><p className="value">{Math.round(data.main?.feels_like - 273.15)}°C</p></div>
          <div className="stat"><p className="label">Max Temp</p><p className="value">{Math.round(data.main?.temp_max - 273.15)}°C</p></div>
          <div className="stat"><p className="label">Min Temp</p><p className="value">{Math.round(data.main?.temp_min - 273.15)}°C</p></div>

          <div className="stat"><p className="label">Humidity</p><p className="value">{data.main?.humidity}%</p></div>
          <div className="stat"><p className="label">Pressure</p><p className="value">{data.main?.pressure} hPa</p></div>
          <div className="stat"><p className="label">Visibility</p><p className="value">{data.visibility?.toLocaleString()} m</p></div>
          <div className="stat"><p className="label">Wind Speed</p><p className="value">{data.wind?.speed} m/s</p></div>
          <div className="stat"><p className="label">Gust</p><p className="value">{data.wind?.gust} m/s</p></div>

          <div className="stat"><p className="label">Sunrise</p><p className="value">{new Date(data.sys?.sunrise * 1000).toLocaleTimeString()}</p></div>
          <div className="stat"><p className="label">Sunset</p><p className="value">{new Date(data.sys?.sunset * 1000).toLocaleTimeString()}</p></div>
          <div className="stat"><p className="label">Coordinates</p><p className="value">{data.coord?.lat}, {data.coord?.lon}</p></div>
        </div>
      </div>
    </div>
  ) : (
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>No weather data available</p>
      )}
    </div>
  )
);
  }


export default Results