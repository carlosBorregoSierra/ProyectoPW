import react from "react";

const StudentItem = (propiedad) =>{
    return(
        <div>
           {/* <h3>{propiedad.nombre}</h3>
            <span>{propiedad.programa}</span>
            <span>{propiedad.semestre}</span>*/}
            item {propiedad}
        </div>
    );
}
export default StudentItem;