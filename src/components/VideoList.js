import Video from "./Video.js";

const VideoList = ({ videos }) => {
  const { items } = videos;
  return (
    <div>
      {items.map((video) => {
        return <Video video={video} />;
      })}
    </div>
  );
};

export default VideoList;
