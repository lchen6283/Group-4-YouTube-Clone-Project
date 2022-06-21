import SideButton from "./SideButton";

const SideBar = ({ buttons, navigate }) => {
  return (
    <div className="sidebar">
      <h2>Topics</h2>
      {buttons.map((button) => {
        return (
          <SideButton key={button} buttonName={button} navigate={navigate} />
        );
      })}
    </div>
  );
};
export default SideBar;
