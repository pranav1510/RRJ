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
    rrjDueStatus: "",
    rrjDueAmount: "",
    customerDueStatus: "",
    customerDueAmount: "",
    transactionDescription: "",
    transactionType: "",
    paymentType: "",
    receivedType: "",
    transactionStatus: "",
    message: "",
    transactionDoneBy: "",
    transactionEnteredBy: "",
    transactionDate: "",
    cashIn: "",
    cashOut: "",
    goldIn: "",
    goldOut: "",
    silverIn: "",
    silverOut: "",
    accountIn: "",
    accountOut: "",
    receiveOptions: [],
    sentOptions: []
}

const ACTIONS = {
    TRANSACTION_DATE: "TRANSACTION_DATE",
    TRANSACTION_ID: "TRANSACTION_ID",
    ORDER_ID: "ORDER_ID",
    FULL_NAME: "FULL_NAME",
    MOBILE: "MOBILE",
    AMOUNT: "AMOUNT",
    GOLD_WEIGHT: "GOLD_WEIGHT",
    SILVER_WEIGHT: "SILVER_WEIGHT",
    TRANSACTION_DESCRIPTION: "TRANSACTION_DESCRIPTION",
    PAYMENT_TYPE: "PAYMENT_TYPE",
    TRANSACTION_TYPE: "TRANSACTION_TYPE",
    TRANSACTION_STATUS: "TRANSACTION_STATUS",
    MESSAGE: "MESSAGE",
    RRJ_DUE_STATUS: "RRJ_DUE_STATUS",
    RRJ_DUE_AMOUNT: "RRJ_DUE_AMOUNT",
    CUSTOMER_DUE_STATUS: "CUSTOMER_DUE_STATUS",
    CUSTOMER_DUE_AMOUNT: "CUSTOMER_DUE_AMOUNT",
    TRANSACTION_DONE_BY: "TRANSACTION_DONE_BY",
    TRANSACTION_ENTERED_BY: "TRANSACTION_ENTERED_BY",
    RECEIVED_TYPE: "RECEIVED_TYPE",
    CASH_IN: "CASH_IN",
    CASH_OUT: "CASH_OUT",
    GOLD_IN: "GOLD_IN",
    GOLD_OUT: "GOLD_OUT",
    SILVER_IN: "SILVER_IN",
    SILVER_OUT: "SILVER_OUT",
    ACCOUNT_IN: "ACCOUNT_IN",
    ACCOUNT_OUT: "ACCOUNT_OUT",
    RECEIVE_OPTIONS : "RECEIVE_OPTIONS",
    SENT_OPTIONS: "SENT_OPTIONS"
}

const reducer = (state, {type, payload}) => {
    switch(type) {
        case ACTIONS.TRANSACTION_DATE:
            return {...state, transactionDate: String(payload.target.value)}
        case ACTIONS.TRANSACTION_ENTERED_BY:
            return {...state, transactionEnteredBy: payload.target.value}
        case ACTIONS.TRANSACTION_DONE_BY:
            return {...state, transactionDoneBy: payload.target.value}
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
        case ACTIONS.TRANSACTION_DESCRIPTION:
            return {...state, transactionDescription: payload.target.value}
        case ACTIONS.PAYMENT_TYPE:
            return {...state, paymentType: payload}
        case ACTIONS.RECEIVED_TYPE:
            return {...state, receivedType: payload}
        case ACTIONS.TRANSACTION_TYPE:
            return {...state, transactionType: payload}
        case ACTIONS.TRANSACTION_STATUS:
            return {...state, transactionStatus: payload}
        case ACTIONS.MESSAGE:
            return {...state, message: payload}
        case ACTIONS.CASH_IN:
            return {...state, cashIn: payload}
        case ACTIONS.CASH_OUT:
            return {...state, cashOut: payload}
        case ACTIONS.GOLD_IN:
            return {...state, goldIn: payload}
        case ACTIONS.GOLD_OUT:
            return {...state, goldOut: payload}
        case ACTIONS.SILVER_IN:
            return {...state, silverIn: payload}
        case ACTIONS.SILVER_OUT:
            return {...state, silverOut: payload}
        case ACTIONS.ACCOUNT_IN:
            return {...state, accountIn: payload}
        case ACTIONS.ACCOUNT_OUT:
            return {...state, accountOut: payload}
        case ACTIONS.RECEIVE_OPTIONS:
            return {...state, receiveOptions: payload}
        case ACTIONS.SENT_OPTIONS:
            return {...state, sentOptions: payload}
        default:
            return state
    }
}

