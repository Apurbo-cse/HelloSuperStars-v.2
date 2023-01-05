import React from "react";
import { Link } from "react-router-dom";
import imagePath from "../../constants/imagePath";

const Navigation = () => {
  return (
    <>
      {/* Desktop View */}
      <nav className="px-3 shadow desktop sticky-top ">
        <div className="left">
          <div className="logo">
            <img src={imagePath.logo} />
          </div>

          <div className="search_bar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search ..." />
          </div>
        </div>

        <div className="right">
          <Link className="icon me-2 fa-solid fa-house"></Link>
          <Link className="icon me-2 fa-solid fa-tv"></Link>
          <Link className="icon me-2 fa-brands fa-facebook-messenger"></Link>
          <Link className="icon me-2 fa-solid fa-bell"></Link>
          <Link className="icon me-2 fa-solid fa-store"></Link>
          <img src={imagePath.user} />
        </div>
      </nav>
      {/* Desktop View End */}

      {/* Momible View */}
      <nav className="mobile  shadow py-2 sticky-top px-2">
        <div className="logo">
          <img src={imagePath.logo} />
        </div>
        <div className="message">
          <Link className="icon me-2 fa-solid fa-magnifying-glass"></Link>
          <Link className="icon me-2 fa-brands fa-facebook-messenger"></Link>
        </div>
      </nav>

      {/* Momible View End*/}
    </>
  );
};

export default Navigation;
