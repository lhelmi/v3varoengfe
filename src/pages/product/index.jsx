
import { Container, Col, Button } from "react-bootstrap";
import SearchProduct from "./components/searchProduct";
import { useNavigate } from "react-router-dom";
import EditForm from "./components/EditForm";
import { useEffect, useState } from "react";
import { findProduct } from "../../api";
import { useSelector } from 'react-redux';
import ProductList from "./components/List";

const Product = () => {
    const navigate = useNavigate();
    const [ barcode, setBarcode ] = useState('');
    const [ search, setSearch ] = useState('');
    const [ products, setProducts ] = useState([]);
    const authData = useSelector((state) => state.auth);
    const token = authData.data.token;

    useEffect(() => {
        
    }, [products])

    const changeBarcode = (key) => {
        setBarcode(key);
    }

    const searchChangeHandle = (value) => {
        setSearch(value);
      }

    const searchHandle = async (e) => {
        e.preventDefault();
        const res = await findProduct(token, search);
        if(res.statusCode !== 200){
            Swal.fire({
                icon: "error",
                title: "ERROR",
                text: `${res.data.errors}`,
            });
            return;
        }
        let productTemp = products.slice();
        productTemp = res.data;
        
        setProducts(productTemp);
    }

    const ShowProducts = () => {
        return products.map((v, k) => {
            return (
                <ProductList
                    key={k}
                    barcode = {v.barcode}
                    name = {v.name}
                    price = {v.price}
                    purchase_price = {v.purchase_price}
                />
            );
        });
    }

    return (
        <>
        <Container>
            <Col xs={12}>
                <div className="mt-2">
                    <Button variant="success" onClick={() => navigate('/product/create')}>Add New Product</Button>
                </div>
                <SearchProduct
                    searchSubmit = {searchHandle}
                    searchChange={({target}) => searchChangeHandle(target.value)}
                />
                
                <ShowProducts/>
                
            </Col>
        </Container>
        </>
    );
}

export default Product;