import { Button, Form, Modal } from "react-bootstrap";

const ModalEditProduct = ({
    show, handleClose, formOnUpdate, errors,
    changeBarcode, changeName, changePrice, changePurchase,
    barcode, name, price, purchase_price
}) => {
    
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit</Modal.Title>
            </Modal.Header>
            <Form onSubmit={formOnUpdate}>
                <Modal.Body>
                    <div className="form-group mb-2">
                        <label>Barcode</label>
                        <Form.Control
                            type="text"
                            name='barcode'
                            className={errors?.barcode ? 'is-invalid' : ''}
                            value={barcode}
                            onChange={changeBarcode}
                        />
                        <div className="invalid-feedback">
                            {errors?.barcode ? errors?.barcode : ''}
                        </div>
                    </div>
                    <div className="form-group mb-2">
                        <label>Nama</label>
                        <Form.Control
                            type="text"
                            name='name'
                            className={errors?.name ? 'is-invalid' : ''}
                            value={name}
                            onChange={changeName}
                        />
                        <div className="invalid-feedback">
                            {errors?.name ? errors?.name : ''}
                        </div>
                    </div>
                    <div className="form-group mb-2">
                        <label>Harga</label>
                        <Form.Control
                            type="number"
                            name='price'
                            className={errors?.price ? 'is-invalid' : ''}
                            value={price}
                            onChange={changePrice}
                        />
                        <div className="invalid-feedback">
                            {errors?.price ? errors?.price : ''}
                        </div>
                    </div>
                    <div className="form-group mb-2">
                        <label>Harga Beli</label>
                        <Form.Control
                            type="number"
                            name='purchase_price'
                            className={errors?.purchase_price ? 'is-invalid' : ''}
                            value={purchase_price}
                            onChange={changePurchase}
                        />
                        <div className="invalid-feedback">
                            {errors?.purchase_price ? errors?.purchase_price : ''}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Batal
                    </Button>
                    <Button variant="success" type="submit">
                        Ubah
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default ModalEditProduct