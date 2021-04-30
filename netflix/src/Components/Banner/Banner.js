import { useState } from "react";
import movielogo from "../../IMG/matrixlogo.png";
import "../../Styles/style.css";
import ReactPlayer from "react-player/youtube";
import InfoOutlined from "@material-ui/icons/InfoOutlined";
import ReplayOutlinedIcon from '@material-ui/icons/ReplayOutlined';
import SentimentVerySatisfiedTwoToneIcon from '@material-ui/icons/SentimentVerySatisfiedTwoTone';
import BannerPlayer from "./Banner_player";

const Banner = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="banner">
     {active ? (<div className="player-wrapper">
        <ReactPlayer playing={true} className="react-player" url="https://www.youtube.com/watch?v=PkhXLgu-mYM" width="100%" height="100%" />
        <button onClick={() => setActive(!active)} className="player__button">
          x
            </button>
      </div>) : (
        <>
          <BannerPlayer />
          <div className="banner__contents">
            <img src={movielogo} alt="movielogo" className="BannerLogo" />
            <p>
              When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he
              discovers the shocking truth--the life he knows is the elaborate deception of an evil
              cyber-intelligence.
        </p>
            <div className="banner__buttons">
              <button onClick={() => setActive(true)}>
                Play
          </button>
              <button className="dark">
                <InfoOutlined className="IconBanner" />
            More info
          </button>
            </div>
          </div>
          <div className="banner__extra">
            <ReplayOutlinedIcon className="banner__replay" />
            <div className="banner__age_bg">  
              <SentimentVerySatisfiedTwoToneIcon className="banner__age_icon" />
            </div>
          </div>
        </>
      )}
       
</div>
);
};

export default Banner;


