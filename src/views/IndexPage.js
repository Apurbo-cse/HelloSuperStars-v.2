import axios from "axios";
import React, { useEffect, useState } from "react";
import PostCard from "../components/common/post/PostCard";

const IndexPage = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  // const fetchData = () => {
  //   axios.get(`https://jsonplaceholder.typicode.com/photos`)
  //   .then((res) => {
  //     if (res.data) {
  //       setData([res.data]);
  //     }
  //     setLoader(false);
  //     console.log('data==============', res.data)
  //   });
  // };

  const fetchData = () => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    setLoader(false);
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      {loader ? (
        <h3 className="text-light">kjsdfhsd </h3>
      ) : (
        <>
          {data.map((u) => (
            <PostCard key={u.id} data={u} />
          ))}
        </>
      )}
    </>
  );
};

export default IndexPage;
