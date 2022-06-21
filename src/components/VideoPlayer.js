import YouTube from "react-youtube";
import React from "react";
import { useParams } from "react-router-dom";
import CommentSection from "./CommentSection";
import SideBar from "./SideBar";
import "./VideoPlayer.css";

/**
 * Displays Youtube player for a given video
 * @param {Object} video
 * @returns Sidebar and youtube player with a comment section
 */
const VideoPlayer = ({ navigate, buttons }) => {
  const { id } = useParams();

  return (
    <div>
      <div className="sidebar-container">
        <SideBar className="topics" buttons={buttons} navigate={navigate} />
      </div>
      <div className="videoCommentPage">
        <YouTube className="video" videoId={id} />
        <CommentSection />
      </div>
    </div>
  );
};

export default VideoPlayer;
