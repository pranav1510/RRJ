import axios from "axios";
import React, { useReducer } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

const initialState = {
    date: "",
    cash: "",
    gold: "",
    silver: "",
    account: "",
    status: ""
}

const ACTIONS = {
    DATE: "DATE",
    CASH: "CASH",
    GOLD: "GOLD",
    SILVER: "SILVER",
    ACCOUNT: "ACCOUNT",
    STATUS: "STATUS"
}

const reducer = (state, {type, payload}) => {
    switch(type){
        case ACTIONS.DATE:
            return {...state, date: payload}
        case ACTIONS.CASH:
            return {...state, cash: payload}
        case ACTIONS.GOLD:
            return {...state, gold: payload}
        case ACTIONS.SILVER:
            return {...state, silver: payload}
        case ACTIONS.ACCOUNT:
            return {...state, account: payload}
        case ACTIONS.STATUS:
            return {...state, status: payload}
        default:
            return state
    }
}

const Closing = () => {

    const [newState, dispatch] = useReducer(reducer, initialState)

    return(
        <Card>
            <Container>
            <div className="row"><h5 className="text-success d-flex flex-row justify-content-center">{newState.status}</h5></div>
                <Form>
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Date</Form.Label>
                        <Form.Control type="date" onChange={e => dispatch({type:ACTIONS.DATE, payload: e.target.value})}/>
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Cash</Form.Label>
                        <Form.Control type="text" onChange={e => dispatch({type:ACTIONS.CASH, payload: e.target.value})}/>
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Gold</Form.Label>
                        <Form.Control type="text" onChange={e => dispatch({type:ACTIONS.GOLD, payload: e.target.value})}/>
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Silver</Form.Label>
                        <Form.Control type="text" onChange={e => dispatch({type:ACTIONS.SILVER, payload: e.target.value})}/>
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Account</Form.Label>
                        <Form.Control type="text" onChange={e => dispatch({type:ACTIONS.ACCOUNT, payload: e.target.value})}/>
                    </Form.Group>
                </Form>
                <div className="d-flex justify-content-center m-3">
                    <Button variant="primary" onClick={() => {
                        axios.post("http://localhost:8080/RRJ/ClosingInfo/add", newState)
                            .then(() => {
                                dispatch({type:ACTIONS.STATUS, payload: "Saved Successfully!"})
                                setTimeout(() => {
                                    window.location.reload(false)
                                },1200)
                            })
                            .catch(err => console.log(err))
                    }}>Submit</Button>
                </div>
            </Container>
        </Card>
    )
}

export default Closing