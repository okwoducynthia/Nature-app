import "./About.css"
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
       {/* ==NAVBAR STARTS HERE==  */}
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
      <section className="Hero-about-section">
        <div>
          <h1>About us</h1>
        </div>
      </section>
       {/* ==HERO SECTION ENDS HERE==  */}

       {/* ==TEAM SECTION STARTS HERE==  */}
      <section>
        <div className="team-heading">
          <h2>
            We’re a highly collaborative and supportive team, coming together on
            every project to ensure our clients get the very best result.
          </h2>
          <img src="images/contact-hero.jpg" alt="" />
        </div>

        <div className="team-paragraph">
          <div>
            <h3>Our Mission</h3>
            <p>
              Build the best product that creates the most value for our
              customers, use business to inspire and implement environmentally
              friendly solutions.
            </p>
          </div>

          <div>
            <h3>Our Values</h3>
            <p>
              We strive to go above and beyond for our clients no matter the
              challenge. We aim to deliver our very best work every single day
              across our services.
            </p>
          </div>
        </div>
      </section>
       {/* ==TEAM SECTION ENDS HERE==  */}

       {/* ==QUOTE SECTION STARTS HERE==  */}
      <section className="quote-section">
        <div className="quote-section-image">
          <img src="images/quotes (2).svg" alt="image of quotation mark" />
        </div>
        <h2>
          “Love Nature has an amazing team of hard working professionals. It has
          been a pleasure to meet them.”
        </h2>
        <div className="avatar-img">
          <img src="images/avatar_on_about.png" alt="Image of a lady" />
        </div>
        <p>Emily Davis</p>
      </section>
       {/* ==QUOTE SECTION ENDS HERE==  */}

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
            <img src="images/logo-green.svg" alt="" />
          </div>
          <div>
            <p>Love Nature by Tyler Moore</p>
          </div>
        </section>
      </footer>
       {/* ==FOOTER SECTION ENDS HERE==  */}
    </main>
    </div>
  )
}

export default About