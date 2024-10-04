import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  const socialsData = [
    {
      id: 1,
      icon: <BsGithub />,
      link: "https://github.com/RonnyKn",
    },
    {
      id: 2,
      icon: <BsLinkedin />,
      link: "https://www.linkedin.com/in/ronny-kurniawan-4b205017a/",
    },
    {
      id: 3,
      icon: <BsInstagram />,
      link: "https://instagram.com/ronny.kn",
    },
  ];

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
