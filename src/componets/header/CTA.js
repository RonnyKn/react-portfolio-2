import React from "react"
import CV from "../../assets/Ronnykn_CV.pdf"

const CTA = () => {
  return (
    <div className="cta">
      <a
        href={CV}
        download
        className="btn"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        Download CV
      </a>
      <a
        href="#contact"
        className="btn btn-primary"
        data-aos="fade-left"
        data-aos-delay="1000"
      >
        Contact Me
      </a>
    </div>
  )
}

export default CTA
