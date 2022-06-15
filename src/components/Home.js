import VideoList from "./VideoList";
import SearchBar from "./SearchBar";
import "./Home.css";

const Home = ({ videos }) => {
  return (
    <div>
      {/* <p>Home Page</p> */}
      <SearchBar />
      <section className="thumbnails">
        <VideoList videos={videos} />
      </section>
    </div>
  );
};
export default Home;
