import "./Portfolio.css"
import React from "react"
import { SiGithub, SiNetlify } from "react-icons/si"
import IMG1 from "../../assets/imgP1.jpg"
import IMG2 from "../../assets/imgPShopingCart.jpg"
import IMG3 from "../../assets/imgP3.jpg"
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
          <h3>Rons Entertainment</h3>
          <h5 className="portfolio-subtitle text-light">
            Movie website with Reactjs, Material UI and fetching the data from
            The Movie Database API
          </h5>
          <div className="portfolio-link">
            <a
              href="https://github.com/RonnyKn/rons-entertainment"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <SiGithub />
            </a>
            <a
              href="https://rons-entertainment.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Demo <SiNetlify />
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={IMG2} alt="rons_entertaiment" />
          </div>
          <h3>React Shoping Cart</h3>
          <h5 className="portfolio-subtitle text-light">
            React Shoping Cart with useReducer Hook, material-ui and generates
            the data from fakerJs.
          </h5>
          <div className="portfolio-link">
            <a
              href="https://github.com/RonnyKn/react-shopping-cart"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <SiGithub />
            </a>
            <a
              href="https://rons-entertainment.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Demo <SiNetlify />
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={IMG3} alt="rons_entertaiment" />
          </div>
          <h3>whYTube</h3>
          <h5 className="portfolio-subtitle text-light">
            YouTube clone made with ReactJs, Material-UI and fetching the data
            from RapidAPI YouTube v3
          </h5>
          <div className="portfolio-link">
            <a
              href="https://github.com/RonnyKn/whYTube"
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
              Demo <SiNetlify />
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={IMG1} alt="rons_entertaiment" />
          </div>
          <h3>Tittle Portfolio</h3>
          <h5 className="portfolio-subtitle text-light">
            YouTube clone made with ReactJs, Material-UI and fetching the data
            from RapidAPI YouTube v3
          </h5>
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
              Demo <SiNetlify />
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={IMG1} alt="rons_entertaiment" />
          </div>
          <h3>Tittle Portfolio</h3>
          <h5 className="portfolio-subtitle text-light">
            YouTube clone made with ReactJs, Material-UI and fetching the data
            from RapidAPI YouTube v3
          </h5>
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
              Demo <SiNetlify />
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-img">
            <img src={IMG1} alt="rons_entertaiment" />
          </div>
          <h3>Tittle Portfolio</h3>
          <h5 className="portfolio-subtitle text-light">
            YouTube clone made with ReactJs, Material-UI and fetching the data
            from RapidAPI YouTube v3
          </h5>
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
              Demo <SiNetlify />
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
