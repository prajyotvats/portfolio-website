import "./intro.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProfilePic from "../../assets/intro.png";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Web Developer", "Freelancer", "Web Designer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={ProfilePic} alt="here is my profille ing" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm </h2>
          <h1>Prajyot Bhalerao</h1>
          <h3>
            I'm a <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <ExpandMoreIcon className="icon" />
        </a>
      </div>
    </div>
  );
}
