import React from "react";
import { socialsData } from "../../data/Data.jsx";

const HeaderSocials = () => {
  return (
    <div className="header-socials">
      {socialsData.map((data) => (
        <a href={data?.link} target="_blank" rel="noreferrer" key={data?.id}>
          {data?.icon}
        </a>
      ))}
    </div>
  );
};

export default HeaderSocials;
