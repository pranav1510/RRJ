import axios from "axios";
import React, { useReducer } from "react";
import { Button, Card, Container, Form, Modal, Table } from "react-bootstrap";
import CustomerInfo from "./CustomerInfo";
import ItemUpdate from "./ItemUpdate";
import OrderTaking from "./OrderTaking";
import TransactionEntry from "./TransactionEntry";

const initialState = {
    customerMobile: "",
    customerFullName: "",
    tableShow: false,
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    show5: false,
    show6: false,
    show7: false,
    show8: false,
    show9: false,
    show10: false,
    show11: false,
    show12: false,
    info: {},
    message: "",
    orderDetails: [],
    orderin: {},
    itemDetails: [],
    itemin: {},
    transDetails: [],
    transin: {}
}

const ACTIONS = {
    CUSTOMER_MOBILE: "CUSTOMER_MOBILE",
    CUSTOMER_FULL_NAME: "CUSTOMER_FULL_NAME",
    TABLE_SHOW: "TABLE_SHOW",
    SHOW1: "SHOW1",
    SHOW2: "SHOW2",
    SHOW3: "SHOW3",
    SHOW4: "SHOW4",
    SHOW5: "SHOW5",
    SHOW6: "SHOW6",
    SHOW7: "SHOW7",
    SHOW8: "SHOW8",
    SHOW9: "SHOW9",
    SHOW10: "SHOW10",
    SHOW11: "SHOW11",
    SHOW12: "SHOW12",
    INFO: "INFO",
    MESSAGE: "MESSAGE",
    ORDER_DETAILS: "ORDER_DETAILS",
    ORDER_IN: "ORDER_IN",
    ITEM_DETAILS: "ITEM_DETAILS",
    ITEM_IN: "ITEM_IN",
    TRANS_DETAILS: "TRANS_DETAILS",
    TRANS_IN: "TRANS_IN"
}

const reducer = (state, {type, payload}) => {
    switch(type){
        case ACTIONS.CUSTOMER_MOBILE:
            return {...state, customerMobile: payload}
        case ACTIONS.CUSTOMER_FULL_NAME:
            return {...state, customerFullName: payload.toLowerCase()}
        case ACTIONS.TABLE_SHOW:
            return {...state, tableShow: payload}
        case ACTIONS.SHOW1:
            return {...state, show1: payload}
        case ACTIONS.SHOW2:
            return {...state, show2: payload}
        case ACTIONS.SHOW3:
            return {...state, show3: payload}
        case ACTIONS.SHOW4:
            return {...state, show4: payload}
        case ACTIONS.SHOW5:
            return {...state, show5: payload}
        case ACTIONS.SHOW6:
            return {...state, show6: payload}
        case ACTIONS.SHOW7:
            return {...state, show7: payload}
        case ACTIONS.SHOW8:
            return {...state, show8: payload}
        case ACTIONS.SHOW9:
            return {...state, show9: payload}
        case ACTIONS.SHOW10:
            return {...state, show10: payload}
        case ACTIONS.SHOW11:
            return {...state, show11: payload}
        case ACTIONS.SHOW12:
            return {...state, show12: payload}
        case ACTIONS.INFO:
            return {...state, info: payload}
        case ACTIONS.MESSAGE:
            return {...state, message: payload}
        case ACTIONS.ORDER_DETAILS:
            return {...state, orderDetails: payload}
        case ACTIONS.ORDER_IN:
            return {...state, orderin: payload}
        case ACTIONS.ITEM_DETAILS:
            return {...state, itemDetails: payload}
        case ACTIONS.ITEM_IN:
            return {...state, itemin: payload}
        case ACTIONS.TRANS_DETAILS:
            return {...state, transDetails: payload}
        case ACTIONS.TRANS_IN:
            return {...state, transin: payload}
        default:
            return state
    }
}

