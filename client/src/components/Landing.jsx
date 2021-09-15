import React from 'react'
import { NavLink } from 'react-router-dom';
import './Landing.css'

function Landing() {
    return (
        <div className="main-landing">
            <NavLink exact to={"/home"}>
                <div className="main-button">
                <button className="myButton">
               
            </button>
                </div>
            
            </NavLink>
            
        </div>
    )
}

export default Landing
