import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Navbar />

      <div data-aos="fade-up">
        <Hero />
      </div>

      <div data-aos="fade-right">
        <About />
      </div>

      <div data-aos="fade-left">
        <Skills />
      </div>

      <div data-aos="fade-right">
        <Projects />
      </div>

      <div data-aos="fade-left">
        <Education />
      </div>

      <div data-aos="fade-right">
        <Certifications />
      </div>

      <div data-aos="fade-left">
        <Contact />
      </div>
      <div data-aos="fade-up">
      <Footer />
      </div>
    </>
  );
}

export default App;

















// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Education from "./components/Education";
// import Certifications from "./components/Certifications";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// function App() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       offset: 100,
//     });
//   }, []);

//   return (
//     <>
//       <Navbar />

//       <div data-aos="fade-up">
//         <Hero />
//       </div>

//       <div data-aos="fade-right">
//         <About />
//       </div>

//       <div data-aos="fade-left">
//         <Skills />
//       </div>

//       <div data-aos="zoom-in">
//         <Projects />
//       </div>

//       <div data-aos="fade-up">
//         <Education />
//       </div>

//       <div data-aos="flip-up">
//         <Certifications />
//       </div>

//       <div data-aos="fade-up">
//         <Contact />
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default App;


