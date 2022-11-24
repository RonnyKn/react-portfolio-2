import "./Portfolio.css"
import React from "react"
import { SiGithub } from "react-icons/si"
import IMG1 from "../../assets/imgP1.jpg"
import IMG2 from "../../assets/imgP1.jpg"
import IMG3 from "../../assets/imgP1.jpg"
import IMG4 from "../../assets/imgP1.jpg"
import IMG5 from "../../assets/imgP1.jpg"
import IMG6 from "../../assets/imgP1.jpg"
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={IMG1} alt="rons_entertaiment" />
          </div>
          <h3>Tittle Portfolio</h3>
          <div className="portfolio-link">
            <a
              href="https://github.com/"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <SiGithub />
            </a>
            <a
              href="https://netlify.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={IMG1} alt="rons_entertaiment" />
          </div>
          <h3>Tittle Portfolio</h3>
          <div className="portfolio-link">
            <a
              href="https://github.com/"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <SiGithub />
            </a>
            <a
              href="https://netlify.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={IMG1} alt="rons_entertaiment" />
          </div>
          <h3>Tittle Portfolio</h3>
          <div className="portfolio-link">
            <a
              href="https://github.com/"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <SiGithub />
            </a>
            <a
              href="https://netlify.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={IMG1} alt="rons_entertaiment" />
          </div>
          <h3>Tittle Portfolio</h3>
          <div className="portfolio-link">
            <a
              href="https://github.com/"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <SiGithub />
            </a>
            <a
              href="https://netlify.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={IMG1} alt="rons_entertaiment" />
          </div>
          <h3>Tittle Portfolio</h3>
          <div className="portfolio-link">
            <a
              href="https://github.com/"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <SiGithub />
            </a>
            <a
              href="https://netlify.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={IMG1} alt="rons_entertaiment" />
          </div>
          <h3>Tittle Portfolio</h3>
          <div className="portfolio-link">
            <a
              href="https://github.com/"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <SiGithub />
            </a>
            <a
              href="https://netlify.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={IMG1} alt="rons_entertaiment" />
          </div>
          <h3>Tittle Portfolio</h3>
          <div className="portfolio-link">
            <a
              href="https://github.com/"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <SiGithub />
            </a>
            <a
              href="https://netlify.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
