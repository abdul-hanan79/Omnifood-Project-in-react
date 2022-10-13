import React from 'react'
import "./Style.css"
import "./General.css"
import "./Queries.css"
import hero from './Assest/hero.png'
import customer1 from './Assest/customers/customer-1.jpg'
import customer2 from './Assest/customers/customer-2.jpg'
import customer3 from './Assest/customers/customer-3.jpg'
import customer4 from './Assest/customers/customer-4.jpg'
import customer5 from './Assest/customers/customer-5.jpg'
import customer6 from './Assest/customers/customer-6.jpg'



export default function Hero(){
    return(
        <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              A healthy meal delivered to your door, every single day
            </h1>
            <p className="hero-description">
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </p>
            <a href="#cta" className="btn btn--full margin-right-sm">Start eating well</a>

            <a href="#how" className="btn btn--outline">Learn more &darr;</a>
            <div className="delivered-meals">
              <div className="delivered-imgs">
                <img src={customer1} alt="Customer photo" />
                <img src={customer2} alt="Customer photo" />
                <img src={customer3} alt="Customer photo" />
                <img src={customer4}  alt="Customer photo" />
                <img src={customer5} alt="Customer photo" />
                <img src={customer6} alt="Customer photo" />
              </div>
              <p className="delivered-text">
                <span>250,000+</span> meals delivered last year!
              </p>
            </div>
          </div>
          <div className="hero-img-box">
            {/* <picture> */}
              {/* <source srcset="img/hero.webp" type="image/webp" />
              <source srcset="img/hero-min.png" type="image/png" /> */}

              <img
                src={hero}
                className="hero-img"
                alt="Woman enjoying food, meals in storage container, and food bowls on a table"
              />
            {/* </picture> */}
          </div>
        </div>
      </section>



    )
}