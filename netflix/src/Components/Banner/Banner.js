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
    <div className="BannerPicture">
      <img src={matrix} alt="bg" className="BannerBg" />
      <img src={movielogo} alt="movielogo" className="BannerLogo" />
      <h1>Watch Matrix 4</h1>
      <div className="BtnBannerWrap">
        <button onClick={url}>
          <PlayArrow />
          Play
        </button>
        <button onClick={urlInfo} className="BtnInfo">
          <InfoOutlined />
          More info
        </button>
      </div>
    </div>
  );
};

export default Banner;
