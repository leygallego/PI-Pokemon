import { CREATE_POKEMON, GET_ALL_TYPES, GET_POKEMONES, GET_POKEMONES_BY_ID, QUIT_POKEMONES_BY_ID } from "../actions";



const initialState={

    pokemones: [],
    pokemon:{},
    types : []
}


export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case GET_POKEMONES:
            return{
                ...state,
                pokemones: action.payload
            }
        case GET_POKEMONES_BY_ID:
            return{
                ...state,
                pokemon: action.payload
            }
        case QUIT_POKEMONES_BY_ID:
            return {
                ...state,
                pokemon: action.payload
            } 
        case CREATE_POKEMON:
            return{
                ...state,
                pokemones: [...state.pokemones, action.payload]
            }
        case GET_ALL_TYPES:
            return{
                ...state,
                types: action.payload
            }           
        default: return state
    }
}