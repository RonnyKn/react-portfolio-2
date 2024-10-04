import "./Skill.css";
import React from "react";
import { skillDatas } from "../../data/Data";

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
            {skillDatas.map((data) => (
              <article
                className="skill-details"
                data-aos="fade-in"
                data-aos-delay={data?.data_aos_delay}
                key={data?.id}
              >
                {data?.icon}
                <div>
                  <h4>{data?.title}</h4>
                  <small className="text-light">{data?.desc}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
