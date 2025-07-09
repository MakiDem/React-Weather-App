import '../css/home.css'
import { useState, useEffect } from 'react'
import SearchForm from '../components/SearchForm'


const Home = () => {
  const [ input, setInput ] = useState('')

  useEffect(() => {
    setInput('')
  }, [])

  return (
    <div className="container">
      <h1>🌤️ Weather Finder</h1>
      <p className="subtitle">Check the current weather in any city</p>

      <SearchForm input={input} setInput={setInput}/>
      
  </div>
  )
}

export default Home;