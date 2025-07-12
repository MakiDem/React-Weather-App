import { useNavigate } from "react-router-dom"

const SearchForm = ({ input, setInput, setCity }) => {
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    setCity(input)
  
  
    navigate(`/result?city=${input}`)
  }

  return (
    <form onSubmit={handleSearch} className="search-form">
      <input onChange={(e) => setInput(e.target.value)} type="text" name="city" placeholder="Enter city..." required />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchForm