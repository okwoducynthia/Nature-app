import { useState } from "react";
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import { MdClose } from "react-icons/md";

const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
      setSidebar(prev => !prev);
    };

    const closeSidebar = () => {
      setSidebar(false);
    };

  return (
    <div>
      {sidebar && (
        <div
          className="bg-transparent-grey-bg w-full h-full fixed right-0 top-0 flex justify-end"
          style={{ zIndex: 1000 }}
          onClick={closeSidebar}
        >
          <div
            className="w-[90%] sm:w-4/5 md:w-2/5 h-full flex flex-col font-heading-font py-5 px-2 bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={toggleSidebar} className="self-end me-5 text-2xl h-[7vh]">
              <MdClose />
            </button>
            <ul className="mt-5 w-full flex flex-col gap-y-3 p-3 bg-white h-full" style={{color:"rgba(83, 105, 65, 0.7)", fontSize:"18px"}}>
              <NavLink to={"/"} onClick={closeSidebar}><li className="p-1">Home</li></NavLink>
              <NavLink to={"/about"} onClick={closeSidebar}><li className="p-1">About</li></NavLink>
              <NavLink to={"/services"} onClick={closeSidebar}><li className="p-1">Services</li></NavLink>
              <NavLink to={"/contact"} onClick={closeSidebar}><li className="p-1">Contact</li></NavLink>
            </ul>
          </div>
        </div>
      )}


      <header>
    <nav className="navbar-section-div">
      <div>
        <img src="/images/logo-white.png" alt="logo image"/>
      </div>
      <div>
        <ul className="navlinks-div">
          <NavLink to={'/'}><li><a href="#">Home</a></li></NavLink>
          <NavLink to={'/about'}><li><a href="#">About</a></li></NavLink>
          <NavLink to={'/services'}><li><a href="#">Services</a></li></NavLink>
          <NavLink to={'/contact'}><li><a href="#">Contact</a></li></NavLink>
          <li><button>202-555-0188</button></li>
        </ul>
        <div className="scroll-bar-icon">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
      </div>
    </nav>
  </header>
    </div>
  )
}

export default Navbar