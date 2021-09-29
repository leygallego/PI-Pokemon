import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import { getPkByName } from '../actions';
import { useHistory, generatePath } from 'react-router-dom';





function NameSearch() {

    // let { name } = useParams();

    const nombre = useSelector(state => state.idName);
    console.log("estado selector", nombre);
    const dispatch = useDispatch();
    const history = useHistory();

    const [buscar, setBuscar] = useState({
        name: ""
    });

    const handleOnChange = (e) => {
        setBuscar(e.target.value)
        dispatch(getPkByName(buscar))
        console.log(e.target.value);
    }


    const buscarNombre = () => {
        let id = nombre[0].id
        console.log(id);
        history.push(generatePath("/detalle/:id", {id}))

    }


    // useEffect(() => {
    //     dispatch(getPkByName(buscar))
    // }, [dispatch, buscar])


    return (
        <div className="main-busquedaNombre">

            <       div className="contenedor-input">
                <div className="search-input">
                    <input type="text" placeholder="Nombre Pokemon" onChange={(e) => { handleOnChange(e) }} />
                </div>
                <div className="contenedor-boton">
                    <button onClick={buscarNombre}>Buscar Pokemon</button>

                    {/* <button onClick={buscarNombre}></button> */}

                    {/* <input type="button" onClick={buscarNombre} /> */}

                </div>

            </div>
            {/* <div className="content-search">
                    {
                        nombre ? nombre.map(el =>{
                            if(el.name.includes(buscar)){
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
                </div> */}



        </div>

    )
}

export default NameSearch
