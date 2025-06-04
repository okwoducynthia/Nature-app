import React from 'react'
import "./Contact.css"
import { NavLink } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <header>
      <nav className="navbar-section-div">
        <div>
          <img src="./images/logo-white.png" alt="logo image" />
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
     {/* ====NAV BAR ENDS HERE=====  */}

    <main>
       {/* ==HERO SECTION STARTS HERE==  */}
      <section className="Hero-contact">
        <div>
          <h1>Contact us</h1>
        </div>
      </section>
       {/* ==HERO SECTION ENDS HERE==  */}

       {/* ====CONTACT DETAILS SECTION STARTS HERE====  */}
      <div className="contact-container">
        <div className="contact-details">
          <h2>You can find us at</h2>
          <h3>EMAIL</h3>
          <p>hello@tyler.com</p>

          <h3>PHONE NUMBER</h3>
          <p>202-555-0188</p>

          <h3>LOCATION</h3>
          <p>2360 Hood Avenue, San Diego, CA, 92123</p>

          <span><i className="fa-brands fa-twitter"></i></span>
          <span><i className="fa-brands fa-instagram"></i></span>
          <span><i className="fa-brands fa-youtube"></i></span>
        </div>

        <div className="contact-input">
          <h2>Let's get in touch</h2>
          <div>
            <input type="text" placeholder="Your Name" required />
          </div>
          <div>
            <input type="email" placeholder="Your Email" required />
          </div>
          <div>
            <input type="text" placeholder="Your Message" required />
          </div>
          <button>Send Message</button>
        </div>
      </div>
       {/* ====CONTACT DETAILS SECTION ENDS HERE====  */}

       {/* ====TEAM SECTION STARTS HERE====  */}
      <section>
        <div className="team-container">
          <h1>We are optimists who love to work together</h1>

          <div className="team-images">
            <div>
              <img src="./images/avatar_1.jpg" alt="" />
            </div>

            <div>
              <img src="./images/avatar_2.jpg" alt="" />
            </div>

            <div>
              <img src="./images/avatar_3.jpg" alt="" />
            </div>

            <div>
              <img src="./images/avatar_4.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
     {/* ====TEAM SECTION ENDS HERE====  */}

     {/* ==FOOTER SECTION STARTS HERE==  */}
    <footer>
      <section className="footer-section">
        <div>
          <ul className="navlink-footer">
            <NavLink to={'/'}><li><a href="#">Home</a></li></NavLink>
            <NavLink to={'/about'}><li><a href="#">About</a></li></NavLink>
            <NavLink to={'/services'}><li><a href="#">Services</a></li></NavLink>
            <NavLink to={'/contact'}><li><a href="#">Contact</a></li></NavLink>
          </ul>
        </div>
        <div>
          <img src="./images/logo-green.svg" alt="" />
        </div>
        <div>
          <p>Love Nature by Tyler Moore</p>
        </div>
      </section>
    </footer>
     {/* ==FOOTER SECTION ENDS HERE==  */}
    </div>
  )
}

export default Contact