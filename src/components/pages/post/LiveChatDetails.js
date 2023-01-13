import React from "react";
import DetailsCard from "../../common/details/DetailsCard";
import imagePath from "../../constants/imagePath";

const LiveChatDetails = () => {
  return (
    <>
      <DetailsCard
        banner={imagePath.post}
        title={"Live Chat with Shakib Al Hasan"}
        description={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci, ipsum, sed consequatur voluptatum et quam non aut suscipit optio voluptate provident blanditiis doloribus eveniet? Similique, aperiam labore veritatis debitis asperiores commodi exercitationem natus, atque sapiente sint placeat dicta deserunt."
        }
        instruction={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci, ipsum, sed consequatur voluptatum et quam non aut suscipit optio voluptate provident blanditiis doloribus eveniet? Similique, aperiam labore veritatis debitis asperiores commodi exercitationem natus, atque sapiente sint placeat dicta deserunt."
        }
      />
    </>
  );
};

export default LiveChatDetails;
