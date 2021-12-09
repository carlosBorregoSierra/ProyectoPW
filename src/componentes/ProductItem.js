import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../css/estilo.css';  

const ProductItem = (props) =>{
    const {nombre, detalle, precio} = props.products; /*Destructurar objeto*/
    const controlarClick = (ev) =>{
        ev.preventDefault();
        console.log('se controló el click');
    }

    return(
        <div className="item">
            <Row>
                <Col className="content-center">
                    <img src="https://www.creativefabrica.com/wp-content/uploads/2019/04/Shopping-cart-icon-by-marco.livolsi2014-2-580x386.jpg" className="image"></img>
                    <h5>{nombre}<br/></h5>
                    <p className="text-muted">
                        {detalle}<br/>
                    </p>
                    <p>
                        Price: {precio}<br/><br/>
                    </p>
                    <Button variant="primary" size="sm" onClick={controlarClick}>
                        Add
                    </Button>
                </Col>
            </Row>
        </div>
    );
}
export default ProductItem;