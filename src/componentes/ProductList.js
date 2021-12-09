import {useState} from "react";
import ProductItem from "./ProductItem";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductForm from "./ProductForm";

const ProductList = () =>{
    const ProductInitial = [
        {id:1, nombre:"Pan", detalle:"Detalle del producto 1", precio: 8.1},
        {id:2, nombre:"Avena", detalle:"Detalle del producto 2", precio: 6.3},
        {id:3, nombre:"Carne", detalle:"Detalle del producto 3", precio: 10.6},
        {id:4, nombre:"Coco", detalle:"Detalle del producto 4", precio: 1.4}
    ]
    const [products, setProducts] = useState (ProductInitial);
    
    const alEnviarForm = (productFromForm) =>{
        const idS = products.length+1;
        const product = {...productFromForm, id:idS}
        setProducts([...products, productFromForm]);
        console.log(product)
    }
    return(
        <>
            <Row>
                <Col className="border">
                    <ProductForm agregar={alEnviarForm}/>
                </Col>
            </Row>
            <>
                <Row>
                    { 
                        products.map (pd=>(
                            <Col className="border">
                                <ProductItem products={pd}/> {/*recorrer la lista de productos*/}
                            </Col>
                        ))
                    } 
                </Row>
            </>
        </>
    );
}
export default ProductList;