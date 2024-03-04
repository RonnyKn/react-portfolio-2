import "./About.css";
import ME2 from "../../assets/w.jpg";
import { FaAward } from "react-icons/fa";
import { GiTechnoHeart } from "react-icons/gi";
import { VscFolderLibrary } from "react-icons/vsc";
import { IoSchoolOutline } from "react-icons/io5";

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
              data-aos-delay="700"
            />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <a
              className="about-card-link"
              href="https://ugm.ac.id/"
              target="_blank"
              rel="noreferrer"
            >
              <article
                className="about-card"
                data-aos="fade-right"
                data-aos-delay="800"
              >
                <IoSchoolOutline className="about-card-icon" />
                <h5>College</h5>
                <small>Gadjah Mada Univ.</small>
              </article>
            </a>

            <a
              className="about-card-link"
              href="https://github.com/RonnyKn/"
              target="_blank"
              rel="noreferrer"
            >
              <article
                className="about-card"
                data-aos="fade-right"
                data-aos-delay="1000"
              >
                <FaAward className="about-card-icon" />
                <h5>Experience</h5>
                <small>1+ Years Working</small>
              </article>
            </a>

            <a
              className="about-card-link"
              href="https://www.bola.net/"
              target="_blank"
              rel="noreferrer"
            >
              <article
                className="about-card"
                data-aos="fade-left"
                data-aos-delay="1200"
              >
                <GiTechnoHeart className="about-card-icon" />
                <h5>Interest</h5>
                <small>Football </small>
              </article>
            </a>

            <a
              className="about-card-link"
              href="https://github.com/RonnyKn/"
              target="_blank"
              rel="noreferrer"
            >
              <article
                className="about-card"
                data-aos="fade-left"
                data-aos-delay="1400"
              >
                <VscFolderLibrary className="about-card-icon" />
                <h5>Projects</h5>
                <small>10+ Projects</small>
              </article>
            </a>
          </div>
          <p
            style={{ textAlign: "justify" }}
            data-aos="flip-down"
            data-aos-delay="1000"
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
            data-aos-delay="1100"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
