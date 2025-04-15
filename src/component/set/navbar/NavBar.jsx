import './NavBar.css'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'

function NavBar() {
    const [showLogin, setShowLogin] = useState(false);
  
    function toggleLogin() {
      setShowLogin(!showLogin);
    }
  
    return (
      <div className="Navbar">
        <div className="Logo">
          <img src="../../assets/photo/logo.jpg" alt="Logo" />
        </div>
  
        <div className="Options">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/customize">Customize</Link>
        </div>
  
        {/* 🔽 This is where your login button and box go */}
        <div className="login-container">
          <button className='cool-login-btn' onClick={toggleLogin}>login</button>
          {showLogin && (
            <div className="login-box">
              <h3 className='login-h3'>Login</h3>
              <input className='login-input' type="text" placeholder="Username" />
              <input className='login-input' type="password" placeholder="Password" />
              <button className="submit-btn" >Submit</button>
              <button className="signUp-btn" >Sign up</button>
            </div>
          )}
        </div>
      </div>
    );
  }
  
export default NavBar
