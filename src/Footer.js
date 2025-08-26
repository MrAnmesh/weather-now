import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a
          href="mailto:anmeshmishra17@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Email"
        >
          <MdEmail />
        </a>
        <a
          href="https://www.linkedin.com/in/anmesh-mishra/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/MrAnmesh"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FaGithub />
        </a>
      </div>
      <p className="footer-text">Made with ❤️ by Anmesh</p>
    </footer>
  );
}

export default Footer;
