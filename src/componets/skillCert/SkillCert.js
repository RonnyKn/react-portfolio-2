import "./SkillCert.css";
import React from "react";
import { skillCertificateDatas } from "../../data/Data";
import SkillTable from "./SkillTable";
import CertTable from "./CertTable";
const SkillCert = () => {
  return (
    <section id="skill">
      <h5 data-aos="fade-in">Get to Know</h5>
      <h2 data-aos="fade-in" data-aos-delay="500">
        My Skills and Certificates.
        <strong className="animate__animated animate__flash animate__infinite">
          |
        </strong>
      </h2>
      <SkillTable datas={skillCertificateDatas?.skills} />
      <CertTable datas={skillCertificateDatas?.certificates} />
    </section>
  );
};

export default SkillCert;
