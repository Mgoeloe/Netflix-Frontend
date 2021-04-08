import React from 'react';
import './Nav.css';

import Logo from '../../IMG/netflix-82871.png';
import Avatar from '../../IMG/netflix-avatar.png';

import SearchIcon from '@material-ui/icons/Search';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Navbar = () => {
    return (
        <div>
            <div className='Navbar' >
                <img src={Logo} alt='logo' />
                <a href=' ' >Home </a>
                <a href=' ' >TV Shows </a>
                <a href=' ' >Movies </a>
                <a href=' ' >News & Popular</a>
                <a href=' ' >My List </a>

                <div className='NavExtra'>
                    <a href=' ' ><SearchIcon /></a>
                    <a href=' ' >Kids </a>
                    <a href=' ' >DVD </a>
                    <a href=' ' ><CardGiftcardIcon /></a>
                    <a href=' ' ><NotificationsIcon /></a>
                    <a href=' ' ><img src={Avatar} alt='Avatar' /></a>
                    <a href=' ' id='Triangle'> &#9660;</a>
                </div>

            </div>
        </div>
    )
}

export default Navbar
