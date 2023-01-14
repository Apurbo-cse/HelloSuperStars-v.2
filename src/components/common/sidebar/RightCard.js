import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context.js/ThemeContext";

const RightCard = (props) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <>
      <div className={`post mb-3 p-1 ${isDarkMode ? null : "dark-post"} `}>
        <span className={`px-2 ${isDarkMode ? null : "post-info"}`}>
          {props.header}
        </span>
        <div className="d-flex align-items-center justify-content-between m-2 right-tag-scroll">
          <Link to={props.urlSlug} className="col-5 right-tag">
            <img src={props.img} alt="" />
          </Link>
          <Link to={props.urlSlug} className="col-5 right-tag">
            <img src={props.img} alt="" />
          </Link>

          <Link
            to={props.urlLink}
            className={`col-1  right-tag btn-h bd-shadow ${
              isDarkMode ? null : "btn-h-dark"
            } `}
          >
            <i class=" fa-solid fa-circle-plus"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default RightCard;
