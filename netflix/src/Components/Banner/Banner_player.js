import React from 'react';
import ReactPlayer from 'react-player';
import "../../Styles/style.css";

const Banner_player = () => {
    return (
        <div className="player-wrapper">
           <ReactPlayer
           url="https://www.youtube.com/watch?v=PkhXLgu-mYM&t=7s"
           className='react-player'
           playing={true}
           muted
           width='100%'
           height='100%'
           /> 
        </div>
    )
};

export default Banner_player
