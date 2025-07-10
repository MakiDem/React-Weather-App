import '../css/results.css'
import { useState, useEffect } from 'react'
import { getWeather } from '../services/api'
import { useWeatherContext } from '../weatherContext/WeatherContext'


const Results = () => {
  const [ data, setData] = useState({})
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(null)

  const {city} = useWeatherContext()
  

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
  <div className="container">
    {data && Object.keys(data).length > 0 ? (
      <>
        <h1>Weather for {city}</h1>
        <p>Description: {data.weather?.[0]?.description || 'No description available'}</p>
        <p>Temperature: {data.main?.temp ? Math.round(data.main.temp - 273.15) : 'N/A'}°C</p>
        <p>Humidity: {data.main?.humidity || 'N/A'}%</p>
        <p>Pressure: {data.main?.pressure || 'N/A'} hPa</p>

        {/* Debug: Show raw data */}
        <details>
          <summary>Raw Data (for debugging)</summary>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </details>
      </>
    ) : (
      <p>No weather data available</p>
    )}
  </div>
)}

export default Results