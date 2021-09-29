import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import fetchPokemon from '../actions/buscadorAction';
import { useSelector } from 'react-redux';


function Busqueda() {
    const dispatch = useDispatch();
    const buscador = useSelector((state) => state.pokemon)
    console.log(buscador);
    let imagenPkBd = buscador.map(e => {
        return e[0].image
    })
    let nombrePkBd = buscador.map(e => {
        return e[0].name
    })
    // console.log("Esta es la prueba",prueba);
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
                <img src={imagenPkBd} alt={buscador[0].name} />
                <span>{nombrePkBd}</span>
            </div>}
                { buscador.error !== '' && <span className="resultado-error">{buscador.error}</span>}

        </div>
    
        </div>

    )
}

export default Busqueda
