import '../css/home.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useWeatherContext } from '../weatherContext/WeatherContext'


const Home = () => {
  const [ input, setInput ] = useState('')
  const { setCity } = useWeatherContext()

  const handleSearch = (e) => {
    e.preventDefault()
    setCity(input)


    const navigate = useNavigate

    navigate('./result')

  }

  useEffect(() => {
    setInput('')
  }, [])

  return (
    <div className="container">
      <h1>🌤️ Weather Finder</h1>
      <p className="subtitle">Check the current weather in any city</p>

      <form onSubmit={handleSearch} className="search-form">
        <input onChange={(e) => setInput(e.target.value)} type="text" name="city" placeholder="Enter city..." required />
        <button type="submit">Search</button>
      </form>
  </div>
  )
}

export default Home;