import { Link } from "react-router-dom";
import "./VideoList.css";

const VideoList = ({ videos }) => {
  return (
    <div className="container">
      {videos.map((video) => {
        const { id, snippet } = video;
        const { thumbnails, title } = snippet;
        return (
          <div>
            <Link to={`./videos/${video.id.videoId}`}>
              <img src={thumbnails.high.url} alt={id.videoId} />
            </Link>
            <p>{title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default VideoList;
