import '../css/home.css'


const Home = () => {
  return (
    <div class="container">
    <h1>🌤️ Weather Finder</h1>
    <p class="subtitle">Check the current weather in any city</p>

    <form action="result.html" class="search-form">
      <input type="text" name="city" placeholder="Enter city..." required />
      <button type="submit">Search</button>
    </form>
  </div>
  )
}

export default Home;