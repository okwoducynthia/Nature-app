import React from 'react'
import './About.css'

const About = () => {
  return (
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
          <img src="images/leaf.jpg" alt="image of a hand holding a leaf"/>
        </div>
      </div>
  )
}

export default About