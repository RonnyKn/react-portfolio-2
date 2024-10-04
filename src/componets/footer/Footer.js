import React from "react";
import "./Footer.css";
import { footerDatas } from "../../data/Data";
const Footer = () => {
  return (
    <footer id="footer">
      <a href="#home" className="footer-logo">
        RONNYKN
      </a>
      <ul className="footer-permalinks">
        {footerDatas?.permalinks?.map((data) => (
          <li key={data?.id}>
            <a href={data?.link}>{data?.tag}</a>
          </li>
        ))}
      </ul>
      <div className="footer-socials">
        {footerDatas?.socials?.map((data) => (
          <a href={data?.link} target="_blank" rel="noreferrer" key={data?.id}>
            {data?.icon}
          </a>
        ))}
      </div>
      <div className="footer-copyright">
        <small>{footerDatas?.copyright}</small>
      </div>
    </footer>
  );
};

export default Footer;
