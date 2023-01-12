import React from "react";
import { Link } from "react-router-dom";
import imagePath from "../../constants/imagePath";
import { useTheme } from "../../context.js/ThemeContext";

const LeftCard = (props) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <>
      <Link
        to={props.urllink}
        className={` d-flex align-items-center Link  m-2 p-1 ${
          isDarkMode ? "left-side bd-shadow " : "left-side-dark"
        } `}
      >
        <div>
          <img src={props.icon} alt="" className="left-icon p-2" />
        </div>
        <div>
          <h6 className="p-0 m-0">{props.title}</h6>

          <small
            className={`left-font-sub ${
              isDarkMode ? "left-sub-text" : "gold-color"
            } `}
          >
            {props.count}
            {props.title === "Category" ? (
              <>&nbsp;Selected</>
            ) : props.title === "Following" ? (
              <>&nbsp;Superstars</>
            ) : props.title === "Fan Group" ? (
              <>&nbsp;Group</>
            ) : props.title === "Packages" ? (
              <>&nbsp;Star</>
            ) : props.title === "Enroll Auditions" ? (
              <>&nbsp;Enroll</>
            ) : props.title === "Activities" ? (
              <>&nbsp;Activities</>
            ) : null}
          </small>
        </div>
      </Link>
    </>
  );
};

export default LeftCard;
