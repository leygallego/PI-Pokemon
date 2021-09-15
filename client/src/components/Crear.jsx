import React, { useState } from 'react'
import {useDispatch, useSelector, } from'react-redux'
// import {useHistory } from 'react-router-dom'
import { createPokemon } from '../actions';
import './Crear.css';


function Crear() {
    const dispatch = useDispatch();
    const [crear, setCrear] = useState({
        name: "",
        hp: 0,
        strenght: 0,
        defense: 0,
        speed: 0,
        height: 0,
        weight: 0,
        image: "",
        type:[]
    })
    const pk= useSelector(state=> state.pokemones);

    const handleOnChange = (e)=>{
        setCrear({
            ...crear,
            [e.target.name]: e.target.value
        })
    }

    const handleOnChangeSelect = (e)=>{
        if(crear.type.includes(e.target.value)){
            setCrear({
                ...crear,
                type: crear.type.filter(tp=> tp !== e.target.value)
            })
        } else {
            setCrear({
                ...crear,
                type: [...crear.type, e.target.value]
            })
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(createPokemon(crear))
        setCrear({
            name: "",
            hp: 0,
            strenght: 0,
            defense: 0,
            speed: 0,
            height: 0,
            weight: 0,
            image: "",
            type:[]
        })
    }
    


    return (
        <div>
            <br />
            <h1 className="logo">Crea tu propio <span>Pokemon</span> </h1>

            <div className="crear-wraper">
                <div className="crear-form">

                <form onSubmit={(e)=> {handleSubmit(e)}}>
                <label htmlFor="">Nombre: </label>
                <input name="name" value={crear.name} onChange={e => handleOnChange(e)}
                placeholder="Escribe el nombre de tu pokemon" />
                <label htmlFor="">Vida: </label>
                <input name="hp" value={crear.hp} onChange={e => handleOnChange(e)} />
                <label htmlFor="">Fuerza: </label>
                <input name="strenght" value={crear.strenght} onChange={e => handleOnChange(e)} />
                <label htmlFor="">Defensa: </label>
                <input name="defense" value={crear.defense} onChange={e => handleOnChange(e)} />
                <label htmlFor="">Velocidad: </label>
                <input name="speed" value={crear.speed} onChange={e => handleOnChange(e)} />
                <label htmlFor="">Altura: </label>
                <input name="height" value={crear.height} onChange={e => handleOnChange(e)} />
                <label htmlFor="">Peso: </label>
                <input name="weight" value={crear.weight} onChange={e => handleOnChange(e)} />
                <label htmlFor="">Imagen: </label>
                <input name="image" value={crear.image} onChange={e => handleOnChange(e)} />
                {/* <label htmlFor="">Crear tipo nuevo: </label>
                <input name="newType"  onChange={e => handleOnChange(e)}/> */}
                <h2>Seleccionar tipo</h2>
                <select name="type" onChange={handleOnChangeSelect} multiple>
                    {
                        pk.lenght && pk.map((e,i)=> {
                            console.log(e);
                       return <option key={i} value={e[0].id}>{e[0].name}</option>
                    })
                    }
                </select>
                <button className="myButton" type="submit" >Crear</button>

            </form>

                </div>

            </div>
            
        </div>
       

    )   
}

export default Crear
