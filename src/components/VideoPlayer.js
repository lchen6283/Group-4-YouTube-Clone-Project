import YouTube from "react-youtube";
import React from "react";
import { useParams } from "react-router-dom";
import CommentSection from "./CommentSection";
import SideBar from "./SideBar";

/**
 * Displays Youtube player for a given video
 * @param {Object} video
 * @returns <div> containing a Youtube player
 */

async function fetchVideoInfo(id, array) {
  await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${process.env.REACT_APP_API_KEY}`
  )
    .then((response) => response.json())
    .then((json) => {
      return json.items;
    })
    .catch(() => {
      this.props.navigate("./404");
    });
}

const VideoPlayer = ({ navigate, buttons }) => {
  const { id } = useParams();

  let videoInfo = [];
  videoInfo = fetchVideoInfo(id, videoInfo);
  console.log(videoInfo);

  return (
    <div>
      <div className="sidebar-container">
        <SideBar className="topics" buttons={buttons} navigate={navigate} />
      </div>
      <YouTube className="video" videoId={id} />
      <CommentSection />
      {/* {videoInfo[0].snippet.description} */}
    </div>
  );
};

export default VideoPlayer;
