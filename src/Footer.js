import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        textAlign: "center",
        padding: "10px 0",
        fontSize: "1.2rem",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        background: "transparent", // same as app background
      }}
    >
      <a
        href="mailto:anmeshmishra17@gmail.com"
        style={{ color: "white" }}
        title="Email"
      >
        <MdEmail size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/anmesh-mishra"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "white" }}
        title="LinkedIn"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://github.com/MrAnmesh"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "white" }}
        title="GitHub"
      >
        <FaGithub size={24} />
      </a>
    </footer>
  );
};

export default Footer;
