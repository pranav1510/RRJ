import { configureStore } from "@reduxjs/toolkit";
import DailyPriceReducer from "../features/DailyPrice/DailyPriceSlice";
import LoginPageReducer from "../features/LoginPage/LoginPageSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key: "root",
    version: 1,
    storage
};

const reducer = combineReducers({
    DailyPrice: DailyPriceReducer,
    LoginPage: LoginPageReducer
});

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

export default store