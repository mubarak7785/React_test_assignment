import { useState } from 'react'
import { Home } from './components/Home/Home'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import {Addcity} from "./components/Addcity/Addcity"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     
      <Routes>
        <Route path='/addcity' element={<Addcity/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      
    </div>
  )
}

export default App
