import React from 'react'
import { useNavigate } from 'react-router-dom'
import"./forgetpassword.css"

const Forgetpassword = () => {
    const navigate = useNavigate()
    const VerificationClick = () => {
      navigate('/verification')
    }
  return (
        <div className="form-container forget-password">
      <form>
        <h1>Forget Password</h1>
        <span>Email Address for Verification Code</span>
        <input type="email" placeholder="Email Address" />
        <button onClick={VerificationClick}>Verify</button>
      </form>
    </div>
  )
}

export default Forgetpassword;