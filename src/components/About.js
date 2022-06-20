import "./About.css";
import Emalee from "../DevPics/Emalee.png";
import Candace from "../DevPics/Candace.png";
import Lawrence from "../DevPics/Lawrence.png";

/**
 * About section component, includes our Dev team info
 * @returns <div> containing dev info, images, and project summary
 */

const About = () => {
  return (
    <div className="about">
      <h3>About Us:</h3>
      <p>
        We are currently Jr. Software Engineers at Pursuit located in Queens,
        NY. The purpose of this app is create our rendition of the world famous
        YouTube application. Together we have compiled our tech as well as
        creative skills to create an app where a user can search for a video by
        title or content and be met with thousands of video that meet their
        search. We hope we have done it justice. Thanks for stopping by.{" "}
      </p>
      <h3>Engineered By:</h3>
      <div className="bioSections">
        {/* <h6>Emalee Soto,<br></br> Candace Garvin, <br></br>and Lawrence Chan</h6> */}
        <div className="card">
          <h4>Emalee Soto</h4>
          <img src={Emalee} alt="Emalee Soto" />
          <br />
          <a
            className="git"
            href="https://github.com/EmaleeSoto"
            target="_blank"
            rel="noopener noreferrer"
          >
            Emalee's GitHub
          </a>
          <p className="bioText">
            Hi! I'm a junior Web Developer. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div className="card">
          <h4>Candace Garvin</h4>
          <img src={Candace} alt="Candace Garvin" />
          <br />
          <a
            className="git"
            href="https://github.com/CandaceNia"
            target="_blank"
            rel="noopener noreferrer"
          >
            Candace's GitHub
          </a>
          <p>Hi! I'm a junior Web Developer.</p>
        </div>
        <div className="card">
          <h4> Lawrence Chan</h4>
          <img src={Lawrence} alt="Lawrence Chen" />
          <br />
          <a
            className="git"
            href="https://github.com/lchen6283"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lawrence's GitHub
          </a>
          <p>Hi! I'm a junior Web Developer.</p>
        </div>
      </div>
    </div>
  );
};
export default About;
