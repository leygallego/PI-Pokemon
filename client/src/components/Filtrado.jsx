import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPkApi, getPkDB, getPokemones } from '../actions';
// import './Pokemon.css';
// import { NavLink } from 'react-router-dom';
function Filtrado() {

    const selector = useSelector(state=> {
        return state.pokemones
    })

    const pokDB = useSelector(state => {
       return state.pkDB
    })

    const pokApi = useSelector(state => {
        return state.pkApi
     })

     console.log("SELECTOR", selector);
     console.log("API", pokApi);
     console.log("DATABASE", pokDB);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPkDB())
    }, [dispatch])

    useEffect(()=>{
        dispatch(getPkApi())
    }, [dispatch])

    useEffect(()=>{
        dispatch(getPokemones())
    }, [dispatch])

    return (
       <div>
           <br />
           <br />
           <h1>Prueba</h1>
           {/* {pokApi.length ? pokApi.map(el=>{
               return(
                   <div>
                       <h1>{el}</h1>
                   </div>
               )
           }) : <div></div> } */}
       </div> 
    )
}

export default Filtrado
