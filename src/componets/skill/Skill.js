import "./Skill.css"
import React from "react"
import { BsPatchCheckFill } from "react-icons/bs"
import { ImHtmlFive2 } from "react-icons/im"
import { FaNodeJs } from "react-icons/fa"
import {
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiMaterialui,
  SiAdobephotoshop,
  SiGithub,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
} from "react-icons/si"

const Skill = () => {
  return (
    <section id="skill">
      <h5>Get to Know</h5>
      <h2>My Skills</h2>
      <div className="container skill-container">
        <div className="skill-frontend">
          <h3>Development Skills</h3>
          <div className="skill-content">
            <article className="skill-details">
              <ImHtmlFive2 color="#e54d26" className="skill-content-icon2" />
              <div>
                <h4>HTML </h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="skill-details">
              <SiCss3 color="#264ee4" className="skill-content-icon2" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="skill-details">
              <SiJavascript color="yellow" className="skill-content-icon2" />
              <div>
                <h4>Javascript </h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="skill-details">
              <SiReact color="cyan" className="skill-content-icon2" />
              <div>
                <h4>ReactJs </h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="skill-details">
              <SiMaterialui color="#00affe" className="skill-content-icon2" />
              <div>
                <h4>Material-UI </h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="skill-details">
              <SiBootstrap color="#8812fc" className="skill-content-icon2" />
              <div>
                <h4>Bootstrap </h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skill-details">
              <SiAdobephotoshop
                color="#0654a6"
                className="skill-content-icon2"
              />
              <div>
                <h4>Photoshop </h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skill-details">
              <SiGithub color="#fff" className="skill-content-icon2" />
              <div>
                <h4>GitHub </h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skill-details">
              <SiTailwindcss color="#00affe" className="skill-content-icon2" />
              <div>
                <h4>Tailwind </h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skill-details">
              <FaNodeJs color="lightgreen" className="skill-content-icon2" />
              <div>
                <h4>NodeJs </h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="skill-details">
              <SiMongodb color="lightgreen" className="skill-content-icon2" />
              <div>
                <h4>MongoDB </h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="skill-details">
              <SiMysql color="orange" className="skill-content-icon2" />
              <div>
                <h4>MySQL </h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill
