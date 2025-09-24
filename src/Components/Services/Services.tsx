import "./Services.css"
import { NavLink } from 'react-router-dom'

const Services = () => {
  return (
    <div>
    <main>
       {/* ==HERO SECTION STARTS HERE==  */}
      <section className="Hero-services">
        <div>
          <h1>Our Services</h1>
        </div>
      </section>
       {/* ==HERO SECTION ENDS HERE==  */}

       {/* =====IMAGE SECTION STARTS HERE=====  */}
      <section>
        <div className="image-container">
          <div className="service-image">
            <img src="./images/service-1.jpg" alt="image of a man sitting down" />
          </div>
          <div className="image-description">
            <h2>Web Design</h2>
            <p>
              Tell your visitor how your service can improve their life. Connect
              with the problem that they’re trying to solve and address any
              objections you think they might have. What is the biggest benefit
              your customer will get from this? Keep your target audience in
              mind.
            </p>
            <h3>From $99</h3>
            <button>Start a Project</button>
          </div>
        </div>

        <div className="image-container">
          <div className="service-image">
            <img src="./images/service-2.jpg" alt="image of nature" />
          </div>

          <div className="image-description">
            <h2>Graphic Design</h2>
            <p>
              Tell your visitor how your service can improve their life. Connect
              with the problem that they’re trying to solve and address any
              objections you think they might have. What is the biggest benefit
              your customer will get from this? Keep your target audience in
              mind.
            </p>
            <h3>From $99</h3>
            <button>Start a Project</button>
          </div>
        </div>

        <div className="image-container">
          <div className="service-image">
            <img src="./images/service-3.jpg" alt="image of a black mountain" />
          </div>

          <div className="image-description">
            <h2>Content Creation</h2>
            <p>
              Tell your visitor how your service can improve their life. Connect
              with the problem that they’re trying to solve and address any
              objections you think they might have. What is the biggest benefit
              your customer will get from this? Keep your target audience in
              mind.
            </p>
            <h3>From $99</h3>
            <button>Start a Project</button>
          </div>
        </div>
      </section>
       {/* =====IMAGE SECTION ENDS HERE=====  */}

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
    </main>
    </div>
  )
}

export default Services