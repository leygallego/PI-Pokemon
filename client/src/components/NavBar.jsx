import { NavLink } from 'react-router-dom';
import './NavBar.css';


import React from 'react'

function NavBar() {
    return (
        <div className="main-navbar">
                <NavLink exact to="/home">Home</NavLink>
                {/* <NavLink exact to="/detalle">Detalle Pokemon</NavLink> */}
                <NavLink exact to="/crear">Crear Pokemon </NavLink>



        </div>
    )
}

export default NavBar