const TransactionEntry = ({navigate}) => {

    const [newState, dispatch] = useReducer(reducer, initialState)
    const options1 = ["Gold", "Silver"]
    const options2 = ["Cash", "Acnt Transfer"]
    const options3 = ["Cash", "Gold", "Gold and Cash", "Gold and Acnt Transfer", "Silver", "Silver and Cash", "Silver and Acnt Transfer", "Acnt Transfer"]

    const SubmitHandler = () => {
        if(newState.transactionType === "Buying"){
            if(newState.receivedType === "Gold" && newState.paymentType === "Cash"){
                axios.post("http://localhost:8080/DayInfo/add", {
                    cashOut: newState.amount,
                    goldIn: newState.goldWeight,
                    id: newState.transactionId,
                    date: newState.transactionDate
                }).then(() => { console.log("saved")}).catch(err => console.log(err))
            } else if(newState.receivedType === "Silver" && newState.paymentType === "Cash"){
                axios.post("http://localhost:8080/DayInfo/add", {
                    cashOut: newState.amount,
                    silverIn: newState.silverWeight,
                    id: newState.transactionId,
                    date: newState.transactionDate
                }).then(() => { console.log("saved")}).catch(err => console.log(err))
            } else if(newState.receivedType === "Gold" && newState.paymentType === "Acnt Transfer"){
                axios.post("http://localhost:8080/DayInfo/add", {
                    accountOut: newState.amount,
                    goldIn: newState.goldWeight,
                    id: newState.transactionId,
                    date: newState.transactionDate
                }).then(() => { console.log("saved")}).catch(err => console.log(err))
            } else if(newState.receivedType === "Silver" && newState.paymentType === "Acnt Transfer"){
                axios.post("http://localhost:8080/DayInfo/add", {
                    accountOut: newState.amount,
                    silverIn: newState.silverWeight,
                    id: newState.transactionId,
                    date: newState.transactionDate
                }).then(() => { console.log("saved")}).catch(err => console.log(err))
            }}
        if(newState.transactionType === "Selling"){
            if(newState.receivedType === "Cash" && newState.paymentType === "Gold"){
                axios.post("http://localhost:8080/DayInfo/add", {
                    cashIn: newState.amount,
                    goldOut: newState.goldWeight,
                    id: newState.transactionId,
                    date: newState.transactionDate
                }).then(() => { console.log("saved")}).catch(err => console.log(err))
            } else if(newState.receivedType === "Acnt Transfer" && newState.paymentType === "Gold"){
                axios.post("http://localhost:8080/DayInfo/add", {
                    accountIn: newState.amount,
                    goldOut: newState.goldWeight,
                    id: newState.transactionId,
                    date: newState.transactionDate
                }).then(() => { console.log("saved")}).catch(err => console.log(err))
            } else if(newState.receivedType === "Cash" && newState.paymentType === "Silver"){
                axios.post("http://localhost:8080/DayInfo/add", {
                    cashIn: newState.amount,
                    silverOut: newState.silverWeight,
                    id: newState.transactionId,
                    date: newState.transactionDate
                }).then(() => { console.log("saved")}).catch(err => console.log(err))
            } else if(newState.receivedType === "Acnt Transfer" && newState.paymentType === "Silver"){
                axios.post("http://localhost:8080/DayInfo/add", {
                    accountIn: newState.amount,
                    silverOut: newState.silverWeight,
                    id: newState.transactionId,
                    date: newState.transactionDate
                }).then(() => { console.log("saved")}).catch(err => console.log(err))
            }}
        if(newState.transactionType === "Borrowing" || newState.transactionType === "Lended Repaying"){
            if(newState.receivedType === "Cash"){
                axios.post("http://localhost:8080/DayInfo/add", {
                    cashIn: newState.amount,
                    id: newState.transactionId,
                    date: newState.transactionDate
                }).then(() => { console.log("saved")}).catch(err => console.log(err))
            }
            else if(newState.receivedType === "Gold"){
                axios.post("http://localhost:8080/DayInfo/add", {
                    goldIn: newState.goldWeight,
                    id: newState.transactionId,
                    date: newState.transactionDate
                }).then(() => { console.log("saved")}).catch(err => console.log(err))
            }
            else if(newState.receivedType === "Silver"){
                axios.post("http://localhost:8080/DayInfo/add", {
                    silverIn: newState.silverWeight,
                    id: newState.transactionId,
                    date: newState.transactionDate
                }).then(() => { console.log("saved")}).catch(err => console.log(err))
            }
            else if(newState.receivedType === "Acnt Transfer"){
                axios.post("http://localhost:8080/DayInfo/add", {
                    accountIn: newState.amount,
                    id: newState.transactionId,
                    date: newState.transactionDate
                }).then(() => { console.log("saved")}).catch(err => console.log(err))
            }
            else if(newState.receivedType === "Gold and Cash"){
                axios.post("http://localhost:8080/DayInfo/add", {
                    cashIn: newState.amount,
                    goldIn: newState.goldWeight,
                    id: newState.transactionId,
                    date: newState.transactionDate
                }).then(() => { console.log("saved")}).catch(err => console.log(err))
            } else if(newState.receivedType === "Gold and Acnt Transfer"){
                axios.post("http://localhost:8080/DayInfo/add", {
                    accountIn: newState.amount,
                    goldIn: newState.goldWeight,
                    id: newState.transactionId,
                    date: newState.transactionDate
                }).then(() => { console.log("saved")}).catch(err => console.log(err))
            } else if(newState.receivedType === "Silver and Cash"){
                axios.post("http://localhost:8080/DayInfo/add", {
                    cashIn: newState.amount,
                    silverIn: newState.silverWeight,
                    id: newState.transactionId,
                    date: newState.transactionDate
                }).then(() => { console.log("saved")}).catch(err => console.log(err))
            } else if(newState.receivedType === "Silver and Acnt Transfer"){
                axios.post("http://localhost:8080/DayInfo/add", {
                    accountIn: newState.amount,
                    silverIn: newState.silverWeight,
                    id: newState.transactionId,
                    date: newState.transactionDate
                }).then(() => { console.log("saved")}).catch(err => console.log(err))
            }}
        if(newState.transactionType === "Lending" || newState.transactionType === "Repaying Borrowed" || newState.transactionType === "General Expenses"){
            if(newState.paymentType === "Cash"){
                axios.post("http://localhost:8080/DayInfo/add", {
                    cashOut: newState.amount,
                    id: newState.transactionId,
                    date: newState.transactionDate
                }).then(() => { console.log("saved")}).catch(err => console.log(err))
            }
            else if(newState.paymentType === "Gold"){
                axios.post("http://localhost:8080/DayInfo/add", {
                    goldOut: newState.goldWeight,
                    id: newState.transactionId,
                    date: newState.transactionDate
                }).then(() => { console.log("saved")}).catch(err => console.log(err))
            }
            else if(newState.paymentType === "Silver"){
                axios.post("http://localhost:8080/DayInfo/add", {
                    silverOut: newState.silverWeight,
                    id: newState.transactionId,
                    date: newState.transactionDate
                }).then(() => { console.log("saved")}).catch(err => console.log(err))
            }
            else if(newState.paymentType === "Acnt Transfer"){
                axios.post("http://localhost:8080/DayInfo/add", {
                    accountOut: newState.amount,
                    id: newState.transactionId,
                    date: newState.transactionDate
                }).then(() => { console.log("saved")}).catch(err => console.log(err))
            }
            else if(newState.paymentType === "Gold and Cash"){
                axios.post("http://localhost:8080/DayInfo/add", {
                    cashOut: newState.amount,
                    goldOut: newState.goldWeight,
                    id: newState.transactionId,
                    date: newState.transactionDate
                }).then(() => { console.log("saved")}).catch(err => console.log(err))
            } else if(newState.paymentType === "Gold and Acnt Transfer"){
                axios.post("http://localhost:8080/DayInfo/add", {
                    accountOut: newState.amount,
                    goldOut: newState.goldWeight,
                    id: newState.transactionId,
                    date: newState.transactionDate
                }).then(() => { console.log("saved")}).catch(err => console.log(err))
            } else if(newState.paymentType === "Silver and Cash"){
                axios.post("http://localhost:8080/DayInfo/add", {
                    cashOut: newState.amount,
                    silverOut: newState.silverWeight,
                    id: newState.transactionId,
                    date: newState.transactionDate
                }).then(() => { console.log("saved")}).catch(err => console.log(err))
            } else if(newState.paymentType === "Silver and Acnt Transfer"){
                axios.post("http://localhost:8080/DayInfo/add", {
                    accountOut: newState.amount,
                    silverOut: newState.silverWeight,
                    id: newState.transactionId,
                    date: newState.transactionDate
                }).then(() => { console.log("saved")}).catch(err => console.log(err))
            }}
        if(newState.transactionType === "Self Transfer"){
            if(newState.paymentType === "Cash" && newState.receivedType === "Acnt Transfer"){
                axios.post("http://localhost:8080/DayInfo/add", {
                    cashOut: newState.amount,
                    accountIn: newState.amount,
                    id: newState.transactionId,
                    date: newState.transactionDate
                }).then(() => { console.log("saved")}).catch(err => console.log(err))
            } else if(newState.paymentType === "Acnt Transfer" && newState.receivedType === "Cash") {
                axios.post("http://localhost:8080/DayInfo/add", {
                    cashIn: newState.amount,
                    accountOut: newState.amount,
                    id: newState.transactionId,
                    date: newState.transactionDate
                }).then(() => { console.log("saved")}).catch(err => console.log(err))
            }
        }
        axios.post("http://localhost:8080/TransactionInfo/add", newState)
            .then(() => {
                dispatch({type:ACTIONS.MESSAGE, payload: "Transaction saved Successfully!"})
            }).catch(err => console.log(err))
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
                    <div className="col-5">
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
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Transaction Date</Form.Label>
                            <Form.Control type="date" onChange={e => dispatch({type: ACTIONS.TRANSACTION_DATE, payload: e})}/>
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Transaction Type</Form.Label>
                            <Form.Select onChange={e => {
                                dispatch({type:ACTIONS.TRANSACTION_TYPE, payload: e.target.value})
                                if(e.target.value === "Buying"){
                                    dispatch({type:ACTIONS.SENT_OPTIONS, payload: options2})
                                    dispatch({type:ACTIONS.RECEIVE_OPTIONS, payload: options1})    
                                } else if(e.target.value === "Selling"){
                                    dispatch({type:ACTIONS.SENT_OPTIONS, payload: options1})
                                    dispatch({type:ACTIONS.RECEIVE_OPTIONS, payload: options2})
                                } else if(e.target.value === "Borrowing" || e.target.value === "Lended Repaying"){
                                    dispatch({type:ACTIONS.SENT_OPTIONS, payload: []})
                                    dispatch({type:ACTIONS.RECEIVE_OPTIONS, payload: options3})
                                } else if(e.target.value === "Lending" || e.target.value === "Repaying Borrowed"){
                                    dispatch({type:ACTIONS.SENT_OPTIONS, payload: options3})
                                    dispatch({type:ACTIONS.RECEIVE_OPTIONS, payload: []})
                                } else if(e.target.value === "Self Transfer"){
                                    dispatch({type:ACTIONS.SENT_OPTIONS, payload: options2})
                                    dispatch({type:ACTIONS.RECEIVE_OPTIONS, payload: options2})
                                }
                            }}>
                                <option value=""></option>
                                <option value="Buying">Buying</option>
                                <option value="Selling">Selling</option>
                                <option value="Borrowing">Borrowing</option>
                                <option value="Repaying Borrowed">Repaying Borrowed</option>
                                <option value="Lending">Lending</option>
                                <option value="Lended Repaying">Lended Repaying</option>
                                <option value="General Expenses">General Expenses</option>
                                <option value="Self Transfer">Self Transfer</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Sent Type</Form.Label>
                            <Form.Select onChange={e => {
                                dispatch({type:ACTIONS.PAYMENT_TYPE, payload: e.target.value})
                            }}>
                                <option value=""></option>
                                {
                                    newState.sentOptions.map((val, index) => {
                                        return(
                                            <option key={index} value={val}>{val}</option>
                                        )
                                    })
                                }
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Received Type</Form.Label>
                            <Form.Select onChange={e => {
                                dispatch({type:ACTIONS.RECEIVED_TYPE, payload: e.target.value})
                            }}>
                                <option value=""></option>
                                {
                                    newState.receiveOptions.map((val, index) => {
                                        return(
                                            <option key={index} value={val}>{val}</option>
                                        )
                                    })
                                }
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
                                    <option value="In Progress">Pending</option>
                                    <option value="Completed">Completed</option>
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
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Transaction Entered By</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.TRANSACTION_ENTERED_BY, payload: e})} />
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
                    <div className="col-3">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Transaction Done By</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.TRANSACTION_DONE_BY, payload: e})} />
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Transaction Description</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.TRANSACTION_DESCRIPTION, payload: e})} />
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