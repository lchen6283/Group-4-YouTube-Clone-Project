import "./SideButton.css";

const handleClick = (event) => {
  event.preventDefault();
  alert(`Feature Coming Soon! Check out our Trending Page in the meantime.`);
};

/**
 * Class component Search Bar
 * @params {string} - buttonName
 * @params {func} - navigate
 * @returns div containing clickable paragraph tags that navigate to respective paths
 */
const SideButton = ({ buttonName, navigate }) => {
  const navigateToTrending = () => {
    navigate("./youtube");
  };

  return (
    <div>
      {buttonName === "Trending" ? (
        <p className="side-button" onClick={navigateToTrending}>
          {buttonName}
        </p>
      ) : (
        <p className="side-button" onClick={handleClick}>
          {buttonName}
        </p>
      )}
    </div>
  );
};

export default SideButton;
