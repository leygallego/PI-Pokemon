import axios from 'axios';

export const GET_POKEMONES = 'GET_POKEMONES';
export const GET_POKEMONES_BY_ID = 'GET_POKEMONES_BY_ID';
export const QUIT_POKEMONES_BY_ID = 'QUIT_POKEMONES_BY_ID';
export const CREATE_POKEMON = 'CREATE_POKEMON';
export const GET_ALL_TYPES = 'GET_ALL_TYPES';
export const GET_PK_BY_NAME = 'GET_PK_BY_NAME';
export const CREAR_NUEVO_TIPO = 'CREAR_NUEVO_TIPO';
export const SORT_POKEMONES = 'SORT_POKEMONES';
export const ADD_FILTERED_POKEMON = 'ADD_FILTERED_POKEMON';
export const SET_FILTERS = 'SET_FILTERS';

//Para botón de búsqueda
// export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';
// export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
// export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';




export const getPokemones = (payload) => {
    return async dispatch => {
        return  await axios.get("http://localhost:3001/pokemons", payload)
        .then(response => dispatch({
            type: GET_POKEMONES,
            payload: response.data
        }))
    }
}


export const getPokemonesById = (id) => {
    return function (dispatch) {
        axios.get(`http://localhost:3001/pokemons/one/${id}`)
        .then(response => dispatch(
            {
                type: GET_POKEMONES_BY_ID,
                payload: response.data
            }
        ))
    }

}


export function quitPokemonesById(){
    return {
                type: QUIT_POKEMONES_BY_ID, 
                payload:{}
             }    
}

export function createPokemon(payload){
    return async (dispatch)=>{
        dispatch({
            type: CREATE_POKEMON,
        });
        await axios.post('http://localhost:3001/pokemons/add', payload)
        .then((response)=>{
            console.log("registrado correctamente");
            console.log(response);
        })
    }

}

export function getAllTypes(payload) {
    return async dispatch => {
        return  await axios.get("http://localhost:3001/types", payload)
        .then(response => dispatch({
            type: GET_ALL_TYPES,
            payload: response.data
        }))
    }
}

export function getPkByName(name) {
    return async dispatch => {
        return await axios.get(`http://localhost:3001/pokemons/searchName?name=${name}`)
        .then(response => dispatch({
            type: GET_PK_BY_NAME,
            payload: response.data
        }))
    }
    
}

export const crearNuevoTipo = (payload) => {
    return (dispatch) => {
        axios.post("http://localhost:3001/types/add", payload)
        .then(response => {
            response = dispatch({
                type: CREAR_NUEVO_TIPO,
                payload: payload
            })
        })
    }
}

export function sortPokemones(order){
    return {
        type: SORT_POKEMONES,
        payload: order
    }
}

export const addFilteredPokemon = (filteredPokemon) => {
    return {
        type: ADD_FILTERED_POKEMON,
        payload: filteredPokemon
    }
}

export const setFilters = (payload) => {
    return {
        type: SET_FILTERS,
        payload: payload
    }
}

// export const fetchPokemonRequest = ()=>{
//     return {
//         type: FETCH_POKEMON_REQUEST
//     }
// }

// export const fetchPokemonSuccess = (Pokemon) => {
//     return {
//         type: FETCH_POKEMON_SUCCESS,
//         payload: Pokemon
//     }
// }

// export const fetchPokemonFailure = (error) => {
//     return {
//         type: FETCH_POKEMON_FAILURE,
//         payload: error
//     }
// }

//  const fetchPokemon = (name) => {
//     return (dispatch) => {
//         dispatch(fetchPokemonRequest());
//         axios.get(`http://localhost:3001/pokemons/searchName?name=${name}`)
//         .then(response => {
//             dispatch(fetchPokemonSuccess([response.data]));
//         })
//         .catch(error => {
//             dispatch(fetchPokemonFailure("No se encontró el pokemón"))
//         })

//     }
// }

// export default fetchPokemon