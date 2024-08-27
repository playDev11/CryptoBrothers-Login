import React,{useState} from 'react'
import './signin.css'
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const navigate = useNavigate()
  const handleLoginClick =()=>{
    navigate('/signup')
  }
  const handleForgetPassword = () =>{
    navigate('/forgetpassword')
  }

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };
  return (
    <div className="form-container sign-in">
      <form>
        <h1>Login</h1>
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
        <span>or Login with Your Email</span>
        <input type="email" placeholder="Email" />
        <div className="password">
          <input
            type={isPasswordVisible ? 'text' : 'password'}
            id="password"
            placeholder="Password"
            required=""
            maxLength={22}
          />
          <i
            onClick={togglePasswordVisibility}
            className={`reveal-password fa ${
              isPasswordVisible ? 'fa-eye-slash' : 'fa-eye'
            }`}
            style={{ cursor: 'pointer' }}
          />
        </div>

        <a className="Forget" onClick={handleForgetPassword}>
          Forget Your Password?
        </a>
        <button>Login</button>
      </form>
      <div className="toggle-container">
        <div className="toggle">
          <div class="toggle-panel toggle-right">
            <h1>Hello, Crypto Brothers!</h1>
            <p>To Create an Account</p>
            <button class="hidden" id="register" onClick={handleLoginClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin