import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../Styles/style.css";
import Axios from "../Axios/Axios";

const MovieInfo = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const movieID = "603";
  const MOVIEINFO_REST_API_URL = `http://localhost:8080/api/movies/${movieID}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(MOVIEINFO_REST_API_URL);
      setMovieInfo(response.data);
    };
    fetchData();
  }, []);

  //    console.log(movieInfo);

  if (movieInfo === null) {
    return <p>loading</p>;
  } else {
    return (
      <div className="movieInfo">
        {movieInfo.genres.map((gen, index) => {
          return <p key={index}>{gen.name}</p>;
        })}
        {/* {console.log(movieInfo)} */}
        {/* {console.log(movieInfo.genres.name)} */}

        {/* {console.log(movieInfo.genres[1].name)} */}
        {/* <p>{movieInfo.genres[1].name}</p> */}
        {/* <p>{movieInfo}</p> */}
        {/* <p>{movieInfo.overview}</p>
            <p>Cast: </p>

            <p>Genres: {movieInfo.tagline}</p>

            {console.log(movieInfo.genres)} */}
      </div>
    );
  }
};

export default MovieInfo;
