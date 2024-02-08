import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const SearchForm = ({searchSubmit, searchChange}) => {
    return (
        <>
            <Form className='mt-3' onSubmit={searchSubmit}>
                <Row>
                    <Col lg={10} md={10} xs={8} sm={8} >
                    <Form.Control className="" placeholder="Masukan Barcode / Nama Produk" onChange={searchChange} />
                    </Col>
                    <Col lg={2} md={2} xs={4} sm={2}>
                    <Button type='submit' variant="primary">Cari</Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default SearchForm;