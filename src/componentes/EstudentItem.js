import react from "react";

const StudentItem = (propiedad) =>{
    return(
        <div>
          Nombre: {propiedad.students.nombre}
        </div>
    );
}
export default StudentItem;