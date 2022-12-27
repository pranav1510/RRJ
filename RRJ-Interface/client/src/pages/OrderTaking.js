import React, { useReducer } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";

const initialState = {
    expectedDeliveryDate: "",
    customerMobile: "",
    customerRemarks: "",
    orderReceiverRemarks: "",
    orderStatus: "",
    orderType: "",
    GST: "",
    orderReceivedBy: "",
    orderResponsibility: ""
}

const ACTIONS = {
    EXPECTED_DELIVERY_DATE: "EXPECTED_DELIVERY_DATE",
    CUSTOMER_MOBILE: "CUSTOMER_MOBILE",
    CUSTOMER_REMARKS: "CUSTOMER_REMARKS",
    ORDER_REVCEIVER_REMARKS: "ORDER_RECEIVER_REMARKS",
    ORDER_STATUS: "ORDER_STATUS",
    ORDER_TYPE: "ORDER_TYPE",
    GST:"GST",
    ORDER_RECEIVED_BY: "ORDER_RECEIVED_BY",
    ORDER_RESPONSIBILITY: "ORDER_RESPONSIBILITY"
}

const reducer = (state, {type, payload}) => {
    switch(type){
        case ACTIONS.EXPECTED_DELIVERY_DATE:
            return {...state, expectedDeliveryDate: payload.target.value}
        case ACTIONS.CUSTOMER_MOBILE:
            return {...state, customerMobile: payload.target.value}
        case ACTIONS.CUSTOMER_REMARKS:
            return {...state, customerRemarks: payload.target.value}
        case ACTIONS.ORDER_REVCEIVER_REMARKS:
            return {...state, orderReceiverRemarks: payload.target.value}
        case ACTIONS.ORDER_STATUS:
            return {...state, orderStatus: payload.target.value}
        case ACTIONS.ORDER_TYPE:
            return {...state, orderType: payload.target.value}
        case ACTIONS.GST:
            return {...state, GST: payload.target.value}
        case ACTIONS.ORDER_RECEIVED_BY:
            return {...state, orderReceivedBy: payload.target.value}
        case ACTIONS.ORDER_RESPONSIBILITY:
            return {...state, orderResponsibility: payload.target.value}
        default:
            return state
    }
}

const OrderTaking = ({date}) => {

    const [newState, dispatch] = useReducer(reducer, initialState)

    const SubmitHandler = () => {
        axios.post("http://localhost:8080/OrderTaking/add", newState)
            .then(() => console.log("new order added!"))
            .catch(err => console.log(err));
    }

    const Validate = () => {
        axios.get("http://localhost:8080/CustomerInfo/check", newState)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }


    return (
        <>
            <Container>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item fw-bold"><a href="/homepage">Home</a></li>
                        <li class="breadcrumb-item active text-white fw-bold" aria-current="page">Order Taking</li>
                    </ol>
                </nav>
                <Form>
                    <div class="row">
                        <div class="col">
                            <Form.Group className="mt-3">
                                <Form.Label class="fw-bold m-1">Order Type</Form.Label>
                                <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.ORDER_TYPE, payload: e})} />
                            </Form.Group>
                        </div>
                        <div class="col">
                            <fieldset disabled>
                                <Form.Group className="mt-3">
                                    <Form.Label class="fw-bold m-1">Date</Form.Label>
                                    <Form.Control type="text" value={date} />
                                </Form.Group>
                            </fieldset>
                        </div>
                        <div class="col">
                            <Form.Group className="mt-3">
                                <Form.Label class="fw-bold m-1">Expected Delivery Date</Form.Label>
                                <Form.Control type="text" placeholder="dd/mm/yyyy" onChange={e => dispatch({type: ACTIONS.EXPECTED_DELIVERY_DATE, payload: e})} />
                            </Form.Group>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <Form.Group className="mt-3">
                                <Form.Label class="fw-bold m-1">Order Status</Form.Label>
                                <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.ORDER_STATUS, payload: e})} />
                            </Form.Group>
                        </div>
                        <div class="col-1">
                            <Form.Group className="mt-3">
                                <Form.Label class="fw-bold m-1">GST</Form.Label>
                                <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.GST, payload: e})} />
                            </Form.Group>
                        </div>
                        <div class="col">
                            <Form.Group className="mt-3">
                                <Form.Label class="fw-bold m-1">Order's Responsibility</Form.Label>
                                <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.ORDER_RESPONSIBILITY, payload: e})} />
                            </Form.Group>
                        </div>
                        <div class="col-3">
                            <Form.Group className="mt-3">
                                <Form.Label class="fw-bold m-1">Order Received By</Form.Label>
                                <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.ORDER_RECEIVED_BY, payload: e})} />
                            </Form.Group>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <Form.Group className="mt-3">
                                <Form.Label class="fw-bold m-1">Customer Remarks</Form.Label>
                                <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.CUSTOMER_REMARKS, payload: e})} />
                            </Form.Group>
                        </div>
                        <div class="col">
                            <Form.Group className="mt-3">
                                <Form.Label class="fw-bold m-1">Order Receiver Remarks</Form.Label>
                                <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.ORDER_REVCEIVER_REMARKS, payload: e})} />
                            </Form.Group>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <Form.Group className="mt-3">
                                <Form.Label class="fw-bold m-1">Customer Mobile</Form.Label>
                                <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.CUSTOMER_MOBILE, payload: e})} />
                                <Button className="btn btn-secondary mt-2" onClick={Validate}>Validate Mobile</Button>
                            </Form.Group>
                        </div>
                    </div>
                </Form>
                <div className="d-flex justify-content-center m-3">
                    <Button variant="primary" className="mt-3 mb-3" onClick={SubmitHandler}>Save Order</Button>
                </div>
            </Container>

        </>
    )
}

export default OrderTaking