import '../css/results.css'

// const API_KEY = e12855e0922b1365d2009c3a158c39a7

// const getCoords = async () => {
//   const results = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${API_KEY}`)
//   return results
// }

// const getWeather = async () => {
//   const { lat, lon } = await getCoords()
// }

const Results = () => {
  <div class="container">
    <h1>📍 Weather in <span id="city-name">City</span></h1>

    <div class="weather-card">
      <p class="temperature">🌡️ 26°C</p>
      <p class="description">☁️ Cloudy</p>
      <p>💧 Humidity: 70%</p>
      <p>🌬️ Wind: 15 km/h</p>
    </div>
  </div>
}

export default Results