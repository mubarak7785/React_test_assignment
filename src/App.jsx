import { useState } from 'react'
import { Home } from './components/Home/Home'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import {Addcity} from "./components/Addcity/Addcity"
import { Editcity } from './components/Editcity/Editcity'
import { Deletecity } from './components/Deletcity/Deletecity'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     
      <Routes>
        <Route path='/addcity' element={<Addcity/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/edit/:id" element={<Editcity/>}/>
        <Route path='/delete/:id' element={<Deletecity/>}/>
      </Routes>
      
    </div>
  )
}

export default App
