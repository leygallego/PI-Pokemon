import { NavLink } from 'react-router-dom';
import './NavBar.css';
import Search from './Search';


import React from 'react'

function NavBar() {
    return (
        <div className="main-navbar">
                <NavLink exact to="/home">Home</NavLink>
                <Search />  
                <NavLink exact to="/crear">Crear Pokemon </NavLink>



        </div>
    )
}

export default NavBar
