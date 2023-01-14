import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context.js/ThemeContext";

const ButtonCard = (props) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <>
      <Link
        to={props.urlLink}
        className={`btn  bd-shadow me-2  ${isDarkMode ? null : "dark-shadow"}`}
      >
        {props.name}
      </Link>
    </>
  );
};

export default ButtonCard;
