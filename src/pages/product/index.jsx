
import { Container, Col, Button, Row } from "react-bootstrap";
import SearchProduct from "./components/searchProduct";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { updateProduct, findProduct } from "../../api";
import { useSelector, useDispatch } from 'react-redux';
import ProductList from "./components/List";
import Swal from 'sweetalert2'
import ModalEditProduct from "./components/modal";
import {
    setSearch, setPage, setSize, setShow, setProducts, setProductCount,
    setModalBarcode, setModalName, setModalPurchase, setModalPrice, setModalId, setErrors,
    setIsload, setPrevSearch
} from "../../app/store/productSlice";
import ProductPagination from "./components/pagging";

const Product = () => {
    const authData = useSelector((state) => state.auth);
    const productData = useSelector((state) => state.product);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const token = authData.data.token;
    const handleClose = () => dispatch(setShow());

    useEffect(() => {
        
    }, [productData.page])

    const searchChangeHandle = (value) => {
        dispatch(setSearch(value));
    }

    const showModal = ({barcode, name, price, purchase_price, id}) => {
        dispatch(setModalBarcode(barcode));
        dispatch(setModalName(name));
        dispatch(setModalPrice(price));
        dispatch(setModalPurchase(purchase_price));
        dispatch(setModalId(id));
        dispatch(setShow());
    }

    const searchHandle = async (e) => {
        e.preventDefault();
        await searchAction();
        return;
    }

    const changeBarcodeHandle = (key) => {
        dispatch(setModalBarcode(key))
    }

    const changeNameHandle = (key) => {
        dispatch(setModalName(key))
    }

    const changePriceHandle = (key) => {
        dispatch(setModalPrice(key))
    }

    const changePurchaseHandle = (key) => {
        dispatch(setModalPurchase(key))
    }

    const ShowProducts = () => {
        return productData.products.map((v, k) => {
            return (
                <ProductList
                    key={k}
                    barcode = {v.barcode}
                    name = {v.name}
                    price = {v.price}
                    purchase_price = {v.purchase_price}
                    number = {k+1}
                    showModal= {() => showModal(v)}
                />
            );
        });
    }

    const updateFormHandle = async (e) => {
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
        
        const res = await updateProduct(productData.modalId, param);
        if(res.statusCode == 400) {
            dispatch(setErrors(res.data.errors));
            return;
        }
        
        dispatch(setErrors({}));
        await searchAction();
        dispatch(setShow());
        Swal.fire({
            icon: "success",
            text: `Data berhasil di simpan`,
        });
        return;
    }

    const searchAction = async (page) => {
        if(productData.search !== productData.prevSearch){
            page = 1;
            dispatch(setPage(1));
        }
        const param = {
            token : token,
            size : productData.size,
            page : page ? page : productData.page,
            q : productData.search
        }
        const res = await findProduct(param);
        
        dispatch(setIsload(res.data.length < 10 ? false : true));
        dispatch(setPrevSearch(productData.search));
        if(res.statusCode !== 200){
            Swal.fire({
                icon: "error",
                title: "ERROR",
                text: `${res.data.errors}`,
            });
            return;
        }
        dispatch(setProducts(res.data.data));
        dispatch(setProductCount(res.data.count));
        
    }

    const changePageHandle = async (page) => {
        dispatch(setPage(page));
        await searchAction(page);
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
                
                <ProductPagination
                    currentPage={productData.page}
                    dataPerPage={productData.size}
                    totalData={productData.productCount.data}
                    changePage={changePageHandle}
                />
                <ModalEditProduct
                    handleClose = {() => handleClose()}
                    show={productData.show}
                    changeBarcode={({target}) => changeBarcodeHandle(target.value)}
                    changeName={({target}) => changeNameHandle(target.value)}
                    changePrice={({target}) => changePriceHandle(target.value)}
                    changePurchase={({target}) => changePurchaseHandle(target.value)}
                    barcode={productData.modalBarcode}
                    name={productData.modalName}
                    price={productData.modalPrice}
                    purchase_price={productData.modalPurchase}
                    formOnUpdate = {updateFormHandle}
                    errors={productData.errors}
                />
                
            </Col>
        </Container>
        </>
    );
}

export default Product;