import React from 'react'
import './Quote.css'

const Quote = () => {
  return (
    <section className="quote-section">
      <div className="quote-section-image">
        <img src="images/quotes.svg" alt="image of quotation mark"/>
      </div>
      <h2>
        “Original and with an innate understanding of their customer’s needs, the team at Love Nature are always a pleasure to work with.”
      </h2>
      <div className="avatar-img">
        <img src="images/avatar_on_home.png" alt="avatar image of a lady"/>
      </div>
      <p>Jane Miller</p>
    </section>
  )
}

export default Quote