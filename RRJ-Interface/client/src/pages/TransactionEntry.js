import axios from "axios";
import React, { useReducer } from "react";
import { Button, Container, Form } from "react-bootstrap";

const initialState = {
    transactionId: "",
    orderId: "",
    fullName: "",
    mobile: "",
    amount: "",
    goldWeight: "",
    silverWeight: "",
    transactionName: "",
    rrjDueStatus: "",
    rrjDueAmount: "",
    customerDueStatus: "",
    customerDueAmount: "",
    transactionRemarks: "",
    transactionType: "",
    transactionSubject: "",
    transactionStatus: "",
    message: ""
}

const ACTIONS = {
    TRANSACTION_ID: "TRANSACTION_ID",
    ORDER_ID: "ORDER_ID",
    FULL_NAME: "FULL_NAME",
    MOBILE: "MOBILE",
    AMOUNT: "AMOUNT",
    GOLD_WEIGHT: "GOLD_WEIGHT",
    SILVER_WEIGHT: "SILVER_WEIGHT",
    TRANSACTION_NAME: "TRANSACTION_NAME",
    TRANSACTION_REMARKS: "TRANSACTION_REMARKS",
    TRANSACTION_TYPE: "TRANSACTION_TYPE",
    TRANSACTION_SUBJECT: "TRANSACTION_SUBJECT",
    TRANSACTION_STATUS: "TRANSACTION_STATUS",
    MESSAGE: "MESSAGE",
    RRJ_DUE_STATUS: "RRJ_DUE_STATUS",
    RRJ_DUE_AMOUNT: "RRJ_DUE_AMOUNT",
    CUSTOMER_DUE_STATUS: "CUSTOMER_DUE_STATUS",
    CUSTOMER_DUE_AMOUNT: "CUSTOMER_DUE_AMOUNT"
}

const reducer = (state, {type, payload}) => {
    switch(type) {
        case ACTIONS.TRANSACTION_NAME:
            return {...state, transactionName: payload.target.value}
        case ACTIONS.RRJ_DUE_STATUS:
            return {...state, rrjDueStatus: payload}
        case ACTIONS.RRJ_DUE_AMOUNT:
            return {...state, rrjDueAmount: payload.target.value}
        case ACTIONS.CUSTOMER_DUE_STATUS:
            return {...state, customerDueStatus: payload}
        case ACTIONS.CUSTOMER_DUE_AMOUNT:
            return {...state, customerDueAmount: payload.target.value}
        case ACTIONS.TRANSACTION_ID:
            return {...state, transactionId: payload}
        case ACTIONS.FULL_NAME:
            return {...state, fullName: payload.target.value}
        case ACTIONS.MOBILE:
            return {...state, mobile: payload.target.value}
        case ACTIONS.AMOUNT:
            return {...state, amount: payload.target.value}
        case ACTIONS.GOLD_WEIGHT:
            return {...state, goldWeight: payload.target.value}
        case ACTIONS.SILVER_WEIGHT:
            return {...state, silverWeight: payload.target.value}
        case ACTIONS.TRANSACTION_REMARKS:
            return {...state, transactionRemarks: payload.target.value}
        case ACTIONS.TRANSACTION_TYPE:
            return {...state, transactionType: payload}
        case ACTIONS.TRANSACTION_SUBJECT:
            return {...state, transactionSubject: payload}
        case ACTIONS.TRANSACTION_STATUS:
            return {...state, transactionStatus: payload}
        case ACTIONS.MESSAGE:
            return {...state, message: payload}
        default:
            return state
    }
}

