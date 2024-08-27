import React from 'react'
import { useNavigate } from 'react-router-dom'
import './signup.css'

const Signup = () => {
     const navigate = useNavigate()
     const handleSignupClick = () => {
       navigate('/')
     }
    

  return (
    <div className="form-container sign-up">
      <form>
        <h1>Create Account</h1>
        <div className="social-icons">
          <a href="#" className="icon">
            <i className="fa-brands fa-google-plus-g" />
          </a>
          <a href="#" className="icon">
            <i className="fa-brands fa-facebook-f" />
          </a>
          <a href="#" className="icon">
            <i className="fa-brands fa-linkedin-in" />
          </a>
        </div>
        <span>Or Sign-Up with Your Email</span>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm password" />
        <button>Sign-up</button>
      </form>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-right">
            <h1>Hello, Crypto Brothers!</h1>
            <p>To Login</p>
            <button
              className="hidden"
              id="register"
              onClick={handleSignupClick}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup