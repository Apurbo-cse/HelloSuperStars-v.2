import React from "react";
import imagePath from "../../constants/imagePath";
import { useTheme } from "../../context.js/ThemeContext";

const StarRight = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <>
      <div
        className={`row justify-content-between post pt-3 px-2 ${
          isDarkMode ? null : "dark-post"
        } `}
      >
        <div className="col-6 mb-3 right-icon">
          <img src={imagePath.liveChat} alt="" className="img-fluid" />
        </div>
      </div>
    </>
  );
};

export default StarRight;
