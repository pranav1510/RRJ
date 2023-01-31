import axios from "axios";
import React, { useReducer } from "react";
import { Button, Card, Container, Form, Modal, Table } from "react-bootstrap";
import TransactionEntry from "./TransactionEntry";

const initialState = {
    transactionId: "",
    customerFullName: "",
    customerMobile: "",
    details: [],
    tableShow: false,
    transin: {},
    show1: false,
    show2: false,
    show3: false
}

const ACTIONS = {
    TRANSACTION_ID: "TRANSACTION_ID",
    CUSTOMER_FULL_NAME: "CUSTOMER_FULL_NAME",
    CUSTOMER_MOBILE: "CUSTOMER_MOBILE",
    DETAILS: "DETAILS",
    TABLE_SHOW: "TABLE_SHOW",
    TRANS_IN: "TRANS_IN",
    SHOW1: "SHOW1",
    SHOW2: "SHOW2",
    SHOW3: "SHOW3"
}

const reducer = (state, {type,payload}) => {
    switch(type){
        case ACTIONS.TRANSACTION_ID:
            return {...state, transactionId: payload}
        case ACTIONS.CUSTOMER_FULL_NAME:
            return {...state, customerFullName: payload.toLowerCase()}
        case ACTIONS.CUSTOMER_MOBILE:
            return {...state, customerMobile: payload}
        case ACTIONS.TABLE_SHOW:
            return {...state, tableShow: payload}
        case ACTIONS.DETAILS:
            return {...state, details: payload}
        case ACTIONS.TRANS_IN:
            return {...state, transin: payload}
        case ACTIONS.SHOW1:
            return {...state, show1: payload}
        case ACTIONS.SHOW2:
            return {...state, show2: payload}
        case ACTIONS.SHOW3:
            return {...state, show3: payload}
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
                    <Table className="table-hover w-100 mt-4">
                        <thead>
                            <tr>
                                <th scope="col">Transaction Id</th>
                                <th scope="col">Customer Full Name</th>
                                <th scope="col">Customer Mobile</th>
                                <th scope="col">Description</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                newState.details.map((info, index) => {
                                    return(
                                        <tr key={index} style={{cursor: "pointer"}} onClick={() => {
                                            dispatch({type:ACTIONS.TRANS_IN, payload: info})
                                            dispatch({type:ACTIONS.SHOW1, payload: true})
                                        }}>
                                            <td>{info.transactionId}</td>
                                            <td>{info.customerFullName}</td>
                                            <td>{info.customerMobile}</td>
                                            <td>{info.transactionDescription}</td>
                                            <td>{info.transactionStatus}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
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
                    <TransactionEntry transin = {newState.transin}/>
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
                            <th>Transaction Id</th>
                            <td>{newState.transin.transactionId}</td>
                        </tr>
                        <tr>
                            <th>Order Id</th>
                            <td>{newState.transin.orderId}</td>
                        </tr>
                        <tr>
                            <th>Customer Name</th>
                            <td>{newState.transin.customerFullName}</td>
                        </tr>
                        <tr>
                            <th>Customer Mobile</th>
                            <td>{newState.transin.customerMobile}</td>
                        </tr>
                        <tr>
                            <th>Transaction Date</th>
                            <td>{newState.transin.transactionDate}</td>
                        </tr>
                        <tr>
                            <th>Amount</th>
                            <td>{newState.transin.amount}</td>
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
                            <th>Description</th>
                            <td>{newState.transin.transactionDescription}</td>
                        </tr>
                        <tr>
                            <th>Transaction Type</th>
                            <td>{newState.transin.transactionType}</td>
                        </tr>
                        <tr>
                            <th>Sent Type</th>
                            <td>{newState.transin.paymentType}</td>
                        </tr>
                        <tr>
                            <th>Received Type</th>
                            <td>{newState.transin.receivedType}</td>
                        </tr>
                        <tr>
                            <th>Status</th>
                            <td>{newState.transin.transactionStatus}</td>
                        </tr>
                        <tr>
                            <th>Customer Due Status</th>
                            <td>{newState.transin.customerDueStatus}</td>
                        </tr>
                        <tr>
                            <th>Customer Due Amount</th>
                            <td>{newState.transin.customerDueAmount}</td>
                        </tr>
                        <tr>
                            <th>RRJ Due Status</th>
                            <td>{newState.transin.rrjDueStatus}</td>
                        </tr>
                        <tr>
                            <th>RRJ Due Amount</th>
                            <td>{newState.transin.rrjDueAmount}</td>
                        </tr>
                        <tr>
                            <th>Transaction Done By</th>
                            <td>{newState.transin.transactionDoneBy}</td>
                        </tr>
                        <tr>
                            <th>Transaction Entered By</th>
                            <td>{newState.transin.transactionEnteredBy}</td>
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
                                <Form.Label className="fw-bold m-1">Transaction Id</Form.Label>
                                <Form.Control type="text" onChange={e => dispatch({type:ACTIONS.TRANSACTION_ID, payload: e.target.value})}/>
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">Customer Mobile</Form.Label>
                                <Form.Control type="text" onChange={e => dispatch({type:ACTIONS.CUSTOMER_MOBILE, payload: e.target.value})}/>
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Customer Full Name</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type:ACTIONS.CUSTOMER_FULL_NAME, payload: e.target.value})}/>
                        </Form.Group>
                    </div>
                    <div className="row m-3">
                        <Button variant="primary" onClick={() => {
                            axios.post("http://localhost:8080/TransactionInfo/gettransaction", newState)
                                .then(res => {
                                    if(res.data[0] === undefined){
                                        dispatch({type:ACTIONS.SHOW3, payload: true})
                                    } else {
                                        dispatch({type:ACTIONS.DETAILS, payload: res.data})
                                        dispatch({type:ACTIONS.TABLE_SHOW, payload: true})
                                    }
                                })
                                .catch(err => console.log(err))
                        }}>Search</Button>
                    </div>
                </Container>
            </Card>
        </Container>
        </>
    )
}

export default TransactionInfo