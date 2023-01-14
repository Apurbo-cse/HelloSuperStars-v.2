import React from "react";
import imagePath from "../../constants/imagePath";
import { useTheme } from "../../context.js/ThemeContext";

const Profile = () => {
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
            <img src={imagePath.cover} alt="" className="cover-img img-fluid" />
            <div className="d-flex align-items-center">
              <img src={imagePath.user} alt="" className="profile-img" />
              <div className="my-3 mx-3"></div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Profile;
