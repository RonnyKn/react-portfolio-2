import "./Navbar.css";
import React, { useState } from "react";
import { navbarData } from "../../data/Data";

const Navbar = () => {
  const [isActive, setIsActive] = useState("#home");
  return (
    <nav>
      {navbarData.map((data) => (
        <a
          href={data?.link}
          className={isActive === data?.link ? data?.active : ""}
          onClick={() => setIsActive(data?.link)}
          key={data?.id}
        >
          {data?.icon}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
