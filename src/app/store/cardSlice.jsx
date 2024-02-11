import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item : [],
    total : 0
}

export const cartSlice = createSlice({
    name : 'item',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log(action);
            state.item.push(action.payload);
        }
    }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;