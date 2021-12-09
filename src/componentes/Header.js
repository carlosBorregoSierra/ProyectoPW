import React /*, { useContext }*/ from "react";
//import { Datacontext } from "../providers/DataContext";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import {Link} from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";

const Header = () => { 

    //const {count} = useContext(Datacontext);

    return(
        
        <Row>
            <Col className="col py5 text-center">
                <h1>Shoping React</h1>
                <span>
                    <Link to='/'>
                        Shop
                    </Link>/
                    <Link to='/Admin'>
                        Admin
                    </Link>/
                    <Link to='/Cart'>
                        <BsFillCartFill />(0{/*count*/})
                    </Link>
                
                </span>
            </Col>
        </Row>
    );
}

export default Header;