const CustomerUpdate = ({navigate}) => {

    const [newState, dispatch] = useReducer(reducer, initialState)
    const handleClose1 = () => dispatch({type:ACTIONS.SHOW1, payload: false})
    const handleClose2 = () => {
        dispatch({type:ACTIONS.SHOW2, payload: false})
        if(newState.message !== ""){dispatch({type:ACTIONS.MESSAGE, payload: ""})}
    }
    const handleClose3 = () => dispatch({type:ACTIONS.SHOW3, payload: false})
    const handleClose4 = () => dispatch({type:ACTIONS.SHOW4, payload: false})
    const handleClose5 = () => {
        dispatch({type:ACTIONS.SHOW5, payload: false})
        if(newState.message !== ""){dispatch({type:ACTIONS.MESSAGE, payload: ""})}
    }
    const handleClose6 = () => dispatch({type:ACTIONS.SHOW6, payload: false})
    const handleClose7 = () => dispatch({type:ACTIONS.SHOW7, payload: false})
    const handleClose8 = () => dispatch({type:ACTIONS.SHOW8, payload: false})
    const handleClose9 = () => dispatch({type:ACTIONS.SHOW9, payload: false})
    const handleClose10 = () => dispatch({type:ACTIONS.SHOW10, payload: false})
    const handleClose11 = () => dispatch({type:ACTIONS.SHOW11, payload: false})
    const handleClose12 = () => dispatch({type:ACTIONS.SHOW12, payload: false})

    return(
        <>
        <Container>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb flex-nowrap">
                <li className="breadcrumb-item fw-bold text-truncate"><p style={{"cursor":"pointer"}} onClick={() => {navigate('/homepage')}}>Home</p></li>
                <li className="breadcrumb-item fw-bold text-truncate"><p style={{"cursor":"pointer"}} onClick={() => {navigate('/searchinfo')}}>SearchInfo</p></li>
                <li className="breadcrumb-item active text-white fw-bold text-truncate" aria-current="page">SearchCustomer</li>
                </ol>
            </nav>
            <Modal show={newState.show12} onHide={handleClose12} className="modal-xl">
                <Modal.Header closeButton>
                    <Modal.Title>Transaction Update</Modal.Title>
                </Modal.Header>
                <Modal.Body  style={{height: "500px", overflow: "hidden", overflowY: "auto"}}>
                    <TransactionEntry transin = {newState.transin}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose12}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={newState.show11} onHide={handleClose11}>
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
                    <Button variant="secondary" onClick={handleClose11}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => {
                        dispatch({type:ACTIONS.SHOW12, payload: true})
                        dispatch({type:ACTIONS.SHOW11, payload: false})
                    }}>
                        Modify
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={newState.show10} onHide={handleClose10} className="modal-xl">
                <Modal.Header closeButton>
                    <Modal.Title>Transaction Details</Modal.Title>
                </Modal.Header>
                <Modal.Body  style={{height: "400px", overflow: "hidden", overflowY: "auto"}}>
                    <Table className="table-hover w-100 mt-1">
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
                                newState.transDetails.map((info, index) => {
                                    return(
                                        <tr key={index} style={{cursor: "pointer"}} onClick={() => {
                                            dispatch({type:ACTIONS.TRANS_IN, payload: info})
                                            dispatch({type:ACTIONS.SHOW11, payload: true})
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
                    <Button variant="secondary" onClick={handleClose10}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={newState.show9} onHide={handleClose9} className="modal-xl">
                <Modal.Header closeButton>
                    <Modal.Title>Item Update</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{height: "500px", overflow: "hidden", overflowY: "auto"}}>
                    <ItemUpdate item = {newState.itemin} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose9}>
                    Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={newState.show8} onHide={handleClose8}>
                <Modal.Header closeButton>
                <Modal.Title>Item Details</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{height: "500px", overflow: "hidden", overflowY: "auto"}}>
                    <Table className="table-hover w-100 mt-1 small" >
                        <tbody>
                            <tr>
                                <th>Item Id</th>
                                <td>{newState.itemin.itemId}</td>
                            </tr>
                            <tr>
                                <th>Item Name</th>
                                <td>{newState.itemin.itemName}</td>
                            </tr>
                            <tr>
                                <th>Item Type</th>
                                <td>{newState.itemin.itemType}</td>
                            </tr>
                            <tr>
                                <th>Item Delivery Date</th>
                                <td>{newState.itemin.itemDeliveryDate}</td>
                            </tr>
                            <tr>
                                <th>Item Price</th>
                                <td>{newState.itemin.itemPrice}</td>
                            </tr>
                            <tr>
                                <th>Item Status</th>
                                <td>{newState.itemin.itemStatus}</td>
                            </tr>
                            <tr>
                                <th>Item Entered By</th>
                                <td>{newState.itemin.itemEnteredBy}</td>
                            </tr>
                            <tr>
                                <th>Customer Comments</th>
                                <td>{newState.itemin.customerComments}</td>
                            </tr>
                            <tr>
                                <th>Order Receiver Comments</th>
                                <td>{newState.itemin.orderReceiverComments}</td>
                            </tr>
                            <tr>
                                <th>Making Charges</th>
                                <td>{newState.itemin.makingCharges}</td>
                            </tr>
                            <tr>
                                <th>Item Gross Weight</th>
                                <td>{newState.itemin.itemGrossWeight}</td>
                            </tr>
                            <tr>
                                <th>Item Net Weight</th>
                                <td>{newState.itemin.itemNetWeight}</td>
                            </tr>
                            <tr>
                                <th>Wastage</th>
                                <td>{newState.itemin.wastage}</td>
                            </tr>
                            <tr>
                                <th>Pearls Weight</th>
                                <td>{newState.itemin.pearlsWeight}</td>
                            </tr>
                            <tr>
                                <th>Pearls Cost</th>
                                <td>{newState.itemin.pearlsCost}</td>
                            </tr>
                            <tr>
                                <th>Stones Type</th>
                                <td>{newState.itemin.stonesType}</td>
                            </tr>
                            <tr>
                                <th>Cz Cost</th>
                                <td>{newState.itemin.czCost}</td>
                            </tr>
                            <tr>
                                <th>Emerald Cost</th>
                                <td>{newState.itemin.emeraldCost}</td>
                            </tr>
                            <tr>
                                <th>Ruby Cost</th>
                                <td>{newState.itemin.rubyCost}</td>
                            </tr>
                            <tr>
                                <th>Overall Stone Weight</th>
                                <td>{newState.itemin.overallStoneWeight}</td>
                            </tr>
                            <tr>
                                <th>Overall Stone Cost</th>
                                <td>{newState.itemin.overallStoneCost}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose8}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => {
                    dispatch({type:ACTIONS.SHOW7, payload: false})
                    dispatch({type:ACTIONS.SHOW8, payload: false})
                    dispatch({type:ACTIONS.SHOW9, payload: true})
                }}>
                    Modify
                </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={newState.show7} onHide={handleClose7} className="modal-xl">
                <Modal.Header closeButton>
                    <Modal.Title>Item Details</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{height: "400px", overflow: "hidden", overflowY: "auto"}}>
                    <Table>
                        <thead>
                            <tr>
                                <th scope="col">Item Id</th>
                                <th scope="col">Item Name</th>
                                <th scope="col">Item Type</th>
                                <th scope="col">Item Price</th>
                                <th scope="col">Item Entered By</th>
                                <th scope="col">Item Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                newState.itemDetails.map((item, index) => {
                                    return(
                                        <tr key={index} style={{"cursor":"pointer"}} onClick={() => {
                                            dispatch({type:ACTIONS.ITEM_IN, payload: item})
                                            dispatch({type:ACTIONS.SHOW8, payload: true})
                                        }}>
                                            <td>{item.itemId}</td>
                                            <td>{item.itemName}</td>
                                            <td>{item.itemType}</td>
                                            <td>{item.itemPrice}</td>
                                            <td>{item.itemEnteredBy}</td>
                                            <td>{item.itemStatus}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose7}>
                    Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={newState.show6} onHide={handleClose6} className="modal-xl">
                <Modal.Header closeButton>
                    <Modal.Title>Order Update</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{height: "500px", overflow: "hidden", overflowY: "auto"}}>
                    <OrderTaking order = {newState.orderin} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose6}>
                    Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={newState.show5} onHide={handleClose5}>
                <Modal.Header closeButton>
                    <Modal.Title>Order Details</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{height: "500px", overflow: "hidden", overflowY: "auto"}}>
                    <Table className="table-hover w-100 mt-1 small">
                        <tbody>
                            <tr>
                                <th>Order Id</th>
                                <td>{newState.orderin.orderId}</td>
                            </tr>
                            <tr>
                                <th>Gold Cost</th>
                                <td>{newState.orderin.goldCost}</td>
                            </tr>
                            <tr>
                                <th>Silver Cost</th>
                                <td>{newState.orderin.silverCost}</td>
                            </tr>
                            <tr>
                                <th>Expected Delivery Date</th>
                                <td>{newState.orderin.expectedDeliveryDate}</td>
                            </tr>
                            <tr>
                                <th>Customer Name</th>
                                <td>{newState.orderin.customerFullName}</td>
                            </tr>
                            <tr>
                                <th>Customer Mobile</th>
                                <td>{newState.orderin.customerMobile}</td>
                            </tr>
                            <tr>
                                <th>Status</th>
                                <td>{newState.orderin.orderStatus}</td>
                            </tr>
                            <tr>
                                <th>GST</th>
                                <td>{newState.orderin.gst}</td>
                            </tr>
                            <tr>
                                <th>Customer Remarks</th>
                                <td>{newState.orderin.customerRemarks}</td>
                            </tr>
                            <tr>
                                <th>Order Receiver Remarks</th>
                                <td>{newState.orderin.orderReceiverRemarks}</td>
                            </tr>
                            <tr>
                                <th>Order Entered By</th>
                                <td>{newState.orderin.orderEnteredBy}</td>
                            </tr>
                            <tr>
                                <th>Order Received By</th>
                                <td>{newState.orderin.orderReceivedBy}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button variant="info" onClick={() => {
                        axios.post("http://localhost:8080/ItemInfo/getitems", newState.orderin)
                            .then(res => {
                                if(res.data[0] === undefined){
                                    dispatch({type:ACTIONS.MESSAGE, payload: "Items not found!"})
                                } else {
                                    dispatch({type:ACTIONS.ITEM_DETAILS, payload: res.data})
                                    dispatch({type:ACTIONS.SHOW5, payload: false})
                                    dispatch({type:ACTIONS.SHOW7, payload: true})
                                }
                            })
                            .catch(err => console.log(err))
                    }}>Get Item Details</Button>
                    <div className="row"><h5 className="text-danger d-flex flex-row justify-content-center mt-4">{newState.message}</h5></div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose5}>
                    Close
                    </Button>
                    <Button variant="primary" onClick={() => {
                        dispatch({type:ACTIONS.SHOW4, payload: false})
                        dispatch({type:ACTIONS.SHOW5, payload: false})
                        dispatch({type:ACTIONS.SHOW6, payload: true})
                        if(newState.message !== ""){dispatch({type:ACTIONS.MESSAGE, payload: ""})}
                    }}>Modify</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={newState.show4} onHide={handleClose4} className="modal-xl">
            <Modal.Header closeButton>
                <Modal.Title>Order Details</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{height: "400px", overflow: "hidden", overflowY: "auto"}}>
                <Table className="table-hover w-100 mt-1">
                    <thead>
                    <tr>
                        <th scope="col">Order Id</th>
                        <th scope="col">Customer Full Name</th>
                        <th scope="col">Expected Delivery date</th>
                        <th scope="col">Order Status</th>
                        <th scope="col">Order Entered By</th>
                        <th scope="col">Order Received By</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            newState.orderDetails.map((order, index) => {
                                return(
                                    <tr key={index} style={{"cursor":"pointer"}} onClick={() => {
                                        dispatch({type:ACTIONS.ORDER_IN, payload: order})
                                        dispatch({type:ACTIONS.SHOW5, payload: true})
                                    }}>
                                        <td>{order.orderId}</td>
                                        <td>{order.customerFullName}</td>
                                        <td>{order.expectedDeliveryDate}</td>
                                        <td>{order.orderStatus}</td>
                                        <td>{order.orderEnteredBy}</td>
                                        <td>{order.orderReceivedBy}</td>
                                    </tr>
                                    
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose4}>
                Close
                </Button>
            </Modal.Footer>
        </Modal>
            <Modal show={newState.show3} onHide={handleClose3}>
                <Modal.Header closeButton>
                    <Modal.Title>Customer Doesn't Exist</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose3}>Close</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={newState.show1} onHide={handleClose1} className="modal-xl">
                <Modal.Header closeButton>
                    <Modal.Title>Update Customer Details</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{height: "400px", overflow: "hidden", overflowY: "auto"}}>
                    <CustomerInfo info={newState.info}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose1}>Close</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={newState.show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title>Customer Details</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{height: "400px", overflow: "hidden", overflowY: "auto"}}>
                <Table className="table-hover w-100 mt-1">
                    <tbody>
                        <tr>
                            <th>Customer Full Name</th>
                            <td>{newState.info.customerFullName}</td>
                        </tr>
                        <tr>
                            <th>Customer Mobile</th>
                            <td>{newState.info.customerMobile}</td>
                        </tr>
                        <tr>
                            <th>Alternate Mobile 01</th>
                            <td>{newState.info.alternateMobileOne}</td>
                        </tr>
                        <tr>
                            <th>Alternate Mobile 02</th>
                            <td>{newState.info.alternateMobileTwo}</td>
                        </tr>
                        <tr>
                            <th>Address</th>
                            <td>{newState.info.address}</td>
                        </tr>
                        <tr>
                            <th>Remarks</th>
                            <td>{newState.info.remarks}</td>
                        </tr>
                    </tbody>
                </Table>
                <div className="row">
                    <div className="col">
                        <Button variant="info" onClick={() => {
                            axios.post("http://localhost:8080/OrderTaking/getorders", {customerId: newState.info.customerId})
                                .then(res => {
                                    if(res.data[0] === undefined){
                                        dispatch({type:ACTIONS.MESSAGE, payload: "Orders not found!"})
                                    } else {
                                        dispatch({type:ACTIONS.ORDER_DETAILS, payload: res.data})
                                        dispatch({type:ACTIONS.SHOW4, payload: true})
                                    }
                                }).catch(err => console.log(err))
                        }}>View Orders</Button>
                    </div>
                    <div className="col">
                        <Button variant="info" onClick={() => {
                            axios.post("http://localhost:8080/TransactionInfo/transget", {customerId: newState.info.customerId})
                                .then(res => {
                                    if(res.data[0] === undefined){
                                        dispatch({type:ACTIONS.MESSAGE, payload: "Transaction not found!"})
                                    } else {
                                        dispatch({type:ACTIONS.TRANS_DETAILS, payload: res.data})
                                        dispatch({type:ACTIONS.SHOW10, payload: true})
                                    }
                                }).catch(err => console.log(err))
                        }}>View Transactions</Button>
                    </div>
                </div>
                <div className="row"><h5 className="text-danger d-flex flex-row justify-content-center mt-4">{newState.message}</h5></div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                    Close
                    </Button>
                    <Button variant="primary" onClick={() => {
                        dispatch({type:ACTIONS.SHOW1, payload: true})
                        dispatch({type:ACTIONS.SHOW2, payload: false})
                        if(newState.message !== ""){dispatch({type:ACTIONS.MESSAGE, payload: ""})}
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
                            axios.post("http://localhost:8080/CustomerInfo/getcustomer", newState)
                                .then(res => {
                                    if(res.data[0] === undefined){
                                        dispatch({type:ACTIONS.SHOW3, payload: true})
                                    } else {
                                        dispatch({type:ACTIONS.INFO, payload: res.data[0]})
                                        dispatch({type:ACTIONS.SHOW2, payload: true})
                                    }
                                }).catch(err => console.log(err))
                        }}>Search</Button>
                    </div>
                </Container>
            </Card>
        </Container>
        </>
    )
}

export default CustomerUpdate