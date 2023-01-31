import axios from "axios";
import React, { useReducer } from "react";
import { Container, Form, Button, Table, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";



const ACTIONS = {
    CUSTOMER_ID: "CUSTOMER_ID",
    FULL_ITEM_DETAILS: "FULL_ITEM_DETAILS",
    OVERALL_GOLD: "OVERALL_GOLD",
    OVERALL_SILVER: "OVERALL_SILVER",
    ORDER_ID: "ORDER_ID",
    PAYMENT_ID: "PAYMENT_ID",
    PAYMENT_INFO_STATUS: "PAYMENT_INFO_STATUS",
    TABLE_SHOW: "TABLE_SHOW",
    ITEM_DETAILS: "ITEM_DETAILS",
    ORDER_DETAILS: "ORDER_DETAILS",
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
    PAYMENT_DESCRIPTION: "PAYMENT_DESCRIPTION",
    PAYMENT_TYPE: "PAYMENT_TYPE",
    PAYMENT_RECEIVED_BY: "PAYMENT_RECEIVED_BY",
    SHOW1: "SHOW1",
    SHOW2: "SHOW2",
    SHOW3: "SHOW3",
    STATUS: "STATUS",
    PAYMENT_DATE: "PAYMENT_DATE",
    PAYMENT_PURPOSE: "PAYMENT_PURPOSE",
    PAYMENT_ENTERED_BY: "PAYMENT_ENTERED_BY"
}

const reducer = (state, {type, payload}) => {
    switch(type) {
        case ACTIONS.CUSTOMER_ID:
            return {...state, customerId: payload}
        case ACTIONS.FULL_ITEM_DETAILS:
            return {...state, fullItemDetails: payload}
        case ACTIONS.OVERALL_GOLD:
            return {...state, overallGold: payload}
        case ACTIONS.OVERALL_SILVER:
            return {...state, overallSilver: payload}
        case ACTIONS.STATUS:
            return {...state, status: payload}
        case ACTIONS.PAYMENT_PURPOSE:
            return {...state, paymentPurpose: payload}
        case ACTIONS.ORDER_ID:
            return {...state, orderId: payload}
        case ACTIONS.PAYMENT_ID:
            return {...state, paymentId: payload}
        case ACTIONS.PAYMENT_INFO_STATUS:
            return {...state, paymentInfoStatus: payload}
        case ACTIONS.TABLE_SHOW:
            return {...state, tableShow: payload}
        case ACTIONS.ITEM_DETAILS:
            return {...state, itemDetails: payload}
        case ACTIONS.ORDER_DETAILS:
            return {...state, orderDetails: payload}
        case ACTIONS.CUSTOMER_MOBILE:
            return {...state, customerMobile: payload}
        case ACTIONS.CUSTOMER_FULL_NAME:
            return {...state, customerFullName: payload.toLowerCase()}
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
            return {...state, customerDueStatus: payload}
        case ACTIONS.CUSTOMER_DUE_AMOUNT:
            return {...state, customerDueAmount: payload.target.value}
        case ACTIONS.RRJ_DUE_STATUS:
            return {...state, rrjDueStatus: payload}
        case ACTIONS.RRJ_DUE_AMOUNT:
            return {...state, rrjDueAmount: payload.target.value}
        case ACTIONS.PAYMENT_DESCRIPTION:
            return {...state, paymentDescription: payload.target.value.toLowerCase()}
        case ACTIONS.PAYMENT_TYPE:
            return {...state, paymentType: payload}
        case ACTIONS.PAYMENT_RECEIVED_BY:
            return {...state, paymentReceivedBy: payload}
        case ACTIONS.SHOW1:
            return {...state, show1: payload}
        case ACTIONS.SHOW2:
            return {...state, show2: payload}
        case ACTIONS.SHOW3:
            return {...state, show3: payload}
        case ACTIONS.PAYMENT_DATE:
            return {...state, paymentDate: String(payload.target.value)}
        default:
            return state
    }
}

const PaymentDetails = ({navigate}) => {
    
    const myName = useSelector(state => state.LoginPage.employeeName)

    const initialState = {
        orderId: "",
        customerId: 0,
        paymentId: "",
        paymentInfoStatus: "",
        fullItemDetails: [],
        itemDetails: [],
        orderDetails: [],
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
        rrjDueStatus: "",
        rrjDueAmount: "",
        paymentDescription: "",
        paymentType: "",
        paymentReceivedBy: "",
        show1: false,
        show2: false,
        show3: false,
        paymentDate: "",
        transactionType: "Order Related",
        paymentPurpose: "",
        status: "",
        paymentEnteredBy: myName,
        overallGold: "",
        overallSilver: ""
    }

    const [newState, dispatch] = useReducer(reducer, initialState)
    const handleClose1 = () => dispatch({type:ACTIONS.SHOW1, payload: false})
    const handleClose2 = () => dispatch({type:ACTIONS.SHOW2, payload: false})
    const handleClose3 = () => dispatch({type:ACTIONS.SHOW3, payload: false})

    const SubmitHandler = () => {
        console.log(newState)
        axios.post("http://localhost:8080/PaymentInfo/add", newState)
            .then(() => {
                var cash = 0
                var account = 0
                if(newState.paymentType.includes("Cash")){
                    cash += Number(newState.amountReceived)
                }
                if(newState.paymentType.includes("Transfer")){
                    account += Number(newState.amountReceived)
                }
                const data = {
                    id: newState.paymentId,
                    date: newState.paymentDate,
                    cashIn: cash.toString(),
                    cashOut: "",
                    goldIn: newState.exchangeGoldWeight,
                    goldOut: newState.overallGold,
                    silverIn: newState.exchangeSilverWeight,
                    silverOut: newState.overallSilver,
                    accountIn: account.toString(),
                    accountOut: ""
                }

                axios.post("http://localhost:8080/DayInfo/add", data)
                    .then(() => {
                        dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                    }).catch(err => console.log(err))
                }).catch(err => console.log(err))
    }

    const Validate = () => {
        axios.post("http://localhost:8080/OrderTaking/check", newState)
        .then(res => {
            let arr = res.data
            if(arr[0] !== undefined){
                dispatch({type:ACTIONS.SHOW2, payload: true})
                dispatch({type:ACTIONS.ORDER_DETAILS, payload: arr.reverse()})
            } else {
                dispatch({type: ACTIONS.SHOW1, payload: true})
            }
        })
        .catch(err => console.log(err))
    }
 
    return(
        <>
        <Modal show={newState.show3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title>Item Details</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{height: "500px", overflow: "hidden", overflowY: "auto"}}>
        <Table className="table-hover w-100 mt-1 small">
                <tbody>
                    <tr>
                        <th>Item Id</th>
                        <td>{newState.fullItemDetails.itemId}</td>
                    </tr>
                    <tr>
                        <th>Item Name</th>
                        <td>{newState.fullItemDetails.itemName}</td>
                    </tr>
                    <tr>
                        <th>Item Type</th>
                        <td>{newState.fullItemDetails.itemType}</td>
                    </tr>
                    <tr>
                        <th>Item Delivery Date</th>
                        <td>{newState.fullItemDetails.itemDeliveryDate}</td>
                    </tr>
                    <tr>
                        <th>Item Price</th>
                        <td>{newState.fullItemDetails.itemPrice}</td>
                    </tr>
                    <tr>
                        <th>Item Status</th>
                        <td>{newState.fullItemDetails.itemStatus}</td>
                    </tr>
                    <tr>
                        <th>Item Entered By</th>
                        <td>{newState.fullItemDetails.itemEnteredBy}</td>
                    </tr>
                    <tr>
                        <th>Customer Comments</th>
                        <td>{newState.fullItemDetails.customerComments}</td>
                    </tr>
                    <tr>
                        <th>Order Receiver Comments</th>
                        <td>{newState.fullItemDetails.orderReceiverComments}</td>
                    </tr>
                    <tr>
                        <th>Making Charges</th>
                        <td>{newState.fullItemDetails.makingCharges}</td>
                    </tr>
                    <tr>
                        <th>Item Gross Weight</th>
                        <td>{newState.fullItemDetails.itemGrossWeight}</td>
                    </tr>
                    <tr>
                        <th>Item Net Weight</th>
                        <td>{newState.fullItemDetails.itemNetWeight}</td>
                    </tr>
                    <tr>
                        <th>Wastage</th>
                        <td>{newState.fullItemDetails.wastage}</td>
                    </tr>
                    <tr>
                        <th>Pearls Weight</th>
                        <td>{newState.fullItemDetails.pearlsWeight}</td>
                    </tr>
                    <tr>
                        <th>Pearls Cost</th>
                        <td>{newState.fullItemDetails.pearlsCost}</td>
                    </tr>
                    <tr>
                        <th>Stones Type</th>
                        <td>{newState.fullItemDetails.stonesType}</td>
                    </tr>
                    <tr>
                        <th>Cz Cost</th>
                        <td>{newState.fullItemDetails.czCost}</td>
                    </tr>
                    <tr>
                        <th>Emerald Cost</th>
                        <td>{newState.fullItemDetails.emeraldCost}</td>
                    </tr>
                    <tr>
                        <th>Ruby Cost</th>
                        <td>{newState.fullItemDetails.rubyCost}</td>
                    </tr>
                    <tr>
                        <th>Overall Stone Weight</th>
                        <td>{newState.fullItemDetails.overallStoneWeight}</td>
                    </tr>
                    <tr>
                        <th>Overall Stone Cost</th>
                        <td>{newState.fullItemDetails.overallStoneCost}</td>
                    </tr>
                </tbody>
            </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        <Modal show={newState.show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Order does not exist</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        <Modal show={newState.show2} onHide={handleClose2} className="modal-lg">
        <Modal.Header closeButton>
          <Modal.Title>Select Order Id</Modal.Title>
        </Modal.Header>
        <Modal.Body  style={{height: "400px", overflow: "hidden", overflowY: "auto"}}>
            <div className="row">
                <div className="col-4">
                    <Form.Select onChange={e => {
                            let val = {
                                orderId: e.target.value
                            }
                            axios.post("http://localhost:8080/OrderTaking/getcustomerinfo", val)
                                .then((res) => {
                                    const info = res.data[0]
                                    if(info !== undefined){
                                        dispatch({type:ACTIONS.CUSTOMER_ID, payload: info[0]})
                                        dispatch({type:ACTIONS.CUSTOMER_FULL_NAME, payload:info[1]})
                                        dispatch({type:ACTIONS.CUSTOMER_MOBILE, payload: info[2]})
                                    }
                                }).catch(err => console.log(err))
                            dispatch({type:ACTIONS.ORDER_ID, payload: val.orderId})
                            axios.post("http://localhost:8080/ItemInfo/getweight", val)
                                .then(res => {
                                    let arr = res.data
                                    var gold = 0
                                    var silver = 0
                                    if(arr.length !== 0){
                                        arr.forEach(element => {
                                            if(element[0].includes("Gold")){
                                                gold += Number(element[1])
                                            } else {
                                                silver += Number(element[1])
                                            }
                                        });
                                        dispatch({type:ACTIONS.OVERALL_GOLD, payload: String(gold)})
                                        dispatch({type:ACTIONS.OVERALL_SILVER, payload: String(silver)})
                                    }
                                })
                                .catch(err => console.log(err))
                        }}>
                            <option value=""></option>
                            {
                            newState.orderDetails.map((info, index) => {
                                return(
                                    <option value={info[0]} key={index}>{info[0]}</option>
                                )
                            })
                        }
                    </Form.Select>
                </div>
                <div className="col">
                    <Button className="btn btn-secondary" onClick={() => {
                        axios.post("http://localhost:8080/ItemInfo/getitemdetails", newState)
                            .then(res => {
                                if(res.data[0] !== undefined)
                                dispatch({type:ACTIONS.TABLE_SHOW, payload: true})
                                dispatch({type:ACTIONS.ITEM_DETAILS, payload: res.data})
                            })
                            .catch(err => console.log(err))
                    }}>Get Order Details
                    </Button>
                </div>
                <div className="m-3 d-flex justify-content-center">
                    <Table className="table-hover w-100 ">
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
                                    <tr style={{cursor:"pointer"}} onClick={() => {
                                        dispatch({type:ACTIONS.FULL_ITEM_DETAILS, payload: item})
                                        dispatch({type:ACTIONS.SHOW3, payload: true})
                                    }} key={index+1}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.itemId}</td>
                                        <td>{item.itemName}</td>
                                        <td>{item.itemPrice}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </Table>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose2}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
        <Container>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb flex-nowrap">
                    <li className="breadcrumb-item fw-bold text-truncate"><p style={{"cursor":"pointer"}} onClick={() => {navigate('/homepage')}}>Home</p></li>
                    <li className="breadcrumb-item fw-bold text-truncate"><p style={{"cursor":"pointer"}} onClick={() => {navigate('/infoentry')}}>InfoEntry__</p></li>
                    <li className="breadcrumb-item active text-white fw-bold text-truncate" aria-current="page">PaymentDetails</li>
                </ol>
            </nav>
            <Form>
                <div className="row"><h5 className="text-success d-flex flex-row justify-content-center">{newState.paymentInfoStatus}</h5></div>
                <div className="row">
                    <div className="col-3">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Customer Mobile</Form.Label>
                            <Form.Control type="text" defaultValue={newState.customerMobile} onChange={e => {
                                dispatch({type: ACTIONS.CUSTOMER_MOBILE, payload: e.target.value})
                                if(newState.orderId !== ""){dispatch({type:ACTIONS.ORDER_ID, payload: ""})}
                                if(newState.customerFullName !== ""){dispatch({type:ACTIONS.CUSTOMER_FULL_NAME, payload: ""})}
                            }} />
                            <Button className="btn btn-secondary mt-2" onClick={Validate}>Validate Id</Button>
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Customer Full Name</Form.Label>
                            <Form.Control type="text" defaultValue={newState.customerFullName} disabled/>
                        </Form.Group>
                    </div>
                    <div className="col-3">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Order Id</Form.Label>
                            <Form.Control type="text" defaultValue={newState.orderId} disabled/>
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Payment Id</Form.Label>
                            <Form.Control type="text" defaultValue={newState.paymentId} />
                            <Button className="btn btn-secondary mt-2" onClick={() => {
                                const temp = new Date()
                                const time = String(temp.getFullYear()) + String(temp.getMonth() + 1).padStart(2, '0') + String(temp.getDate()).padStart(2, '0') + String(temp.getHours()).padStart(2, '0') + String(temp.getMinutes()).padStart(2, '0') + String(temp.getSeconds()).padStart(2, '0')
                                dispatch({type:ACTIONS.PAYMENT_ID, payload: time})
                            }}>Get Payment Id</Button>
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Payment Purpose</Form.Label>
                            <Form.Select onChange={e => {
                                dispatch({type:ACTIONS.PAYMENT_PURPOSE, payload: e.target.value})
                            }}>
                                <option value=""></option>
                                <option value="Order Related">Order Related</option>
                                <option value="Gold Sale">Gold Sale</option>
                                <option value="Silver Sale">Silver Sale</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Payment Date</Form.Label>
                            <Form.Control type="date" onChange={e => dispatch({type: ACTIONS.PAYMENT_DATE, payload: e})}/>
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Payment Received Type</Form.Label>
                            <Form.Select onChange={e => {
                                dispatch({type:ACTIONS.PAYMENT_TYPE, payload: e.target.value})
                            }}>
                                <option value=""></option>
                                <option value="Cash">Cash</option>
                                <option value="Gold">Gold</option>
                                <option value="Gold and Cash">Gold and Cash</option>
                                <option value="Gold and Acnt Transfer">Gold and Acnt Transfer</option>
                                <option value="Silver and Cash">Silver and Cash</option>
                                <option value="Silver and Acnt Transfer">Gold and Acnt Transfer</option>
                                <option value="Silver">Silver</option>
                                <option value="Acnt Transfer">Account Transfer</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Payment Status</Form.Label>
                            <Form.Select onChange={e => {
                                    dispatch({type:ACTIONS.STATUS, payload: e.target.value})
                                }}>
                                    <option value=""></option>
                                    <option value="In Progress">Pending</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Cancelled">Cancelled</option>
                                </Form.Select>
                        </Form.Group>
                    </div>
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
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Total Order Price</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.ORDER_PRICE, payload: e})} />
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
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Payment Entered By</Form.Label>
                            <Form.Control type="text" defaultValue={newState.paymentEnteredBy} disabled/>
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Customer Due Status</Form.Label>
                            <Form.Select onChange={e => {
                                    dispatch({type:ACTIONS.CUSTOMER_DUE_STATUS, payload: e.target.value})
                                }}>
                                    <option value=""></option>
                                    <option value="No Dues">No Dues</option>
                                    <option value="Due">Due</option>
                                </Form.Select>
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Customer Due Amount</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.CUSTOMER_DUE_AMOUNT, payload: e})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">RRJ Due Status</Form.Label>
                            <Form.Select onChange={e => {
                                    dispatch({type:ACTIONS.RRJ_DUE_STATUS, payload: e.target.value})
                                }}>
                                    <option value=""></option>
                                    <option value="No Dues">No Dues</option>
                                    <option value="Due">Due</option>
                                </Form.Select>
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">RRJ Due Amount</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.RRJ_DUE_AMOUNT, payload: e})} />
                        </Form.Group>
                    </div>
                    <div className="col-3">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Payment Received By</Form.Label>
                            <Form.Select onChange={e => dispatch({type: ACTIONS.PAYMENT_RECEIVED_BY, payload: e.target.value})}>
                                    <option value=""></option>
                                    <option value="LAXMINARSAIAH YEDULAPURAM">LAXMINARSAIAH YEDULAPURAM</option>
                                    <option value="RAVI KUMAR RANGU">RAVI KUMAR RANGU</option>
                                    <option value="SRAVAN KUMAR RANGU">SRAVAN KUMAR RANGU</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Payment Description</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.PAYMENT_DESCRIPTION, payload: e})} />
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