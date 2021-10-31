import react from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../css/estilo.css';  

const StudentItem = (props) =>{
    const {nombre,programa,sem} = props.students; {/*Destructurar objeto*/}
    const controlarClick = (ev) =>{
        ev.preventDefault();
        console.log('se controló el click');
        console.log(nombre);
    }

    return(
        <div className="item">
            <Row >
                {/*
            Nombre: {props.students.nombre}<br/>  //tambien funciona
            Programa: {props.students.programa}<br/><br/>
                */}
                <Col md={2} sm={2}>
                    <img src="https://www.bootdey.com/img/Content/avatar/avatar7.png" className="avatar"/>
                </Col>
                <Col md={7} sm={7}>
                    <h5>{nombre}<br/></h5>
                    <p>
                        {programa}<br/>
                    </p>
                    <p className="text-muted">
                        Sem:{sem}<br/><br/>
                    </p>
                </Col>
                <Col md={3} sm={3}>
                <Button variant="primary" size="sm" onClick={controlarClick}>
                    Ver detalles
                </Button>
                </Col>
            </Row>
        </div>
    );
}
export default StudentItem;