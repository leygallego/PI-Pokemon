import { 
    CREAR_NUEVO_TIPO, 
    CREATE_POKEMON, 
    GET_ALL_TYPES, 
    GET_PK_BY_NAME, 
    GET_POKEMONES, 
    GET_POKEMONES_BY_ID, 
    QUIT_POKEMONES_BY_ID, 
    SORT_POKEMONES, 
    SET_FILTERS, 
    GET_PK_API,
    GET_PK_DB
} from "../actions";

import { FETCH_POKEMON_FAILURE, FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCCESS } from "../actions/buscadorAction"


const initialState={

    pokemones: [],
    types : [],
    idName: {},
    loading: false,
    pokemon: [],
    error: '',
    pkApi: [],
    pkDB: []
    
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
        case GET_PK_BY_NAME:
            return{
                ...state,
                idName: action.payload
            }
        case CREAR_NUEVO_TIPO:
            return{
            }      
        case SORT_POKEMONES:
           let sorted = state.pokemones.sort(function(a,b){
               if(action.payload==="asc") return a.name.localeCompare(b.name);
               else return b.name.localeCompare(a.name)
           })       
           return {
               ...state,
               pokemones: sorted
           }
           case SET_FILTERS:
            return {
                ...state, 
                pokemones: action.payload
            }      

            case FETCH_POKEMON_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_POKEMON_SUCCESS:
            return {
                ...state,
                loading: false,
                pokemon: action.payload,
                error: ''
            }    
        case FETCH_POKEMON_FAILURE:
            return {
                ...state,
                loading: false,
                pokemon: [],
                error: action.payload
            }   

        case GET_PK_API:
            return{
                ...state,
                pkApi: action.payload
            } 
        case GET_PK_DB:
            return {
                ...state,
                pkDB: action.payload
            }       

           

        //    case FILTER_POKEMONES:
        //    let filter = state.pokemones.filter()       
        //    return {
        //        ...state,
        //        pokemones: sorted
        //    }
        default: return state
    }
}