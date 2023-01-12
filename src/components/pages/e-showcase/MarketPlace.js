import React from "react";
import imagePath from "../../constants/imagePath";
import { useTheme } from "../../context.js/ThemeContext";
const Marketplace = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <>
      <div
        className={`post roduct mb-3 d-flex justify-content-between align-items-center p-1 ${
          isDarkMode ? null : "dark-post"
        } `}
      >
        <div className="col-lg-5 product ">
          <img src={imagePath.product} alt="" />
        </div>

        <div className="col-lg-7 description">
          <h5 className="px-3  title">Smart Watch</h5>
          {/* {`px-3 pb-0${isDarkMode ? null : "dark-color"} `} */}
          <p className={`px-3 pb-0 ${isDarkMode ? null : "dark-color"} `}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            reiciendis!
          </p>
          <h6 className="px-3 pt-0 price fw-bold"> Price : 80$</h6>

          <div className="product-star px-3">
            <div className="star-pro  px-2 py-1">
              <div className="me-2">
                <img src={imagePath.user} alt="" />
              </div>
              <div>
                <p>Shakib Al Hsasn</p>
                <small>Star</small>
              </div>
            </div>
          </div>
          <div className="px-3 product-btn">
            <button className="btn btn-outline-warning w-100">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketplace;
