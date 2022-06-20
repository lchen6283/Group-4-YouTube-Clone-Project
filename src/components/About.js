import About from "./About.css";
import "./About.css";
import CommentSection from "./CommentSection";
import Emalee from "../DevPics/Emalee.png";
import Candace from "../DevPics/Candace.png";
import Lawrence from "../DevPics/Lawrence.png";
/**
 * About section component, includes our Dev team info
 * @returns <div> containing dev info, images, and project summary
 */

const About = () => {
  return (
    <div>
      <h3>Engineered By:</h3>
      {/* <h6>Emalee Soto,<br></br> Candace Garvin, <br></br>and Lawrence Chan</h6> */}
      <div className="card">
        <h4>Emalee Soto</h4>
        <img src={Emalee} alt="Emalee Soto" />
        <a
          href="https://github.com/EmaleeSoto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Emalee's GitHub
        </a>
        <p>Hi! I'm a junior Web Developer.</p>
      </div>
      <div className="card">
        <h4>Candace Garvin</h4>
        <img src={Candace} alt="Candace Garvin" />
        <a
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
        <a
          href="https://github.com/lchen6283"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lawrence's GitHub
        </a>
        <p>Hi! I'm a junior Web Developer.</p>
      </div>
      <h3>About Us:</h3>
      <p>
        We are currently Jr. Software Engineers at Pursuit located in Queens,
        NY. The purpose of this app is create our rendition of the world famous
        YouTube application. Together we have compiled our tech as well as
        creative skills to create an app where a user can search for a video by
        title or content and be met with thousands of video that meet their
        search. We hope we have done it justice. Thanks for stopping by.{" "}
      </p>
    </div>
  );
};
export default About;
