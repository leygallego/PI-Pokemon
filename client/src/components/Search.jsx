import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Search.css'

function Search() {

    const pk = useSelector(state => state.pokemones);

    const [busqueda, setBusqueda] = useState();

    const handleOnChange = (e)=>{
        setBusqueda(e.target.value)
    }

    return (
        <div className="main-search">
            <div className="search-select">
                <select name="tipos" >
                    <option value="normal">Normal</option>
                    <option value="agua">Agua</option>
                    <option value="fuego">Fuego</option>
                    <option value="electrico">Eléctrico</option>
                </select>
            </div> 
            <div className="search-input">
                {/* <input type="button" value="A-Z" /> */}
                <input type="text" placeholder="Busca Pokemón por nombre" onChange={(e)=>{handleOnChange(e)}}/>
                {/* <input type="button" value="Z-A" /> */}
          </div>
                <div>
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
