import react from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


const Header = () => {
    return(
        <Row>
            <Col className="col py5 text-center">
                <h1>Gestion de Estudiantes</h1>
                <span>Crear/Editar/Borrar Estudiantes</span>
            </Col>
        </Row>
    );
}

export default Header;