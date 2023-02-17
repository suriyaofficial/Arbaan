import React from 'react'
import Landing from './components/Landing'
import Dashboard from './components/Dashboard'
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
