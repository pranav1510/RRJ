import axios from "axios";
import React, { useReducer } from "react";
import { Container, Form, Button, Table } from "react-bootstrap";

const initialState = {
    paymentId: "",
    paymentInfoStatus: "",
    itemDetails: [],
    tableShow: false,
    customerFullName: "",
    customerMobile: "",
    exchangeGoldWeight: "",
    exchangeGoldCost: "",
    exchangeSilverWeight: "",
    exchangeSilverCost: "",
    orderPrice: "",
    discounut: "",
    amountReceived: "",
    customerDueStatus: "",
    customerDueAmount: "",
    RRJDueStatus: "",
    RRJDueAmount: "",
    paymentRemarks: "",
    paymentType: "",
    paymentReceivedBy: ""
}

const ACTIONS = {
    PAYMENTID: "PAYMENTID",
    PAYMENT_INFO_STATUS: "PAYMENT_INFO_STATUS",
    TABLE_SHOW: "TABLE_SHOW",
    ITEM_DETAILS: "ITEM_DETAILS",
    CUSTOMER_MOBILE: "CUSTOMER_MOBILE",
    CUSTOMER_FULL_NAME: "CUSTOMER_FULL_NAME",
    EXCHANGE_GOLD_WEIGHT: "EXCHANGE_GOLD_WEIGHT",
    EXCHANGE_GOLD_COST: "EXCHANGE_GOLD_COST",
    EXCHANGE_SILVER_WEIGHT: "EXCHANGE_SILVER_WEIGHT",
    EXCHANGE_SILVER_COST: "EXCHANGE_SILVER_COST",
    ORDER_PRICE: "ORDER_PRICE",
    DISCOUNT: "DISCOUNT",
    AMOUNT_RECEIVED: "AMOUNT_RECEIVED",
    CUSTOMER_DUE_STATUS: "CUSTOMER_DUE_STATUS",
    CUSTOMER_DUE_AMOUNT: "CUSTOMER_DUE_AMOUNT",
    RRJ_DUE_STATUS: "RRJ_DUE_STATUS",
    RRJ_DUE_AMOUNT: "RRJ_DUE_AMOUNT",
    PAYMENT_REMARKS: "PAYMENT_REMARKS",
    PAYMENT_TYPE: "PAYMENT_TYPE",
    PAYMENT_RECEIVED_BY: "PAYMENT_RECEIVED_BY"
}

const reducer = (state, {type, payload}) => {
    switch(type) {
        case ACTIONS.PAYMENT_INFO_STATUS:
            return {...state, paymentInfoStatus: payload}
        case ACTIONS.TABLE_SHOW:
            return {...state, tableShow: payload}
        case ACTIONS.ITEM_DETAILS:
            return {...state, itemDetails: payload}
        case ACTIONS.CUSTOMER_MOBILE:
            return {...state, customerMobile: payload.target.value}
        case ACTIONS.CUSTOMER_FULL_NAME:
            return {...state, customerFullName: payload.target.value}
        case ACTIONS.PAYMENTID:
            return {...state, paymentId: payload}
        case ACTIONS.EXCHANGE_GOLD_WEIGHT:
            return {...state, exchangeGoldWeight: payload.target.value}
        case ACTIONS.EXCHANGE_GOLD_COST:
            return {...state, exchangeGoldCost: payload.target.value}
        case ACTIONS.EXCHANGE_SILVER_WEIGHT:
            return {...state, exchangeSilverWeight: payload.target.value}
        case ACTIONS.EXCHANGE_SILVER_COST:
            return {...state, exchangeSilverCost: payload.target.value}
        case ACTIONS.ORDER_PRICE:
            return {...state, orderPrice: payload.target.value}
        case ACTIONS.DISCOUNT:
            return {...state, discount: payload.target.value}
        case ACTIONS.AMOUNT_RECEIVED:
            return {...state, amountReceived: payload.target.value}
        case ACTIONS.CUSTOMER_DUE_STATUS:
            return {...state, customerDueStatus: payload.target.value}
        case ACTIONS.CUSTOMER_DUE_AMOUNT:
            return {...state, customerDueAmount: payload.target.value}
        case ACTIONS.RRJ_DUE_STATUS:
            return {...state, RRJDueStatus: payload.target.value}
        case ACTIONS.RRJ_DUE_AMOUNT:
            return {...state, RRJDueStatus: payload.target.value}
        case ACTIONS.PAYMENT_REMARKS:
            return {...state, paymentRemarks: payload.target.value}
        case ACTIONS.PAYMENT_TYPE:
            return {...state, paymentType: payload.target.value}
        case ACTIONS.PAYMENT_RECEIVED_BY:
            return {...state, paymentReceivedBy: payload.target.value}
        default:
            return state
    }
}

