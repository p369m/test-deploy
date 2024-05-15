import React, { useState } from 'react'
import './NavBar.css'
import { frontend_assets } from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom';

const NavBar = ({setShowLogin}) => {
    const [menu,setMenu]=useState("home");

  return (
    <div className='navbar'>
      <Link to='/'>   <img src={frontend_assets.logo} alt="" className="logo" /></Link>
   
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile app</li>
        <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</li>
      </ul>
        <div className="navbar-right">
            <img src={frontend_assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <Link to='/cart'><img src={frontend_assets.basket_icon} alt="" /></Link>
                
                <div className="dot"></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>Sign In</button>
        </div>
    </div>
  )
}

export default NavBar
