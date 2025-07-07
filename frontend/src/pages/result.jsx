import '../css/results.css'


const Results = () => {
  <div className="container">
    <h1>📍 Weather in <span id="city-name">City</span></h1>

    <div className="weather-card">
      <p className="temperature">🌡️ 26°C</p>
      <p className="description">☁️ Cloudy</p>
      <p>💧 Humidity: 70%</p>
      <p>🌬️ Wind: 15 km/h</p>
    </div>
  </div>
}

export default Results