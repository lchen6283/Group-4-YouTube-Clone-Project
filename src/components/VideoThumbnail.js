import React from "react";
import "./VideoThumbnail.css";

/**
 * Displays a single video's thumbnail image
 * @param {Object} video
 * @returns Thumbnail
 */
const VideoThumbnail = ({ video }) => {
  const { id, snippet } = video;
  const { thumbnails } = snippet;
  return (
    <div>
      <img className="videos" src={thumbnails.high.url} alt={id.videoId} />
    </div>
  );
};

export default VideoThumbnail;
