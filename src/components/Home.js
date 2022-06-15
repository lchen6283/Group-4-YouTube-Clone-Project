import VideoList from "./VideoList";

const Home = ({ videos }) => {
  return (
    <div>
      <p>Home Page</p>
      <VideoList videos={videos} />
    </div>
  );
};
export default Home;
