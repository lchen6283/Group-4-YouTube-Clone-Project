import SideButton from "./SideButton";

/**
 * Creates a side bar that generates a button for an array of topics
 * @params {array} - buttons
 * @params {func} - navigate
 * @returns Sidebar
 */
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
