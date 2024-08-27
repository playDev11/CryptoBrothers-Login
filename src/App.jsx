import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Signin from './components/signin/signin'
import Signup from './components/signup/signup'
import Forgetpassword from './components/forgetpassword/forgetpassword'
import Verifcation from './components/verification/verifcation'

function App() {
  

  return (
    <Router>
      <div className="container" id="container">
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/forgetpassword' element={<Forgetpassword/>} />
          <Route path='/verification' element={<Verifcation/>} />
        </Routes>
      </div>
    </Router>
  )}

export default App
