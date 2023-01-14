import React from "react";
import RightCard from "../../common/sidebar/RightCard";
import imagePath from "../../constants/imagePath";
const RightSidebar = () => {
  return (
    <>
      {/* Live Now */}
      <RightCard
        header={"Live Now"}
        img={imagePath.post}
        urlLink={`/live-now`}
        urlSlug={`/live-now/slug`}
      />

      {/* Live Chat */}
      <RightCard
        header={"Live Chat"}
        img={imagePath.post}
        urlLink={`/live-chat`}
        urlSlug={`/live-chat/slug`}
      />

      {/* Learning Session */}
      <RightCard
        header={"Learning Session"}
        img={imagePath.post}
        urlLink={`/learning-session`}
        urlSlug={`/learning-session/slug`}
      />

      {/* Meetup */}
      <RightCard
        header={"Meetup"}
        img={imagePath.post}
        urlLink={`/meet-up`}
        urlSlug={`/meet-up/slug`}
      />

      {/* Question & Answer */}
      <RightCard
        header={"Question & Answer"}
        img={imagePath.post}
        urlLink={`/qna`}
        urlSlug={`/qna/slug`}
      />
    </>
  );
};

export default RightSidebar;
