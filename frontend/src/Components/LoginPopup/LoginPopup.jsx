import React, { useContext, useState } from 'react'
import './LoginPOpup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'
const LoginPopup = ({setShowLogin}) => {

  const {url, setToken} = useContext(StoreContext)

  const [currentState, setCurrentState] = useState("login")
  const [data, setData] =useState({
    name:"",
    email:"",
    password:""
  })

  const onChangeHanndler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const onLogin = async (event) => {
    event.preventDefault()
    let newUrl = url;
    if (currentState==="login") {
      newUrl += "/api/user/login"
    }
     else {
      newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl, data)

    if (response.data.success) {
      setToken(response.data.token)
      localStorage.setItem("token", response.data.token)
      setShowLogin(false)
    }
    else {
      alert(response.data.message)
    }

  }

  
  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currentState==="login"?<></>:<input name='name' onChange={onChangeHanndler} value={data.name} type="text" placeholder='Your name' required /> }
          <input name='email' onChange={onChangeHanndler} value={data.email} type="email" placeholder='Your email' required />
          <input name='password' onChange={onChangeHanndler} value={data.password} type="password" placeholder='Your password' required />
        </div>
        <button type='submit' >{currentState==="sign up"?"create account":"login"}</button>
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
