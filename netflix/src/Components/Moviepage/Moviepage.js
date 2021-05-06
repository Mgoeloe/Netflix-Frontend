import React from 'react';
import "../../Styles/style.css";

import Axios from '../Axios/Axios';

const Moviepage = () => {
    return (
        <div>
            <Axios genre='90'/>
            <Axios genre='80'/>
            <Axios genre=''/>
        </div>
    );
}

export default Moviepage
