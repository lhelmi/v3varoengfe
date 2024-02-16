import { Button, ListGroup, Modal } from "react-bootstrap";
import { formatRupiah } from "../../../utils/format";

import { useDispatch } from 'react-redux';
import { addToCart, setShow, setDataModal } from "../../../app/store/cardSlice";

const ModalProductList = ({
    show, handleClose, data
}) => {
    const dispatch = useDispatch();
    const clickProductOnList = (value) => {
        dispatch(addToCart(value));
        dispatch(setShow(false));
        dispatch(setDataModal([]));
        
    }

    const List = () => {
        return data.map((v, k) => {
            return  (
                <Button
                    key={k}
                    className="list-group-item list-group-item-action mt-1 mb-1" aria-current="true"
                    onClick={() => clickProductOnList(v)}
                >
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{v.name}</h5>
                    </div>
                    <div className="d-flex w-100 justify-content-between">Barcode : {v.barcode}</div>
                    <div className="d-flex w-100 justify-content-between">Harga Rp {formatRupiah(v.price)}</div>
                </Button>
            
            );
        });
    }
    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>List</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup>
                    <List/>
                </ListGroup>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Batal
            </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalProductList