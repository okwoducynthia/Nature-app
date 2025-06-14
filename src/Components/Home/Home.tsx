import "./Home.css"
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
         {/* ====NAVBAR SECTION STARTS HERE====  */}
   <header>
    <nav className="navbar-section-div">
      <div>
        <img src="./images/logo-white.png" alt="logo image"/>
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
     {/* ====HERO SECTION START HERE====  */}
    <section className="hero-section">
      <h3>we all love</h3>
    <h1>nature</h1>
    <p>Look deep into nature, and you will
      understand everything better.</p>
    <button>Get Started</button>
  {/* ====HERO SECTION ENDS HERE==== */}
  </section>

    <section>
  {/* =====IMAGE SECTION STARTS HERE===== */}
   <div className="images-display">
    <div className="our-services">
      <p>Our Services</p>
      <div className="div-divider"></div>
    </div>

    <div className="images-section">
      <div>
        <img src="./images/service-1.jpg" alt="image of a man sitting down"/>
        <p className="heading-title">Web Design</p>
        <p className="heading-description">
          Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.
        </p>
      </div>
      <div>
        <img src="./images/service-2.jpg" alt="image of nature"/>
        <p className="heading-title">Graphic Design</p>
        <p className="heading-description">
          Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.
        </p>
      </div>
      <div>
        <img src="./images/service-3.jpg" alt="image of a black mountain"/>
        <p className="heading-title">Content Creation</p>
        <p className="heading-description">
          Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.
        </p>
      </div>
    </div>
   </div>
    </section>
     {/* =====IMAGE SECTION ENDS HERE=======  */}

     {/* ======QUOTE SECTION STARTS HERE=========  */}
    <section className="quote-section">
      <div className="quote-section-image">
        <img src="./images/quotes (2).svg" alt="image of quotation mark"/>
      </div>
      <h2>
        “Original and with an innate understanding of their customer’s needs, the team at Love Nature are always a pleasure to work with.”
      </h2>
      <div className="avatar-img">
        <img src="./images/avatar_on_home.png" alt=""/>
      </div>
      <p>Jane Miller</p>
    </section>
     {/* ======QUOTE SECTION ENDS HERE======  */}

     {/* ======ABOUT US SECTION STARTS HERE=======  */}
     <section>
      <div className="about-us-section">
        <div className="about-us-description">
          <p className="about-us-heading">ABOUT US</p>
        <h1>
          Tell website visitors who you are and why they should choose your business.
        </h1>
        <p className="about-us-paragraph">
          Because when a visitor first lands on your website, you’re a stranger to them. They have to get to know you in order to want to read your blog posts, subscribe to your email newsletter, or buy what you’re selling.
        </p>
        <button>Find out more</button>
        </div>
        
        <div>
          <img src="./images/leaf.jpg" alt=""/>
        </div>
      </div>
       {/* ======ABOUT US SECTION ENDS HERE========  */}
     </section>

      {/* ======QUESTION SECTION STARTS HERE=======  */}
      <section className="question-section">
        <div className="question-div">
          <h1>QUESTIONS?</h1>
          <p>
            Whether you’re curious about features, a free trial, or even press, we’re here to answer any questions.
          </p>
          <button>Let's Talk Now</button>
        </div>
      </section>
     {/* =====QUESTION SECTION ENDS HERE=====  */}

    {/* ======FOOTER SECTION STARTS HERE====  */}
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
          <img src="./images/logo-green.svg" alt=""/>
        </div>
        <div>
          <p>Love Nature by Tyler Moore</p>
        </div>
      </section>
     </footer>
   </main>
    </div>
  )
}

export default Home