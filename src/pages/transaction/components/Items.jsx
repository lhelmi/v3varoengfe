import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Trash } from 'react-bootstrap-icons';
import { formatRupiah } from '../../../utils/format';


const Items = ({name, barcode, qty, price, total, minusClick, plusClick, deleteItem}) => {
    return (
        <Card className='mt-3'>
            <Card.Header>
                <Row>
                    <Col>
                    <Button variant="danger" onClick={deleteItem}>
                        <Trash color="white" size={16} />
                    </Button>
                    </Col>
                    <Col>
                        <h5>{barcode}</h5>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body>
                <Row className='mt-2'>
                    <Col lg={12}>
                        <Form.Control className="" disabled readOnly value={name}/>
                    </Col>  
                </Row>
                <Row className='mt-2 justify-content-md-center'>
                    <Col lg={2} xs={2}>
                        <div className="d-grid gap-2">
                            <Button variant="primary" onClick={minusClick}>
                                -
                            </Button>
                        </div>
                    </Col>
                    <Col lg={2} xs={3}>
                        <Form.Control className="" disabled readOnly value={qty}/>
                    </Col>  
                    <Col lg={2} xs={2}>
                        <div className="d-grid gap-2">
                            <Button variant="primary" onClick={plusClick}>
                                +
                            </Button>
                        </div>
                    </Col>
                    <Col lg={6} xs={5}>
                        <Form.Control className="" disabled readOnly value={formatRupiah(price)}/>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col lg={6} md={6} sm={6} xs={7}>
                        <Form.Label htmlFor="basic-url">TOTAL</Form.Label>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={5}>
                        <Form.Control className="" align="end" disabled readOnly value={formatRupiah(total)}/>
                    </Col>
                </Row>
                
            </Card.Body>
        </Card>
    );
}

export default Items;