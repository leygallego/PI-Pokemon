import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemones } from '../actions';
import './Pokemon.css';
import { NavLink } from 'react-router-dom';



function Pokemon() {
const selector = useSelector(state =>{
    return state.pokemones;
})
const dispatch = useDispatch();

useEffect(()=>{
    dispatch(getPokemones())
}, [dispatch])

    return (
        <div className="main-card">
            {selector.map((e, i)=>{
                //  console.log(e);
                return(
                    <div key={i}>
                        <NavLink exact to={`/detalle/${e.id}`}>
                            <img src={e.image} alt={`imagen ${e.name}`} />
                        </NavLink>
                        <h2>Nombre: {e.name}</h2>
                        {/* <h3>Tipo: {e.types}</h3> */}
                        
                    </div>
                )
            })}
        </div>
    )
}

export default Pokemon
