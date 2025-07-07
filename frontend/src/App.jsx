import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/results' element={<Results/>}/>  
    </Routes>
  )
}

export default App
