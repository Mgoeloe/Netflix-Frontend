import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "../../Styles/style.css";
import moviebg from "../../IMG/matrix.jpg";
import { StepConnector } from "@material-ui/core";

const delay = 3;

const BannerPlayer = () => {
  const [show, setShow] = useState(false);

  useEffect(
    () => {
      let timer1 = setTimeout(() => setShow(true), delay * 1000);
      return () => {
        clearTimeout(timer1);
      };
    },
    // useEffect will run only one time with empty []
    // if you pass a value to array,
    // like this = [data]
    // than clearTimeout will run every time
    // this value changes (useEffect re-run)
    []
  );

  return show ? (
    <div className="player-wrapper">
           <ReactPlayer
        url="https://www.youtube.com/watch?v=PkhXLgu-mYM&t=7s"
        className="react-player"
        autoPlay
        playing={true}
        muted
        width="100%"
        height="100%"
      />
    </div>
  ) : (
    <div>
       <img src={moviebg} alt="moviebg" className="bg" />
    </div>
  );
};

export default BannerPlayer;
