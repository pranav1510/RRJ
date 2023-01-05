import React, { useReducer } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import axios from "axios";

const initialState = {
    customerFullName: "",
    customerMobile: "",
    alternateMobileOne: "",
    alternateMobileTwo: "",
    address: "",
    remarks: "",
    status: ""
}

const ACTIONS = {
    CUSTOMER_FULL_NAME: "CUSTOMER_FULL_NAME",
    CUSTOMER_MOBILE: "CUSTOMER_MOBILE",
    ALTERNATE_MOBILE_ONE: "ALTERNATE_MOBILEONE",
    ALTERNATE_MOBILE_TWO: "ALTERNATE_MOBILETWO",
    ADDRESS: "ADDRESS",
    REMARKS: "REMARKS",
    STATUS: "STATUS"
}

const reducer = (state, {type, payload}) => {
    switch(type) {
        case ACTIONS.CUSTOMER_FULL_NAME:
            return {...state, customerFullName: payload.target.value}
        case ACTIONS.CUSTOMER_MOBILE:
            return {...state, customerMobile: payload.target.value}
        case ACTIONS.ALTERNATE_MOBILE_ONE:
            return {...state, alternateMobileOne: payload.target.value}
        case ACTIONS.ALTERNATE_MOBILE_TWO:
            return {...state, alternateMobileTwo: payload.target.value}
        case ACTIONS.ADDRESS:
            return {...state, address: payload.target.value}
        case ACTIONS.REMARKS:
            return {...state, remarks: payload.target.value}
        case ACTIONS.STATUS:
            return {...state, status: payload}
        default:
            return state
    }
}

const CustomerInfo = () => {
    const [newState, dispatch] = useReducer(reducer, initialState)

    const SubmitHandler = () => {
        axios.post("http://localhost:8080/CustomerInfo/add", newState)
        .then((response) => {dispatch({type: ACTIONS.STATUS, payload: response.data})})
        .catch(err => {dispatch({type: ACTIONS.STATUS, payload: err.message})});

    }

    return(
        <>
        <Container>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
            <li className="breadcrumb-item fw-bold"><a href="/homepage">Home</a></li>
            <li className="breadcrumb-item fw-bold"><a href="/infoentry">Information Entry</a></li>
            <li className="breadcrumb-item active text-white fw-bold" aria-current="page">Customer Information</li>
            </ol>
        </nav>
            <Row>
                <Col>
                    <Form>
                    <div className="row"><h5 className="text-success d-flex flex-row justify-content-center">{newState.status}</h5></div>
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Customer Full Name</Form.Label>
                            <Form.Control type="text"  onChange={e => {
                                dispatch({type: ACTIONS.CUSTOMER_FULL_NAME, payload: e})
                                if(newState.status !== ""){ dispatch({type: ACTIONS.STATUS, payload: ""})}
                                }}/>
                        </Form.Group>
                        <div className="row">
                            <div className="col">
                                <Form.Group className="mt-3">
                                    <Form.Label className="fw-bold m-1">Customer Mobile</Form.Label>
                                    <Form.Control type="text" onChange={e => {
                                        dispatch({type: ACTIONS.CUSTOMER_MOBILE, payload: e})
                                        if(newState.status !== ""){ dispatch({type: ACTIONS.STATUS, payload: ""})}
                                    }} />
                                </Form.Group>
                            </div>
                            <div className="col">
                                <Form.Group className="mt-3">
                                    <Form.Label className="fw-bold m-1">Alternate Mobile 01</Form.Label>
                                    <Form.Control type="text" onChange={e => {
                                        dispatch({type: ACTIONS.ALTERNATE_MOBILE_ONE, payload: e})
                                        if(newState.status !== ""){ dispatch({type: ACTIONS.STATUS, payload: ""})}
                                    }} />
                                </Form.Group>
                            </div>
                            <div className="col">
                                <Form.Group className="mt-3">
                                    <Form.Label className="fw-bold m-1">Alternate Mobile 02</Form.Label>
                                    <Form.Control type="text" onChange={e => {
                                        dispatch({type: ACTIONS.ALTERNATE_MOBILE_TWO, payload: e})
                                        if(newState.status !== ""){ dispatch({type: ACTIONS.STATUS, payload: ""})}
                                    }} />
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <Form.Group className="mt-3">
                                    <Form.Label className="fw-bold m-1">Address</Form.Label>
                                    <Form.Control type="text" onChange={e => {
                                        dispatch({type: ACTIONS.ADDRESS, payload: e})
                                        if(newState.status !== ""){ dispatch({type: ACTIONS.STATUS, payload: ""})}
                                    }} />
                                </Form.Group>
                            </div>
                            <div className="col">
                                <Form.Group className="mt-3">
                                    <Form.Label className="fw-bold m-1">Remarks</Form.Label>
                                    <Form.Control type="text" onChange={e => {
                                        dispatch({type: ACTIONS.REMARKS, payload: e})
                                        if(newState.status !== ""){ dispatch({type: ACTIONS.STATUS, payload: ""})}
                                    }} />
                                </Form.Group>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center m-3">
                            <Button variant="primary" className="mt-3 mb-3" onClick={SubmitHandler}>Submit</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default CustomerInfo;