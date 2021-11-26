import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../css/estilo.css';  

const ProductItem = (props) =>{
    const {nombre, detalle, precio} = props.products; {/*Destructurar objeto*/}
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
                    <img src="https://www.creativefabrica.com/wp-content/uploads/2019/04/Shopping-cart-icon-by-marco.livolsi2014-2-580x386.jpg" className="image"/>
                </Col>
                <Col md={7} sm={7}>
                    <h5>{nombre}<br/></h5>
                    <p className="text-muted">
                        {detalle}<br/>
                    </p>
                    <p>
                        Price: {precio}<br/><br/>
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
export default ProductItem;