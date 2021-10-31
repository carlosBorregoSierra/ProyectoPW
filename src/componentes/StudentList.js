import react from "react";
import StudentItem from "./EstudentItem";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const StudentList = () =>{
    const students = [
        {id:1, nombre:'Luis Borrego', programa:'Ingenieria De Sistemas', sem:8},
        {id:2, nombre:'Carlos Sierra', programa:'Ingenieria Agronoma', sem:6},
        {id:3, nombre:'Juan Rojas', programa:'Ingenieria De Pez', sem:10},
        {id:4, nombre:'Alfre si', programa:'Derecho', sem:1}
    ]
    return(
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
    );
}
export default StudentList;