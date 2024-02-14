import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cardSlice";
import authSlice from "./authSlice";
import productSlice from "./productSlice";
import storage from "redux-persist/lib/storage";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

const persistCartConfig = {
    key : 'cart',
    storage
}

const persistAuthConfig = {
    key : 'auth',
    storage
}

const persistedCart = persistReducer(persistCartConfig, cartSlice);
const persistedAuth = persistReducer(persistAuthConfig, authSlice)

export const store = configureStore({
    reducer : {
        cart : persistedCart,
        auth : persistedAuth,
        product : productSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);