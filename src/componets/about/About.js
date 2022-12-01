import "./About.css"
import ME2 from "../../assets/w.jpg"
import { FaAward } from "react-icons/fa"
import { GiTechnoHeart } from "react-icons/gi"
import { VscFolderLibrary } from "react-icons/vsc"
import { IoSchoolOutline } from "react-icons/io5"

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={ME2} alt="about_image" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <IoSchoolOutline className="about-card-icon" />
              <h5>College</h5>
              <small>Gadjah Mada Univ.</small>
            </article>
            <article className="about-card">
              <FaAward className="about-card-icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about-card">
              <GiTechnoHeart className="about-card-icon" />
              <h5>Interest</h5>
              <small>Football & Technology</small>
            </article>
            <article className="about-card">
              <VscFolderLibrary className="about-card-icon" />
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>
          </div>
          <p style={{ textAlign: "justify" }}>
            Hello, my name is Ronny Kurniawan. I design and build UI for modern
            websites. I've graduate from Gadjah Mada Univ and have experience at
            BPJS Ketenagakerjaan Purwokerto & Stanford Teknologi Indonesia.
            Football and Technologies are my favourite topics. Please visit my
            GitHub profile for detail projects.
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
