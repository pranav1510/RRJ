import { createSlice } from "@reduxjs/toolkit";

const LoginPageSlice = createSlice({
    name: "LoginPage",
    initialState: {
        employeeName: ""
    },
    reducers: {
        setEmployeeName: (state, action) => {
            state.employeeName = action.payload
        }
    }
})

export default LoginPageSlice.reducer
export const {setEmployeeName} = LoginPageSlice.actions