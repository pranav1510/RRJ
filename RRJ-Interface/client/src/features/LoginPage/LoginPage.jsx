import axios from "axios";
import React, { useReducer } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setGoldPrice, setSilverPrice } from "../DailyPrice/DailyPriceSlice";
import { setEmployeeName, setPendingOrders, setPendingTransactions, setStatusShow } from "./LoginPageSlice";

const initialState = {
    username: "",
    password: "",
    details: [],
    err: ""
}

const ACTIONS = {
    USERNAME: "USERNAME",
    PASSWORD: "PASSWORD",
    DETAILS: "dETAILS",
    ERR: "ERR"
}

const reducer = (state, {type, payload}) => {
    switch(type){
        case ACTIONS.USERNAME:
            return {...state, username: payload.target.value}
        case ACTIONS.PASSWORD:
            return {...state, password: payload.target.value}
        case ACTIONS.DETAILS:
            return {...state, details: payload}
        case ACTIONS.ERR:
            return {...state, err: payload}
        default:
            return state
    }
}

const LoginPage = ({navigate}) => {
    const [newState, dispatch] = useReducer(reducer, initialState)
    const dispatcher = useDispatch()
    const SubmitHandler = () => {
        if(newState.username === "" || newState.password === ""){
            dispatch({type:ACTIONS.ERR, payload: "Fields must not be Empty!"})
        } else {
            axios.get("http://localhost:8080/DailyPrice/dailyprice")
                .then(res => {
                    let val = res.data[0]
                    if(val !== undefined){
                        dispatcher(setGoldPrice(val[0]))
                        dispatcher(setSilverPrice(val[1]))
                    }
                }).catch(err => console.log(err))
            axios.get("http://localhost:8080/OrderTaking/pendingorders")
                .then(res => {dispatcher(setPendingOrders(res.data))}).catch(err => console.log(err))
            axios.get("http://localhost:8080/PaymentInfo/pendingtransactions")
                .then(res => {dispatcher(setPendingTransactions(res.data))}).catch(err => console.log(err))
            axios.get("http://localhost:8080/EmployeeInfo/getlogininfo")
                .then(res => {
                    if(res.data[0] === undefined){
                        dispatch({type:ACTIONS.ERR, payload: "Invalid Login Details"})
                    } else {
                        res.data.forEach(element => {
                            if(newState.username === element[0] && newState.password === element[1]){
                                dispatcher(setEmployeeName(element[2]))
                                dispatch({type:ACTIONS.DETAILS, payload: res.data})
                                navigate("/homepage")
                            } else if(newState.username === element[0] && newState.password !== element[1]){
                                dispatch({type:ACTIONS.ERR, payload: "Enter Valid Password"})
                            } else if(newState.username !== element[0] && newState.password === element[1]){
                                dispatch({type:ACTIONS.ERR, payload: "Enter Valid Username"})
                            } else {
                                dispatch({type:ACTIONS.ERR, payload: "Invalid Login Details"})
                            }
                        });
                    }
                }).catch(err => console.log(err))

            dispatcher(setStatusShow(true))
        }
    }

    return(
        <div className="row d-flex flex-row justify-content-center mt-5">
            <div className="row"><h5 className="text-danger d-flex flex-row justify-content-center">{newState.err}</h5></div>
            <div className="col-4">
                <Card className="mycard" style={{"backgroundColor": "rgba(0, 0, 0, 0.20)"}}>
                    <Card.Body>
                        <Form>
                            <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">UserName</Form.Label>
                                <Form.Control type="email" onChange={e => {
                                    dispatch({type:ACTIONS.USERNAME, payload: e})
                                    if(newState.err !== ""){dispatch({type:ACTIONS.ERR, payload: ""})}
                                    }}/>
                            </Form.Group>
                            <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">Password</Form.Label>
                                <Form.Control id="password" type="password" onKeyDown={e => {
                                    if(e.key === "Enter"){SubmitHandler()}
                                }} onChange={e => {
                                    dispatch({type:ACTIONS.PASSWORD, payload: e})
                                    if(newState.err !== ""){dispatch({type:ACTIONS.ERR, payload: ""})}
                                    }}/>
                            </Form.Group>
                            <div className="d-flex justify-content-center m-3">
                                <Button variant="primary" className="mt-3 mb-3" onClick={SubmitHandler}>Submit</Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default LoginPage;