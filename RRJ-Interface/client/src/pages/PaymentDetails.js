import axios from "axios";
import React, { useReducer } from "react";
import { Container, Form, Button } from "react-bootstrap";

const initialState = {
    exchangeReceivedType: "",
    exchangeReceivedCost: "",
    orderPrice: "",
    discounut: "",
    amountReceived: "",
    customerDueStatus: "",
    customerDueAmount: "",
    RRJDueStatus: "",
    RRJDueAmount: "",
    paymentRemarks: "",
    paymentType: "",
    paymentReceivedBy: ""
}

const ACTIONS = {
    EXCHANGE_RECEIVED_TYPE: "EXCHANGE_RECEIVED_TYPE",
    EXCHANGE_RECEIVED_COST: "EXCHANGE_RECEIVED_COST",
    ORDER_PRICE: "ORDER_PRICE",
    DISCOUNT: "DISCOUNT",
    AMOUNT_RECEIVED: "AMOUNT_RECEIVED",
    CUSTOMER_DUE_STATUS: "CUSTOMER_DUE_STATUS",
    CUSTOMER_DUE_AMOUNT: "CUSTOMER_DUE_AMOUNT",
    RRJ_DUE_STATUS: "RRJ_DUE_STATUS",
    RRJ_DUE_AMOUNT: "RRJ_DUE_AMOUNT",
    PAYMENT_REMARKS: "PAYMENT_REMARKS",
    PAYMENT_TYPE: "PAYMENT_TYPE",
    PAYMENT_RECEIVED_BY: "PAYMENT_RECEIVED_BY"
}

const reducer = (state, {type, payload}) => {
    switch(type) {
        case ACTIONS.EXCHANGE_RECEIVED_TYPE:
            return {...state, exchangeReceivedType: payload.target.value}
        case ACTIONS.EXCHANGE_RECEIVED_COST:
            return {...state, exchangeReceivedCost: payload.target.value}
        case ACTIONS.ORDER_PRICE:
            return {...state, orderPrice: payload.target.value}
        case ACTIONS.DISCOUNT:
            return {...state, discount: payload.target.value}
        case ACTIONS.AMOUNT_RECEIVED:
            return {...state, amountReceived: payload.target.value}
        case ACTIONS.CUSTOMER_DUE_STATUS:
            return {...state, customerDueStatus: payload.target.value}
        case ACTIONS.CUSTOMER_DUE_AMOUNT:
            return {...state, customerDueAmount: payload.target.value}
        case ACTIONS.RRJ_DUE_STATUS:
            return {...state, RRJDueStatus: payload.target.value}
        case ACTIONS.RRJ_DUE_AMOUNT:
            return {...state, RRJDueStatus: payload.target.value}
        case ACTIONS.PAYMENT_REMARKS:
            return {...state, paymentRemarks: payload.target.value}
        case ACTIONS.PAYMENT_TYPE:
            return {...state, paymentType: payload.target.value}
        case ACTIONS.PAYMENT_RECEIVED_BY:
            return {...state, paymentReceivedBy: payload.target.value}
        default:
            return state
    }
}

const PaymentDetails = ({date}) => {

    const [newState, dispatch] = useReducer(reducer, initialState)

    const SubmitHandler = () => {
        axios.post("http://localhost:8080/PaymentInfo/add", newState)
        .then(() => console.log("new payment info added!"))
        .catch(err => console.log(err))
    }
 
    return(
        <>
        <Container>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
            <li className="breadcrumb-item fw-bold"><a href="/homepage">Home</a></li>
            <li className="breadcrumb-item active text-white fw-bold" aria-current="page">Payment Details</li>
            </ol>
        </nav>
            <Form>
                <div className="row">
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Exchange Received Type</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.EXCHANGE_RECEIVED_TYPE, payload: e})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Exchange Received Cost</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.EXCHANGE_RECEIVED_COST, payload: e})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <fieldset disabled>
                            <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">Payment Date</Form.Label>
                                <Form.Control type="text" value={date} />
                            </Form.Group>
                        </fieldset>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Order Price</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.ORDER_PRICE, payload: e})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Discount</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.DISCOUNT, payload: e})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Amount Received</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.AMOUNT_RECEIVED, payload: e})} />
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Customer Due Status</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.CUSTOMER_DUE_STATUS, payload: e})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Customer Due Amount</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.CUSTOMER_DUE_AMOUNT, payload: e})} />
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">RRJ Due Status</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.RRJ_DUE_STATUS, payload: e})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">RRJDueAmount</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.RRJ_DUE_AMOUNT, payload: e})} />
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Payment Type</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.PAYMENT_TYPE, payload: e})} />
                        </Form.Group>
                    </div>
                    <div className="col-3">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Payment Received By</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.PAYMENT_RECEIVED_BY, payload: e})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Payment Remarks</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.PAYMENT_REMARKS, payload: e})} />
                        </Form.Group>
                    </div>
                </div>
                <div className="d-flex justify-content-center m-3">
                    <Button variant="primary" className="mt-3 mb-3" onClick={SubmitHandler}>Submit Details</Button>
                </div>
            </Form>
        </Container>
        </>
    )
}

export default PaymentDetails