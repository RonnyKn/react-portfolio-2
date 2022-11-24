import React from "react"
import "./Footer.css"
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs"
const Footer = () => {
  return (
    <footer id="footer">
      <a href="#home" className="footer-logo">
        RONNYKN
      </a>
      <ul className="footer-permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skill">Skill</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer-socials">
        <a
          href="https://www.facebook.com/ronnykn"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook />
        </a>
        <a
          href="https://instagram.com/ronny.kn"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
        <a href="https://twitter.com/ronny_kn" target="_blank" rel="noreferrer">
          <BsTwitter />
        </a>
      </div>
      <div className="footer-copyright">
        <small>&copy; RonnyKn. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
