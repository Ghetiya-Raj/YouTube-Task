import { useEffect, useState } from "react";
import {  useParams } from "react-router";
import { useVideo } from "../hooks/useVideo";
import Navbar from "../components/Navbar";
import Suggestion from "../components/Suggestion";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { useLike } from "../hooks/useLike";
import ReactPlayer from "react-player";
// import { removeLike } from "../data/query";
import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlaybackRateButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaFullscreenButton,
} from "media-chrome/react";



const Video = () => {
  const [pipMode, setPipMode] = useState(false);
 const [type,setType] = useState("");
  const { id } = useParams();
  const { data, isPending, isError, error } = useVideo(id);
  

  const likeMutation = useLike(id,type);

  function handlelike(id:void,typep:string){
    setType(typep)
    likeMutation.mutate(id ,typep);
  }
  

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key.toLowerCase() === "i") {
        setPipMode((pipMode) => !pipMode);
      }  
    });
  }, []);

  if (isPending) {
    return (
      <h1 className="text-5xl flex justify-center mt-[350px]">Loading...</h1>
    );
  }

  if (isError) {
    return (
      <h1>{error instanceof Error ? error.message : "Something went wrong"}</h1>
    );
  }

  let video = data.data.data.videoKey;

  return (
    <div>
      <Navbar />
      <div className="ml-[10px] flex">
        <div className="">
          <MediaController
            className="rounded-2xl"
            style={{
              width: "100%",
              aspectRatio: "16/9",
            }}
          >
            <ReactPlayer
              className="rounded-2xl"
              slot="media"
              src={`https://test-dev-sena.s3.ap-south-1.amazonaws.com/${video}`}
              controls={false}
              pip={pipMode}
              style={{
                width: "100%",
                height: "100%",
              }}
            ></ReactPlayer>
            <MediaControlBar>
              <MediaPlayButton />
              <MediaSeekBackwardButton seekOffset={10} />
              <MediaSeekForwardButton seekOffset={10} />
              <MediaTimeRange />
              <MediaTimeDisplay showDuration />
              <MediaMuteButton />
              <MediaVolumeRange />
              <MediaPlaybackRateButton />
              <MediaFullscreenButton />
            </MediaControlBar>
          </MediaController>
          <div className="ml-[13px] mt-[10px] flex justify-between w-[1100px]">
            <div>
              <h1 className="font-bold text-[30px]">{data.data.data.title}</h1>
            </div>
          </div>
          <div className="ml-[13px] w-[1100px] flex justify-between">
            <div>
              <h1 className="text-gray-700 text-[20px]">
                {data.data.data.description}
              </h1>
            </div>
            <div className="flex gap-[20px] mt-[5px] mr-[10px]">
              <div>
              <BiSolidLike className="w-[40px] h-[30px]" color={(type == "LIKE") ? "blue" : ""} onClick={()=>handlelike(id || '',"LIKE")}/>
                <p>{data.data.data.likeCount}</p>
              </div>
              <div>
              <BiSolidDislike className="w-[40px] h-[30px]" color={(type == "DISLIKE") ? "blue" : ""} onClick={()=>handlelike(id || '',"DISLIKE")}/>
              <p>{data.data.data.dislikeCount}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-[10px] w-[370px]">
          <div className="">
            <Suggestion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
