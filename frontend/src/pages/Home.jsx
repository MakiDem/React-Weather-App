import '../css/home.css'
import { useState, useEffect } from 'react'
import { useWeatherContext } from '../weatherContext/WeatherContext'
import SearchForm from '../components/SearchForm'


const Home = () => {
  const [ input, setInput ] = useState('')
  const { setCity } = useWeatherContext()

  useEffect(() => {
    setInput('')
  }, [])

  return (
    <div className="container">
      <h1>🌤️ Weather Finder</h1>
      <p className="subtitle">Check the current weather in any city</p>
      <SearchForm input={input} setInput={setInput} setCity={setCity}/>
      
  </div>
  )
}

export default Home;