import axios from 'axios';

export const GET_POKEMONES = 'GET_POKEMONES';
export const GET_POKEMONES_BY_ID = 'GET_POKEMONES_BY_ID';
export const QUIT_POKEMONES_BY_ID = 'QUIT_POKEMONES_BY_ID';
export const CREATE_POKEMON = 'CREATE_POKEMON';


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