import axios from "axios";
import React, { useReducer } from "react";
import { Button, Card, Container, Form, Modal, Nav, Table } from "react-bootstrap";
import ItemUpdate from "./ItemUpdate";
import OrderTaking from "./OrderTaking";

const initialState = {
    orderId: "",
    customerFullName: "",
    customerMobile: "",
    inProgressOrderDetails: [],
    pendingOrderDetails: [],
    completedOrderDetails: [],
    cancelledOrderDetails: [],
    tableShow: false,
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    show5: false,
    show6: false,
    orderShow1: true,
    orderShow2: false,
    orderShow3: false,
    orderShow4: false,
    itemDetails: [],
    orderin: {},
    itemin: {},
    message: "",
    validId: false,
    validName: false,
    validmobile: false
}

const ACTIONS = {
    ORDER_ID: "ORDER_ID",
    CUSTOMER_FULL_NAME: "CUSTOMER_FULL_NAME",
    CUSTOMER_MOBILE: "CUSTOMER_MOBILE",
    IN_PROGRESS_ORDER_DETAILS: "IN_PROGRESS_ORDER_DETAILS",
    PENDING_ORDER_DETAILS: "PENDING_ORDER_DETAILS",
    COMPLETED_ORDER_DETAILS: "COMPLETED_ORDER_DETAILS",
    CANCELLED_ORDER_DETAILS: "CANCELLED_ORDER_DETAILS",
    TABLE_SHOW: "TABLE_SHOW",
    SHOW1: "SHOW1",
    SHOW2: "SHOW2",
    SHOW3: "SHOW3",
    SHOW4: "SHOW4",
    SHOW5: "SHOW5",
    SHOW6: "SHOW6",
    ORDER_SHOW1: "ORDER_SHOW1",
    ORDER_SHOW2: "ORDER_SHOW2",
    ORDER_SHOW3: "ORDER_SHOW3",
    ORDER_SHOW4: "ORDER_SHOW4",
    ITEM_DETAILS: "ITEM_DETAILS",
    ORDER_IN: "ORDER_IN",
    ITEM_IN: "ITEM_IN",
    MESSAGE: "MESSAGE",
    VALID_ID: "VALID_ID",
    VALID_NAME: "VALID_NAME",
    VALID_MOBILE: "VALID_MOBILE"
}

