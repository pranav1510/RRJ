import axios from "axios";
import React, { useReducer } from "react";
import { Button, Card, Container, Form, Modal, Table } from "react-bootstrap";
import ItemUpdate from "./ItemUpdate";
import OrderTaking from "./OrderTaking";

const initialState = {
    orderId: "",
    customerFullName: "",
    customerMobile: "",
    orderDetails: [],
    tableShow: false,
    show1: false,
    show2: true,
    show3: true,
    itemDetails: [],
    orderin: {},
    itemin: {}
}

const ACTIONS = {
    ORDER_ID: "ORDER_ID",
    CUSTOMER_FULL_NAME: "CUSTOMER_FULL_NAME",
    CUSTOMER_MOBILE: "CUSTOMER_MOBILE",
    ORDER_DETAILS: "ORDER_DETAILS",
    TABLE_SHOW: "TABLE_SHOW",
    SHOW1: "SHOW1",
    SHOW2: "SHOW2",
    SHOW3: "SHOW3",
    ITEM_DETAILS: "ITEM_DETAILS",
    ORDER_IN: "ORDER_IN",
    ITEM_IN: "ITEM_IN"
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
        case ACTIONS.ORDER_ID:
            return {...state, orderId: payload}
        case ACTIONS.CUSTOMER_FULL_NAME:
            return {...state, customerFullName: payload}
        case ACTIONS.CUSTOMER_MOBILE:
            return {...state, customerMobile: payload}
        case ACTIONS.ORDER_DETAILS:
            return {...state, orderDetails: payload}
        case ACTIONS.TABLE_SHOW:
            return {...state, tableShow: payload}
        case ACTIONS.ORDER_IN:
            return {...state, orderin: payload}
        case ACTIONS.ITEM_IN:
            return {...state, itemin: payload}
        default:
            return state
    }
}


