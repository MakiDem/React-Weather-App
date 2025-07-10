
const API_KEY = "e12855e0922b1365d2009c3a158c39a7"

const getCoords = async (cityName) => {
  const data = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${API_KEY}`)
  const results = await data.json()
  if (!results.length) throw new Error("City not found")

  const { lat, lon } = results[0]
  return [lat, lon]
}

export const getWeather = async (cityName) => {
  const [lat, lon] = await getCoords(cityName)
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
  const result = await data.json()
  console.log(result)
  return result
}