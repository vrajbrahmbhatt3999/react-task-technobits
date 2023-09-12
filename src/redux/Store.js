import { configureStore } from "@reduxjs/toolkit";
import { roorReducer } from "./rootReducers";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk"

export const store = configureStore({
    reducer: roorReducer,
    middleware: [thunk]
})
export const persistor = persistStore(store);