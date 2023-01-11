import React from "react";
import imagePath from "../../constants/imagePath";
import { useTheme } from "../../context.js/ThemeContext";

const LeftSidebar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <>
      <div className={`post mb-3 p-1 ${isDarkMode ? null : "dark-post"} `}>
        <div
          className={` d-flex align-items-center  m-2 ${
            isDarkMode ? "left-side bd-shadow " : "left-side-dark"
          } `}
        >
          <div>
            <img src={imagePath.category} alt="" className="left-icon p-2" />
          </div>
          <div>
            <h6 className="p-0 m-0">Category</h6>
            <small
              className={`left-font-sub ${
                isDarkMode ? "left-sub-text" : "gold-color"
              } `}
            >
              5 Selected
            </small>
          </div>
        </div>

        <div
          className={` d-flex align-items-center  m-2 ${
            isDarkMode ? "left-side bd-shadow " : "left-side-dark"
          } `}
        >
          <div>
            <img src={imagePath.following} alt="" className="left-icon p-2" />
          </div>
          <div>
            <h6 className="p-0 m-0">Following</h6>
            <small
              className={`left-font-sub ${
                isDarkMode ? "left-sub-text" : "gold-color"
              } `}
            >
              4 Superstars
            </small>
          </div>
        </div>

        <div
          className={` d-flex align-items-center  m-2 ${
            isDarkMode ? "left-side bd-shadow " : "left-side-dark"
          } `}
        >
          <div>
            <img src={imagePath.fangroup} alt="" className="left-icon p-2" />
          </div>
          <div>
            <h6 className="p-0 m-0">Fan Group</h6>
            <small
              className={`left-font-sub ${
                isDarkMode ? "left-sub-text" : "gold-color"
              } `}
            >
              00 Group
            </small>
          </div>
        </div>

        <div
          className={` d-flex align-items-center  m-2 ${
            isDarkMode ? "left-side bd-shadow " : "left-side-dark"
          } `}
        >
          <div>
            <img src={imagePath.package} alt="" className="left-icon p-2" />
          </div>
          <div>
            <h6 className="p-0 m-0">Packages</h6>
            <small
              className={`left-font-sub ${
                isDarkMode ? "left-sub-text" : "gold-color"
              } `}
            >
              00 Star
            </small>
          </div>
        </div>

        <div
          className={` d-flex align-items-center  m-2 ${
            isDarkMode ? "left-side bd-shadow " : "left-side-dark"
          } `}
        >
          <div>
            <img src={imagePath.enroll} alt="" className="left-icon p-2" />
          </div>
          <div>
            <h6 className="p-0 m-0">Enroll Auditions</h6>
            <small
              className={`left-font-sub ${
                isDarkMode ? "left-sub-text" : "gold-color"
              } `}
            >
              10 activities
            </small>
          </div>
        </div>

        <div
          className={` d-flex align-items-center  m-2 ${
            isDarkMode ? "left-side bd-shadow " : "left-side-dark"
          } `}
        >
          <div>
            <img src={imagePath.activities} alt="" className="left-icon p-2" />
          </div>
          <div>
            <h6 className="p-0 m-0">Activities</h6>
            <small
              className={`left-font-sub ${
                isDarkMode ? "left-sub-text" : "gold-color"
              } `}
            >
              10 activities
            </small>
          </div>
        </div>

        <div
          className={` d-flex align-items-center  m-2 ${
            isDarkMode ? "left-side bd-shadow " : "left-side-dark"
          } `}
        >
          <div>
            <img src={imagePath.setting} alt="" className="left-icon p-2" />
          </div>
          <div>
            <h6 className="p-0 m-0">Settings</h6>
            {/* <small className={`left-font-sub ${isDarkMode ? "left-sub-text" : "gold-color"} `}>
              10 activities
            </small> */}
          </div>
        </div>

        <div
          className={` d-flex align-items-center  m-2 ${
            isDarkMode ? "left-side bd-shadow " : "left-side-dark"
          } `}
        >
          <div>
            <img src={imagePath.setting} alt="" className="left-icon p-2" />
          </div>
          <div>
            <h6 className="p-0 m-0">Terms & Policy</h6>
            {/* <small className={`left-font-sub ${isDarkMode ? "left-sub-text" : "gold-color"} `}>
              10 activities
            </small> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
