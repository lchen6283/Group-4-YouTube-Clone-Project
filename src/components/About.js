import About from "./About.css";

const AboutMeSection = () => {
  return (
    <>
      <div>
        <h4>Engineered By:</h4>
        {/* <h6>Emalee Soto,<br></br> Candace Garvin, <br></br>and Lawrence Chan</h6> */}
        <div id="card">
          <h6>Emalee Soto</h6>
          <img />
        <h6>Candace Garvin</h6>
        <img />
        <h6> Lawrence Chan</h6>
        <img />
         <h4>About Us:</h4>
        </div>
        <p>
          We are currently Jr. Software Engineers at Pursuit located in Queens,
          NY. The purpose of this app is create our rendition of the world
          famous YouTube application. Together we have compiled our tech as well
          as creative skills to create an app where a user can search for a
          video by title or content and be met with thousands of video that meet
          their search. We hope we have done it justice. Thanks for stopping by.{" "}
        </p>
      </div>
    </>
  );
};
export default AboutMeSection;
