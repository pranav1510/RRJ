import { configureStore } from "@reduxjs/toolkit";
import DailyPriceReducer from "../features/DailyPrice/DailyPriceSlice";
import LoginPageReducer from "../features/LoginPage/LoginPageSlice";

const store = configureStore({
    reducer: {
        DailyPrice: DailyPriceReducer,
        LoginPage: LoginPageReducer
    }
})

export default store