const TransactionEntry = ({navigate}) => {

    const [newState, dispatch] = useReducer(reducer, initialState)

    const SubmitHandler = () => {
        axios.post("http://localhost:8080/TransactionInfo/add", newState)
            .then(() => dispatch({type:ACTIONS.MESSAGE, payload: "Transaction saved Successfully!"}))
            .catch(err => console.log(err))
    }

    return(
        <>
        <Container>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb flex-nowrap">
                    <li className="breadcrumb-item fw-bold text-truncate"><p style={{"cursor":"pointer"}} onClick={() => {navigate('/homepage')}}>Home</p></li>
                    <li className="breadcrumb-item fw-bold text-truncate"><p style={{"cursor":"pointer"}} onClick={() => {navigate('/infoentry')}}>InfoEntry__</p></li>
                    <li className="breadcrumb-item active text-white fw-bold text-truncate" aria-current="page">TransactionDetails</li>
                </ol>
            </nav>
            <Form>
                <div className="row"><h5 className="text-success d-flex flex-row justify-content-center">{newState.message}</h5></div>
                <div className="row">
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Transaction Id</Form.Label>
                            <Form.Control type="text" defaultValue={newState.transactionId} disabled/>
                            <Button className="btn btn-secondary mt-2" onClick={() => {
                                const temp = new Date()
                                const time = String(temp.getFullYear()) + String(temp.getMonth() + 1).padStart(2, '0') + String(temp.getDate()).padStart(2, '0') + String(temp.getHours()).padStart(2, '0') + String(temp.getMinutes()).padStart(2, '0') + String(temp.getSeconds()).padStart(2, '0')
                                dispatch({type:ACTIONS.TRANSACTION_ID, payload: time})
                            }}>Get Transaction Id</Button>
                        </Form.Group>
                    </div>
                    <div className="col-6">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Full Name</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.FULL_NAME, payload: e})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Mobile</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.MOBILE, payload: e})} />
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Transaction Name</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.TRANSACTION_NAME, payload: e})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Transaction Type</Form.Label>
                            <Form.Select onChange={e => {
                                dispatch({type:ACTIONS.TRANSACTION_TYPE, payload: e.target.value})
                            }}>
                                <option value=""></option>
                                <option value="Cash">Cash</option>
                                <option value="UPI">UPI</option>
                                <option value="Account Transfer">Account Transfer</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Transaction Subject</Form.Label>
                            <Form.Select onChange={e => {
                                dispatch({type:ACTIONS.TRANSACTION_SUBJECT, payload: e.target.value})
                            }}>
                                <option value=""></option>
                                <option value="Purchasing">Purchasing</option>
                                <option value="Selling">Selling</option>
                                <option value="Borrowing">Borrowing</option>
                                <option value="Lending">Lending</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Transaction Status</Form.Label>
                            <Form.Select onChange={e => {
                                    dispatch({type:ACTIONS.TRANSACTION_STATUS, payload: e.target.value})
                                }}>
                                    <option value=""></option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Delivered">Delivered</option>
                                    <option value="Cancelled">Cancelled</option>
                                </Form.Select>
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Amount</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.AMOUNT, payload: e})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Gold Weight</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.GOLD_WEIGHT, payload: e})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Silver Weight</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.SILVER_WEIGHT, payload: e})} />
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Customer Due Status</Form.Label>
                            <Form.Select onChange={e => {
                                    dispatch({type:ACTIONS.CUSTOMER_DUE_STATUS, payload: e.target.value})
                                }}>
                                    <option value=""></option>
                                    <option value="No Dues">No Dues</option>
                                    <option value="Due">Due</option>
                                </Form.Select>
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Customer Due Amount</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.CUSTOMER_DUE_AMOUNT, payload: e})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">RRJ Due Status</Form.Label>
                            <Form.Select onChange={e => {
                                    dispatch({type:ACTIONS.RRJ_DUE_STATUS, payload: e.target.value})
                                }}>
                                    <option value=""></option>
                                    <option value="No Dues">No Dues</option>
                                    <option value="Due">Due</option>
                                </Form.Select>
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">RRJ Due Amount</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.RRJ_DUE_AMOUNT, payload: e})} />
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Transaction Remarks</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.TRANSACTION_REMARKS, payload: e})} />
                        </Form.Group>
                    </div>
                </div>
                <div className="d-flex justify-content-center m-3">
                    <Button variant="primary" className="mt-3 mb-3" onClick={SubmitHandler}>Submit Transaction</Button>
                </div>
            </Form>
        </Container>
        </>
    )
}

export default TransactionEntry