import { Context } from './WeatherContext.js'
import { useState } from 'react'


const WeatherContext = ({children}) => {
  const [city, setCity] = useState('')

  const values = {
    city,
    setCity
  }

  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  )
}

export default WeatherContext