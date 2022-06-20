import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import CommentSection from "./CommentSection";

/**
 * Displays Youtube player for a given video
 * @param {Object} video
 * @returns <div> containing a Youtube player
 */
const VideoPlayer = ({ video }) => {
  const { id } = useParams();

  return (
    <div>
      <YouTube className="video" videoId={id} />
      <CommentSection />
    </div>
  );
};

export default VideoPlayer;

// constructor() {
//     super();
//     this.state = {};
//   }
//   //   const { id } = useParams();
//   //const { video } = useState();
//   //   const { snippet } = video;

//   // ({ video, someMethod })
//   //   someMethod(video.id.videoId);

//   render() {
//     const
//     return (
//       <div>
//         <YouTube className="video" videoId={id} />
//         {/* <p>{video.snippet.description}</p> */}
//       </div>
//     );
//   }
// }
