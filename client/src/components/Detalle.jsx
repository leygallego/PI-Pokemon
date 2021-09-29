import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { getPokemonesById, quitPokemonesById } from '../actions';


function Detalle() {
    let { id } = useParams();

    const dispatch = useDispatch();
    const pokedetalle = useSelector(store=>{
        // console.log("Tienda", store.pokemon);
       return store.pokemon
    });

    useEffect(()=>{
        dispatch(getPokemonesById(id))
        return ()=>{dispatch(quitPokemonesById())}
    },[dispatch, id])


    return (
        
        <div>
            {
            pokedetalle.name?
                <div>
                    <br />
                    <h1>Detalle de {pokedetalle.name}</h1>
                    <img src={pokedetalle.image} alt={`imagen de ${pokedetalle.name}`} />
                    <p>Nombre: {pokedetalle.name}</p>
                    <p>Vida: {pokedetalle.hp}</p> 
                    <p>Fuerza: {pokedetalle.strenght}</p>
                    <p>Defensa: {pokedetalle.defense}</p>
                    <p>Velocidad: {pokedetalle.speed}</p>
                    <p>Peso: {pokedetalle.weight}</p>
                    <p>Altura: {pokedetalle.height}</p>
                    <div> {typeof pokedetalle.types === "object" ? <div>Tipo: {pokedetalle.types.map((e, index)=>{
                                                                                    return <h3 key={index}>{e.name}</h3>
                                                                                })}</div> : <h3>Tipo: {pokedetalle.types}</h3>}</div>

                    

                </div> 
                : "Cargando..."   
        }
        </div>
    )
}

export default Detalle

                                                    