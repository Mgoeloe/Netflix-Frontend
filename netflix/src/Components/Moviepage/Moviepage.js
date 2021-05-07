import React from 'react';
import "../../Styles/style.css";

import Axios from '../Axios/Axios';

const Moviepage = () => {
    return (
        <div>
            <Axios genre='genre/35' title='Comedy'/>
            <Axios genre='genre/28' title='Action'/>
            <Axios genre='genre/53' title='Thriller'/>
            <Axios genre='genre/10751' title='Family'/>
            <Axios genre='genre/14' title='Fantasy'/>
            <Axios genre='genre/80' title='Crime'/>
            <Axios genre='genre/12' title='Adventure'/>



            {/* <Axios genre='discover/90'/>
            <Axios genre='discover/80'/>
            <Axios genre='disney'/> */}
        </div>
    );
}

export default Moviepage
