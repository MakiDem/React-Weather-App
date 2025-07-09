import { useNavigate } from "react-router-dom"
import { useWeatherContext } from "../weatherContext/WeatherContext"

const SearchForm = ({ input, setInput }) => {
  const { setCity } = useWeatherContext()
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    setCity(input)
  
  
    navigate('./result')
  }

  return (
    <form onSubmit={handleSearch} className="search-form">
      <input onChange={(e) => setInput(e.target.value)} type="text" name="city" placeholder="Enter city..." required />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchForm