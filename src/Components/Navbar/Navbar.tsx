import React, { Component } from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar-section-div">
      <div>
        <img src="./images/logo-white.png" alt="logo image"/>
      </div>
      <div>
        <ul className="navlinks-div">
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Contact</a></li>
          <li><button>202-555-0188</button></li>
        </ul>
        <div className="scroll-bar-icon">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar