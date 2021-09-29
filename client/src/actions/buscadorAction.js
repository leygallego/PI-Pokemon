
import axios from 'axios';


export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';


export const fetchPokemonRequest = ()=>{
    return {
        type: FETCH_POKEMON_REQUEST
    }
}

export const fetchPokemonSuccess = (Pokemon) => {
    return {
        type: FETCH_POKEMON_SUCCESS,
        payload: Pokemon
    }
}

export const fetchPokemonFailure = (error) => {
    return {
        type: FETCH_POKEMON_FAILURE,
        payload: error
    }
}

 const fetchPokemon = (name) => {
    return (dispatch) => {
        dispatch(fetchPokemonRequest());
        axios.get(`http://localhost:3001/pokemons/searchName?name=${name}`)
        .then(response => {
            dispatch(fetchPokemonSuccess([response.data]));
        })
        .catch(error => {
            dispatch(fetchPokemonFailure("No se encontró el pokemón"))
        })

    }
}

export default fetchPokemon