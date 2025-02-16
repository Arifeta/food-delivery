import React, { useState } from 'react'
import './LoginPOpup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {

  const [currentState, setCurrentState] = useState("login")

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currentState==="login"?<></>:<input type="text" placeholder='Your name' required /> }
          <input type="email" placeholder='Your email' required />
          <input type="password" placeholder='Your password' required />
        </div>
        <button>{currentState==="sign up"?"create account":"login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By Continuing, i agree to the terms of use & privacy policy</p>        
        </div>
        {currentState==="login"
        ?<p>Create a new account? <span onClick={()=>setCurrentState("sign up")} >Click here</span></p>
        :<p>Already have an account <span onClick={()=>setCurrentState("login")} >Login here</span></p>}
       
        
      </form>
    </div>
  )
}

export default LoginPopup
