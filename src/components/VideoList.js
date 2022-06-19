import { Link } from "react-router-dom";
import VideoThumbnail from "./VideoThumbnail";
import "./VideoList.css";

/**
 * Displays collection of searched videos
 * @param {Array} videos
 * @returns <div> containing video thumbnail and link
 */
const VideoList = ({ videos }) => {
  return (
    <div className="container">
      {videos.map((video) => {
        const { id, snippet, etag } = video;
        const { title } = snippet;
        return (
          <div key={etag}>
            <Link to={`./videos/${id.videoId}`}>
              <VideoThumbnail video={video} />
              <p className="title">{title}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default VideoList;
