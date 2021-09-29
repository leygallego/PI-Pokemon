import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import fetchPokemon from '../actions/buscadorAction';
import { useSelector } from 'react-redux';
import  './Busqueda.css'


function Busqueda() {
    const dispatch = useDispatch();
    const buscador = useSelector((state) => state.pokemon)
    console.log("nueva prueba", buscador);

    let imagenPkApi;
    let imagenPkBd;
    try {
        imagenPkApi = buscador.map(e => {
        return e[0].sprites.front_default
    })
        
    } catch (error) {
         imagenPkBd = buscador.map(e => {
            return  e[0].image
        }) 
    }

   
   
    // console.log("Esta es la prueba",nombrePkBd);

    
    const [pokemonName, setPokemonName] = useState('')
    
    const handleOnChange = (e) => {
        setPokemonName(e.target.value)
    }
    const handleOnClick = ()=>{
        dispatch(fetchPokemon(pokemonName))
    }


    return (
        <div className="main-busqueda">
            <label htmlFor="buscar_pokemon" className="busqueda-label">Buscar Pokemon</label>
            <input 
            type="text" 
            className="busqueda-input" 
            id="buscar_pokemon" 
            value={pokemonName}
            onChange={handleOnChange}
             />
            <button className="busqueda-button" onClick={handleOnClick} >Enviar</button>

                {/* prueba de resultados */}

                <div className="main-resultado">
            <h3 className="resultado-titulo">Resultado</h3>
            { buscador.loading &&  <div className="resultado-warning">Buscando...</div>}

            { buscador.length >= 1 && <div className="resultado-mostrado">
                <img className="busqueda-imagen" src={imagenPkBd ? imagenPkBd : imagenPkApi} alt={buscador[0].name} />
                <span>{buscador[0].name}</span>
            </div>}
                { buscador.error !== '' && <span className="resultado-error">{buscador.error}</span>}

        </div>
    
        </div>

    )
}

export default Busqueda