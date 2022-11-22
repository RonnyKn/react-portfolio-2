import "./Navbar.css"
import React from "react"
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { HiCode } from "react-icons/hi"
import { RiComputerLine } from "react-icons/ri"
import { BiMessageRoundedDetail } from "react-icons/bi"

const Navbar = () => {
  return (
    <nav>
      <a href="#home">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#skill">
        <HiCode />
      </a>
      <a href="#portfolio">
        <RiComputerLine />
      </a>
      <a href="#contact">
        <BiMessageRoundedDetail />
      </a>
    </nav>
  )
}

export default Navbar
