import { useSearchVideo } from "../hooks/useSearchVideo";
import {  useParams } from "react-router";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { Link } from "react-router";

const Display = () => {
  const { search } = useParams();
  const { data, isPending, isError, error } = useSearchVideo(search || '');
  // const { pathname } = useLocation();
  // const temp = pathname.slice(6);
  console.log(data?.data.data.length);

  if (isPending) {
    return <h1 className="text-5xl flex justify-center mt-[350px]">Loading</h1>;
  }

  if (isError) {
    return <h1 className="text-5xl flex justify-center mt-[350px]">{error}</h1>;
  }

  if (data?.data.data.length == 0) {
    return (
      <div>
        <Navbar/>
        <h1 className="text-5xl flex justify-center mt-[300px]">Nothing Found</h1>
      </div>
    );
  }

  // if (data.data.data.length == 0) {
  //   return (
  //     <div>
  //       <Navbar/>
  //       <h1 className="text-5xl flex justify-center mt-[300px]">
  //         Nothing Found
  //       </h1>
  //     </div>
  //   );
  // }

  return (
    <div>
      <Navbar />
      <ul>
        <div className="m-[30px] flex gap-[30px] flex-wrap">
          {data.data.data.map((video) => (
            <Link to={`/${video.id}`} key={video.id}>
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

export default Display;