const reducer = (state, {type, payload}) => {
    switch(type){
        case ACTIONS.ITEM_DETAILS:
            return {...state, itemDetails: payload}
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
        case ACTIONS.ORDER_SHOW1:
            return {...state, orderShow1: payload}
        case ACTIONS.ORDER_SHOW2:
            return {...state, orderShow2: payload}
        case ACTIONS.ORDER_SHOW3:
            return {...state, orderShow3: payload}
        case ACTIONS.ORDER_SHOW4:
            return {...state, orderShow4: payload}
        case ACTIONS.ORDER_ID:
            return {...state, orderId: payload}
        case ACTIONS.CUSTOMER_FULL_NAME:
            return {...state, customerFullName: payload.toLowerCase()}
        case ACTIONS.CUSTOMER_MOBILE:
            return {...state, customerMobile: payload.toLowerCase()}
        case ACTIONS.IN_PROGRESS_ORDER_DETAILS:
            return {...state, inProgressOrderDetails: payload}
        case ACTIONS.PENDING_ORDER_DETAILS:
            return {...state, pendingOrderDetails: payload}
        case ACTIONS.COMPLETED_ORDER_DETAILS:
            return {...state, completedOrderDetails: payload}
        case ACTIONS.CANCELLED_ORDER_DETAILS:
            return {...state, cancelledOrderDetails: payload}
        case ACTIONS.TABLE_SHOW:
            return {...state, tableShow: payload}
        case ACTIONS.ORDER_IN:
            return {...state, orderin: payload}
        case ACTIONS.ITEM_IN:
            return {...state, itemin: payload}
        case ACTIONS.MESSAGE:
            return {...state, message: payload}
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


const OrderInfo = ({navigate}) => {

    const handleClose1 = () => dispatch({type:ACTIONS.SHOW1, payload: false})
    const handleClose2 = () => dispatch({type:ACTIONS.SHOW2, payload: false})
    const handleClose3 = () => dispatch({type:ACTIONS.SHOW3, payload: false})
    const handleClose4 = () => {
        dispatch({type:ACTIONS.SHOW4, payload: false})
        if(newState.message !== ""){dispatch({type:ACTIONS.MESSAGE, payload: ""})}
    }
    const handleClose5 = () => dispatch({type:ACTIONS.SHOW5, payload: false})
    const handleClose6 = () => dispatch({type:ACTIONS.SHOW6, payload: false})
    const handleTableShow = () => dispatch({type:ACTIONS.TABLE_SHOW, payload: false})
    const [newState, dispatch] = useReducer(reducer, initialState)


    return(
        <>
        <Container>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb flex-nowrap">
            <li className="breadcrumb-item fw-bold text-truncate"><p style={{"cursor":"pointer"}} onClick={() => {navigate('/homepage')}}>Home</p></li>
            <li className="breadcrumb-item fw-bold text-truncate"><p style={{"cursor":"pointer"}} onClick={() => {navigate('/searchinfo')}}>SearchInfo</p></li>
            <li className="breadcrumb-item active text-white fw-bold text-truncate" aria-current="page">SearchOrder</li>
            </ol>
        </nav>
        <Modal show={newState.tableShow} onHide={handleTableShow} className="modal-xl">
            <Modal.Header closeButton>
                <Modal.Title>Order Details</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{height: "400px", overflow: "hidden", overflowY: "auto"}}>
            <Nav className="nav-tabs">
                    <Nav.Link active= {newState.orderShow1 ? true : false} onClick={() => {
                        dispatch({type:ACTIONS.ORDER_SHOW4, payload: false})
                        dispatch({type:ACTIONS.ORDER_SHOW3, payload: false})
                        dispatch({type:ACTIONS.ORDER_SHOW2, payload: false})
                        dispatch({type:ACTIONS.ORDER_SHOW1, payload: true})
                    }}>In Progress</Nav.Link>
                    <Nav.Link active= {newState.orderShow2 ? true : false} onClick={() => {
                        dispatch({type:ACTIONS.ORDER_SHOW4, payload: false})
                        dispatch({type:ACTIONS.ORDER_SHOW3, payload: false})
                        dispatch({type:ACTIONS.ORDER_SHOW1, payload: false})
                        dispatch({type:ACTIONS.ORDER_SHOW2, payload: true})
                    }}>Pending</Nav.Link>
                    <Nav.Link active= {newState.orderShow3 ? true : false} onClick={() => {
                        dispatch({type:ACTIONS.ORDER_SHOW4, payload: false})
                        dispatch({type:ACTIONS.ORDER_SHOW2, payload: false})
                        dispatch({type:ACTIONS.ORDER_SHOW1, payload: false})
                        dispatch({type:ACTIONS.ORDER_SHOW3, payload: true})
                    }}>Completed</Nav.Link>
                    <Nav.Link active= {newState.orderShow4 ? true : false} onClick={() => {
                        dispatch({type:ACTIONS.ORDER_SHOW3, payload: false})
                        dispatch({type:ACTIONS.ORDER_SHOW2, payload: false})
                        dispatch({type:ACTIONS.ORDER_SHOW1, payload: false})
                        dispatch({type:ACTIONS.ORDER_SHOW4, payload: true})
                    }}>Cancelled</Nav.Link>
                </Nav>
                {
                    newState.orderShow1 ? (
                        (newState.inProgressOrderDetails[0] === undefined) ? (
                            <p className="d-flex justify-content-center text-danger mt-5">Orders not found!</p>
                        ) : (
                            <Table className="table-hover w-100 mt-2">
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
                                        newState.inProgressOrderDetails.map((order, index) => {
                                            return(
                                                <tr key={index} style={{"cursor":"pointer"}} onClick={() => {
                                                    dispatch({type:ACTIONS.ORDER_IN, payload: order})
                                                    dispatch({type:ACTIONS.SHOW4, payload: true})
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
                        )
                    ) : <></>
                }
                {
                    newState.orderShow2 ? (
                        (newState.pendingOrderDetails[0] === undefined) ? (
                            <p className="d-flex justify-content-center text-danger mt-5">Orders not found!</p>
                        ) : (
                            <Table className="table-hover w-100 mt-2">
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
                                        newState.pendingOrderDetails.map((order, index) => {
                                            return(
                                                <tr key={index} style={{"cursor":"pointer"}} onClick={() => {
                                                    dispatch({type:ACTIONS.ORDER_IN, payload: order})
                                                    dispatch({type:ACTIONS.SHOW4, payload: true})
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
                        )
                    ) : <></>
                }
                {
                    newState.orderShow3 ? (
                        (newState.completedOrderDetails[0] === undefined) ? (
                            <p className="d-flex justify-content-center mt-5 text-danger">Orders not found!</p>
                        ) : (
                            <Table className="table-hover w-100 mt-2">
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
                                        newState.completedOrderDetails.map((order, index) => {
                                            return(
                                                <tr key={index} style={{"cursor":"pointer"}} onClick={() => {
                                                    dispatch({type:ACTIONS.ORDER_IN, payload: order})
                                                    dispatch({type:ACTIONS.SHOW4, payload: true})
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
                        )
                    ) : <></>
                }
                {
                    newState.orderShow4 ? (
                        (newState.cancelledOrderDetails[0] === undefined) ? (
                            <p className="d-flex justify-content-center mt-5 text-danger">Orders not found!</p>
                        ) : (
                            <Table className="table-hover w-100 mt-2">
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
                                        newState.cancelledOrderDetails.map((order, index) => {
                                            return(
                                                <tr key={index} style={{"cursor":"pointer"}} onClick={() => {
                                                    dispatch({type:ACTIONS.ORDER_IN, payload: order})
                                                    dispatch({type:ACTIONS.SHOW4, payload: true})
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
        <Modal show={newState.show6} onHide={handleClose6}>
            <Modal.Header closeButton>
                <Modal.Title>Order Doesn't Exist</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose6}>
                Close
                </Button>
            </Modal.Footer>
        </Modal>
        <Modal show={newState.show2} onHide={handleClose2} className="modal-xl">
            <Modal.Header closeButton>
                <Modal.Title>Order Update</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{height: "500px", overflow: "hidden", overflowY: "auto"}}>
                <OrderTaking order = {newState.orderin} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose2}>
                Close
                </Button>
            </Modal.Footer>
        </Modal>
        <Modal show={newState.show3} onHide={handleClose3} className="modal-xl">
            <Modal.Header closeButton>
                <Modal.Title>Item Update</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{height: "500px", overflow: "hidden", overflowY: "auto"}}>
                <ItemUpdate item = {newState.itemin} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose3}>
                Close
                </Button>
            </Modal.Footer>
        </Modal>
        <Modal show={newState.show5} onHide={handleClose5}>
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
          <Button variant="secondary" onClick={handleClose5}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            dispatch({type:ACTIONS.SHOW5, payload: false})
            dispatch({type:ACTIONS.SHOW3, payload: true})
          }}>
            Modify
          </Button>
        </Modal.Footer>
      </Modal>
        <Modal show={newState.show4} onHide={handleClose4}>
            <Modal.Header closeButton>
                <Modal.Title>Order Details</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{height: "500px", overflow: "hidden", overflowY: "auto"}}>
                <Table className="table-hover w-100 mt-1 small">
                    <tbody className="overflow-scroll">
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
                            const val = res.data[0]
                            if(val !== undefined){
                                dispatch({type:ACTIONS.ITEM_DETAILS, payload: res.data})
                                dispatch({type:ACTIONS.SHOW1, payload: true})      
                                dispatch({type:ACTIONS.SHOW4, payload: false})
                            }else {
                                dispatch({type:ACTIONS.MESSAGE, payload: "Items not found!"})
                            }
                        })
                        .catch(err => console.log(err))
                }}>Get Item Details</Button>
                <div className="row"><h5 className="text-danger d-flex flex-row justify-content-center mt-2">{newState.message}</h5></div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose4}>
                Close
                </Button>
                <Button variant="primary" onClick={() => {
                    dispatch({type:ACTIONS.SHOW4, payload: false})
                    dispatch({type:ACTIONS.SHOW2, payload: true})
                    if(newState.message !== ""){dispatch({type:ACTIONS.MESSAGE, payload: ""})}
                }}>Modify</Button>
            </Modal.Footer>
        </Modal>
        <Modal show={newState.show1} onHide={handleClose1} className="modal-xl">
            <Modal.Header closeButton>
            <Modal.Title>Item Information</Modal.Title>
            </Modal.Header>
            <Modal.Body  style={{height: "400px", overflow: "hidden", overflowY: "auto"}}>
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
                                        dispatch({type:ACTIONS.SHOW5, payload: true})
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
            <Button variant="secondary" onClick={handleClose1}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
        <>
                    <Card className="d-flex justify-content-center w-50">
                <Container>
                    <div className="row">
                        <div className="col">
                            <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">Order Id</Form.Label>
                                <Form.Control type="text" style={{border: newState.validId ? "3px solid red" : ""}} onChange={e => {
                                    dispatch({type:ACTIONS.ORDER_ID, payload: e.target.value})
                                    if(newState.validId){dispatch({type:ACTIONS.VALID_ID, payload: false})}
                                }} />
                                {
                                    newState.validId ? (<p className="text-danger m-1 small fw-bold">Enter valid Id!</p>) : <></>
                                }
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">Customer Mobile</Form.Label>
                                <Form.Control style={{border: newState.validMobile ? "3px solid red" : ""}} type="text" onChange={e => {
                                    dispatch({type:ACTIONS.CUSTOMER_MOBILE, payload: e.target.value})
                                    if(newState.validMobile){dispatch({type:ACTIONS.VALID_MOBILE, payload: false})}
                                }} />
                                {
                                    newState.validMobile ? (<p className="text-danger m-1 small fw-bold">Enter valid mobile!</p>) : <></>
                                }
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Customer Full Name</Form.Label>
                            <Form.Control style={{border: newState.validName ? "3px solid red" : ""}} type="text" onChange={e => {
                                dispatch({type:ACTIONS.CUSTOMER_FULL_NAME, payload: e.target.value})
                                if(newState.validName){dispatch({type:ACTIONS.VALID_NAME, payload: false})}
                            }} />
                            {
                                newState.validName ? (<p className="text-danger m-1 small fw-bold">Enter valid name!</p>) : <></>
                            }
                        </Form.Group>
                    </div>
                    <div className="row m-3">
                        <Button variant="primary" onClick={() => {
                            if(newState.orderId !== "" && !(/^(\d){10}$/).test(newState.orderId)){dispatch({type:ACTIONS.VALID_ID, payload: true})}
                            else if(newState.customerMobile !== "" && !(/^(\d){10}$/).test(newState.customerMobile)){dispatch({type:ACTIONS.VALID_MOBILE, payload: true})}
                            else if(newState.customerFullName !== "" && !(/[a-zA-Z\s]*/.test(newState.customerFullName))){dispatch({type:ACTIONS.VALID_NAME, payload: true})}
                            else {
                                axios.post("http://localhost:8080/OrderTaking/searchOrder", newState)
                                    .then(res => {
                                        if(res.data[0] === undefined){
                                            dispatch({type:ACTIONS.SHOW6, payload: true})
                                        }else {
                                            let set1 = new Set()
                                            let set2 = new Set()
                                            let set3 = new Set()
                                            let set4 = new Set()
                                            res.data.forEach(element => {
                                                if(element.orderStatus === "In Progress"){set1.add(element)}
                                                else if(element.orderStatus.includes("Pending")){set2.add(element)}
                                                else if(element.orderStatus === "Completed Successfully!"){set3.add(element)}
                                                else if(element.orderStatus === "Cancelled"){set4.add(element)}
                                            });
                                            dispatch({type:ACTIONS.IN_PROGRESS_ORDER_DETAILS, payload: [...set1]})
                                            dispatch({type:ACTIONS.PENDING_ORDER_DETAILS, payload: [...set2]})
                                            dispatch({type:ACTIONS.COMPLETED_ORDER_DETAILS, payload: [...set3]})
                                            dispatch({type:ACTIONS.CANCELLED_ORDER_DETAILS, payload: [...set4]})
                                            dispatch({type:ACTIONS.TABLE_SHOW, payload: true})
                                        }
                                    })
                                    .catch(err => console.log(err))
                            }
                        }}>Search</Button>
                    </div>
                </Container>
            </Card>
            
                    </>
            
        </Container>
        </>
    )
}

export default OrderInfo