import React from 'react'
import './App.css'
import Landing from './components/landingPage/Landing'
import Dashboard from './components/dashboard/Dashboard'
import Navbar from './components/navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
  <>
   <Router>
  
    <Routes>
        <Route path='/' element={<Landing/>}/>
        
        <Route path='/dashboard' element={<Dashboard/>}/>
        
        </Routes>
        </Router>
      </>
  )
}

export default App
