import axios from "axios";
import React, { useEffect, useState } from "react";
import PostCard from "../common/post/PostCard";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const url = "https://jsonplaceholder.typicode.com/photos";

    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      {/* {data.map((item) => (
        <PostCard data={item} />
      ))} */}

      <PostCard />
    </>
  );
};

export default Home;
