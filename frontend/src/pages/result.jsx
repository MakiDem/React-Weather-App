import '../css/results.css'
import { useState, useEffect } from 'react'
import { getWeather } from '../services/api'
import { useWeatherContext } from '../weatherContext/WeatherContext'


const Results = () => {
  const [ data, setData] = useState({})
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(false)

  const {city} = useWeatherContext()
  const getData = async () => {
    try {
      setLoading(true)
      const res = await getWeather(true)
      setData(res)

    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData(city)
  }, [city])

  console.log(data)

  return (
    <div className='container'>
      {error ? (
        <h1>{`Error: ${error}`}</h1>
    ): (
      loading ? (
        <h1>Loading...</h1>
      ) : (
        <h1>`Weather for ${city}`</h1>
      )
    )}
    </div>

    
  )
}

export default Results