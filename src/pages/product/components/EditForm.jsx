import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

const EditForm = ({formOnSubmit, errors, barcode, name, price, purchase_price}) => {
    const navigate = useNavigate();
    return (
        <>
        <div className="card mt-3">
            <p className="card-header">Tambah Product Baru</p>
            <div className="card-body">
                <Form onSubmit={formOnSubmit}>
                    <div className="form-group mb-2">
                        <label>Barcode</label>
                        <Form.Control
                            type="text"
                            name='barcode'
                            className={errors?.barcode ? 'is-invalid' : ''}
                            value={barcode}
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
                        />
                        <div className="invalid-feedback">
                            {errors?.purchase_price ? errors?.purchase_price : ''}
                        </div>
                    </div>
                    
                    <div className='row'>
                        <div className='col-6'>
                            <button type="submit" className="btn btn-primary mr-3">Simpan</button>  
                        </div>
                        <div className='col-6'>
                        <Button variant="primary" className='ml-3' type="button" onClick={() => navigate('/product')}>
                            Batal
                        </Button>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
        </>
    );
}

export default EditForm;