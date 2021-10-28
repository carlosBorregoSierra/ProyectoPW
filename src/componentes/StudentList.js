import react from "react";
import StudentItem from "./EstudentItem";

const StudentList = () =>{
    const students = [
        {id:1, nombre:'Luis Borrego', cod:2009114015, programa:'Ingenieria De Sistemas', sem:8},
        {id:2, nombre:'Carlos Sierra', cod:2010114015, programa:'Ingenieria Agronoma', sem:6},
        {id:3, nombre:'Juan Rojas', cod:20114015, programa:'Ingenieria De Pez', sem:10},
        {id:4, nombre:'Alfre si', cod:20124015, programa:'Derecho', sem:1}]
    return(
        <div>
            { students.map ((s)=><StudentList students={s}/>)} {/*recorrer la lista de estudiantes*/}
        </div>
    );
}
export default StudentList;