import React from "react";
import { Link } from "react-router-dom";
import imagePath from "../../constants/imagePath";
import { useTheme } from "../../context.js/ThemeContext";

const Footer = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <>
      <footer
        className={` footer d-md-none d-flex fixed-bottom shadow p-2 ${
          isDarkMode ? "bg-light" : "dark-nav"
        }`}
      >
        <Link
          className={`${
            isDarkMode ? "footer-dark-link bd-shadow" : "footer-link"
          }`}
        >
          <i className="fa-solid fa-house"></i>
        </Link>
        <Link
          className={`${
            isDarkMode ? "footer-dark-link bd-shadow" : "footer-link"
          }`}
        >
          <i className="fa-solid fa-bell"></i>
        </Link>
        <Link
          className={`${
            isDarkMode ? "footer-dark-link bd-shadow" : "footer-link"
          }`}
        >
          <i className="fa-solid fa-video"></i>
        </Link>
        <Link
          to="/e-showcase"
          className={`${
            isDarkMode ? "footer-dark-link bd-shadow" : "footer-link"
          }`}
        >
          <i className="fa-solid fa-store"></i>
        </Link>
        <Link
          className={`${
            isDarkMode ? "footer-dark-link bd-shadow" : "footer-link"
          }`}
        >
          <i className="fa-solid fa-house"></i>
        </Link>
      </footer>
    </>
  );
};

export default Footer;
