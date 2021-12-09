import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { ButtonGroup } from 'react-bootstrap';
import { BsFillCartPlusFill, BsFillCartDashFill } from "react-icons/bs";
import React , { useState } from "react";
import { Datacontext } from "../providers/DataContext";
import '../css/estilo.css';
import context from 'react-bootstrap/esm/AccordionContext';

const Context = React.createContext(0);
console.log(Context)
const CartItem = (props) =>{

    const [count, setCount] = useState(Datacontext);

    const handleCoutCart = (e) => {
       setCount((e) => count + 1);
    }

    const {nombre, detalle, precio, /*icon*/} = props.products; /*Destructurar objeto*/

    const controlarClick = (ev) =>{
        ev.preventDefault();
        console.log('se controló el click');
    }

    return(
            <div className="item">
                <Row>
                    <Col className="content-center">
                        <img src="https://www.creativefabrica.com/wp-content/uploads/2019/04/Shopping-cart-icon-by-marco.livolsi2014-2-580x386.jpg" className="image"/>
                        <h5>{nombre}<br/></h5>
                        <p className="text-muted">
                            {detalle}<br/>
                        </p>
                        <p>
                            Price: {precio}<br/><br/>
                        </p>

                        <ButtonGroup className="me-2" aria-label="Second group">
                            <Button variant="primary" size="sm" onClick={controlarClick}>
                                <BsFillCartDashFill/>
                            </Button>
                                <Button variant="primary" size="sm" onClick={(e) => handleCoutCart(e)}>1{/*count*/}</Button>
                            <Button variant="primary" size="sm" onClick={controlarClick}>
                                <BsFillCartPlusFill/>
                            </Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </div>
    );
}
export default CartItem;