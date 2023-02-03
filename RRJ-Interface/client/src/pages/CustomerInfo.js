import React, { useReducer } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import axios from "axios";


const ACTIONS = {
    CUSTOMER_FULL_NAME: "CUSTOMER_FULL_NAME",
    CUSTOMER_MOBILE: "CUSTOMER_MOBILE",
    ALTERNATE_MOBILE_ONE: "ALTERNATE_MOBILEONE",
    ALTERNATE_MOBILE_TWO: "ALTERNATE_MOBILETWO",
    ADDRESS: "ADDRESS",
    REMARKS: "REMARKS",
    STATUS: "STATUS",
    ERR: "ERR"
}

const ACTIONS1 = {
    CUSTOMER_FULL_NAME: "CUSTOMER_FULL_NAME",
    CUSTOMER_MOBILE: "CUSTOMER_MOBILE",
    ALTERNATE_MOBILE_ONE: "ALTERNATE_MOBILEONE",
    ALTERNATE_MOBILE_TWO: "ALTERNATE_MOBILETWO",
    ADDRESS: "ADDRESS",
    REMARKS: "REMARKS",
    STATUS: "STATUS",
    ERR: "ERR"
}

const reducer1 = (state, {type, payload}) => {
    switch(type) {
        case ACTIONS.CUSTOMER_FULL_NAME:
            return {...state, customerFullName: payload}
        case ACTIONS.CUSTOMER_MOBILE:
            return {...state, customerMobile: payload}
        case ACTIONS.ALTERNATE_MOBILE_ONE:
            return {...state, alternateMobileOne: payload}
        case ACTIONS.ALTERNATE_MOBILE_TWO:
            return {...state, alternateMobileTwo: payload}
        case ACTIONS.ADDRESS:
            return {...state, address: payload}
        default:
            return state
        }
    }

const reducer = (state, {type, payload}) => {
    switch(type) {
        case ACTIONS.CUSTOMER_FULL_NAME:
            return {...state, customerFullName: payload.target.value.toLowerCase()}
        case ACTIONS.CUSTOMER_MOBILE:
            return {...state, customerMobile: payload.target.value}
        case ACTIONS.ALTERNATE_MOBILE_ONE:
            return {...state, alternateMobileOne: payload.target.value}
        case ACTIONS.ALTERNATE_MOBILE_TWO:
            return {...state, alternateMobileTwo: payload.target.value}
        case ACTIONS.ADDRESS:
            return {...state, address: payload.target.value.toLowerCase()}
        case ACTIONS.REMARKS:
            return {...state, remarks: payload.target.value.toLowerCase()}
        case ACTIONS.STATUS:
            return {...state, status: payload}
        case ACTIONS.ERR:
            return {...state, err: payload}
        default:
            return state
        }
    }
                                
