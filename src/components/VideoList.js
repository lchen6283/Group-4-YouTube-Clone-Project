import { Link } from "react-router-dom";
import VideoThumbnail from "./VideoThumbnail";
import "./VideoList.css";

/**
 * Displays collection of searched videos
 * @param {Array} videos
 * @returns <div> containing video thumbnail and link
 */
const VideoList = ({ videos, passedFrom }) => {
  return (
    <div className="container">
      {videos.map((video) => {
        const { id, snippet, etag } = video;
        const { title } = snippet;
        if (passedFrom === "trending") {
          return (
            <Link to={`./videos/${id}`}>
              <VideoThumbnail video={video} />
              <p2 className="title">{title}</p2>
            </Link>
          );
        }
        return (
          <div key={etag}>
            <Link to={`./videos/${id.videoId}`}>
              <VideoThumbnail video={video} />
              <p2>{title}</p2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default VideoList;
