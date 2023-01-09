import React from "react";
import { Link } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import imagePath from "../../constants/imagePath";
import { useTheme } from "../../context.js/ThemeContext";

const Navigation = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <>
      {/* Desktop View */}
      <nav
        className={`px-3 shadow desktop sticky-top ${
          isDarkMode ? null : "dark-nav"
        } `}
      >
        <div className="left">
          <Link to="/" className="logo">
            <img src={imagePath.logo} />
          </Link>

          <div className="search_bar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search ..." />
          </div>
        </div>

        <div className="right">
          <Link to="/" className="icon me-2 fa-solid fa-house"></Link>
          <Link to="/" className="icon me-2 fa-solid fa-tv"></Link>
          <Link
            to="/"
            className="icon me-2 fa-brands fa-facebook-messenger"
          ></Link>
          <Link to="/" className="icon me-2 fa-solid fa-bell"></Link>
          <Link to="/e-showcase" className="icon me-2 fa-solid fa-store"></Link>
          <div className="mx-2">
            <DarkModeSwitch
              sunColor="gold"
              moonColor="gray"
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={20}
            />
          </div>
          <img src={imagePath.user} />
        </div>
      </nav>
      {/* Desktop View End */}

      {/* Momible View */}
      <nav
        className={`mobile  shadow py-2 sticky-top px-2 ${
          isDarkMode ? null : "dark-nav"
        } `}
      >
        <Link to="/" className="logo">
          <img src={imagePath.logo} />
        </Link>
        <div className="message">
          <Link to="/" className="icon fa-solid fa-magnifying-glass"></Link>
          <Link
            to="/"
            className="icon mx-2 fa-brands fa-facebook-messenger"
          ></Link>
          <Link className="icon ">
            <DarkModeSwitch
              sunColor="gold"
              moonColor="gray"
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={20}
            />
          </Link>
        </div>
      </nav>

      {/* Momible View End*/}
    </>
  );
};

export default Navigation;
