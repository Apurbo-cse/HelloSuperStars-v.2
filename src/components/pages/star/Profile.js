import React from "react";

import ButtonCard from "../../common/ButtonCard";
import imagePath from "../../constants/imagePath";
import { useTheme } from "../../context.js/ThemeContext";

const Profile = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <>
      <div
        className={`col-md-12 details mt-3 mb-4  p-0 
            ${isDarkMode ? "bd-shadow" : "dark-shadow"} 
            
            `}
      >
        <img src={imagePath.cover} alt="" className="cover-img img-fluid" />

        <div className="d-flex justify-content-between aling-items-center">
          <div className="d-flex align-items-center star-profile">
            <div className="">
              <img src={imagePath.user} alt="" className="profile-img" />
            </div>
            <div className="my-3 mx-3  star-left">
              <h4>Shakib Al Hasan</h4>
              <small>Star | Cricket</small>
            </div>
          </div>

          <div className=" d-flex align-items-center right-star-side">
            <ButtonCard name="All Post" urlLink={`all-post`} />
            <ButtonCard name="Photos" urlLink={`photos`} />
            <ButtonCard name="Videos" urlLink={`videos`} />
            <ButtonCard name="Fan Group" urlLink={`fan-group`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
