import { NavLink } from 'react-router-dom';
import './NavBar.css';
import React from 'react'
// import Busqueda from './Busqueda';
// import { useDispatch } from 'react-redux'
// import { getAllTypes, getPkByName } from '../actions';


function NavBar() {
// const [input, setInput] = useState("")
// const dispatch = useDispatch()

// useEffect(()=>{
//     dispatch(getAllTypes())
// },[dispatch])

// const handleInput = (event) =>{
//     setInput(event.target.value)
// }
// const buscar = ()=>{
//     dispatch(getPkByName(input))
// }

    return (
        <div className="main-navbar">
                <NavLink exact to="/home">Home</NavLink>
                {/* <Search />   */}
                {/* <NameSearch /> */}
                {/* <Busqueda /> */}
                <NavLink exact to="/pokemon">Buscar Pokemon por Nombre</NavLink>
                <NavLink exact to="/crear">Crear Pokemon </NavLink>
            
                {/* <input type="text" placeholder="Busca Pokemón" onChange={handleInput} value={input} />
                <button onClick={buscar}>Buscar</button>  */}



        </div>
    )
}

export default NavBar
