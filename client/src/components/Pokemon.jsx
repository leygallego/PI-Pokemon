import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemones } from '../actions';
import './Pokemon.css';


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
                // console.log(e);
                return(
                    <div key={i}>
                        <h3>{e.name}</h3>
                        <img src={e.image} alt={`imagen ${e.name}`} />
                    </div>
                )
            })}
        </div>
    )
}

export default Pokemon
