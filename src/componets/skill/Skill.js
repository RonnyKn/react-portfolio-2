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
              <BsPatchCheckFill className="skill-content-icon1" />
              <div>
                <h4>
                  HTML <ImHtmlFive2 color="#e54d26" />
                </h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="skill-details">
              <BsPatchCheckFill className="skill-content-icon1" />
              <div>
                <h4>
                  CSS <SiCss3 color="#264ee4" />{" "}
                </h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="skill-details">
              <BsPatchCheckFill className="skill-content-icon1" />
              <div>
                <h4>
                  Javascript <SiJavascript color="yellow" />
                </h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="skill-details">
              <BsPatchCheckFill className="skill-content-icon1" />
              <div>
                <h4>
                  Bootstrap <SiBootstrap color="#8812fc" />{" "}
                </h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skill-details">
              <BsPatchCheckFill className="skill-content-icon1" />
              <div>
                <h4>
                  ReactJs <SiReact color="cyan" />
                </h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="skill-details">
              <BsPatchCheckFill className="skill-content-icon1" />
              <div>
                <h4>
                  Material-UI <SiMaterialui color="#00affe" />
                </h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="skill-details">
              <BsPatchCheckFill className="skill-content-icon1" />
              <div>
                <h4>
                  Photoshop <SiAdobephotoshop color="#0654a6" />
                </h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skill-details">
              <BsPatchCheckFill className="skill-content-icon1" />
              <div>
                <h4>
                  GitHub <SiGithub color="#fff" />
                </h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skill-details">
              <BsPatchCheckFill className="skill-content-icon1" />
              <div>
                <h4>
                  Tailwind <SiTailwindcss color="#00affe" />
                </h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skill-details">
              <BsPatchCheckFill className="skill-content-icon1" />
              <div>
                <h4>
                  NodeJs <FaNodeJs color="#fff" />
                </h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="skill-details">
              <BsPatchCheckFill className="skill-content-icon1" />
              <div>
                <h4>
                  MongoDB <SiMongodb color="lightgreen" />
                </h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="skill-details">
              <BsPatchCheckFill className="skill-content-icon1" />
              <div>
                <h4>
                  MySQL <SiMysql color="orange" />
                </h4>
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
