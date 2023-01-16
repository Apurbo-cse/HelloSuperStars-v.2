import React from "react";

import ButtonCard from "../../common/ButtonCard";
import imagePath from "../../constants/imagePath";
import { useTheme } from "../../context.js/ThemeContext";

const StarProfile = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <>
      <div className="col-md-12 details mt-3  px-0 pb-3 rounded-3 ">
        <img
          src={imagePath.cover}
          alt=""
          className="m-0 p-0 pb-2 cover-img img-fluid "
        />

        <div className="d-flex justify-content-between aling-items-center">
          <div className="d-flex align-items-center star-profile">
            <div className="bg-light p-1 pp-b">
              <img src={imagePath.user} alt="" className="profile-img" />
            </div>
            <div className="my-3 mx-3  star-left">
              <h4 className="m-0 p-0">Shakib Al Hasan</h4>
              <p className="m-0 p-0">
                <small>@shakibalhasan75</small>
              </p>
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

export default StarProfile;
