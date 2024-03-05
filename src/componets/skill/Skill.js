import "./Skill.css";
import React from "react";
import { ImHtmlFive2 } from "react-icons/im";
import { FaNodeJs } from "react-icons/fa";
import {
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTypescript,
  SiAdobephotoshop,
  SiGithub,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const Skill = () => {
  return (
    <section id="skill">
      <h5 data-aos="fade-in">Get to Know</h5>
      <h2 data-aos="fade-in" data-aos-delay="500">
        My Skills
        <strong className="animate__animated animate__flash animate__infinite">
          |
        </strong>
      </h2>
      <div className="container skill-container">
        <div className="skill-frontend" data-aos="fade-in" data-aos-delay="500">
          <div className="skill-title">
            <h3>Development Skills</h3>
          </div>
          <div className="skill-content">
            <article
              className="skill-details"
              data-aos="fade-in"
              data-aos-delay="600"
            >
              <ImHtmlFive2 color="#e54d26" className="skill-content-icon2" />
              <div>
                <h4>HTML </h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article
              className="skill-details"
              data-aos="fade-in"
              data-aos-delay="700"
            >
              <SiCss3 color="#264ee4" className="skill-content-icon2" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article
              className="skill-details"
              data-aos="fade-in"
              data-aos-delay="800"
            >
              <SiJavascript color="yellow" className="skill-content-icon2" />
              <div>
                <h4>Javascript </h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article
              className="skill-details"
              data-aos="fade-in"
              data-aos-delay="900"
            >
              <SiReact color="cyan" className="skill-content-icon2" />
              <div>
                <h4>ReactJs </h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>

            <article
              className="skill-details"
              data-aos="fade-in"
              data-aos-delay="1400"
            >
              <SiNextdotjs color="black" className="skill-content-icon2" />
              <div>
                <h4>NextJs </h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article
              className="skill-details"
              data-aos="fade-in"
              data-aos-delay="1100"
            >
              <SiBootstrap color="#8812fc" className="skill-content-icon2" />
              <div>
                <h4>Bootstrap </h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article
              className="skill-details"
              data-aos="fade-in"
              data-aos-delay="1200"
            >
              <SiAdobephotoshop
                color="#0654a6"
                className="skill-content-icon2"
              />
              <div>
                <h4>Photoshop </h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article
              className="skill-details"
              data-aos="fade-in"
              data-aos-delay="1300"
            >
              <SiGithub color="#fff" className="skill-content-icon2" />
              <div>
                <h4>GitHub </h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article
              className="skill-details"
              data-aos="fade-in"
              data-aos-delay="1000"
            >
              <SiTypescript color="#00affe" className="skill-content-icon2" />
              <div>
                <h4>Typescript </h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article
              className="skill-details"
              data-aos="fade-in"
              data-aos-delay="1500"
            >
              <FaNodeJs color="lightgreen" className="skill-content-icon2" />
              <div>
                <h4>NodeJs </h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article
              className="skill-details"
              data-aos="fade-in"
              data-aos-delay="1600"
            >
              <SiMongodb color="lightgreen" className="skill-content-icon2" />
              <div>
                <h4>MongoDB </h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article
              className="skill-details"
              data-aos="fade-in"
              data-aos-delay="1700"
            >
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
  );
};

export default Skill;
