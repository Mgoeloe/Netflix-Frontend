// import './App.css';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner'; 
import MovieInfo from '../MovieInfo/MovieInfo'
// import Banner_player from "../Banner/Banner_player";

const Homepage = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Banner />
            {/* <Banner_player /> */}
            {/* <MovieInfo /> */}
            <Footer />
        </div>
    )
}

export default Homepage

