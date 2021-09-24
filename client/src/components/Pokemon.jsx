import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemones } from '../actions';
import './Pokemon.css';
import { NavLink } from 'react-router-dom';




function Pokemon() {
const selector = useSelector(state =>{
    return state.pokemones;
})

const dispatch = useDispatch();

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

    return (
        <div className="main-card">
            
        
            <div className="button-pagination">
                <input className="back" type="button" value="<<<" onClick={handleBackwards} />
                <input className="forward" type="button" value=">>>" onClick={handleForewards} />
            </div>
            
            <div className="container-pokemones">
                {paginado.map((e, i)=>{
                //  console.log(e);
                // console.log(e.types);
                return(
                    <div key={i} className="imagenes-card">
                        <NavLink exact to={`/detalle/${e.id}`}>
                            <img src={e.image} alt={`imagen ${e.name}`} />
                        </NavLink>
                        <h2>Nombre: {e.name}</h2>
                        if (typeof e.types === "object") {
                             console.log([e.types])
                        }else if(typeof e.types === "string"){
                            console.log(e.types)

                        }
                        {/* typeof(e.types) === "object" ? console.log(e.types[0].name) : console.log(e.types) */}
                        {/* {console.log(e.types)} */}
                        {/* <h3>Tipo: {e.types.map(e =><div>{e.name}</div>)}</h3> */}
                        
                    </div>
                )
            })}
            </div>
            
        </div>
    )
}

export default Pokemon
