import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { formatRupiah } from '../utils/format';

const TotalForm = ({total, onBayarChange, kembalianValue, bayarValue, onCleanClick}) => {
    return (
        <Card className='mt-3'>
            <Card.Header></Card.Header>
            <Card.Body>
                <Row className='mt-2'>
                    <Col lg={4}>
                        <Card.Text>TOTAL</Card.Text>
                    </Col>
                    <Col lg={8}>
                        <Form.Control className="" disabled readOnly placeholder="" value={formatRupiah(total)}/>
                    </Col>  
                </Row>
                <Row className='mt-2'>
                    <Col lg={4}>
                        <Card.Text>BAYAR</Card.Text>
                    </Col>
                    <Col lg={8}>
                        <Form.Control className="" placeholder="" onChange={onBayarChange} value={formatRupiah(bayarValue)}/>
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col lg={4}>
                        <Card.Text>KEMBALIAN</Card.Text>
                    </Col>
                    <Col lg={8}>
                        <Form.Control className="" placeholder="" value={formatRupiah(kembalianValue)} disabled/>
                    </Col>
                </Row>
                <Row lg={10} className='mt-2'>
                    <Button variant="success">SIMPAN</Button>
                </Row>
                <Row lg={10} className='mt-2'>
                    <Button variant="danger" onClick={onCleanClick}>Bersihkan Keranjang</Button>
                </Row>
                
            </Card.Body>
        </Card>
    );
}

export default TotalForm;