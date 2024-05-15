import React, { useState } from 'react'
import './LogInPopUp.css'
import { frontend_assets } from '../../assets/frontend_assets/assets'

const LogInPopUp = ({setShowLogin}) => {
    const [currState,setCurrState]=useState("sign up")
  return (
    <div className='login-popup'>
      <form className='login-popup-contaier'>
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img src={frontend_assets.cross_icon} onClick={()=>setShowLogin(false)} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==='log in'?<></>:<input type='text' placeholder='Your name' required/>}
            
            <input type="email" placeholder='Your email address' required/>
            <input type="password"  placeholder='PASSWORD' required/>
            
        </div>
        <button>{currState==="sign up"?"create account":"sing in"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By continuing, i agree to the terms & conditions</p>
        </div>
            {currState==="log in"?<p>Create a new account? <span onClick={()=>setCurrState("sign up")}>Click here</span> </p>:<p>Already have an account? <span onClick={()=>setCurrState("log in")}>Login here</span></p>}
            
      </form>
    </div>
  )
}

export default LogInPopUp
