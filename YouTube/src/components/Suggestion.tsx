import { useVideoData } from "../hooks/useVideosData";
import Card from "./Card";

const Suggestion = () => {
  const { data, isPending, error, isError } = useVideoData();

  if (isPending) {
    return (
      <h1 className="text-5xl flex justify-center mt-[350px]">Loading...</h1>
    );
  }

  if (isError) {
    return (
      <h1 className="text-5xl flex justify-center mt-[350px]">
        {error instanceof Error ? error.message : "Something went wrong"}
      </h1>
    );
  }

  return (
    <ul>
      <div className="flex flex-wrap max-h-[750px] overflow-scroll">
        {data.data.data.map((video: any) => (
          <a href={`/${video.id}`} key={video.id}>
            <Card
              title={video.title}
              thumbnailKey={`https://test-dev-sena.s3.ap-south-1.amazonaws.com/${video.thumbnailKey}`}
              owner={video.owner.channelName}
              viewCount={video.viewCount}
            />
          </a>
        ))}
      </div>
    </ul>
  );
};

export default Suggestion;
