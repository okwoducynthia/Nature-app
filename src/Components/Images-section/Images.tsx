import React from 'react'
import './Images.css'

const Images = () => {
  return (
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
  )
}

export default Images