import axios from "axios";
import React, { useReducer } from "react";
import { Button, Card, Container, Form, Modal, Nav, Table } from "react-bootstrap";
import PaymentDetails from "./PaymentDetails";

const initialState = {
    paymentId: "",
    customerFullName: "",
    customerMobile: "",
    tableShow: false,
    transin: {},
    show1: false,
    show2: false,
    show3: false,
    val: true,
    transShow1: true,
    transShow2: false,
    transShow3: false,
    pendingTransDetails: [],
    completedTransDetails: [],
    cancelledTransDetails: [],
    validId: false,
    validName: false,
    validmobile: false
}

const ACTIONS = {
    PAYMENT_ID: "PAYMENT_ID",
    CUSTOMER_FULL_NAME: "CUSTOMER_FULL_NAME",
    CUSTOMER_MOBILE: "CUSTOMER_MOBILE",
    TABLE_SHOW: "TABLE_SHOW",
    TRANS_IN: "TRANS_IN",
    SHOW1: "SHOW1",
    SHOW2: "SHOW2",
    SHOW3: "SHOW3",
    TRANS_SHOW1: "TRANS_SHOW1",
    TRANS_SHOW2: "TRANS_SHOW2",
    TRANS_SHOW3: "TRANS_SHOW3",
    PENDING_TRANS_DETAILS: "PENDING_TRANS_DETAILS",
    COMPLETED_TRANS_DETAILS: "COMPLETED_TRANS_DETAILS",
    CANCELLED_TRANS_DETAILS: "CANCELLED_TRANS_DETAILS",
    VAL: "VAL",
    VALID_ID: "VALID_ID",
    VALID_NAME: "VALID_NAME",
    VALID_MOBILE: "VALID_MOBILE"
}

const reducer = (state, {type,payload}) => {
    switch(type){
        case ACTIONS.PAYMENT_ID:
            return {...state, paymentId: payload}
        case ACTIONS.CUSTOMER_FULL_NAME:
            return {...state, customerFullName: payload.toLowerCase()}
        case ACTIONS.CUSTOMER_MOBILE:
            return {...state, customerMobile: payload}
        case ACTIONS.TABLE_SHOW:
            return {...state, tableShow: payload}
        case ACTIONS.PENDING_TRANS_DETAILS:
            return {...state, pendingTransDetails: payload}
        case ACTIONS.COMPLETED_TRANS_DETAILS:
            return {...state, completedTransDetails: payload}
        case ACTIONS.CANCELLED_TRANS_DETAILS:
            return {...state, cancelledTransDetails: payload}
        case ACTIONS.TRANS_IN:
            return {...state, transin: payload}
        case ACTIONS.SHOW1:
            return {...state, show1: payload}
        case ACTIONS.SHOW2:
            return {...state, show2: payload}
        case ACTIONS.SHOW3:
            return {...state, show3: payload}
        case ACTIONS.TRANS_SHOW1:
            return {...state, transShow1: payload}
        case ACTIONS.TRANS_SHOW2:
            return {...state, transShow2: payload}
        case ACTIONS.TRANS_SHOW3:
            return {...state, transShow3: payload}
        case ACTIONS.VAL:
            return {...state, val: payload}
        case ACTIONS.VALID_ID:
            return {...state, validId: payload}
        case ACTIONS.VALID_MOBILE:
            return {...state, validmobile: payload}
        case ACTIONS.VALID_NAME:
            return {...state, validName: payload}
        default:
            return state
    }
}

