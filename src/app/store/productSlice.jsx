import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search : '',
    products : [],
    page : 1,
    size : 10,
    show : false,
    modalBarcode : '',
    modalName : '',
    modalPrice : 0,
    modalPurchase : 0,
    modalId : '',
    isLoad : false,
    errors:{},
    productCount : 0
}

export const productSlice = createSlice({
    name : 'product',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload
        },
        setSize: (state, action) => {
            if(action.payload){
                state.size += action.payload
                return;
            }
        },
        setShow: (state, action) => {
            state.show = !state.show;
        },
        setIsload: (state, action) => {
            state.isLoad = action.payload;
        },
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setModalBarcode: (state, action) => {
            state.modalBarcode = action.payload;
        },
        setModalName: (state, action) => {
            state.modalName = action.payload;
        },
        setModalPrice: (state, action) => {
            state.modalPrice = action.payload;
        },
        setModalPurchase: (state, action) => {
            state.modalPurchase = action.payload;
        },
        setModalId: (state, action) => {
            state.modalId = action.payload;
        },
        setErrors: (state, action) => {
            state.errors = action.payload;
        },
        setProductCount: (state, action) => {
            state.productCount = action.payload;
        },
    }
});

export const {
    setSearch, setPage, setSize, setShow, setProducts, setProductCount,
    setModalBarcode, setModalName, setModalPurchase, setModalPrice, setModalId,
    setErrors, setIsload
} = productSlice.actions;
export default productSlice.reducer;