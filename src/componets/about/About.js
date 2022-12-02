import "./About.css"
import ME2 from "../../assets/w.jpg"
import { FaAward } from "react-icons/fa"
import { GiTechnoHeart } from "react-icons/gi"
import { VscFolderLibrary } from "react-icons/vsc"
import { IoSchoolOutline } from "react-icons/io5"

const About = () => {
  return (
    <section id="about">
      <h5 data-aos="fade-in">Get to Know</h5>
      <h2 data-aos="fade-in" data-aos-delay="500">
        About Me
        <strong className="animate__animated animate__flash animate__infinite">
          |
        </strong>
      </h2>
      <div className="container about-container">
        <div className="about-me" data-aos="fade-right" data-aos-delay="500">
          <div className="about-me-img">
            <img
              src={ME2}
              alt="about_image"
              data-aos="fade-in"
              data-aos-delay="800"
            />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article
              className="about-card"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <IoSchoolOutline className="about-card-icon" />
              <h5>College</h5>
              <small>Gadjah Mada Univ.</small>
            </article>
            <article
              className="about-card"
              data-aos="fade-right"
              data-aos-delay="1000"
            >
              <FaAward className="about-card-icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article
              className="about-card"
              data-aos="fade-left"
              data-aos-delay="1500"
            >
              <GiTechnoHeart className="about-card-icon" />
              <h5>Interest</h5>
              <small>Football & Technology</small>
            </article>
            <article
              className="about-card"
              data-aos="fade-left"
              data-aos-delay="2000"
            >
              <VscFolderLibrary className="about-card-icon" />
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>
          </div>
          <p
            style={{ textAlign: "justify" }}
            data-aos="flip-down"
            data-aos-delay="1500"
          >
            Hi, my name is Ronny Kurniawan. I design and build UI for modern
            websites. I've graduate from Gadjah Mada Univ and have experience at
            BPJS Ketenagakerjaan Purwokerto & Stanford Teknologi Indonesia.
            Football and Technologies are my favourite topics. Please visit my
            GitHub profile for detail projects.
          </p>
          <a
            href="#contact"
            className="btn btn-primary"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}
export default About
