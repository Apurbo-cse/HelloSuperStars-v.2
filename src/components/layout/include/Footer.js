import React from "react";
import { Link } from "react-router-dom";
import imagePath from "../../constants/imagePath";
import { useTheme } from "../../context.js/ThemeContext";

const Footer = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <>
      <footer
        className={`fixed-bottom shadow p-3 footer ${
          isDarkMode ? null : "dark-nav"
        }`}
      >
        <Link to="/" className="icon me-2 ">
          <i className="fa-solid fa-house"></i>
        </Link>
        <Link to="/" className="icon me-2 ">
          <i className="fa-solid fa-bell"></i>
        </Link>
        <Link to="/" className="icon me-2 ">
          <i className="fa-solid fa-tv"></i>
        </Link>
        <Link to="/e-showcase" className="icon me-2 ">
          <i className="fa-solid fa-store"></i>
        </Link>
        <Link to="/" className="icon menu-icon me-2 ">
          <img src={imagePath.menu} alt="" className="menu-icon" />{" "}
        </Link>
      </footer>
    </>
  );
};

export default Footer;
