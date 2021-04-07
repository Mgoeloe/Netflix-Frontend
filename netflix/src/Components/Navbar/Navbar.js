import React from 'react';
import './Nav.css';
import Logo from '../../IMG/netflix-82871.png';
import SearchIcon from '@material-ui/icons/Search';

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
                    <a href=' ' >? </a>
                    <a href=' ' >? </a>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar
