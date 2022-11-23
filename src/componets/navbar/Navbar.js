import "./Navbar.css"
import React, { useState } from "react"
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { HiCode } from "react-icons/hi"
import { RiComputerLine } from "react-icons/ri"
import { BiMessageRoundedDetail } from "react-icons/bi"
import { VscFolderLibrary } from "react-icons/vsc"

const Navbar = () => {
  const [isActive, setIsActive] = useState("#home")
  return (
    <nav>
      <a
        href="#home"
        className={isActive === "#home" ? "active" : ""}
        onClick={() => setIsActive("#home")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={isActive === "#about" ? "active" : ""}
        onClick={() => setIsActive("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#skill"
        className={isActive === "#skill" ? "active" : ""}
        onClick={() => setIsActive("#skill")}
      >
        <HiCode />
      </a>
      <a
        href="#portfolio"
        className={isActive === "#portfolio" ? "active" : ""}
        onClick={() => setIsActive("#portfolio")}
      >
        <VscFolderLibrary />
      </a>
      <a
        href="#contact"
        className={isActive === "#contact" ? "active" : ""}
        onClick={() => setIsActive("#contact")}
      >
        <BiMessageRoundedDetail />
      </a>
    </nav>
  )
}

export default Navbar
