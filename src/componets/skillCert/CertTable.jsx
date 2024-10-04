import React from "react";

const CertTable = ({ datas }) => {
  return (
    <div className="container skill-container">
      <div className="skill-frontend" data-aos="fade-in" data-aos-delay="500">
        <div className="skill-title">
          <h3>{datas?.title}</h3>
        </div>
        <div className="cert-content-container">
          {datas?.data?.map((data) => (
            <div
              className="cert-content"
              data-aos="fade-in"
              data-aos-delay={data?.data_aos_delay}
              key={data?.id}
            >
              <img src={data?.img} alt={data?.title} />
              <div className="cert-desc">
                <h4>{data?.title}</h4>
                <small className="text-light">{data?.desc}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertTable;
