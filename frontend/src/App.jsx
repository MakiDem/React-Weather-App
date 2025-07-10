import { Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import Results from './pages/result.jsx'
import  WeatherContext from './weatherContext/WeatherContext.jsx'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <WeatherContext>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/result' element={<Results/>}/>  
        </Routes>
      </BrowserRouter>
    </WeatherContext>

    
  )
}

export default App
