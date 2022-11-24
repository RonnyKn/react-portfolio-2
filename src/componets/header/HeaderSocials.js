import React from "react"
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className="header-socials">
      <a href="https://github.com/RonnyKn" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/ronny-kurniawan-4b205017a/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://instagram.com/ronny.kn" target="_blank" rel="noreferrer">
        <BsInstagram />
      </a>
    </div>
  )
}

export default HeaderSocials
