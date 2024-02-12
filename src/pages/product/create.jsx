
import FormCreate from "./components/CreateForm";
import { Container, Col } from "react-bootstrap";
import { createProduct } from "../../api";
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'

import { useState } from 'react';
const ProductCreate = () => {
    const authData = useSelector((state) => state.auth);
    const token = authData.data.token;
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        const param = {
            barcode : formJson.barcode,
            name : formJson.name,
            price : parseInt(formJson.price),
            purchase_price : parseInt(formJson.purchase_price),
            token : token
        }
        const res = await createProduct(param);
        console.log(res);
        if(res.statusCode == 400) {
            let err = errors;
            err = {...res.data.errors};
            setErrors(err);
            return;
        }
        
        setErrors({});
        Swal.fire({
            icon: "success",
            text: `Data berhasil di simpan`,
        });

    }

    
    return (
        <>
        <Container>
            <Col xs={12}>
                <FormCreate formOnSubmit = {handleSubmit} errors={errors} />
            </Col>
        </Container>
        </>
    );
}

export default ProductCreate;