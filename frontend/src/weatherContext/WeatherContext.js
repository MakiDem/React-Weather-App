import { createContext, useContext } from "react"

export const WeatherContext = createContext()
export const useWeatherContext = () => useContext(WeatherContext)