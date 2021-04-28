import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../Styles/style.css";
import Axios from '../Axios/Axios';

const MovieInfo = () => {
    const [movieInfo, setMovieInfo] = useState([]);
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
        <div className= 'movieInfo'>
            <p>{}</p>
        </div>
    )
}

export default MovieInfo
