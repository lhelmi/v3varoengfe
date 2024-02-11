import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item : [],
    totalItem : 0,
    total : 0
}

export const cartSlice = createSlice({
    name : 'item',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isExist = state.item.find((value) => value.id === action.payload.id);
            if(isExist){
                isExist.quantity += 1;
                isExist.total = isExist.price * isExist.quantity;
            }else{
                state.item.push({
                    ...action.payload,
                    quantity : 1,
                    total : parseInt(action.payload.price)
                });
            }
            
            state.totalItem = state.item.reduce((accumulator, v) => accumulator + v.quantity, 0);
            state.total = state.item.reduce((accumulator, v) => accumulator + v.total, 0);
        },
        incrementQuantity: (state, action) => {
            const isExist = state.item.find((value) => value.id === action.payload);
            if(isExist){
                isExist.quantity += 1;
                isExist.total = isExist.price * isExist.quantity;
                state.totalItem = state.item.reduce((accumulator, v) => accumulator + v.quantity, 0);
                state.total = state.item.reduce((accumulator, v) => accumulator + v.total, 0);
                return;
            }
        },
        decrementQuantity: (state, action) => {
            const isExist = state.item.find((value) => value.id === action.payload);
            if(isExist && isExist.quantity > 1){
                isExist.quantity -= 1;
                isExist.total = isExist.price * isExist.quantity;
                state.totalItem = state.item.reduce((accumulator, v) => accumulator + v.quantity, 0);
                state.total = state.item.reduce((accumulator, v) => accumulator + v.total, 0);
                return;
            }
        },
        removeItem: (state, action) => {
            const filterCart = state.item.filter((value) => value.id !== action.payload);
            state.item = filterCart;
            state.totalItem = state.item.reduce((accumulator, v) => accumulator + v.quantity, 0);
            state.total = state.item.reduce((accumulator, v) => accumulator + v.total, 0);
        },
        cleanCart: (state, action) => {
            state.item = [];
            state.total = 0;
            state.totalItem = 0;
        }
    }
});

export const { addToCart, incrementQuantity, decrementQuantity, removeItem, cleanCart } = cartSlice.actions;
export default cartSlice.reducer;