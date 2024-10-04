import React from "react";

const SkillTable = ({ datas }) => {
  return (
    <div className="container skill-container">
      <div className="skill-frontend" data-aos="fade-in" data-aos-delay="500">
        <div className="skill-title">
          <h3>{datas?.title}</h3>
        </div>
        <div className="skill-content">
          {datas?.data?.map((data) => (
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
  );
};

export default SkillTable;
