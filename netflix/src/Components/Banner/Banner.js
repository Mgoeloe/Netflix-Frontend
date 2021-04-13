import React, { useState } from "react";
import matrix from "../../IMG/matrix.jpg";
import movielogo from "../../IMG/matrixlogo.png";
import "../../Styles/style.css";
import PlayArrow from "@material-ui/icons/PlayArrow";
import InfoOutlined from "@material-ui/icons/InfoOutlined";

const Banner = () => {
  const [state, setState] = useState(false);
  let url = "";
  let urlInfo = "";

  return (
    <div className="banner">
      <div className="banner__contents">
      <img src={movielogo} alt="movielogo" className="BannerLogo" />
      <h1>Watch Matrix 4</h1>
      <p>When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.</p>
      <div className="banner__buttons">
        <button className="banner__button">
          <PlayArrow className="IconBanner" />Play</button>
        <button className="banner__button dark">
          <InfoOutlined className="IconBanner" />More info</button>
      </div>
      </div>
    </div>
  );
};

export default Banner;
