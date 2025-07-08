import { Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import Results from './pages/result.jsx'
import  WeatherContext from './weatherContext/WeatherContext.jsx'

function App() {

  return (
    <WeatherContext>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/result' element={<Results/>}/>  
      </Routes>
    </WeatherContext>
    
  )
}

export default App
