import axios from 'axios';

export const GET_POKEMONES = 'GET_POKEMONES';


export const getPokemones = (payload) => {
    return async dispatch => {
        return  await axios.get("http://localhost:3001/pokemons", payload)
        .then(response => dispatch({
            type: GET_POKEMONES,
            payload: response.data
        }))
    }
}
