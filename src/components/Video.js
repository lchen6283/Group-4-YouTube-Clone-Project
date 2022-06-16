import YouTube from "react-youtube";
import "./Video.css";

const Video = ({ video }) => {
  const { id } = video;
  //const { thumbnails } = snippet;
  // return <img src={thumbnails.high.url} alt={id.videoid} />;
  return <YouTube className="video" videoId={id.videoId} />;
};

export default Video;
