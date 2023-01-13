import React from "react";

import { useTheme } from "../../context.js/ThemeContext";

const DetailsCard = (props) => {
  // const {data} =props;
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <>
      <div className="container">
        <div className="row  d-flex justify-content-between">
          <div
            className={`col-md-12 details my-3  p-0 
            ${isDarkMode ? "bd-shadow" : "dark-shadow"} 
            
            `}
          >
            <img src={props.banner} alt="" className="img-fluid" />
            <div className="my-3 mx-3">
              <h4 className={`fw-bold ${isDarkMode ? null : "post-info"}`}>
                {props.title}
              </h4>

              <p
                className={`description  ${isDarkMode ? null : "dark-color"} `}
              >
                {props.description}
              </p>

              {props.instruction === null ? null : (
                <h6
                  className={` fs-5   ${isDarkMode ? "unl" : "unld post-info"}`}
                >
                  Instruction
                </h6>
              )}

              <p
                className={`description  ${isDarkMode ? null : "dark-color"} `}
              >
                {props.instruction}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsCard;
