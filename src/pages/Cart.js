import React from "react";
import { Row,Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import CartItem from "../componentes/CartItem";

export default function Cart(){

    const cart = [
        {id:1, nombre:"Unicornio", detalle:"Detalle del producto 1", cantidad:1, precio: 8.1},
        {id:2, nombre:"Nenuco", detalle:"Detalle del producto 2", cantidad:1, precio: 6.3},
        {id:3, nombre:"Pelota", detalle:"Detalle del producto 3", cantidad:1, precio: 10.6},
    ]

    const [vSumTotal, setVSumTotal] = useState(0);
 
    useEffect(() => {
        const handlesumar = () => {

            const sumar = cart.map((precio) => parseFloat(precio.precio))
                .reduce((previous, current) => {
                return previous + current;
            }, 0);

            setVSumTotal(sumar);
        };
 
        handlesumar();
 
    });

    const [SumTotal, setSumTotal] = useState(0);
 
    useEffect(() => {
        const vhandlesumar = () => {

            const sumar = cart.map((suma) => parseFloat(suma.cantidad))
                .reduce((previous, current) => {
                return previous + current;
            }, 0);

            setSumTotal(sumar);
        };
 
        vhandlesumar();
 
    });

    return(
        <>
            <h1 className="text-center">Cart</h1>
            <p className="alineado">
                <h5 >Cant: {SumTotal}</h5>
                <h5>Total: {vSumTotal}</h5>
                
            </p>
            <Row>
                { 
                    cart.map (pd=>(
                        <Col className="border">
                            <CartItem products={pd}/> {/*recorrer la lista de productos*/}
                        </Col>
                    ))
                } 
            </Row>
        </>
    );
}