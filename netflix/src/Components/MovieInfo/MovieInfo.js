import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../Styles/style.css";
import Axios from '../Axios/Axios';
import MovieInfoPlayer from './MovieInfo_player';


const MovieInfo = () => {
    const [movieInfo, setMovieInfo] = useState(null);
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


    return (
        <div className='movieInfo'>
          <div className='movieInfo_content'>
          <MovieInfoPlayer />
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
    )
}

export default MovieInfo;