const CustomerInfo = ({navigate, info}) => {

    const initialState = {
        customerFullName: (info === undefined) ? "" : info.customerFullName,
        customerMobile: (info === undefined) ? "" : info.customerMobile,
        alternateMobileOne: (info === undefined) ? "" : info.alternateMobileOne,
        alternateMobileTwo: (info === undefined) ? "" : info.alternateMobileTwo,
        address: (info === undefined) ? "" : info.address,
        remarks: (info === undefined) ? "" : info.remarks,
        status: "",
        err: ""
    }

    const initialState1 = {
        customerFullName: false,
        customerMobile: false,
        alternateMobileOne: false,
        alternateMobileTwo: false,
        address: false
    }

    const [newState, dispatch] = useReducer(reducer, initialState)
    const [newState1, dispatch1] = useReducer(reducer1, initialState1)
    
    const SubmitHandler = () => {
        if(newState.customerFullName === "" || !(/^[a-zA-Z]+$/.test(newState.customerFullName))){
            dispatch1({type:ACTIONS1.CUSTOMER_FULL_NAME, payload: true})
        } else if(newState.customerMobile === "" || !(/^(\d){10}$/.test(newState.customerMobile))){
            dispatch1({type:ACTIONS1.CUSTOMER_MOBILE, payload: true})
        } else if(newState.alternateMobileOne === "" || !(/^(\d){10}$/.test(newState.alternateMobileOne))){
            dispatch1({type:ACTIONS1.ALTERNATE_MOBILE_ONE, payload: true})
        } else if(newState.alternateMobileTwo === "" || !(/^(\d){10}$/.test(newState.alternateMobileTwo))){
            dispatch1({type:ACTIONS1.ALTERNATE_MOBILE_TWO, payload: true})
        } else if(newState.address === ""){
            dispatch1({type:ACTIONS1.ADDRESS, payload: true})
        } else {
            axios.post("http://localhost:8080/CustomerInfo/add", newState)
            .then((res) => {
                (res.data === "Customer already exists!") ?
                dispatch({type:ACTIONS.ERR, payload: res.data}) : dispatch({type: ACTIONS.STATUS, payload: res.data})
            })
            .catch(err => console.log(err));
        }

    }

    return(
        <>
        <Container>
            {
                (info === undefined) ? (
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb flex-nowrap">
                            <li className="breadcrumb-item fw-bold text-truncate"><p style={{"cursor":"pointer"}} onClick={() => {navigate('/homepage')}}>Home</p></li>
                            <li className="breadcrumb-item fw-bold text-truncate"><p style={{"cursor":"pointer"}} onClick={() => {navigate('/infoentry')}}>InfoEntry__</p></li>
                            <li className="breadcrumb-item active text-white fw-bold text-truncate" aria-current="page">CustomerInfo</li>
                        </ol>
                    </nav>
                ) : (<></>)
            }
            <Row>
                <Col>
                    <Form>
                    <div className="row"><h5 className="text-success d-flex flex-row justify-content-center">{newState.status}</h5></div>
                    <div className="row"><h5 className="text-danger d-flex flex-row justify-content-center">{newState.err}</h5></div>
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Customer Full Name</Form.Label>
                            <Form.Control type="text" defaultValue={newState.customerFullName} style={{border: newState1.customerFullName ? "3px solid red" : ""}} onChange={e => {
                                dispatch({type: ACTIONS.CUSTOMER_FULL_NAME, payload: e})
                                dispatch1({type:ACTIONS1.CUSTOMER_FULL_NAME, payload: false})
                                if(newState.status !== ""){ dispatch({type: ACTIONS.STATUS, payload: ""})}
                                if(newState.err !== ""){ dispatch({type: ACTIONS.ERR, payload: ""})}
                                }}/>
                                {
                                    newState1.customerFullName ? (<p className="text-danger m-1 small fw-bold">Enter valid name!</p>) : <></>
                                }
                        </Form.Group>
                        <div className="row">
                            <div className="col">
                                <Form.Group className="mt-3">
                                    <Form.Label className="fw-bold m-1">Customer Mobile</Form.Label>
                                    <Form.Control type="text" defaultValue={newState.customerMobile} style={{border: newState1.customerMobile ? "3px solid red" : ""}} onChange={e => {
                                        dispatch({type: ACTIONS.CUSTOMER_MOBILE, payload: e})
                                        dispatch1({type:ACTIONS1.CUSTOMER_MOBILE, payload: false})
                                        if(newState.status !== ""){ dispatch({type: ACTIONS.STATUS, payload: ""})}
                                        if(newState.err !== ""){ dispatch({type: ACTIONS.ERR, payload: ""})}
                                    }} />
                                    {
                                        newState1.customerMobile ? (<p className="text-danger m-1 small fw-bold">Enter valid mobile!</p>) : <></>
                                    }
                                </Form.Group>
                            </div>
                            <div className="col">
                                <Form.Group className="mt-3">
                                    <Form.Label className="fw-bold m-1">Alternate Mobile 01</Form.Label>
                                    <Form.Control type="text" defaultValue={newState.alternateMobileOne} style={{border: newState1.alternateMobileOne ? "3px solid red" : ""}} onChange={e => {
                                        dispatch({type: ACTIONS.ALTERNATE_MOBILE_ONE, payload: e})
                                        dispatch1({type:ACTIONS1.ALTERNATE_MOBILE_ONE, payload: false})
                                        if(newState.status !== ""){ dispatch({type: ACTIONS.STATUS, payload: ""})}
                                        if(newState.err !== ""){ dispatch({type: ACTIONS.ERR, payload: ""})}
                                    }} />
                                    {
                                        newState1.alternateMobileOne ? (<p className="text-danger m-1 small fw-bold">Enter valid mobile!</p>) : <></>
                                    }
                                </Form.Group>
                            </div>
                            <div className="col">
                                <Form.Group className="mt-3">
                                    <Form.Label className="fw-bold m-1">Alternate Mobile 02</Form.Label>
                                    <Form.Control type="text" defaultValue={newState.alternateMobileTwo} style={{border: newState1.alternateMobileTwo ? "3px solid red" : ""}} onChange={e => {
                                        dispatch({type: ACTIONS.ALTERNATE_MOBILE_TWO, payload: e})
                                        dispatch1({type:ACTIONS1.ALTERNATE_MOBILE_TWO, payload: false})
                                        if(newState.status !== ""){ dispatch({type: ACTIONS.STATUS, payload: ""})}
                                        if(newState.err !== ""){ dispatch({type: ACTIONS.ERR, payload: ""})}
                                    }} />
                                    {
                                        newState1.alternateMobileTwo ? (<p className="text-danger m-1 small fw-bold">Enter valid mobile!</p>) : <></>
                                    }
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <Form.Group className="mt-3">
                                    <Form.Label className="fw-bold m-1">Address</Form.Label>
                                    <Form.Control type="text" defaultValue={newState.address} style={{border: newState1.address ? "3px solid red" : ""}} onChange={e => {
                                        dispatch({type: ACTIONS.ADDRESS, payload: e})
                                        dispatch1({type:ACTIONS1.ADDRESS, payload: false})
                                        if(newState.status !== ""){ dispatch({type: ACTIONS.STATUS, payload: ""})}
                                        if(newState.err !== ""){ dispatch({type: ACTIONS.ERR, payload: ""})}
                                    }} />
                                    {
                                        newState1.address ? (<p className="text-danger m-1 small fw-bold">Enter valid address!</p>) : <></>
                                    }
                                </Form.Group>
                            </div>
                            <div className="col">
                                <Form.Group className="mt-3">
                                    <Form.Label className="fw-bold m-1">Remarks</Form.Label>
                                    <Form.Control type="text" defaultValue={newState.remarks} onChange={e => {
                                        dispatch({type: ACTIONS.REMARKS, payload: e})
                                        if(newState.status !== ""){ dispatch({type: ACTIONS.STATUS, payload: ""})}
                                        if(newState.err !== ""){ dispatch({type: ACTIONS.ERR, payload: ""})}
                                    }} />
                                </Form.Group>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center m-3">
                            {
                                (info === undefined) ? (
                                    <Button variant="primary" className="mt-3 mb-3" onClick={SubmitHandler}>Submit</Button>
                                ): (
                                    <Button variant="primary" className="mt-3 mb-3" onClick={() => {
                                        if(newState.customerFullName === "" || !(/[a-zA-Z\s]*/.test(newState.customerFullName))){
                                            dispatch1({type:ACTIONS1.CUSTOMER_FULL_NAME, payload: true})
                                        } else if(newState.customerMobile === "" || !(/^(\d){10}$/.test(newState.customerMobile))){
                                            dispatch1({type:ACTIONS1.CUSTOMER_MOBILE, payload: true})
                                        } else if(newState.alternateMobileOne === "" || !(/^(\d){10}$/.test(newState.alternateMobileOne))){
                                            dispatch1({type:ACTIONS1.ALTERNATE_MOBILE_ONE, payload: true})
                                        } else if(newState.alternateMobileTwo === "" || !(/^(\d){10}$/.test(newState.alternateMobileTwo))){
                                            dispatch1({type:ACTIONS1.ALTERNATE_MOBILE_TWO, payload: true})
                                        } else if(newState.address === ""){
                                            dispatch1({type:ACTIONS1.ADDRESS, payload: true})
                                        } else {
                                            axios.put(`http://localhost:8080/CustomerInfo/customerupdate/${info.customerId}`, newState)
                                                .then(() => {
                                                    dispatch({type:ACTIONS.STATUS, payload: "Updated Successfully!"})
                                                }).catch(err => {console.log(err)})   
                                        }
                                    }}>Modify</Button>
                                )
                            }
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default CustomerInfo;