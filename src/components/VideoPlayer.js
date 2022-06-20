import YouTube from "react-youtube";
import React from "react";
import { useParams } from "react-router-dom";
import CommentSection from "./CommentSection";

/**
 * Displays Youtube player for a given video
 * @param {Object} video
 * @returns <div> containing a Youtube player
 */

const retrieveVideoInfo = (id) => {
  fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${process.env.REACT_APP_API_KEY}`
  )
    .then((response) => response.json())
    .then((json) => {
      return json.items;
    })
    .catch((err) => {
      this.props.navigate("./404");
    });
};

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