const TransactionInfo = ({navigate}) => {

    const [newState, dispatch] = useReducer(reducer, initialState)

    const handleClose1 = () => dispatch({type:ACTIONS.SHOW1, payload: false})
    const handleClose2 = () => dispatch({type:ACTIONS.SHOW2, payload: false})
    const handleClose3 = () => dispatch({type:ACTIONS.SHOW3, payload: false})
    const handleTableShow = () => dispatch({type:ACTIONS.TABLE_SHOW, payload: false})

    return(
        <>
        <Container>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb flex-nowrap">
                <li className="breadcrumb-item fw-bold text-truncate"><p style={{"cursor":"pointer"}} onClick={() => {navigate('/homepage')}}>Home</p></li>
                <li className="breadcrumb-item fw-bold text-truncate"><p style={{"cursor":"pointer"}} onClick={() => {navigate('/searchinfo')}}>SearchInfo</p></li>
                <li className="breadcrumb-item active text-white fw-bold text-truncate" aria-current="page">SearchTransaction</li>
                </ol>
            </nav>
            <Modal show={newState.tableShow} onHide={handleTableShow} className="modal-xl">
                <Modal.Header closeButton>
                    <Modal.Title>Transaction Details</Modal.Title>
                </Modal.Header>
                <Modal.Body  style={{height: "400px", overflow: "hidden", overflowY: "auto"}}>
                <Nav className="nav-tabs">
                        <Nav.Link active= {newState.transShow1 ? true : false} onClick={() => {
                        dispatch({type:ACTIONS.TRANS_SHOW3, payload: false})
                        dispatch({type:ACTIONS.TRANS_SHOW2, payload: false})
                        dispatch({type:ACTIONS.TRANS_SHOW1, payload: true})
                    }}>Pending</Nav.Link>
                        <Nav.Link active= {newState.transShow2 ? true : false} onClick={() => {
                        dispatch({type:ACTIONS.TRANS_SHOW3, payload: false})
                        dispatch({type:ACTIONS.TRANS_SHOW1, payload: false})
                        dispatch({type:ACTIONS.TRANS_SHOW2, payload: true})
                    }}>Completed</Nav.Link>
                        <Nav.Link active= {newState.transShow3 ? true : false} onClick={() => {
                        dispatch({type:ACTIONS.TRANS_SHOW2, payload: false})
                        dispatch({type:ACTIONS.TRANS_SHOW1, payload: false})
                        dispatch({type:ACTIONS.TRANS_SHOW3, payload: true})
                    }}>Cancelled</Nav.Link>
                    </Nav>
                    {
                        newState.transShow1 ? (
                            (newState.pendingTransDetails[0] === undefined) ? (
                                <p className="d-flex justify-content-center text-danger mt-5">Transactions not found!</p>
                            ) : (
                                <Table className="table-hover w-100 mt-2">
                                    <thead>
                                        <tr>
                                            <th scope="col">Payment Id</th>
                                            <th scope="col">Customer Full Name</th>
                                            <th scope="col">Customer Mobile</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            newState.pendingTransDetails.map((info, index) => {
                                                return(
                                                    <tr key={index} style={{cursor: "pointer"}} onClick={() => {
                                                        dispatch({type:ACTIONS.TRANS_IN, payload: info})
                                                        dispatch({type:ACTIONS.SHOW1, payload: true})
                                                    }}>
                                                        <td>{info.paymentId}</td>
                                                        <td>{info.customerFullName}</td>
                                                        <td>{info.customerMobile}</td>
                                                        <td>{info.paymentDescription}</td>
                                                        <td>{info.status}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            )
                        ) : <></>
                    }
                    {
                        newState.transShow2 ? (
                            (newState.completedTransDetails[0] === undefined) ? (
                                <p className="d-flex justify-content-center text-danger mt-5">Transactions not found!</p>
                            ) : (
                                <Table className="table-hover w-100 mt-2">
                                    <thead>
                                        <tr>
                                            <th scope="col">Payment Id</th>
                                            <th scope="col">Customer Full Name</th>
                                            <th scope="col">Customer Mobile</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            newState.completedTransDetails.map((info, index) => {
                                                return(
                                                    <tr key={index} style={{cursor: "pointer"}} onClick={() => {
                                                        dispatch({type:ACTIONS.TRANS_IN, payload: info})
                                                        dispatch({type:ACTIONS.SHOW1, payload: true})
                                                    }}>
                                                        <td>{info.paymentId}</td>
                                                        <td>{info.customerFullName}</td>
                                                        <td>{info.customerMobile}</td>
                                                        <td>{info.paymentDescription}</td>
                                                        <td>{info.status}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            )
                        ) : <></>
                    }
                    {
                        newState.transShow3 ? (
                            (newState.cancelledTransDetails[0] === undefined) ? (
                                <p className="d-flex justify-content-center text-danger mt-5">Transactions not found!</p>
                            ) : (
                                <Table className="table-hover w-100 mt-2">
                                    <thead>
                                        <tr>
                                            <th scope="col">Payment Id</th>
                                            <th scope="col">Customer Full Name</th>
                                            <th scope="col">Customer Mobile</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            newState.cancelledTransDetails.map((info, index) => {
                                                return(
                                                    <tr key={index} style={{cursor: "pointer"}} onClick={() => {
                                                        dispatch({type:ACTIONS.TRANS_IN, payload: info})
                                                        dispatch({type:ACTIONS.SHOW1, payload: true})
                                                    }}>
                                                        <td>{info.paymentId}</td>
                                                        <td>{info.customerFullName}</td>
                                                        <td>{info.customerMobile}</td>
                                                        <td>{info.paymentDescription}</td>
                                                        <td>{info.status}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            )
                        ) : <></>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleTableShow}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={newState.show2} onHide={handleClose2} className="modal-xl">
                <Modal.Header closeButton>
                    <Modal.Title>Transaction Update</Modal.Title>
                </Modal.Header>
                <Modal.Body  style={{height: "500px", overflow: "hidden", overflowY: "auto"}}>
                    <PaymentDetails transin = {newState.transin} showMain={newState.val}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={newState.show3} onHide={handleClose3}>
                <Modal.Header closeButton>
                    <Modal.Title>Transaction Doesn't Exist</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose3}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={newState.show1} onHide={handleClose1}>
                <Modal.Header closeButton>
                <Modal.Title>Transaction Details</Modal.Title>
                </Modal.Header>
                <Modal.Body  style={{height: "500px", overflow: "hidden", overflowY: "auto"}}>
                <Table className="table-hover w-100 mt-1 small">
                <tbody>
                        <tr>
                            <th>Payment Id</th>
                            <td>{newState.transin.paymentId}</td>
                        </tr>
                        <tr>
                            <th>Transaction Type</th>
                            <td>{newState.transin.transactionType}</td>
                        </tr>
                        <tr>
                            <th>Payment Purpose</th>
                            <td>{newState.transin.paymentPurpose}</td>
                        </tr>
                        <tr>
                            <th>Sent Type</th>
                            <td>{newState.transin.sentType}</td>
                        </tr>
                        <tr>
                            <th>Received Type</th>
                            <td>{newState.transin.paymentType}</td>
                        </tr>
                        <tr>
                            <th>Customer Name</th>
                            <td>{newState.transin.customerFullName}</td>
                        </tr>
                        <tr>
                            <th>Customer Mobile</th>
                            <td>{newState.transin.customerMobile}</td>
                        </tr>
                        {
                            (newState.transin.transactionType === "Order Related") ? (
                                <>
                                <tr>
                                    <th>Order Id</th>
                                    <td>{newState.transin.orderId}</td>
                                </tr>
                                <tr>
                                    <th>Order Price</th>
                                    <td>{newState.transin.orderPrice}</td>
                                </tr>
                                </>
                            ) : <></>
                        }
                        <tr>
                            <th>Payment Date</th>
                            <td>{newState.transin.paymentDate}</td>
                        </tr>
                        <tr>
                            <th>Gold Weight</th>
                            <td>{newState.transin.goldWeight}</td>
                        </tr>
                        <tr>
                            <th>Silver Weight</th>
                            <td>{newState.transin.silverWeight}</td>
                        </tr>
                        <tr>
                            <th>Amount</th>
                            <td>{newState.transin.amountReceived}</td>
                        </tr>
                        <tr>
                            <th>Status</th>
                            <td>{newState.transin.status}</td>
                        </tr>
                        <tr>
                            <th>Customer Due Status</th>
                            <td>{newState.transin.customerDueStatus}</td>
                        </tr>
                        {
                            (newState.transin.customerDueAmount !== "") ? (
                                <tr>
                                    <th>Customer Due Amount</th>
                                    <td>{newState.transin.customerDueAmount}</td>
                                </tr>
                            ) : <></>
                        }
                        {
                            (newState.transin.customerDueGold !== "") ? (
                                <tr>
                                    <th>Customer Due Gold</th>
                                    <td>{newState.transin.customerDueGold}</td>
                                </tr>
                            ) : <></>
                        }
                        {
                            (newState.transin.customerDueSilver !== "") ? (
                                <tr>
                                    <th>Customer Due Silver</th>
                                    <td>{newState.transin.customerDueSilver}</td>
                                </tr>
                            ) : <></>
                        }
                        <tr>
                            <th>RRJ Due Status</th>
                            <td>{newState.transin.rrjDueStatus}</td>
                        </tr>
                        {
                            (newState.transin.rrjDueAmount !== "") ? (
                                <tr>
                                    <th>Customer Due Amount</th>
                                    <td>{newState.transin.customerDueAmount}</td>
                                </tr>
                            ) : <></>
                        }
                        {
                            (newState.transin.rrjDueGold !== "") ? (
                                <tr>
                                    <th>Customer Due Gold</th>
                                    <td>{newState.transin.customerDueGold}</td>
                                </tr>
                            ) : <></>
                        }
                        {
                            (newState.transin.rrjDueSilver !== "") ? (
                                <tr>
                                    <th>Customer Due Silver</th>
                                    <td>{newState.transin.customerDueSilver}</td>
                                </tr>
                            ) : <></>
                        }
                        <tr>
                            <th>Description</th>
                            <td>{newState.transin.paymentDescription}</td>
                        </tr>
                        <tr>
                            <th>Payment Received By</th>
                            <td>{newState.transin.paymentReceivedBy}</td>
                        </tr>
                        <tr>
                            <th>Payment Entered By</th>
                            <td>{newState.transin.paymentEnteredBy}</td>
                        </tr>
                    </tbody>
                </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose1}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => {
                        dispatch({type:ACTIONS.SHOW1, payload: false})
                        dispatch({type:ACTIONS.SHOW2, payload: true})
                        axios.post("http://localhost:8080/ClosingInfo/getdate",{date: newState.transin.paymentDate})
                        .then(res => {
                            dispatch({type:ACTIONS.VAL, payload: res.data})}
                            )
                        .catch(err => console.log(err))
                    }}>
                        Modify
                    </Button>
                </Modal.Footer>
            </Modal>
            <Card className="d-flex justify-content-center w-50">
                <Container>
                    <div className="row">
                        <div className="col">
                            <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">Payment Id</Form.Label>
                                <Form.Control type="text" style={{border: newState.validId ? "3px solid red" : ""}} onChange={e => {
                                    dispatch({type:ACTIONS.PAYMENT_ID, payload: e.target.value})
                                    if(newState.validId){dispatch({type:ACTIONS.VALID_ID, payload: false})}
                                }}/>
                                {
                                    newState.validId ? (<p className="text-danger m-1 small fw-bold">Enter valid Id!</p>) : <></>
                                }
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">Customer Mobile</Form.Label>
                                <Form.Control type="text" style={{border: newState.validMobile ? "3px solid red" : ""}} onChange={e => {
                                    dispatch({type:ACTIONS.CUSTOMER_MOBILE, payload: e.target.value})
                                    if(newState.validMobile){dispatch({type:ACTIONS.VALID_MOBILE, payload: false})}
                                }}/>
                                {
                                    newState.validMobile ? (<p className="text-danger m-1 small fw-bold">Enter valid mobile!</p>) : <></>
                                }
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Customer Full Name</Form.Label>
                            <Form.Control type="text" style={{border: newState.validName ? "3px solid red" : ""}} onChange={e => {
                                dispatch({type:ACTIONS.CUSTOMER_FULL_NAME, payload: e.target.value})
                                if(newState.validName){dispatch({type:ACTIONS.VALID_NAME, payload: false})}
                            }}/>
                            {
                                newState.validName ? (<p className="text-danger m-1 small fw-bold">Enter valid name!</p>) : <></>
                            }
                        </Form.Group>
                    </div>
                    <div className="row m-3">
                        <Button variant="primary" onClick={() => {
                            if(newState.paymentId !== "" && !(/^(\d){14}$/).test(newState.orderId)){dispatch({type:ACTIONS.VALID_ID, payload: true})}
                            else if(newState.customerMobile !== "" && !(/^(\d){10}$/).test(newState.customerMobile)){dispatch({type:ACTIONS.VALID_MOBILE, payload: true})}
                            else if(newState.customerFullName !== "" && !(/[a-zA-Z\s]*/.test(newState.customerFullName))){dispatch({type:ACTIONS.VALID_NAME, payload: true})}
                            else {
                                axios.post("http://localhost:8080/PaymentInfo/gettransaction", newState)
                                    .then(res => {
                                        if(res.data[0] === undefined){
                                            dispatch({type:ACTIONS.SHOW3, payload: true})
                                        } else {
                                            let set1 = new Set()
                                            let set2 = new Set()
                                            let set3 = new Set()
                                            res.data.forEach(element => {
                                                if(element.status === "Pending"){set1.add(element)}
                                                else if(element.status === "Completed"){set2.add(element)}
                                                else if(element.status === "Cancelled"){set3.add(element)}
                                            });
                                            dispatch({type:ACTIONS.PENDING_TRANS_DETAILS, payload: [...set1]})
                                            dispatch({type:ACTIONS.COMPLETED_TRANS_DETAILS, payload: [...set2]})
                                            dispatch({type:ACTIONS.CANCELLED_TRANS_DETAILS, payload: [...set3]})
                                            dispatch({type:ACTIONS.TABLE_SHOW, payload: true})
                                        }
                                    })
                                    .catch(err => console.log(err))
                            }
                        }}>Search</Button>
                    </div>
                </Container>
            </Card>
        </Container>
        </>
    )
}

export default TransactionInfo