import "./About.css"
import ME_about from "../../assets/me-about.jpg"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={ME_about} alt="about_image" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-card-icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article>
              <FiUsers className="about-card-icon" />
              <h5>Clients</h5>
              <small>300+ Clients</small>
            </article>
            <article>
              <VscFolderLibrary className="about-card-icon" />
              <h5>Projects</h5>
              <small>300+ Recent Projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            libero a dolorum nisi placeat saepe ipsum dolorem beatae rem, animi
            itaque eligendi, voluptatem incidunt quisquam. Laboriosam nemo
            voluptatum eveniet iusto.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}
export default About
