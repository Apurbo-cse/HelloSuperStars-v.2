import PostCard from "../components/common/post/PostCard";
import { Post } from "../json/DummyData";

const IndexPage = () => {
  return (
    <>
      {/* {loader ? (
        <h3 className="text-light">kjsdfhsd </h3>
      ) : ( */}
      <>
        {Post.map((data) => (
          <PostCard key={data.id} data={data} />
        ))}
      </>
      {/* )} */}
    </>
  );
};

export default IndexPage;
