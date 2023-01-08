import { createSlice } from "@reduxjs/toolkit";

const DailyPriceSlice = createSlice({
    name: "DailyPrice",
    initialState: {
        goldPrice: "",
        silverPrice: ""
    },
    reducers: {
        setGoldPrice : (state, action) => {
            state.goldPrice = action.payload
        },
        setSilverPrice: (state, action) => {
            state.silverPrice = action.payload
        }
    }
})

export default DailyPriceSlice.reducer
export const {setGoldPrice, setSilverPrice} = DailyPriceSlice.actions