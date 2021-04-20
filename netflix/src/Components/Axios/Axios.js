import React, {useState} from 'react';
import axios from 'axios';


const Axios = () => {
    const randomMovie = ~~(1000*Math.random());

    const apiKey = '43adde1f22cb5d9f3d7d5852fa42e5e6';
    const apiURL = `https://api.themoviedb.org/3/movie/${randomMovie}?api_key=${apiKey}`;

    const [movieInfo, setMovieInfo] = useState();
    


    const fetchData = (async () => {
        const response = await axios.get(apiURL);

        setMovieInfo(response.data);

        console.log(response.data.backdrop_path);
        // console.log(movieInfo);

        const movieImage = response.data.backdrop_path;

    })()

    return (
        <div>
            <p>test</p>
            <button onClick={fetchData}>fetch</button>
            {movieInfo && (
                <img src={`https://image.tmdb.org/t/p/w500/${movieInfo.backdrop_path}`} alt='Backdrop' />
            )}
        </div>
    )
}

export default Axios
