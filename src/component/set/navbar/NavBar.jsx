import './NavBar.css'
import { Link } from 'react-router-dom'
import React from 'react'
import AccountModule from '../account/AccountModule'

function NavBar() {
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
  
        <div className="login-container">
          <AccountModule />
        </div>
      </div>
    );
  }
  
export default NavBar
