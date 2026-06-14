import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImg from "../assets/Balaji Wings.jpeg";
import Resume from "../assets/Balaji_Pasupuleti_FullStack_Resume.pdf"

function Hero() {
  return (
    <section className="hero text-center">
      <div className="container">

        <img
          src={profileImg}
          alt="Balaji"
          className="profile-img"
        />

        <h1>Balaji Pasupuleti</h1>

        <h3>Frontend Developer | React Developer</h3>

        <p>
          Building responsive and user-friendly web applications
          using React.js and modern web technologies.
        </p>

        <a
          href={Resume}
          className="btn btn-info m-2"
          target="_blank"
        >
          Download Resume
        </a>

        <a
          href="#contact"
          className="btn btn-outline-light m-2"
        >
          Contact Me
        </a>

        <div className="social-icons mt-4">
          <a
            href="https://github.com/BalajiDev001"
            target="_blank"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/balaji-p-055399331/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;