const PaymentDetails = ({date}) => {
    
    const [newState, dispatch] = useReducer(reducer, initialState)

    const SubmitHandler = () => {
        axios.post("http://localhost:8080/PaymentInfo/add", newState)
        .then((res) => {
            dispatch({type:ACTIONS.TABLE_SHOW, payload: false})
            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
        })
        .catch(err => console.log(err))
    }

    const Validate = () => {
        axios.post("http://localhost:8080/OrderTaking/check", newState)
        .then(res => {
            let arr = res.data
            let val = arr[arr.length - 1]
            dispatch({type: ACTIONS.PAYMENTID, payload: val})
        })
        .catch(err => console.log(err))
    }
 
    return(
        <>
        <Container>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
            <li className="breadcrumb-item fw-bold"><a href="/homepage">Home</a></li>
            <li className="breadcrumb-item fw-bold"><a href="/infoentry">Information Entry</a></li>
            <li className="breadcrumb-item active text-white fw-bold" aria-current="page">Payment Details</li>
            </ol>
        </nav>
            <Form>
                <div className="row"><h5 className="text-success d-flex flex-row justify-content-center">{newState.paymentInfoStatus}</h5></div>
                <div className="row">
                    <div className="col-3">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Customer Mobile</Form.Label>
                            <Form.Control type="text" onChange={e => {
                                dispatch({type: ACTIONS.CUSTOMER_MOBILE, payload: e})
                            }} />
                            <Button className="btn btn-secondary mt-2" onClick={Validate}>Validate Id</Button>
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Customer Full Name</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type:ACTIONS.CUSTOMER_FULL_NAME, payload: e})}/>
                        </Form.Group>
                    </div>
                    <div className="col-3">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Payment Id</Form.Label>
                            <Form.Control type="text" defaultValue={newState.paymentId}/>
                            <div className="d-flex flex-row justify-content-end">
                                <Button className="btn btn-secondary mt-2" onClick={() => {
                                    axios.post("http://localhost:8080/ItemInfo/getitemdetails", newState)
                                        .then(res => {
                                            if(res.data[0] !== undefined)
                                            dispatch({type:ACTIONS.TABLE_SHOW, payload: true})
                                            dispatch({type:ACTIONS.ITEM_DETAILS, payload: res.data})
                                        })
                                        .catch(err => console.log(err))
                                }}>Get Order Details</Button>
                            </div>
                        </Form.Group>
                    </div>
                </div>
                <div className="m-3 d-flex justify-content-center">
                    <Table className="table-hover w-75">
                        <thead>
                            {
                                newState.tableShow ? (
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Item Id</th>
                                        <th scope="col">Item Name</th>
                                        <th scope="col">Item Price</th>
                                    </tr>
                                ) : <></>
                            }
                        </thead>
                        <tbody>
                        {
                            newState.itemDetails.map((item, index) => {
                                return(
                                    <tr key={index+1}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item[0]}</td>
                                        <td>{item[1]}</td>
                                        <td>{item[2]}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </Table>
                </div>
                <div className="row">
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Exchange Gold Weight</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.EXCHANGE_GOLD_WEIGHT, payload: e})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Exchange Gold Cost</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.EXCHANGE_GOLD_COST, payload: e})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Exchange Silver Weight</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.EXCHANGE_SILVER_WEIGHT, payload: e})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Exchange Silver Cost</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.EXCHANGE_SILVER_COST, payload: e})} />
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <fieldset disabled>
                            <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">Payment Date</Form.Label>
                                <Form.Control type="text" defaultValue={date} readOnly/>
                            </Form.Group>
                        </fieldset>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Payment Type</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.PAYMENT_TYPE, payload: e})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Discount</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.DISCOUNT, payload: e})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Amount Received</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.AMOUNT_RECEIVED, payload: e})} />
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Total Order Price</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.ORDER_PRICE, payload: e})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Customer Due Status</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.CUSTOMER_DUE_STATUS, payload: e})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Customer Due Amount</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.CUSTOMER_DUE_AMOUNT, payload: e})} />
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">RRJ Due Status</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.RRJ_DUE_STATUS, payload: e})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">RRJDueAmount</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.RRJ_DUE_AMOUNT, payload: e})} />
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Payment Received By</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.PAYMENT_RECEIVED_BY, payload: e})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Payment Remarks</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.PAYMENT_REMARKS, payload: e})} />
                        </Form.Group>
                    </div>
                </div>
                <div className="d-flex justify-content-center m-3">
                    <Button variant="primary" className="mt-3 mb-3" onClick={SubmitHandler}>Submit Details</Button>
                </div>
            </Form>
        </Container>
        </>
    )
}

export default PaymentDetails