import React from "react";
import "./VideoThumbnail.css";

//TODO: Currently a Class Component for testing purposes, may change back to Functional Component later (Please don't change yet!)
/**
 * Displays a single video's thumbnail image
 * @param {Object} video
 * @returns <div> containing a video's thumbnail
 */
class VideoThumbnail extends React.Component {
  constructor() {
    super();
    this.state = {
      currentVideo: {},
    };
  }

  //This Method is currently in testing (Please don't delete!)
  someMethod = ({ video }) => [
    this.setState({
      currentVideo: video,
    }),
  ];

  render() {
    const { video } = this.props;
    const { id, snippet } = video;
    const { thumbnails } = snippet;
    return (
      <div>
        <img src={thumbnails.high.url} alt={id.videoId} />
      </div>
    );
  }
}

// const Video = ({ video }) => {
//   const { id, snippet, etag } = video;
//   const { thumbnails, title } = snippet;
//   return (
//     <div>
//       {/* <YouTube className="video" videoId={id} /> */}
//       <img src={thumbnails.high.url} alt={id.videoId} />
//     </div>
//   );
// };

export default VideoThumbnail;
