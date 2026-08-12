import React from "react";
import { useVideo } from "../hooks/useVideo";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { Link } from "react-router";

const Home = () => {
  const { data, isPending, error, isError } = useVideo();
  if (isPending) {
    return <h1 className="text-5xl flex justify-center mt-[350px]">Loading</h1>;
  }

  if (isError) {
    return <h1 className="text-5xl flex justify-center mt-[350px]">{error}</h1>;
  }

  return (
    <div>
      <Navbar/>
      <ul>
        <div className="m-[30px] flex gap-[30px] flex-wrap">
        {data.data.data.map((video) => (
          <Link to={`/${video.id}`}>
          <Card
            title={video.title}
            thumbnailKey={`https://test-dev-sena.s3.ap-south-1.amazonaws.com/${video.thumbnailKey}`}
            owner={video.owner.channelName}
            viewCount={video.viewCount}
          />
         </Link>
        ))}
         </div>
      </ul>
    </div>
  );
};

export default Home;
