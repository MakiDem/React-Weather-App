
const API_KEY = "e12855e0922b1365d2009c3a158c39a7"

const getCoords = async (cityName) => {
  const results = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${API_KEY}`)
  return [results.lat, results.lon]
}

export const getWeather = async (cityName) => {
  const [lat, lon] = await getCoords(cityName)
  const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
  return result
}