import axios from "axios";
import React, { useReducer } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setGoldPrice, setSilverPrice } from "../features/DailyPrice/DailyPriceSlice";

const initialState = {
    username: "",
    password: ""
}

const ACTIONS = {
    USERNAME: "USERNAME",
    PASSWORD: "PASSWORD"
}

const reducer = (state, {type, payload}) => {
    switch(type){
        case ACTIONS.USERNAME:
            return {...state, username: payload.target.value}
        case ACTIONS.PASSWORD:
            return {...state, password: payload.target.value}
        default:
            return state
    }
}

const LoginPage = ({navigate}) => {
    const [newState, dispatch] = useReducer(reducer, initialState)
    const dispatcher = useDispatch()
    const SubmitHandler = () => {
        navigate("/homepage")
        axios.get("http://localhost:8080/DailyPrice/dailyprice")
            .then(res => {
                let val = res.data[0]
                if(val !== undefined){
                    dispatcher(setGoldPrice(val[0]))
                    dispatcher(setSilverPrice(val[1]))
                }
            })
            .catch(err => console.log(err))
        
        axios.get("http://localhost:8080/EmployeeInfo/getlogininfo")
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return(
        <div className="row d-flex flex-row justify-content-center mt-5">
            <div className="col-4">
                <Card className="mycard" style={{"backgroundColor": "rgba(0, 0, 0, 0.20)"}}>
                    <Card.Body>
                        <Form>
                            <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">UserName</Form.Label>
                                <Form.Control type="email" onChange={e => dispatch({type:ACTIONS.USERNAME, payload: e})}/>
                            </Form.Group>
                            <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">Password</Form.Label>
                                <Form.Control type="password" onChange={e => dispatch({type:ACTIONS.PASSWORD, payload: e})}/>
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