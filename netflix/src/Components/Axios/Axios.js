import React, { useState, useEffect } from 'react';
import axios from 'axios';

import "../../Styles/style.css";



const Axios = ({genre, title}) => {
    const randomMovie = ~~(1000 * Math.random());

    // const apiKey = '43adde1f22cb5d9f3d7d5852fa42e5e6';
    // const apiURL = `https://api.themoviedb.org/3/movie/${randomMovie}?api_key=${apiKey}`;

    const [movies, setMovies] = useState([]);

    const DISCOVER_REST_API_URL = `http://localhost:8080/api/movies/${genre}`;


    useEffect(() => {
        const fetchData = (async () => {
            const response = await axios.get(DISCOVER_REST_API_URL);
    
            setMovies(response.data.results);
    
            // console.log(response.data.backdrop_path);
            console.log(movies);
            console.log(response.data);
    
            // const movieImage = response.data.backdrop_path;
    
        })()


    }, [])
    


    return (
        <div className='movieContainer'>
           <h2>{title}</h2>
            <div className='movies' >
               
                {movies.map((movie, index) => (
                    <div className='movie' key={index}>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Axios
