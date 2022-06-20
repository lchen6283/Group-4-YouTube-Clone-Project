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
    <div className="about">
      <h3>About Project:</h3>
      <p>
        We are currently Jr. Software Engineers at Pursuit located in Queens,
        NY. The purpose of this app is create our rendition of the world famous
        YouTube application. Together we have compiled our tech as well as
        creative skills to create an app where a user can search for a video by
        title or content and be met with thousands of video that meet their
        search. We hope we have done it justice. Thanks for stopping by.{" "}
      </p>
      <hr />
      <div className="card">
        <div className="col-1">
          <h4>Emalee Soto - 8.3</h4>
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
        </div>
        <div className="col-2">
          <p>Hi! I'm a junior Web Developer.</p>
        </div>
      </div>
      <div className="card">
        <div className="col-1">
          <h4>Candace Garvin - 8.3</h4>
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
        </div>
        <div className="col-2">
          <p className="bioText">
            I am currently a Jr. Full Stack Software Developer. I am pursuing
            this field of work because I have a profound love for computers and
            their language. Some of my strengths are leadership and project
            management and I am an expert at time management. The next step I
            would like to take in my career is working for a big tech company so
            I can gain experience as well as work with other developers in the
            industry.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="col-1">
          <h4> Lawrence Chen - 8.3</h4>
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
        </div>
        <div className="col-2">
          <p className="bioText">
            I am an aspiring software engineer and full stack web developer
            currently attending Pursuit, an intensive 12 - month software
            engineering fellowship with a 9% acceptance rate. I am pursuing
            software engineering because I have always had a passion for
            technology. As a creative, I wish to explore the vast array of
            opportunities with this field. When I'm not on a computer, you can
            find me in front of the television as I am a big fan of Marvel, DC,
            and enjoy watching shows or reading manga. Once I obtain the
            knowledge and skills necessary to succeed as a developer, I want to
            build a career at companies that are shifting the world.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
