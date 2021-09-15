import React from 'react';
import './Search.css'

function Search() {
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
                <input type="button" value="A-Z" />
                <input type="text" placeholder="Busca Pokemón por nombre"/>
                <input type="button" value="Z-A" />

            </div>
        </div>
    )       
}

export default Search
