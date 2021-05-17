import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner'; 
import Axios from '../Axios/Axios';
// import Banner_player from "../Banner/Banner_player";

const Homepage = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Banner />
            {/* <Banner_player /> */}
            {/* <MovieInfo /> */}
            <Axios genre='discover/80' title="80's "/>
            <Axios genre='discover/90' title="90's "/>
            <Axios genre='discover/00' title="00's "/>
            <Axios genre='disney' title='Disney'/>
            {/* <Axios genre='will-smith' title='Will Smith'/> */}
            <Axios genre='tom-cruise' title='Tom cruise'/>

            <Footer />
        </div>
    )
}

export default Homepage

