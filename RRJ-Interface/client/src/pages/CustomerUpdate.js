import axios from "axios";
import React, { useReducer } from "react";
import { Button, Card, Container, Form, Table } from "react-bootstrap";
import CustomerInfo from "./CustomerInfo";

const initialState = {
    customerMobile: "",
    customerFullName: "",
    tableShow: false,
    customerDetails: [],
    show1: true,
    info: {}
}

const ACTIONS = {
    CUSTOMER_MOBILE: "CUSTOMER_MOBILE",
    CUSTOMER_FULL_NAME: "CUSTOMER_FULL_NAME",
    TABLE_SHOW: "TABLE_SHOW",
    CUSTOMER_DETAILS: "CUSTOMER_DETAILS",
    SHOW1: "SHOW1",
    INFO: "INFO"
}

const reducer = (state, {type, payload}) => {
    switch(type){
        case ACTIONS.CUSTOMER_MOBILE:
            return {...state, customerMobile: payload}
        case ACTIONS.CUSTOMER_FULL_NAME:
            return {...state, customerFullName: payload}
        case ACTIONS.TABLE_SHOW:
            return {...state, tableShow: payload}
        case ACTIONS.CUSTOMER_DETAILS:
            return {...state, customerDetails: payload}
        case ACTIONS.SHOW1:
            return {...state, show1: payload}
        case ACTIONS.INFO:
            return {...state, info: payload}
        default:
            return state
    }
}

const CustomerUpdate = ({navigate}) => {

    const [newState, dispatch] = useReducer(reducer, initialState)

    return(
        <>
        <Container>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb flex-nowrap">
                <li className="breadcrumb-item fw-bold text-truncate"><p style={{"cursor":"pointer"}} onClick={() => {navigate('/homepage')}}>Home</p></li>
                <li className="breadcrumb-item fw-bold text-truncate"><p style={{"cursor":"pointer"}} onClick={() => {navigate('/searchinfo')}}>SearchInfo</p></li>
                {
                    newState.show1 ? (
                        <li className="breadcrumb-item active text-white fw-bold text-truncate" aria-current="page">SearchCustomer</li>
                        ) : (
                            <li className="breadcrumb-item active text-white fw-bold text-truncate" aria-current="page">UpdateCustomer</li>
                        )
                }
                </ol>
            </nav>
            {
                newState.show1 ? (
                <>
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
                                            dispatch({type:ACTIONS.TABLE_SHOW, payload: true})
                                            dispatch({type:ACTIONS.CUSTOMER_DETAILS, payload: res.data})
                                        }).catch(err => console.log(err))
                                }}>Search</Button>
                            </div>
                        </Container>
                    </Card>
                    <Table className="table-hover w-100 mt-4">
                        <thead>
                            {
                                newState.tableShow ? (
                                    <tr>
                                        <th scope="col">Customer Full Name</th>
                                        <th scope="col">Customer Mobile</th>
                                        <th scope="col">Alternate Mobile 01</th>
                                        <th scope="col">Alternate Mobile 02</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Remarks</th>
                                    </tr>
                                ) : <></>
                            }
                        </thead>
                        <tbody>
                            {
                                newState.customerDetails.map((info, index) => {
                                    return(
                                        <tr key={index} style={{"cursor":"pointer"}} onDoubleClick={() => {
                                            dispatch({type:ACTIONS.SHOW1, payload: false})
                                            dispatch({type:ACTIONS.INFO, payload: info})
                                        }}>
                                            <td>{info.customerFullName}</td>
                                            <td>{info.customerMobile}</td>
                                            <td>{info.alternateMobileOne}</td>
                                            <td>{info.alternateMobileTwo}</td>
                                            <td>{info.address}</td>
                                            <td>{info.remarks}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </>
                ) : (<>
                    <CustomerInfo info={newState.info}/>
                </>)
            }
        </Container>
        </>
    )
}

export default CustomerUpdate