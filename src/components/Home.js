import React from "react";
import VideoList from "./VideoList";
import SearchBar from "./SearchBar";
import "./Home.css";

const Home = ({ videos, searchForVideo }) => {
  return (
    <div>
      {/* <p>Home Page</p> */}
      <SearchBar searchForVideo={searchForVideo} />
      <section className="thumbnails">
        <VideoList videos={videos} />
      </section>
    </div>
  );
};
export default Home;
