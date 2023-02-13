import { createSlice } from "@reduxjs/toolkit";

const LoginPageSlice = createSlice({
    name: "LoginPage",
    initialState: {
        employeeName: "",
        pendingOrders: [],
        pendingTransactions: [],
        statusShow: false,
        orderShow: true,
        transactionShow: false,
        orderDetailsShow: false,
    },
    reducers: {
        setEmployeeName: (state, action) => {
            state.employeeName = action.payload
        },
        setPendingOrders: (state, action) => {
            state.pendingOrders = action.payload
        },
        setPendingTransactions: (state, action) => {
            state.pendingTransactions = action.payload
        },
        setStatusShow: (state, action) => {
            state.statusShow = action.payload
        },
        setOrderShow: (state, action) => {
            state.orderShow = action.payload
        },
        setTransactionShow: (state, action) => {
            state.transactionShow = action.payload
        },
        setOrderDetailsShow: (state, action) => {
            state.orderDetailsShow = action.payload
        }
    }
})

export default LoginPageSlice.reducer
export const {setEmployeeName,setPendingOrders, setPendingTransactions, setStatusShow, setOrderShow, setTransactionShow, order} = LoginPageSlice.actions