import { configureStore } from "@reduxjs/toolkit";
import DailyPriceReducer from "../features/DailyPrice/DailyPriceSlice";

const store = configureStore({
    reducer: {
        DailyPrice: DailyPriceReducer
    }
})

export default store