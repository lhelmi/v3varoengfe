import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin : false,
    data : {}
}

export const authSlice = createSlice({
    name : 'value',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLogin = true;
            state.data = action.payload
        },
        logout: (state, action) => {
            state.isLogin = false;
            state.data = {};
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;