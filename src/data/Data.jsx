//social data
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

//navbar data
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { HiCode } from "react-icons/hi";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { VscFolderLibrary } from "react-icons/vsc";

//skill data
import { ImHtmlFive2 } from "react-icons/im";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandGolang } from "react-icons/tb";
import {
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiExpress,
  SiNextdotjs,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";
import CertificateImg1 from "../assets/sertifikat-1.jpg";
import CertificateImg2 from "../assets/sertifikat-2.jpg";
import CertificateImg3 from "../assets/sertifikat-3.jpg";
import CertificateImg4 from "../assets/sertifikat-4.jpg";

//portfolio
import PortfolioImg1 from "../assets/portfolio1.jpg";
import PortfolioImg2 from "../assets/portfolio2.jpg";
import PortfolioImg3 from "../assets/portfolio3.jpg";
import PortfolioImg4 from "../assets/portfolio4.jpg";
import PortfolioImg5 from "../assets/portfolio5.jpg";
import PortfolioImg6 from "../assets/portfolio6.jpg";

//footer data
import { BsFacebook, BsTwitter } from "react-icons/bs";

const getDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  return year;
};

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

const navbarData = [
  {
    id: 1,
    link: "#home",
    active: "active",
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    link: "#about",
    active: "active",
    icon: <AiOutlineUser />,
  },
  {
    id: 3,
    link: "#skill",
    active: "active",
    icon: <HiCode />,
  },
  {
    id: 4,
    link: "#portfolio",
    active: "active",
    icon: <VscFolderLibrary />,
  },
  {
    id: 5,
    link: "#contact",
    active: "active",
    icon: <BiMessageRoundedDetail />,
  },
];

const skillCertificateDatas = {
  skills: {
    title: "Development Skills",
    data: [
      {
        id: 1,
        data_aos: "fade-in",
        data_aos_delay: "600",
        icon: <ImHtmlFive2 color="#e54d26" className="skill-content-icon2" />,
        title: "HTML",
        desc: "Advanced",
      },
      {
        id: 2,
        data_aos: "fade-in",
        data_aos_delay: "700",
        icon: <SiCss3 color="#264ee4" className="skill-content-icon2" />,
        title: "CSS",
        desc: "Advanced",
      },
      {
        id: 3,
        data_aos: "fade-in",
        data_aos_delay: "800",
        icon: <SiJavascript color="yellow" className="skill-content-icon2" />,
        title: "Javascript",
        desc: "Intermediate",
      },

      {
        id: 4,
        data_aos: "fade-in",
        data_aos_delay: "900",
        icon: <SiReact color="cyan" className="skill-content-icon2" />,
        title: "React JS",
        desc: "Advanced",
      },
      {
        id: 5,
        data_aos: "fade-in",
        data_aos_delay: "1000",
        icon: <SiTailwindcss color="cyan" className="skill-content-icon2" />,
        title: "Tailwind CSS",
        desc: "Intermediate",
      },
      {
        id: 6,
        data_aos: "fade-in",
        data_aos_delay: "1100",
        icon: <FaNodeJs color="lightgreen" className="skill-content-icon2" />,
        title: "Node JS",
        desc: "Intermediate",
      },
      {
        id: 7,
        data_aos: "fade-in",
        data_aos_delay: "1200",
        icon: <SiExpress color="cyan" className="skill-content-icon2" />,
        title: "Express JS",
        desc: "Intermediate",
      },
      {
        id: 8,
        data_aos: "fade-in",
        data_aos_delay: "1300",
        icon: <TbBrandGolang color="cyan" className="skill-content-icon2" />,
        title: "Golang",
        desc: "Beginner",
      },
      {
        id: 9,
        data_aos: "fade-in",
        data_aos_delay: "1400",
        icon: <SiNextdotjs color="black" className="skill-content-icon2" />,
        title: "Next JS",
        desc: "Intermediate",
      },
      {
        id: 10,
        data_aos: "fade-in",
        data_aos_delay: "1500",
        icon: <TbBrandGolang color="cyan" className="skill-content-icon2" />,
        title: "Go Fiber",
        desc: "Beginner",
      },
      {
        id: 11,
        data_aos: "fade-in",
        data_aos_delay: "1600",
        icon: <SiMysql color="cyan" className="skill-content-icon2" />,
        title: "MySQL",
        desc: "Intermediate",
      },
      {
        id: 12,
        data_aos: "fade-in",
        data_aos_delay: "1700",
        icon: <SiPostgresql color="cyan" className="skill-content-icon2" />,
        title: "PostgreSQL",
        desc: "Beginner",
      },
    ],
  },
  certificates: {
    title: "My Certificates",
    data: [
      {
        id: 1,
        data_aos: "fade-in",
        data_aos_delay: "500",
        img: CertificateImg1,
        title: "Sertifikat Bootcamp React JS",
        desc: "Sertifikat Bootcamp React JS dari EDSPERT.ID",
      },
      {
        id: 2,
        data_aos: "fade-in",
        data_aos_delay: "600",
        img: CertificateImg2,
        title: "Sertifikat Bootcamp React JS",
        desc: "Silabus Bootcamp React JS dari EDSPERT.ID",
      },
      {
        id: 3,
        data_aos: "fade-in",
        data_aos_delay: "700",
        img: CertificateImg3,
        title: "Web Developer Series 6.0 - Backend",
        desc: "Sertifikat Web Developer Series Backend dari Dibimbing.id",
      },
      {
        id: 4,
        data_aos: "fade-in",
        data_aos_delay: "900",
        img: CertificateImg4,
        title: "UI/UX Design & Metode UX Research",
        desc: "Sertifikat UI/UX Design & Metode UX Research dari BinarAcademy",
      },
    ],
  },
};

