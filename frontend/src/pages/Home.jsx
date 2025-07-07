import '../css/home.css'


const Home = () => {
  return (
    <div className="container">
      <h1>🌤️ Weather Finder</h1>
      <p className="subtitle">Check the current weather in any city</p>

      <form className="search-form">
        <input type="text" name="city" placeholder="Enter city..." required />
        <button type="submit">Search</button>
      </form>
  </div>
  )
}

export default Home;