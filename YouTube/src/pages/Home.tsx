import  { useState, useEffect } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { Link } from "react-router";
import { useVideoData } from "../hooks/useVideosData";

const Home = () => {
  const [page, setPage] = useState(1);
  const { data, isPending, error, isError } = useVideoData(page);

  

useEffect(()=>{
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
},[page])


  if (isPending) {
    return <h1 className="text-5xl flex justify-center mt-[350px]">Loading</h1>;
  }

  if (isError) {
    return <h1 className="text-5xl flex justify-center mt-[350px]">{error}</h1>;
  }

  console.log(data.data.data.length);

  return (
    <div>
      <Navbar />

      {data.data.data.map.length == 0 ? (
        <div>
        <h1 className="w-[100px] text-5xl">No more video</h1>
        </div>
        
      ) : (
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
      )}
      <div className="flex justify-center gap-[30px]">
        <button
          disabled={page == 1}
          className="bg-slate-200 w-[50px] h-[40px] mb-[20px] rounded-[50%] disabled:opacity-50"
          onClick={()=>setPage((c)=>c-1)}
        >
          prev
        </button>
        <button
          disabled={page == 1}
          className="bg-slate-200 mt-[4px] w-[30px] h-[30px] mb-[20px] rounded-[50%] disabled:opacity-50"
          onClick={()=>setPage(1)}
        >
          1
        </button>
        <button
          disabled={page == 2}
          className="bg-slate-200 mt-[4px] w-[30px] h-[30px] mb-[20px] rounded-[50%] disabled:opacity-50"
          onClick={()=>setPage(2)}
        >
          2
        </button>
        <button
          disabled={page == 3}
          className="bg-slate-200 mt-[4px] w-[30px] h-[30px] mb-[20px] rounded-[50%] disabled:opacity-50"
          onClick={()=>setPage(3)}
        >
          3
        </button>
        <button
          disabled={data.data.data.length == 0}
          className="bg-slate-200 w-[50px] h-[40px] mb-[20px] rounded-[50%] disabled:opacity-50"
          onClick={()=>setPage((c)=>c+1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