const OrderInfo = ({navigate}) => {

    const handleClose1 = () => dispatch({type:ACTIONS.SHOW1, payload: false})
    const [newState, dispatch] = useReducer(reducer, initialState)


    return(
        <>
        <Container>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb flex-nowrap">
            <li className="breadcrumb-item fw-bold text-truncate"><p style={{"cursor":"pointer"}} onClick={() => {navigate('/homepage')}}>Home</p></li>
            <li className="breadcrumb-item fw-bold text-truncate"><p style={{"cursor":"pointer"}} onClick={() => {navigate('/searchinfo')}}>SearchInfo</p></li>
            {
                newState.show2 ? (
                    <li className="breadcrumb-item active text-white fw-bold text-truncate" aria-current="page">SearchOrder</li>
                ): (
                    newState.show3 ? (
                        <li className="breadcrumb-item active text-white fw-bold text-truncate" aria-current="page">OrderUpdate</li>
                    ) : (
                        <li className="breadcrumb-item active text-white fw-bold text-truncate" aria-current="page">ItemUpdate</li>
                    )
                )
            }
            
            </ol>
        </nav>
        <Modal show={newState.show1} onHide={handleClose1} className="modal-xl">
            <Modal.Header closeButton>
            <Modal.Title>Item Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table>
                    <thead>
                        <tr>
                            <th scope="col">Item Id</th>
                            <th scope="col">Item Name</th>
                            <th scope="col">Item Type</th>
                            <th scope="col">Item Status</th>
                            <th scope="col">Making Charges</th>
                            <th scope="col">Item Gross Weight</th>
                            <th scope="col">Item Net Weight</th>
                            <th scope="col">Wastage</th>
                            <th scope="col">Item Price</th>
                            <th scope="col">Item Entered By</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            newState.itemDetails.map((item, index) => {
                                return(
                                    <tr key={index} style={{"cursor":"pointer"}} onDoubleClick={() => {
                                        dispatch({type:ACTIONS.ITEM_IN, payload: item})
                                        dispatch({type:ACTIONS.SHOW3, payload: false})
                                        dispatch({type:ACTIONS.SHOW1, payload: false})
                                        dispatch({type:ACTIONS.SHOW2, payload: false})
                                    }}>
                                        <td>{item.itemId}</td>
                                        <td>{item.itemName}</td>
                                        <td>{item.itemType}</td>
                                        <td>{item.itemStatus}</td>
                                        <td>{item.makingCharges}</td>
                                        <td>{item.itemGrossWeight}</td>
                                        <td>{item.itemNetWeight}</td>
                                        <td>{item.wastage}</td>
                                        <td>{item.itemPrice}</td>
                                        <td>{item.itemEnteredBy}</td>
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
            {
                newState.show2 ? (
                    <>
                    <Card className="d-flex justify-content-center w-50">
                <Container>
                    <div className="row">
                        <div className="col">
                            <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">Order Id</Form.Label>
                                <Form.Control type="text" onChange={e => {
                                    dispatch({type:ACTIONS.ORDER_ID, payload: e.target.value})
                                }} />
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">Customer Mobile</Form.Label>
                                <Form.Control type="text" onChange={e => {
                                    dispatch({type:ACTIONS.CUSTOMER_MOBILE, payload: e.target.value})
                                }} />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Customer Full Name</Form.Label>
                            <Form.Control type="text" onChange={e => {
                                dispatch({type:ACTIONS.CUSTOMER_FULL_NAME, payload: e.target.value})
                            }} />
                        </Form.Group>
                    </div>
                    <div className="row m-3">
                        <Button variant="primary" onClick={() => {
                            axios.post("http://localhost:8080/OrderTaking/searchOrder", newState)
                                .then(res => {
                                    dispatch({type:ACTIONS.TABLE_SHOW, payload: true})
                                    dispatch({type:ACTIONS.ORDER_DETAILS, payload: res.data})
                                })
                                .catch(err => console.log(err))
                        }}>Search</Button>
                    </div>
                </Container>
            </Card>
            <Table className="table-hover w-100 mt-4">
                <thead>
                    {
                        newState.tableShow ? (
                            <tr>
                                <th scope="col">Order Id</th>
                                <th scope="col">Customer Full Name</th>
                                <th scope="col">Customer Mobile</th>
                                <th scope="col">Gold Cost</th>
                                <th scope="col">Silver Cost</th>
                                <th scope="col">Expected Delivery date</th>
                                <th scope="col">Order Status</th>
                                <th scope="col">GST</th>
                                <th scope="col">Order Entered By</th>
                                <th scope="col">Order Received By</th>
                            </tr>
                        ) : <></>
                    }
                </thead>
                <tbody>
                    {
                        newState.orderDetails.map((order, index) => {
                            return(
                                <tr key={index} style={{"cursor":"pointer"}} onDoubleClick={() => {
                                    dispatch({type:ACTIONS.ORDER_IN, payload: order})
                                    dispatch({type:ACTIONS.SHOW2, payload: false})
                                }} >
                                    <td style={{"cursor":"pointer"}} onClick={() => {
                                    dispatch({type:ACTIONS.SHOW1, payload: true})
                                    axios.post("http://localhost:8080/ItemInfo/getitems", order)
                                        .then(res => {
                                        dispatch({type:ACTIONS.ITEM_DETAILS, payload: res.data})
                                        })
                                        .catch(err => console.log(err))
                                }}>{order.orderId}</td>
                                    <td>{order.customerFullName}</td>
                                    <td>{order.customerMobile}</td>
                                    <td>{order.goldCost}</td>
                                    <td>{order.silverCost}</td>
                                    <td>{order.expectedDeliveryDate}</td>
                                    <td>{order.orderStatus}</td>
                                    <td>{order.gst}</td>
                                    <td>{order.orderEnteredBy}</td>
                                    <td>{order.orderReceivedBy}</td>
                                </tr>
                                 
                            )
                        })
                    }
                </tbody>
            </Table>
                    </>
                ) : (
                <>
                {
                    (newState.show3) ? <OrderTaking order = {newState.orderin} action = {ACTIONS} dispatch1 = {dispatch}/> : <ItemUpdate item = {newState.itemin} action={ACTIONS} dispatch1={dispatch}/>
                }
                </>)
            }
        </Container>
        </>
    )
}

export default OrderInfo