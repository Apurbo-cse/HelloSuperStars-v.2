import React from "react";
import { NavLink } from "react-router-dom";

import imagePath from "../../constants/imagePath";
import { useTheme } from "../../context.js/ThemeContext";

const PostCard = (props) => {
  const { data } = props;

  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <>
      <div className={`post pb-3 mb-3 ${isDarkMode ? null : "dark-post"} `}>
        <div className="post_top">
          <div className="img-name">
            <div>
              <img src={imagePath.post} alt="" />
            </div>
            <div>
              <NavLink
                to={`/star/1`}
                className={` ${isDarkMode ? "user-name" : "user-name-dark"} `}
              >
                Apurbo Roy
              </NavLink>{" "}
              <br />
              <small className={`time ${isDarkMode ? "timeX" : "gold-color"} `}>
                1st January 2023.
              </small>
            </div>
            {/* time */}
          </div>
          <div className="menu">
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>

        <h6 className="fw-bold px-3 " style={{ fontSize: "13px" }}>
          Live Chat with Shakib Al Hasan
        </h6>

        <p className={`description px-3 ${isDarkMode ? null : "dark-color"} `}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          adipisci, ipsum, sed consequatur voluptatum et quam non aut suscipit
          optio voluptate provident blanditiis doloribus eveniet? Similique,
          aperiam labore veritatis debitis asperiores commodi exercitationem
          natus, atque sapiente sint placeat dicta deserunt.
        </p>

        <img src={imagePath.post} />

        {/* View React */}
        <div className="love-share px-3 pb-1 pt-2">
          <div className="love">
            <img src={imagePath.heart} />
            &nbsp;<span>You, Srabon and 25K</span>
          </div>
          <div className="share">
            <span>500 Shares</span>
          </div>
        </div>
        {/* View React */}

        <div className="d-flex justify-content-center">
          <div
            className={`col-10 sub-love-share px-3 py-1 mt-1 ${
              isDarkMode ? "shareX" : "bg-react dark-color"
            }`}
          >
            <div className="love-sub">
              <span className="love-react p-0 m-0">
                {" "}
                <i class="fa-regular fa-heart"></i> love
              </span>
            </div>
            <div>
              <span className="love-react p-0 m-0">
                <i class="fa-solid fa-share"></i> Share
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={`post pb-3 mb-3 ${isDarkMode ? null : "dark-post"} `}>
        <div className="post_top">
          <div className="img-name">
            <div>
              <img src={imagePath.post} alt="" />
            </div>
            <div>
              <p className="user-name">Apurbo Roy</p>
              <small className={`time ${isDarkMode ? "timeX" : "gold-color"} `}>
                1st January 2023.
              </small>
            </div>
            {/* time */}
          </div>
          <div className="menu">
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>

        <h6 className="fw-bold px-3 " style={{ fontSize: "13px" }}>
          Live Chat with Shakib Al Hasan
        </h6>

        <p className={`description px-3 ${isDarkMode ? null : "dark-color"} `}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          adipisci, ipsum, sed consequatur voluptatum et quam non aut suscipit
          optio voluptate provident blanditiis doloribus eveniet? Similique,
          aperiam labore veritatis debitis asperiores commodi exercitationem
          natus, atque sapiente sint placeat dicta deserunt.
        </p>

        <img src={imagePath.post} />

        {/* View React */}
        <div className="love-share px-3 pb-1 pt-2">
          <div className="love">
            <img src={imagePath.heart} />
            &nbsp;<span>You, Srabon and 25K</span>
          </div>
          <div className="share">
            <span>500 Shares</span>
          </div>
        </div>
        {/* View React */}

        <div className="d-flex justify-content-center">
          <div
            className={`col-10 sub-love-share px-3 py-1 mt-1 ${
              isDarkMode ? "shareX" : "bg-react dark-color"
            }`}
          >
            <div className="love-sub">
              <span className="love-react p-0 m-0">
                {" "}
                <i class="fa-regular fa-heart"></i> love
              </span>
            </div>
            <div>
              <span className="love-react p-0 m-0">
                <i class="fa-solid fa-share"></i> Share
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
