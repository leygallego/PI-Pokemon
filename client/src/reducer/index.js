import { GET_POKEMONES } from "../actions";



const initialState={

    pokemones: [],
}


export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case GET_POKEMONES:
            return{
                ...state,
                pokemones: action.payload
            }
            
    
        default: return state
    }
}