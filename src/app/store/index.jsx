import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cardSlice";
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

const persistedCart = persistReducer(persistCartConfig, cartSlice);

export const store = configureStore({
    reducer : {
        cart : persistedCart
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);