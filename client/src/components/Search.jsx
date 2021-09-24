import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllTypes } from '../actions';
import './Search.css'

function Search() {

    const pk = useSelector(state => state.pokemones);
 const tipos = useSelector(state => state.types);
    // console.log("store tipos",pk);
    
    const dispatch = useDispatch(); // verificar que esté importado de react redux si lo voy a usar

    useEffect(()=>{
        dispatch(getAllTypes())
    },[dispatch])



    const [busqueda, setBusqueda] = useState();
    // const [tiposPk, setTipos] = useState(-1);

    const handleTypes = (e)=>{
        // const opcion = e.target.value
        // console.log("seleccionando",opcion);
    }

    const handleOnChange = (e)=>{
        setBusqueda(e.target.value)
    }

    return (
        <div className="main-search">
            <div className="search-select">
                <select name="tipos" onClick={handleTypes} >
                    <option value={-1}>Seleccione un tipo</option>
                    {
                        tipos.map((e, i) => {
                            // console.log("tipos", e);
                         return   <option key={"tipos" + i} value={i}>{e.name}</option>
                        })
                    }
                </select>
            </div> 
        <div className="contenedor-input">
            <div className="search-input">
                {/* <input type="button" value="A-Z" /> */}
                <input type="text" placeholder="Busca Pokemón por nombre" onChange={(e)=>{handleOnChange(e)}}/>
                {/* <input type="button" value="Z-A" /> */}
          </div>
                
            </div>
            <div className="content-search">
                    {
                        pk ? pk.map(el =>{
                            if(el.name.includes(busqueda)){
                                return (
                                    <Link key={el.id} to={`/detalle/${el.id}`} >
                        <div key={el.id}>
                          {el.name}  
                        </div>
                        </Link>
                                    
                                )
                            } return null
                        }) : <div></div>
                    }
                </div>
            

                
        </div>
    )       
}

export default Search
