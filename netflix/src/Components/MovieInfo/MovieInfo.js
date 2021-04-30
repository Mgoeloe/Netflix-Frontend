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
                <div>
                    <p>{movieInfo.overview}</p>

                    <p>Cast: {movieInfo.title}</p>

                    <p>Genres: {movieInfo.genres[1].name}</p>

                    {console.log(movieInfo.genres)}

                    {/* <button className="dark" onClick={toggle}>
                	<InfoOutlined className="IconBanner" />
                    More info
                    </button> */}

                </div>
            )}

        </div>
      </div>
    )
}

export default MovieInfo;
