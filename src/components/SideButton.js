import "./SideButton.css";

const handleClick = (event) => {
  event.preventDefault();
  alert(`Feature Coming Soon!`);
};

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
