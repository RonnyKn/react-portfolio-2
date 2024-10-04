import "./Portfolio.css";
import React from "react";
import { SiGithub, SiNetlify } from "react-icons/si";
import { portfolioDatas } from "../../data/Data";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 data-aos="fade-in">My Recent Projects</h5>
      <h2 data-aos="fade-in" data-aos-delay="500">
        Portfolio
        <strong className="animate__animated animate__flash animate__infinite">
          |
        </strong>
      </h2>
      <div className="container portfolio-container">
        {portfolioDatas?.map((data, idx) => (
          <article
            key={idx}
            className="portfolio-item"
            data-aos={data?.aos}
            data-aos-delay={data?.aosDelay}
          >
            <div className="portfolio-item-img">
              <img src={data?.img} alt={`images/${idx}`} />
            </div>
            <h3>{data?.title}</h3>
            <h5 className="portfolio-subtitle text-light">
              {data?.desc}
              <br />
            </h5>
            <div className="portfolio-link">
              <a
                href={data?.github}
                className="btn centered"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <SiGithub />
              </a>
              <a
                href={data?.demo}
                className="btn btn-primary centered"
                target="_blank"
                rel="noreferrer"
              >
                Demo <SiNetlify />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
