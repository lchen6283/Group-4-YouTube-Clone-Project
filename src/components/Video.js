import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import "./Video.css";

const Video = ({ video }) => {
  const { id } = useParams();
  return (
    <div>
      <YouTube className="video" videoId={id} />
    </div>
  );
};

export default Video;
