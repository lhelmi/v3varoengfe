import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';


const FormCreate = ({formOnSubmit}) => {
    return (
        <>
        <Card className='mt-3'>
            <Card.Header>Kembali</Card.Header>
            <Card.Body>
                <Card.Title>Product Baru</Card.Title>
                <Card.Text></Card.Text>
                <Form onSubmit={formOnSubmit}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Barcode</Form.Label>
                        <Form.Control type="text" name='barcode'/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Nama</Form.Label>
                        <Form.Control type="text" name='name'/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Harga</Form.Label>
                        <Form.Control type="number" name='price'/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Harga Beli</Form.Label>
                        <Form.Control type="number" name='purchase_price'/>
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Simpan
                    </Button>
            
                    <Button variant="primary" className='ml-3' type="button">
                        Batal
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        </>
    );
}

export default FormCreate;