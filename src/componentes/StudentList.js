import react from "react";
import StudentItem from "./EstudentItem";

const StudentList = () =>{
    const students = [
        {id:1, nombre:'Luis Borrego', programa:'Ingenieria De Sistemas', sem:8},
        {id:2, nombre:'Carlos Sierra', programa:'Ingenieria Agronoma', sem:6},
        {id:3, nombre:'Juan Rojas', programa:'Ingenieria De Pez', sem:10},
        {id:4, nombre:'Alfre si', programa:'Derecho', sem:1}
    ]
    return(
        <div>
            { 
                students.map (s=>(
                    <>
                        <StudentItem students={s}/> {/*recorrer la lista de estudiantes*/}
                    </>
                ))
            } 
        </div>
    );
}
export default StudentList;