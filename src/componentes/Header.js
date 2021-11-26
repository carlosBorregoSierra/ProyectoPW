import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <Row>
            <Col className="col py5 text-center">
                <h1>Shoping React</h1>
                <span><Link to='/'>Inicio</Link>/<Link to='/crear-producto'>About</Link>/Cart</span>
            </Col>
        </Row>
    );
}

export default Header;