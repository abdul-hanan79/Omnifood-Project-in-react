import React from 'react'
import "./Style.css"
import "./General.css"
import "./Queries.css"
// images
import techcrunch from './Assest/logos/techcrunch.png'
import  logo2 from './Assest/logos/business-insider.png'
import  logo3 from './Assest/logos/the-new-york-times.png'
import   logo4 from './Assest/logos/forbes.png'
import   logo5  from './Assest/logos/usa-today.png'
export default function Feature() {
    return (
        <section className="section-featured">
        <div className="container">
          <h2 className="heading-featured-in">As featured in</h2>
          <div className="logos">
            <img src={techcrunch}  alt="Techcrunch logo" />
            <img src={logo2} alt="Business Insider logo" />
            <img src={logo3} alt="The New York Times logo" />
            <img src={logo4} alt="Forbes logo" />
            <img src={logo5} alt="USA Today logo" />
          </div>
        </div>
      </section>
  )
}





// rfc for this interface