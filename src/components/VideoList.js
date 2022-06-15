import Video from "./Video.js";
import "./VideoList.css";

const VideoList = ({ videos }) => {
  return (
    <div className="container">
      {videos.map((video) => {
        return <Video video={video} key={video.etag} />;
      })}
    </div>
  );
};

export default VideoList;
