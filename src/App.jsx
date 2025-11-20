import "./App.css";
import Header from "./componets/header/Header.jsx";
import Navbar from "./componets/navbar/Navbar.jsx";
import About from "./componets/about/About.jsx";
import SkillCert from "./componets/skillCert/SkillCert.jsx";
import Portfolio from "./componets/portfolio/Portfolio.jsx";
import Contact from "./componets/contact/Contact.jsx";
import Footer from "./componets/footer/Footer.jsx";
import "animate.css";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <SkillCert />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
