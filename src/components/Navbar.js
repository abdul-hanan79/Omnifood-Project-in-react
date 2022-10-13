import React from 'react'
import "./Style.css"
import "./General.css"
import "./Queries.css"
import logo from './Assest/omnifood-logo.png'

export default function Navbar() {


  const headerEl = document.querySelector(".header");
    const Show = () => {
      headerEl.classList.toggle("nav-open");
    }
  return (

    <header className='header'>
      <a href="#">
        <img className="logo" alt="Omnifood logo" src={logo} />
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li><a className="main-nav-link" href="#how">How it works</a></li>
          <li><a className="main-nav-link" href="#meals">Meals</a></li>
          <li>
            <a className="main-nav-link" href="#testimonials">Testimonials</a>
          </li>
          <li><a className="main-nav-link" href="#pricing">Pricing</a></li>
          <li><a className="main-nav-link nav-cta" href="#cta">Try for free</a></li>
        </ul>
      </nav>
      <button className="btn-mobile-nav">
        <ion-icon className="icon-mobile-nav" onclick={Show} name="menu-outline" />
        <ion-icon className="icon-mobile-nav" name="close-outline" />
      </button>
    </header>

  )
}
