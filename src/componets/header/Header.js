import "./Header.css"
import React from "react"
import CTA from "./CTA"
import ME from "../../assets/me.png"
import HeaderSocials from "./HeaderSocials"

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Ronny Kurniawan</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <div className="scroll-down">
          <h5>Scroll Down</h5>
        </div>
      </div>
    </header>
  )
}

export default Header
