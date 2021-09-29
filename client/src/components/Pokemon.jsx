import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemones, setFilters } from '../actions';
import './Pokemon.css';
import { NavLink, useHistory } from 'react-router-dom';
// import NameSearch from './NameSearch';
// import Busqueda from './Busqueda';




function Pokemon() {
const selector = useSelector(state =>{
    return state.pokemones;
})

const dispatch = useDispatch();
const history =  useHistory();
let existentes = [];
let creados = [];
// let ascendentes = [];
// let descendentes = [];
// let fuerza = [];

useEffect(()=>{
    dispatch(getPokemones())
}, [dispatch])




const limite = 9;
const [page, setPage] = useState(0);
const [limit, setLimit] = useState(limite);
const [paginado, setPaginado] = useState([]);


const pagination = () => {
    setPaginado(
        selector.slice(page, limit)
    )
    // console.log(paginado);
}

// function handleChange(e) {
//     if(e.target.value === "default") dispatch(getPokemones())
//     else dispatch(sortPokemones(e.target.value))
//     history.push("/home")
// }



const handleBackwards = () => {

        setPage(page - limite)
        setLimit(limit - limite)
        if (page < 0 && limit < limite) {
            setPage(0);
            setLimit(limite);
            }
        pagination();
    // console.log(page, limit)
}

const handleForewards = () => {
    if (limit < selector.length) {
        setPage(limit)
        setLimit(limit + limite)
    }
    pagination();
}

if (!pagination) {
    pagination();

}

    const handleFilterChange = (e) => {
        console.log('en el switch', e.target.value)
        switch (e.target.value) {
            // Filtrar Ascendente
            case "1":

                selector.sort((a, b) => {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                });

                dispatch(setFilters(selector))
                setPaginado(
                    selector.slice(0, 9)
                )
                history.push('/home');

              
                break;
            // Filtar Descendente    
            case "2":

                selector.sort((a, b) => {
                    if (a.name < b.name) return 1;
                    if (a.name > b.name) return -1;
                    return 0;
                });

                console.log("Descendentes:", selector);
                dispatch(setFilters(selector))
                setPaginado(
                    selector.slice(0, 9)
                )
               
                // // history.push('/home');
                break;
                // Filtrar por Fuerza
            case "3":


                selector.sort((a, b) => {
                    if (a.strenght < b.strenght) return -1;
                    if (a.strenght > b.strenght) return 1;
                    return 0;
                });

                console.log("Fuerza:", selector);
                dispatch(setFilters(selector))
                setPaginado(
                    selector.slice(0, 9)
                )
               
                break;
            // Filtrar por Pokemones Existentes    
            case "4":
                dispatch(getPokemones())
                selector.forEach(element => {
                    if (typeof element.id === 'string') {
                        existentes.push(element);
                    } else {
                        creados.push(element);
                    }
                });
                console.log("Creados:", existentes);
                dispatch(setFilters(existentes))
                break;
            // Filtrar por Pokemones Creados
            case "5":
                dispatch(getPokemones())
                selector.forEach(element => {
                    if (typeof element.id === 'string') {
                        existentes.push(element);
                    } else {
                        creados.push(element);
                    }
                });
                console.log("Existentes:", creados);
                dispatch(setFilters(creados))
                history.push('/home');
                break;
            // Todos lo Pokemones
            case 6:
                dispatch(getPokemones())
                setPaginado(
                    selector.slice(0, 9)
                )
                break;

            default:
                break;
        }
    }
    

    return (
        <div className="main-card">
            <div>

            {/* <NameSearch /> */}

            {/* <Busqueda /> */}
            {/* <Resultado /> */}

            </div>
            <br />
            <select onChange={e => { handleFilterChange(e) }}>
                <option value={-1}>Selecciòn de Filtros</option>
                <option value={1} >Ordenar Ascendente</option>
                <option value={2} >Ordenar Descendente</option>
                <option value={3} >Filtrar por Fuerza</option>
                <option value={4} >Pokemones Existentes</option>
                <option value={5} >Nuevo Pokemones Creados</option>
                <option value={6} >Todos los Pokemones</option>
            </select>
            <br />
     
            <div className="button-pagination">
                <input className="back" type="button" value="<<<" onClick={handleBackwards} />
                <input className="forward" type="button" value=">>>" onClick={handleForewards} />
            </div>
            
            <div className="container-pokemones">
                {
                    paginado.length ? paginado.map((e, i)=>{
               
                        if (typeof e.types === "object") {
                            // console.log("Soy un array con objetos");
                            return(
                                <div key={i} className="imagenes-card">
                                    <NavLink exact to={`/detalle/${e.id}`}>
                                        <img src={e.image} alt={`imagen ${e.name}`} />
                                    </NavLink>
                                    <h2>Nombre: {e.name}</h2>
                                    {/* <h3>Tipo : {e.types[0].name}</h3> */}
                                    <div>{e.types.map((e, index)=>{
                                        return <h3 key={index}>Tipo: {e.name}</h3>
                                    })}</div>
                                    
                                </div>
                            )
                        } else {
                            // console.log("soy un string");
                            return(
                                <div key={i} className="imagenes-card">
                                    <NavLink exact to={`/detalle/${e.id}`}>
                                        <img src={e.image} alt={`imagen ${e.name}`} />
                                    </NavLink>
                                    <h2>Nombre: {e.name}</h2>
                                    <h3>Tipo : {e.types}</h3>
                                    
                                </div>
                            )
                        }
                        
                    }) : <div></div>
                }
            </div>
            
        </div>
    )
}

export default Pokemon
