import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../Styles/style.css";
import Axios from '../Axios/Axios';
import MovieInfoPlayer from './MovieInfo_player';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDownAltRounded';
import PlayArrow from "@material-ui/icons/PlayArrow";
import AddRoundedIcon from '@material-ui/icons/AddRounded';

const lists = [
  { id: 1, icon: <AddRoundedIcon/>},
  { id: 2, icon: <ThumbUpIcon />},
  { id: 3, icon: <ThumbDown/>}
];

const MovieInfo = () => {
    // const [toggleState, setToggleState] = useState(null);
    const [movieInfo, setMovieInfo] = useState(null);
    const [selected, setSelected] = useState(0);
    const [addButton, setAddbutton] = useState(null);

    
    // const clickAddButton = () => {
    //   setAddButton(!addButton);
    // }

    const handleColor = (row) => {
      setSelected(row.id);
    };

    const movieID = '603';
    const MOVIEINFO_REST_API_URL = `http://localhost:8080/api/movies/${movieID}`;

    useEffect(() => {
        const fetchData = (async () => {
            const response = await axios.get(MOVIEINFO_REST_API_URL);

            setMovieInfo(response.data);

            // console.log(response.data.backdrop_path);
            console.log(movieInfo);
            console.log(response.data);

            // const movieImage = response.data.backdrop_path;

        })()


    }, [])

  
    document.querySelectorAll('.personal_button').forEach(function (obj) {
      obj.addEventListener('mousedown', function () {
          this.style.backgroundColor = "white";
          this.style.color = "black";
      })
      obj.addEventListener('mouseup', function () {
          this.style.backgroundColor = "black";
          this.style.color = "white";

      })

  });

    // const toggle = () => {
    //   setToggleState(!toggleState);
    // }


    return (
      <div className='movieInfoBg'>
        <div className='movieInfo'>
          <div className='movieInfo_content'>
             
          <MovieInfoPlayer />
          <div className='personal'>
          <button className="personal_play">
            <PlayArrow />
            Play
          </button>
          {lists.map((list) => (
          <span
          key={list.id}
          className='personal_button'
          onClick={() => handleColor(list)}
          style={{ backgroundColor: list.id === selected ? "#ff000080" : "black" }}>
            {list.icon}
            {/* <AddRoundedIcon /> */}
            </span>
             ))}
          </div>
            {movieInfo && (
                <div className='info_box'>
                    <div className='info'>
                    <p><span className='green'>New</span> 2021</p>
                    <p>{movieInfo.overview}</p>
                    </div>
                    <div className='extra'>
                    <p><span>Cast:</span> {movieInfo.title}</p>
                    <p><span>Genres:</span> {movieInfo.genres[0].name}, {movieInfo.genres[1].name}</p>
                    {console.log(movieInfo.genres)}
                        </div>
                    </div>
            )}       
        </div>
      </div>
      </div>
    )
}

export default MovieInfo;
