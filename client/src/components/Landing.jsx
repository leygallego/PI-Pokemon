import React from 'react'
import { NavLink } from 'react-router-dom';

function Landing() {
    return (
        <div>
            <NavLink exact to={"/home"}>
            <button>
                <h1>
                    Ingresa al extraño mundo pokemón
                </h1>
            </button>
            </NavLink>
            
        </div>
    )
}

export default Landing
