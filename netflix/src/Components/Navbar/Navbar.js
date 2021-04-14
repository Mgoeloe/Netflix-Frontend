import React, { useState, useEffect } from 'react';
import '../../Styles/style.css';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Moviepage from '../Moviepage/Moviepage';
import Homepage from '../Homepage/Homepage';

import Logo from "../../IMG/netflix-82871.png";
import Avatar from "../../IMG/netflix-avatar.png";

import SearchIcon from "@material-ui/icons/Search";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import NotificationsIcon from "@material-ui/icons/Notifications";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    const changeNavColor = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 40) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavColor);

    return (
        <div>
            <div className={navbar ? 'Navbar Active' : 'Navbar'} >
                <Router>
                    <img src={Logo} alt='logo' />
                    <Link to='/'>Home</Link>
                    {/* <a href=' ' >Home </a> */}
                    {/* <a href=' ' >TV Shows </a> */}
                    <Link to='/Moviepage'>Movies</Link>
                    {/* <a href=' ' >News & Popular</a> */}
                    {/* <a href=' ' >My List </a> */}

                    {/* <Switch>
                        <Route path="/Homepage">
                            <Homepage />
                        </Route>
                        <Route path="/Moviepage">
                            <Moviepage />
                        </Route>
                    </Switch> */}

                </Router>


                <div className="NavExtra">
                    <a href=" ">
                        <SearchIcon />
                    </a>
                    <a href=" ">Kids </a>
                    <a href=" ">DVD </a>
                    <a href=" ">
                        <CardGiftcardIcon />
                    </a>
                    <a href=" ">
                        <NotificationsIcon />
                    </a>
                    <a href=" ">
                        <img src={Avatar} alt="Avatar" />
                    </a>
                    <a href=" " id="Triangle">
                        {" "} &#9660;
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
