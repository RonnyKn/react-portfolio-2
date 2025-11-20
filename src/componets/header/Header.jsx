import "./Header.css"
import React from "react"
import CTA from "./CTA"
import PROFIL from "../../assets/profile.png"
import HeaderSocials from "./HeaderSocials"

const Header = () => {
  return (
    <header>
      <div id="home" className="container header-container">
        <h5 data-aos="fade-up">Hello I'm</h5>
        <h1 data-aos="fade-up">
          Ronny Kurniawan
          <strong className="animate__animated animate__flash animate__infinite">
            |
          </strong>
        </h1>
        <h5 className="text-light" data-aos="fade-in" data-aos-delay="500">
          Front-end Developer
        </h5>
        <CTA />
        <HeaderSocials />
        <div className="me" data-aos="fade-in">
          <img src={PROFIL} alt="" />
        </div>
        <div className="scroll-down">
          <h5>
            <a href="#contact">Scroll Down</a>
          </h5>
        </div>
      </div>
    </header>
  )
}

export default Header
