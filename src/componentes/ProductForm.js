import React, { useState } from "react"; 
export default function ProductForm(props){
    const estadoInicialForm = {
        nombre:'',
        detalle:'',
        precio:''
    };
    const [estadoForm, cambiarEstadoForm] = useState(estadoInicialForm);

    const gestionarCamposForm = event =>{
        //const nameInput = event.target.name;
        //const valueInout = event.target.value;
        const {name, value} = event.target;
        cambiarEstadoForm({...estadoForm, [name]:value});
    }

    const onSubmitForm = ev => {
        ev.preventDefault();
        props.agregar(estadoForm);
        cambiarEstadoForm(estadoInicialForm);
    }


    return(
        <form onSubmit={onSubmitForm}>
            <div className="form-group col col-lg-4">
                <label htmlfor="nameStudent">Product name</label>
                <input type="text" name="nombre" className="form-control" id="nameStudent" value={estadoForm.name} onChange={gestionarCamposForm}/>
            </div>
            <div className="form-group col col-lg-4">
                <label htmlfor="program">Detalle</label>
                <input type="text" name="detalle" className="form-control" id="program" value={estadoForm.program} onChange={gestionarCamposForm}/>
            </div>
            <div className="form-group col col-lg-4 mb-3">
                <label htmlfor="grade">Price</label>
                <input type="text" name="precio" className="form-control" id="grade" value={estadoForm.grado} onChange={gestionarCamposForm}/>
            </div>
            <div className="mb-3">
            <button type="submit" className="btn btn-primary">Crear</button>
            </div>
        </form>
    );
}