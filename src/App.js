import "./App.css"
import React from "react"
import Header from "./componets/header/Header"
import Navbar from "./componets/navbar/Navbar"
import About from "./componets/about/About"
import Skill from "./componets/skill/Skill"
import Portfolio from "./componets/portfolio/Portfolio"
import Contact from "./componets/contact/Contact"
import Footer from "./componets/footer/Footer"

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App
