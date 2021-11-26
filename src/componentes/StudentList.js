import react, { useState } from "react";
import StudentItem from "./EstudentItem";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StudentForm from "./StudentForm";

const StudentList = () =>{
    const studentsInitial = [
        {id:1, nombre:'Luis Borrego', programa:'Ingenieria De Sistemas', sem:8},
        {id:2, nombre:'Carlos Sierra', programa:'Ingenieria Agronoma', sem:6},
        {id:3, nombre:'Juan Rojas', programa:'Ingenieria De Pez', sem:10},
        {id:4, nombre:'Alfre si', programa:'Derecho', sem:1}
    ]
    const [students, setStudents] = useState (studentsInitial);
    
    const alEnviarForm = (studentFromForm) =>{
        const idS = students.length+1;
        const student = {...studentFromForm, id:idS}
        setStudents([...students, studentFromForm]); 
    }
    return(
        <>
            <Row>
                <StudentForm agregar={alEnviarForm}/>
            </Row>
            <Row>
                <Col>
                    { 
                        students.map (st=>(
                            <div className="border">
                                <StudentItem students={st}/> {/*recorrer la lista de estudiantes*/}
                            </div>
                        ))
                    } 
                </Col>
            </Row>
        </>
    );
}
export default StudentList;