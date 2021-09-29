import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { crearNuevoTipo, getAllTypes } from '../actions';


function NewType() {

    const [formVisible, setFormVisible] = useState(false);
    const [tipoNuevo, setTipoNuevo] = useState({
        name: ""
    })

    const dispatch = useDispatch();

    const handleBoolean = () => {
        setFormVisible(true);
    }
    const handleOnChange = (e) => {
        setTipoNuevo ({
            name: e.target.value
        })
    }

    const handleOnSubmitNewType = (e) => {
        e.preventDefault();
        dispatch(crearNuevoTipo(tipoNuevo));
        dispatch(getAllTypes());
        setFormVisible(false);
    }

    return (
        <div>
         {!formVisible ? <input type="button" onClick={handleBoolean}></input> : <div></div> }
         {formVisible ? <form onSubmit={e => {handleOnSubmitNewType(e)}} >
            <input type="text" onChange={e => {handleOnChange(e)}} />
            <input type="submit" />

         </form> : <div></div> }
        </div>
    )
}

export default NewType
