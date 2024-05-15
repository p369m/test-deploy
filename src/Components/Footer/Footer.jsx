import React from 'react'
import './Footer.css'
import { frontend_assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={frontend_assets.logo}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fugit molestias ad labore aliquid alias nostrum officia deserunt inventore veniam in maiores, sed dolores quos totam sequi ipsa eaque harum.</p>
            <div className="footer-social-icons">
                <img src={frontend_assets.facebook_icon} alt="" /><img src={frontend_assets.twitter_icon} alt="" /><img src={frontend_assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get in touch</h2>
            <ul>
                <li>+91-7001356148</li>
                <li>parthamandal621@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024@ pm369 - All rights Reserved
      </p>
    </div>
  )
}

export default Footer
