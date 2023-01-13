import React from "react";
import imagePath from "../../constants/imagePath";
import { useTheme } from "../../context.js/ThemeContext";

const DetailsCard = () => {
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
            <img src={imagePath.post} alt="" className="img-fluid" />
            <div className="my-3 mx-3">
              <h4 className="fw-bold">Live Chat with Shakib Al Hasan</h4>

              <p
                className={`description  ${isDarkMode ? null : "dark-color"} `}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                adipisci, ipsum, sed consequatur voluptatum et quam non aut
                suscipit optio voluptate provident blanditiis doloribus eveniet?
                Similique, aperiam labore veritatis debitis asperiores commodi
                exercitationem natus, atque sapiente sint placeat dicta
                deserunt.
              </p>

              <h6 className={` fs-5  ${isDarkMode ? "unl" : "unld"}`}>
                Instruction
              </h6>

              <p
                className={`description  ${isDarkMode ? null : "dark-color"} `}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                adipisci, ipsum, sed consequatur voluptatum et quam non aut
                suscipit optio voluptate provident blanditiis doloribus eveniet?
                Similique, aperiam labore veritatis debitis asperiores commodi
                exercitationem natus, atque sapiente sint placeat dicta
                deserunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsCard;
