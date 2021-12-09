import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


const Footer = (propiedasdes) => {
    return (
        <Row>
            <Col className="col py5 text-center border">
                <footer>
                    Información de contacto
                    Línea Gratuita Nacional: 01 8000 180 504. PBX: (57 - 5) 4381000 - 4365000
                    Dirección: Carrera 32 No 22 – 08 Santa Marta D.T.C.H. - Colombia. Código Postal No. 470004
                    Correo electrónico: ciudadano@unimagdalena.edu.co
                    La Universidad del Magdalena está sujeta a inspección y vigilancia por el Ministerio de Educación Nacional.

                    Desarrollado por el Centro de Investigación y Desarrollo de Software CIDS - Unimagdalena © 2021
                </footer>  
            </Col>
        </Row>
    );
}

export default Footer;