const portfolioDatas = [
  {
    title: "Kenangan Senja Coffee",
    img: PortfolioImg5,
    desc: "Responsive Coffee Shop website with ReactJs.",
    github: "https://github.com/RonnyKn/kopiKenanganSenja",
    demo: "https://kenangansenja.netlify.app/",
    aos: "fade-right",
    aosDelay: "600",
  },
  {
    title: "Rons Entertainment",
    img: PortfolioImg2,
    desc: "Responsive Movie website with Reactjs & MaterialUI.",
    github: "https://github.com/RonnyKn/rons-entertainment",
    demo: "https://rons-entertainment.netlify.app/",
    aos: "fade-in",
    aosDelay: "700",
  },
  {
    title: "Responsive React Ecommerce",
    img: PortfolioImg1,
    desc: "Responsive Ecommerce website using Redux.",
    github: "https://github.com/RonnyKn/Ecommerce-Reactjs",
    demo: "https://reactjs-ecommerce-web-app.netlify.app/",
    aos: "fade-left",
    aosDelay: "800",
  },
  {
    title: "Ronshop",
    img: PortfolioImg4,
    desc: "Responsive Ecommerce website with ReactJs & Firebase.",
    github: "https://github.com/RonnyKn/ecommerce-furniture",
    demo: "https://ronshop.netlify.app/",
    aos: "fade-right",
    aosDelay: "900",
  },
  {
    title: "Malaka Books",
    img: PortfolioImg6,
    desc: "Responsive Landing page for a book product with ReactJs. Design by Nauval.",
    github: "https://github.com/RonnyKn/whYTube",
    demo: "https://malaka-bookstore.netlify.app/",
    aos: "fade-in",
    aosDelay: "1000",
  },
  {
    title: "Responsive Education Website",
    img: PortfolioImg3,
    desc: "Responsive Simple Education website with ReactJs. Design by Nauval.",
    github: "https://github.com/RonnyKn/react-responsive-education-website",
    demo: "https://react-ronseducation.netlify.app/",
    aos: "fade-left",
    aosDelay: "1100",
  },
];

const footerDatas = {
  permalinks: [
    {
      id: 1,
      link: "#home",
      tag: "Home",
    },
    {
      id: 2,
      link: "#about",
      tag: "About",
    },
    {
      id: 3,
      link: "#skill",
      tag: "Skill",
    },
    {
      id: 4,
      link: "#portfolio",
      tag: "Portfolio",
    },
    {
      id: 5,
      link: "#contact",
      tag: "Contact",
    },
  ],
  socials: [
    {
      id: 1,
      icon: <BsFacebook />,
      link: "https://www.facebook.com/ronnykn",
    },
    {
      id: 2,
      icon: <BsInstagram />,
      link: "https://instagram.com/ronny.kn",
    },
    {
      id: 3,
      icon: <BsTwitter />,
      link: "https://twitter.com/ronny_kn",
    },
  ],
  copyright: `© ${getDate()} Ronny Kn. All rights reserved`,
};

export {
  portfolioDatas,
  socialsData,
  navbarData,
  skillCertificateDatas,
  footerDatas,
};
