import React from "react";
import imagePath from "../../constants/imagePath";

const myPost = () => {
  return (
    <>
      <div className="my_post">
        <div className="post_top">
          <img src={imagePath.user} />
          <input type="text" placeholder="What's on you mind, Apurbo?" />
        </div>

        <hr />

        <div className="post_bottom">
          <div className="post_icon">
            <i className="fa-solid fa-video red"></i>
            <p>Live video</p>
          </div>

          <div className="post_icon">
            <i className="fa-solid fa-images green"></i>
            <p>Photo/video</p>
          </div>

          <div className="post_icon">
            <i className="fa-regular fa-face-grin yellow"></i>
            <p>Feeling/activity</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default myPost;
