import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "../../Styles/style.css";
import moviebg from "../../IMG/matrix.jpg";

const delay = 3;

const MovieInfoPlayer = () => {
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
    <div className="movieInfo_player">
           <ReactPlayer
        url="https://www.youtube.com/watch?v=PkhXLgu-mYM&t=7s"
        className="movieReact-player"
        autoPlay
        playing={true}
        muted
        width="100%"
        height="100%"
      />
    </div>
  ) : (
    <div className="movieInfo-wrapimg">
    <img src={moviebg} alt="moviebg" />
 </div>
  );
};

export default MovieInfoPlayer;
