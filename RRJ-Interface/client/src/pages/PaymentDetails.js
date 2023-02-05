import axios from "axios";
import React, { useReducer } from "react";
import { Container, Form, Button, Table, Modal, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const initialState1 = {
    paymentId: false,
    paymentPurpose: false,
    sentType: false,
    paymnetType: false,
    paymentStatus: false,
    customerMobile: false,
    customerFullName: false,
    orderId: false,
    paymentDate: false,
    orderPrice: false,
    goldWeight: false,
    silverWeight: false,
    amount: false,
    exchangeCost: false,
    customerDueStatus: false,
    rrjDueStatus: false,
    paymentEnteredBy: false,
    paymentReceivedBy: false
}

const ACTIONS1 = {
    PAYMENT_ID: "PAYMENT_ID",
    PAYMENT_PURPOSE: "PAYMENT_PURPOSE",
    SENT_TYPE: "SENT_TYPE",
    PAYMENT_TYPE: "PAYMENT_TYPE",
    PAYMENT_STATUS: "PAYMENT_STATUS",
    CUSTOMER_MOBILE: "CUSTOMER_MOBILE",
    CUSTOMER_FULL_NAME: "CUSTOMER_FULL_NAME",
    ORDER_ID: "ORDER_ID",
    PAYMENT_DATE: "PAYMENT_DATE",
    ORDER_PRICE: "ORDER_PRICE",
    GOLD_WEIGHT: "GOLD_WEIGHT",
    SILVER_WEIGHT: "SILVER_WEIGHT",
    AMOUNT: "AMOUNT",
    EXCHANGE_COST: "EXCHANGE_COST",
    CUSTOMER_DUE_STATUS: "CUSTOMER_DUE_STATUS",
    RRJ_DUE_STATUS: "RRJ_DUE_STATUS",
    PAYMENT_ENTERED_BY: "PAYMENT_ENTERED_BY",
    PAYMENT_RECEIVED_BY: "PAYMENT_RECEIVED_BY"
}

const reducer1 = (state, {type,payload}) => {
    switch(type){
        case ACTIONS1.PAYMENT_ID:
            return {...state, paymentId: payload}
        case ACTIONS1.PAYMENT_PURPOSE:
            return {...state, paymentPurpose: payload}
        case ACTIONS1.SENT_TYPE:
            return {...state, sentType: payload}
        case ACTIONS1.PAYMENT_TYPE:
            return {...state, paymentType: payload}
        case ACTIONS1.PAYMENT_STATUS:
            return {...state, paymentStatus: payload}
        case ACTIONS1.CUSTOMER_MOBILE:
            return {...state, customerMobile: payload}
        case ACTIONS1.CUSTOMER_FULL_NAME:
            return {...state, customerFullName: payload}
        case ACTIONS1.ORDER_ID:
            return {...state, orderId: payload}
        case ACTIONS1.PAYMENT_DATE:
            return {...state, paymentDate: payload}
        case ACTIONS1.ORDER_PRICE:
            return {...state, orderPrice: payload}
        case ACTIONS1.GOLD_WEIGHT:
            return {...state, goldWeight: payload}
        case ACTIONS1.SILVER_WEIGHT:
            return {...state, silverWeight: payload}
        case ACTIONS1.AMOUNT:
            return {...state, amount: payload}
        case ACTIONS1.EXCHANGE_COST:
            return {...state, exchangeCost: payload}
        case ACTIONS1.CUSTOMER_DUE_STATUS:
            return {...state, customerDueStatus: payload}
        case ACTIONS1.RRJ_DUE_STATUS:
            return {...state, rrjDueStatus: payload}
        case ACTIONS1.PAYMENT_ENTERED_BY:
            return {...state, paymentEnteredBy: payload}
        case ACTIONS1.PAYMENT_RECEIVED_BY:
            return {...state, paymentReceivedBy: payload}
        default:
            return state
    }
}

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
    EXCHANGE_WEIGHT: "EXCHANGE_WEIGHT",
    EXCHANGE_COST: "EXCHANGE_COST",
    GOLD_WEIGHT: "GOLD_WEIGHT",
    SILVER_WEIGHT: "SILVER_WEIGHT",
    ORDER_PRICE: "ORDER_PRICE",
    DISCOUNT: "DISCOUNT",
    AMOUNT_RECEIVED: "AMOUNT_RECEIVED",
    CUSTOMER_DUE_STATUS: "CUSTOMER_DUE_STATUS",
    CUSTOMER_DUE_AMOUNT: "CUSTOMER_DUE_AMOUNT",
    CUSTOMER_DUE_GOLD: "CUSTOMER_DUE_GOLD",
    CUSTOMER_DUE_SILVER: "CUSTOMER_DUE_SILVER",
    RRJ_DUE_STATUS: "RRJ_DUE_STATUS",
    RRJ_DUE_AMOUNT: "RRJ_DUE_AMOUNT",
    RRJ_DUE_GOLD: "RRJ_DUE_GOLD",
    RRJ_DUE_SILVER: "RRJ_DUE_SILVER",
    PAYMENT_DESCRIPTION: "PAYMENT_DESCRIPTION",
    SENT_TYPE: "SENT_TYPE",
    PAYMENT_TYPE: "PAYMENT_TYPE",
    PAYMENT_RECEIVED_BY: "PAYMENT_RECEIVED_BY",
    SHOW1: "SHOW1",
    SHOW2: "SHOW2",
    SHOW3: "SHOW3",
    EXCHANGE_SHOW: "EXCHANGE_SHOW",
    STATUS: "STATUS",
    PAYMENT_DATE: "PAYMENT_DATE",
    PAYMENT_PURPOSE: "PAYMENT_PURPOSE",
    PAYMENT_ENTERED_BY: "PAYMENT_ENTERED_BY",
    SENT_OPTIONS: "SENT_OPTIONS",
    RECEIVE_OPTIONS: "RECEIVE_OPTIONS",
    GOLD_VALUES: "GOLD_VALUES",
    SILVER_VALUES: "SILVER_VALUES",
    PERCENTAGE: "PERCENTAGE",
    ONE_GRAM_COST: "ONE_GRAM_COST",
    TRANSACTION_TYPE: "TRANSACTION_TYPE",
    PAYMENT_PURPOSE_VALUES: "PAYMENT_PURPOSE_VALUES"
}

const reducer = (state, {type, payload}) => {
    switch(type) {
        case ACTIONS.CUSTOMER_ID:
            return {...state, customerId: payload}
        case ACTIONS.FULL_ITEM_DETAILS:
            return {...state, fullItemDetails: payload}
        case ACTIONS.OVERALL_GOLD:
            return {...state, overallGold: state.overallGold += payload}
        case ACTIONS.OVERALL_SILVER:
            return {...state, overallSilver: state.overallSilver += payload}
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
        case ACTIONS.EXCHANGE_WEIGHT:
            return {...state, exchangeWeight: payload}
        case ACTIONS.EXCHANGE_COST:
            return {...state, exchangeCost: payload}
        case ACTIONS.SILVER_WEIGHT:
            return {...state, silverWeight: payload}
        case ACTIONS.GOLD_WEIGHT:
            return {...state, goldWeight: payload}
        case ACTIONS.ORDER_PRICE:
            return {...state, orderPrice: payload}
        case ACTIONS.DISCOUNT:
            return {...state, discount: payload.target.value}
        case ACTIONS.AMOUNT_RECEIVED:
            return {...state, amountReceived: payload.target.value}
        case ACTIONS.CUSTOMER_DUE_STATUS:
            return {...state, customerDueStatus: payload}
        case ACTIONS.CUSTOMER_DUE_AMOUNT:
            return {...state, customerDueAmount: payload}
        case ACTIONS.CUSTOMER_DUE_GOLD:
            return {...state, customerDueGold: payload}
        case ACTIONS.CUSTOMER_DUE_SILVER:
            return {...state, customerDueSilver: payload}
        case ACTIONS.RRJ_DUE_STATUS:
            return {...state, rrjDueStatus: payload}
        case ACTIONS.RRJ_DUE_AMOUNT:
            return {...state, rrjDueAmount: payload}
        case ACTIONS.RRJ_DUE_GOLD:
            return {...state, rrjDueGold: payload}
        case ACTIONS.RRJ_DUE_SILVER:
            return {...state, rrjDueSilver: payload}
        case ACTIONS.PAYMENT_DESCRIPTION:
            return {...state, paymentDescription: payload.target.value.toLowerCase()}
        case ACTIONS.PAYMENT_TYPE:
            return {...state, paymentType: payload}
        case ACTIONS.SENT_TYPE:
            return {...state, sentType: payload}
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
        case ACTIONS.SENT_OPTIONS:
            return {...state, sentOptions: payload}
        case ACTIONS.RECEIVE_OPTIONS:
            return {...state, receiveOptions: payload}
        case ACTIONS.GOLD_VALUES:
            return {...state, goldValues: payload}
        case ACTIONS.SILVER_VALUES:
            return {...state, silverValues: payload}
        case ACTIONS.EXCHANGE_SHOW:
            return {...state, exchangeShow: payload}
        case ACTIONS.PERCENTAGE:
            return {...state, percentage: payload}
        case ACTIONS.ONE_GRAM_COST:
            return {...state, oneGramCost: payload}
        case ACTIONS.TRANSACTION_TYPE:
            return {...state, transactionType: payload}
        case ACTIONS.PAYMENT_PURPOSE_VALUES:
            return {...state, paymentPurposeValues: payload}
        default:
            return state
    }
}

const PaymentDetails = ({navigate}) => {
    
    const myName = useSelector(state => state.LoginPage.employeeName)

    const[newState1, dispatch1] = useReducer(reducer1, initialState1)

    const initialState = {
        trsnsactionType: "",
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
        exchangeWeight: "",
        exchangeCost: "",
        goldWeight: "",
        silverWeight: "",
        orderPrice: "",
        amountReceived: "",
        customerDueStatus: "",
        customerDueAmount: "",
        customerDueGold: "",
        customerDueSilver: "",
        rrjDueStatus: "",
        rrjDueAmount: "",
        rrjDueGold: "",
        rrjDueSilver: "",
        paymentDescription: "",
        sentType: "",
        paymentType: "",
        paymentReceivedBy: "",
        show1: false,
        show2: false,
        show3: false,
        exchangeShow: false,
        percentage: "",
        oneGramCost: "",
        paymentDate: "",
        paymentPurpose: "",
        status: "",
        paymentEnteredBy: myName,
        overallGold: "",
        overallSilver: "",
        sentOptions: [],
        receiveOptions: [],
        goldValues: [],
        silverValues: [],
        priceValues: [],
        paymentPurposeValues: []
    }

    const [newState, dispatch] = useReducer(reducer, initialState)
    const handleClose1 = () => dispatch({type:ACTIONS.SHOW1, payload: false})
    const handleClose2 = () => {
        dispatch({type:ACTIONS.SHOW2, payload: false})
        dispatch({type:ACTIONS.ORDER_ID, payload: ""})
        dispatch({type:ACTIONS.CUSTOMER_FULL_NAME, payload: ""})
    }
    const handleClose3 = () => dispatch({type:ACTIONS.SHOW3, payload: false})

    const options1 = ["Gold", "Silver"]
    const options2 = ["Cash", "Gold", "Gold and Cash", "Gold and Acnt Transfer", "Silver", "Silver and Cash", "Silver and Acnt Transfer", "Acnt Transfer"]
    const options3 = ["Cash", "Acnt Transfer"]
    const options4 = ["Advance for Order", "Order Delivery", "Return Excess", "Dues Payment"]
    const options5 = ["Buying", "Selling", "Borrowing", "Repaying Borrowed", "Lending", "Lended Repaying", "General Expenses", "Self Transfer"]

    const SubmitHandler = () => {
        if(newState.paymentId === ""){dispatch1({type:ACTIONS1.PAYMENT_ID, payload: true})}
        else if(newState.paymentPurpose === ""){dispatch1({type:ACTIONS1.PAYMENT_PURPOSE, payload: true})}
        else if((newState.paymentPurpose === "Order Delivery" || newState.paymentPurpose === "Return Excess") && newState.sentType === ""){
            dispatch1({type:ACTIONS1.SENT_TYPE, payload: true})
        }else if((newState.paymentPurpose !== "Return Excess" || newState.paymentPurpose !== "") && newState.paymentType === ""){
            dispatch1({type:ACTIONS1.PAYMENT_TYPE, payload: true})
        } else if(newState.paymentStatus === ""){dispatch1({type:ACTIONS1.PAYMENT_STATUS, payload: true})}
        else if(newState.customerMobile === "" || !(/^(\d){10}$/).test(newState.customerMobile)){dispatch1({type:ACTIONS1.CUSTOMER_MOBILE, payload: true})}
        else if(newState.customerFullName === ""){dispatch1({type:ACTIONS1.CUSTOMER_FULL_NAME, payload: true})}
        else if(newState.orderId === ""){dispatch1({type:ACTIONS1.ORDER_ID, payload: true})}
        else if(newState.paymentDate === ""){dispatch1({type:ACTIONS1.PAYMENT_DATE, payload: true})}
        else if(newState.paymentPurpose === "Order Delivery" && newState.orderPrice === ""){dispatch1({type:ACTIONS1.ORDER_PRICE, payload: true})}
        else if((newState.sentType.includes("Gold") || newState.paymentType.includes("Gold")) && (!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === "")){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
        else if((newState.sentType.includes("Silver") || newState.paymentType.includes("Silver")) && (!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === "") ){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
        else if((newState.sentType.includes("Cash") || newState.sentType.includes("Acnt") || newState.paymentType.includes("Cash") || newState.paymentType.includes("Acnt")) && (!(/\d*\.?\d*/.test(newState.amountReceived)) || newState.amountReceived === "")){
            dispatch1({type:ACTIONS1.AMOUNT, payload: true})
        } else if((newState.paymentType.includes("Gold") || newState.paymentType.includes("Silver")) && newState.exchangeCost === ""){dispatch1({type:ACTIONS1.EXCHANGE_COST, payload: true})}
        else if(newState.customerDueStatus === ""){dispatch1({type:ACTIONS1.CUSTOMER_DUE_STATUS, payload: true})}
        else if(newState.paymentEnteredBy === ""){dispatch1({type:ACTIONS1.PAYMENT_ENTERED_BY, payload: true})}
        else if(newState.rrjDueStatus === ""){dispatch1({type:ACTIONS1.RRJ_DUE_STATUS, payload: true})}
        else if(newState.paymentReceivedBy === ""){dispatch1({type:ACTIONS1.PAYMENT_RECEIVED_BY, payload: true})}
        else{
            if(newState.paymentPurpose === "Advance for Order" || newState.paymentPurpose === "Order Delivery" || newState.paymentPurpose === "Dues Payment"){
                if(newState.paymentType === "Cash"){
                    axios.post("http://localhost:8080/DayInfo/add", {
                        cashIn: newState.amount,
                        id: newState.paymentId,
                        date: newState.paymentDate
                    }).then(() => { console.log("saved")}).catch(err => console.log(err))
                } else if(newState.paymentType === "Gold"){
                    axios.post("http://localhost:8080/DayInfo/add", {
                        goldIn: newState.goldWeight,
                        id: newState.paymentId,
                        date: newState.paymentDate
                    }).then(() => {console.log("saved")}).catch(err => console.log(err))
                } else if(newState.paymentType === "Gold and Cash"){
                    axios.post("http://localhost:8080/DayInfo/add", {
                        goldIn: newState.goldWeight,
                        cashIn: newState.amountReceived,
                        id: newState.paymentId,
                        date: newState.paymentDate
                    }).then(() => {console.log("saved")}).catch(err => console.log(err))
                } else if(newState.paymentType === "Gold and Acnt Transfer"){
                    axios.post("http://localhost:8080/DayInfo/add", {
                        goldIn: newState.goldWeight,
                        accountIn: newState.amountReceived,
                        id: newState.paymentId,
                        date: newState.paymentDate
                    }).then(() => {console.log("saved")}).catch(err => console.log(err))
                } else if(newState.paymentType === "Silver"){
                    axios.post("http://localhost:8080/DayInfo/add", {
                        silverIn: newState.silverWeight,
                        id: newState.paymentId,
                        date: newState.paymentDate
                    }).then(() => {console.log("saved")}).catch(err => console.log(err))
                } else if(newState.paymentType === "Silver and Cash"){
                    axios.post("http://localhost:8080/DayInfo/add", {
                        silverIn: newState.silverWeight,
                        cashIn: newState.amountReceived,
                        id: newState.paymentId,
                        date: newState.paymentDate
                    }).then(() => {console.log("saved")}).catch(err => console.log(err))
                } else if(newState.paymentType === "Silver and Acnt Transfer"){
                    axios.post("http://localhost:8080/DayInfo/add", {
                        silverIn: newState.silverWeight,
                        accountIn: newState.amountReceived,
                        id: newState.paymentId,
                        date: newState.paymentDate
                    }).then(() => {console.log("saved")}).catch(err => console.log(err))
                } else if(newState.paymentType === "Acnt Transfer"){
                    axios.post("http://localhost:8080/DayInfo/add", {
                        accountIn: newState.amountReceived,
                        id: newState.paymentId,
                        date: newState.paymentDate
                    }).then(() => {console.log("saved")}).catch(err => console.log(err))
                }
            } else if(newState.paymentPurpose === "Return Excess"){
                if(newState.sentType === "Cash"){
                    axios.post("http://localhost:8080/DayInfo/add", {
                        cashOut: newState.amount,
                        id: newState.paymentId,
                        date: newState.paymentDate
                    }).then(() => { console.log("saved")}).catch(err => console.log(err))
                } else if(newState.sentType === "Gold"){
                    axios.post("http://localhost:8080/DayInfo/add", {
                        goldOut: newState.goldWeight,
                        id: newState.paymentId,
                        date: newState.paymentDate
                    }).then(() => {console.log("saved")}).catch(err => console.log(err))
                } else if(newState.sentType === "Gold and Cash"){
                    axios.post("http://localhost:8080/DayInfo/add", {
                        goldOut: newState.goldWeight,
                        cashOut: newState.amountReceived,
                        id: newState.paymentId,
                        date: newState.paymentDate
                    }).then(() => {console.log("saved")}).catch(err => console.log(err))
                } else if(newState.sentType === "Gold and Acnt Transfer"){
                    axios.post("http://localhost:8080/DayInfo/add", {
                        goldOut: newState.goldWeight,
                        accountOut: newState.amountReceived,
                        id: newState.paymentId,
                        date: newState.paymentDate
                    }).then(() => {console.log("saved")}).catch(err => console.log(err))
                } else if(newState.sentType === "Silver"){
                    axios.post("http://localhost:8080/DayInfo/add", {
                        silverOut: newState.silverWeight,
                        id: newState.paymentId,
                        date: newState.paymentDate
                    }).then(() => {console.log("saved")}).catch(err => console.log(err))
                } else if(newState.sentType === "Silver and Cash"){
                    axios.post("http://localhost:8080/DayInfo/add", {
                        silverOut: newState.silverWeight,
                        cashOut: newState.amountReceived,
                        id: newState.paymentId,
                        date: newState.paymentDate
                    }).then(() => {console.log("saved")}).catch(err => console.log(err))
                } else if(newState.sentType === "Silver and Acnt Transfer"){
                    axios.post("http://localhost:8080/DayInfo/add", {
                        silverOut: newState.silverWeight,
                        accountOut: newState.amountReceived,
                        id: newState.paymentId,
                        date: newState.paymentDate
                    }).then(() => {console.log("saved")}).catch(err => console.log(err))
                } else if(newState.sentType === "Acnt Transfer"){
                    axios.post("http://localhost:8080/DayInfo/add", {
                        accountOut: newState.amountReceived,
                        id: newState.paymentId,
                        date: newState.paymentDate
                    }).then(() => {console.log("saved")}).catch(err => console.log(err))
                }
            }
            axios.post("http://localhost:8080/PaymentInfo/add", newState)
                .then(() => {
                    dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                    }).catch(err => console.log(err))
        }
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
                                        <th scope="col">Item Status</th>
                                    </tr>
                                ) : <></>
                            }
                        </thead>
                        <tbody>
                        {
                            newState.itemDetails.map((item, index) => {
                                return(
                                    <tr style={{cursor:"pointer"}} onClick={() => {console.log(item)
                                        dispatch({type:ACTIONS.FULL_ITEM_DETAILS, payload: item})
                                        dispatch({type:ACTIONS.SHOW3, payload: true})
                                    }} key={index+1}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.itemId}</td>
                                        <td>{item.itemName}</td>
                                        <td>{item.itemStatus}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </Table>
                </div>
            </div>
            <div className="row">
                {
                (newState.paymentPurpose === "Order Delivery")? <>
                {
                    newState.tableShow ? <h5 className="mt-3 ms-2 mb-2">Select Items to Deliver</h5> : <></>
                }
                    {
                        newState.itemDetails.map((info,index) => {
                            return(
                                (info.itemStatus !== "Delivered")? (
                                    <div key={index} className="form-check ms-5">
                                        <Form.Check type="checkbox" onClick={e => {
                                            if(e.target.checked){
                                                newState.priceValues.push(Number(info.itemPrice))
                                                if(info.itemType.includes("Gold")){
                                                    newState.goldValues.push(Number(info.itemNetWeight))
                                                } else{
                                                    newState.silverValues.push(Number(info.itemNetWeight))
                                                }
                                            } else {
                                                newState.priceValues.splice(newState.priceValues.indexOf(Number(info.itemPrice)))
                                                if(info.itemType.includes("Gold")){
                                                    newState.goldValues.splice(newState.goldValues.indexOf(Number(info.itemNetWeight)),1)
                                                } else{
                                                    newState.silverValues.splice(newState.silverValues.indexOf(Number(info.itemNetWeight)),1)
                                                }
                                            }
                                        }}/>
                                        <Form.Label>{info.itemId}</Form.Label>
                                    </div>
                                ) : (
                                    <div key={index} className="form-check ms-4" disabled>
                                        <Form.Check type="checkbox" disabled/>
                                        <Form.Label>{info.itemId}</Form.Label>
                                    </div>
                                )
                            )
                        })
                    }
                </> : <></>

                }
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
              dispatch({type:ACTIONS.SHOW2, payload: false})
              if(newState.paymentPurpose === "Order Delivery"){
                  var goldSum = newState.goldValues.reduce((pv, cv) => pv + cv, 0)
                  var silverSum = newState.silverValues.reduce((pv,cv) => pv + cv, 0)
                  var priceSum = newState.priceValues.reduce((pv,cv) => pv + cv, 0)
                  dispatch({type:ACTIONS.OVERALL_GOLD, payload: goldSum.toString()})
                  dispatch({type:ACTIONS.OVERALL_SILVER, payload: silverSum.toString()})
                  dispatch({type:ACTIONS.ORDER_PRICE, payload: priceSum.toString()})
              }
          }}>Submit</Button>
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
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Payment Id</Form.Label>
                            <Form.Control type="text" defaultValue={newState.paymentId} style={{border: newState1.paymentId ? "3px solid red" : ""}}/>
                            {
                                newState1.paymentId ? (<p className="text-danger m-1 small fw-bold">Enter valid Id!</p>) : <></>
                            }
                            <Button className="btn btn-secondary mt-2" onClick={() => {
                                const temp = new Date()
                                const time = String(temp.getFullYear()) + String(temp.getMonth() + 1).padStart(2, '0') + String(temp.getDate()).padStart(2, '0') + String(temp.getHours()).padStart(2, '0') + String(temp.getMinutes()).padStart(2, '0') + String(temp.getSeconds()).padStart(2, '0')
                                dispatch({type:ACTIONS.PAYMENT_ID, payload: time})
                                if(newState1.paymentId){dispatch1({type:ACTIONS1.PAYMENT_ID, payload: false})}
                            }}>Get Payment Id</Button>
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label  className="fw-bold m-1">Transaction Type</Form.Label>
                            <Form.Select onChange={e => {
                                dispatch({type:ACTIONS.TRANSACTION_TYPE, payload: e.target.value})
                                if(e.target.value === "Order Related"){
                                    dispatch({type:ACTIONS.PAYMENT_PURPOSE_VALUES, payload: options4})
                                } else if(e.target.value === "General"){
                                    dispatch({type:ACTIONS.PAYMENT_PURPOSE_VALUES, payload: options5})
                                } else {
                                    dispatch({type:ACTIONS.PAYMENT_PURPOSE_VALUES, payload: []})
                                }
                            } }>
                                <option value=""></option>
                                <option value="Order Related">Order Related</option>
                                <option value="General">General</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Payment Purpose</Form.Label>
                            <Form.Select style={{border: newState1.paymentPurpose ? "3px solid red" : ""}} onChange={e => {
                                if(newState1.paymentPurpose){dispatch1({type:ACTIONS1.PAYMENT_PURPOSE, payload: false})}
                                dispatch({type:ACTIONS.PAYMENT_PURPOSE, payload: e.target.value})
                                if(newState.transactionType === "Order Related"){
                                    if(e.target.value === "Advance for Order"){
                                        dispatch({type:ACTIONS.SENT_OPTIONS, payload:[]})
                                        dispatch({type:ACTIONS.RECEIVE_OPTIONS, payload: options2})
                                    } else if(e.target.value === "Order Delivery"){
                                        dispatch({type:ACTIONS.SENT_OPTIONS, payload: ["Order Related"]})
                                        dispatch({type:ACTIONS.RECEIVE_OPTIONS, payload: options2})
                                    } else if(e.target.value === "Return Excess"){
                                        dispatch({type:ACTIONS.SENT_OPTIONS, payload: options2})
                                        dispatch({type:ACTIONS.RECEIVE_OPTIONS, payload: []})
                                    } else if(e.target.value === "Dues Payment"){
                                        dispatch({type:ACTIONS.RECEIVE_OPTIONS, payload: options2})
                                        dispatch({type:ACTIONS.SENT_OPTIONS, payload: []})
                                    } else {
                                        dispatch({type:ACTIONS.RECEIVE_OPTIONS, payload: []})
                                        dispatch({type:ACTIONS.SENT_OPTIONS, payload: []})
                                    }
                                } else if(newState.transactionType === "General"){
                                    if(e.target.value === "Buying"){
                                        dispatch({type:ACTIONS.SENT_OPTIONS, payload: options3})
                                        dispatch({type:ACTIONS.RECEIVE_OPTIONS, payload: options1})    
                                    } else if(e.target.value === "Selling"){
                                        dispatch({type:ACTIONS.SENT_OPTIONS, payload: options1})
                                        dispatch({type:ACTIONS.RECEIVE_OPTIONS, payload: options3})
                                    } else if(e.target.value === "Borrowing" || e.target.value === "Lended Repaying"){
                                        dispatch({type:ACTIONS.SENT_OPTIONS, payload: []})
                                        dispatch({type:ACTIONS.RECEIVE_OPTIONS, payload: options2})
                                    } else if(e.target.value === "Lending" || e.target.value === "Repaying Borrowed"){
                                        dispatch({type:ACTIONS.SENT_OPTIONS, payload: options2})
                                        dispatch({type:ACTIONS.RECEIVE_OPTIONS, payload: []})
                                    } else if(e.target.value === "Self Transfer"){
                                        dispatch({type:ACTIONS.SENT_OPTIONS, payload: options3})
                                        dispatch({type:ACTIONS.RECEIVE_OPTIONS, payload: options3})
                                    } else if(e.target.value === "General Expenses"){
                                        dispatch({type:ACTIONS.SENT_OPTIONS, payload: options2})
                                        dispatch({type:ACTIONS.RECEIVE_OPTIONS, payload: []})
                                    } else {
                                        dispatch({type:ACTIONS.RECEIVE_OPTIONS, payload: []})
                                        dispatch({type:ACTIONS.SENT_OPTIONS, payload: []})
                                    }
                                } else {
                                    dispatch({type:ACTIONS.RECEIVE_OPTIONS, payload: []})
                                    dispatch({type:ACTIONS.SENT_OPTIONS, payload: []})
                                }
                            }}>
                                <option value=""></option>
                                {
                                    newState.paymentPurposeValues.map((info,index) => {
                                        return(
                                            <option value={info} key={index}>{info}</option>
                                        )
                                    })
                                }
                            </Form.Select>
                            {
                                newState1.paymentPurpose ? (<p className="text-danger m-1 small fw-bold">Enter valid option!</p>) : <></>
                            }
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Sent Type</Form.Label>
                            <Form.Select style={{border: newState1.sentType ? "3px solid red" : ""}} onChange={e => {
                                dispatch({type:ACTIONS.SENT_TYPE, payload: e.target.value})
                                if(newState1.sentType){dispatch1({type:ACTIONS1.SENT_TYPE, payload: false})}
                            }}>
                                <option value=""></option>
                                {
                                    newState.sentOptions.map((info,index) => {
                                        return(
                                            <option key={index} value={info}>{info}</option>
                                        )
                                    })
                                }
                            </Form.Select>
                            {
                                newState1.sentType ? (<p className="text-danger m-1 small fw-bold">Enter valid option!</p>) : <></>
                            }
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Received Type</Form.Label>
                            <Form.Select style={{border: newState1.paymentType ? "3px solid red" : ""}} onChange={e => {
                                if(newState1.paymentType){dispatch1({type:ACTIONS1.PAYMENT_TYPE, payload: false})}
                                dispatch({type:ACTIONS.PAYMENT_TYPE, payload: e.target.value})
                            }}>
                                <option value=""></option>
                                {
                                    newState.receiveOptions.map((info,index) => {
                                        return(
                                            <option key={index} value={info}>{info}</option>
                                        )
                                    })
                                }
                            </Form.Select>
                            {
                                newState1.paymentType ? (<p className="text-danger m-1 small fw-bold">Enter valid option!</p>) : <></>
                            }
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Customer Mobile</Form.Label>
                            <Form.Control type="text" defaultValue={newState.customerMobile} style={{border: newState1.customerMobile ? "3px solid red" : ""}} onChange={e => {
                                dispatch({type: ACTIONS.CUSTOMER_MOBILE, payload: e.target.value})
                                if(newState1.customerMobile){dispatch1({type: ACTIONS1.CUSTOMER_MOBILE, payload: false})}
                                if(newState1.customerFullName){dispatch1({type:ACTIONS1.CUSTOMER_FULL_NAME, payload: false})}
                                if(newState1.orderId){dispatch1({type:ACTIONS1.ORDER_ID, payload: false})}
                                if(newState.orderId !== ""){dispatch({type:ACTIONS.ORDER_ID, payload: ""})}
                                if(newState.customerFullName !== ""){dispatch({type:ACTIONS.CUSTOMER_FULL_NAME, payload: ""})}
                            }} />
                            {
                                newState1.customerMobile ? (<p className="text-danger m-1 small fw-bold">Enter valid mobile!</p>) : <></>
                            }
                            <Button className="btn btn-secondary mt-2" onClick={Validate}>Validate Id</Button>
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Customer Full Name</Form.Label>
                            <Form.Control type="text" defaultValue={newState.customerFullName} style={{border: newState1.customerFullName ? "3px solid red" : ""}} disabled/>
                            {
                                newState1.customerFullName ? (<p className="text-danger m-1 small fw-bold">Enter valid name!</p>) : <></>
                            }
                        </Form.Group>
                    </div>
                    <div className="col-2">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Order Id</Form.Label>
                            <Form.Control type="text" defaultValue={newState.orderId} style={{border: newState1.orderId ? "3px solid red" : ""}} disabled/>
                            {
                                newState1.orderId ? (<p className="text-danger m-1 small fw-bold">Enter valid Id!</p>) : <></>
                            }
                        </Form.Group>
                    </div>
                    <div className="col-2">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Payment Date</Form.Label>
                            <Form.Control type="date" style={{border: newState1.paymentDate ? "3px solid red" : ""}} onChange={e => {
                                dispatch({type: ACTIONS.PAYMENT_DATE, payload: e})
                                if(newState1.paymentDate){dispatch1({type:ACTIONS1.PAYMENT_DATE, payload: false})}
                            }}/>
                            {
                                newState1.paymentDate ? (<p className="text-danger m-1 small fw-bold">Enter valid date!</p>) : <></>
                            }
                        </Form.Group>
                    </div>
                </div>
                {
                    (newState.paymentType.includes("Gold") || newState.paymentType.includes("Silver")) ? (
                        <Card className="mt-3 w-75" style={{backgroundColor: "skyblue"}}>
                            <Container>
                                <div className="row">
                                    <div className="col">
                                        <Form.Group className="mt-2 mb-2">
                                            <Form.Label className="fw-bold m-1">Exchange Cost</Form.Label>
                                            <Form.Control type="text" defaultValue={newState.exchangeCost} onChange={e => {dispatch({type:ACTIONS.EXCHANGE_COST, payload: e.target.value})}}/>
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group className="mt-2 mb-2">
                                            <Form.Label className="fw-bold m-1">Exchange Weight</Form.Label>
                                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.EXCHANGE_WEIGHT, payload: e.target.value})} />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group className="mt-2 mb-2">
                                            <Form.Label className="fw-bold m-1">Percentage</Form.Label>
                                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.PERCENTAGE, payload: e.target.value})} />
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group className="mt-2 mb-2">
                                            <Form.Label className="fw-bold m-1">One Gram Cost</Form.Label>
                                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.ONE_GRAM_COST, payload: e.target.value})} />
                                        </Form.Group>
                                    </div>
                                    <div className="row">
                                        <div className="d-flex justify-content-between">
                                            <p className="text-danger small fw-bold">mandatory fields*</p>
                                            <Button variant="primary" className="mb-1" onClick={() => {
                                                var weight = Number(newState.exchangeWeight) * (Number(newState.percentage)/100)
                                                var cost = weight * Number(newState.oneGramCost)
                                                dispatch({type:ACTIONS.EXCHANGE_COST, payload: cost})
                                                if(newState.paymentType.includes("Gold")){
                                                    dispatch({type:ACTIONS.GOLD_WEIGHT, payload: weight})
                                                } else {
                                                    dispatch({type:ACTIONS.SILVER_WEIGHT, payload: weight})
                                                }
                                            }}>Submit</Button>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </Card>
                    ) : <></>
                }
                <div className="row">
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Order Price</Form.Label>
                            <Form.Control type="text" defaultValue={newState.orderPrice} style={{border: newState1.orderPrice ? "3px solid red" : ""}} onChange={e => {
                                dispatch({type: ACTIONS.ORDER_PRICE, payload: e.target.value})
                                if(newState1.orderPrice){dispatch1({type:ACTIONS1.ORDER_PRICE, payload: false})}
                            }} />
                            {
                                newState1.orderPrice ? (<p className="text-danger m-1 small fw-bold">Enter valid price!</p>) : <></>
                            }
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Gold Weight</Form.Label>
                            <Form.Control type="text" defaultValue={newState.goldWeight} style={{border: newState1.goldWeight ? "3px solid red" : ""}} onChange={e => {
                                dispatch({type: ACTIONS.GOLD_WEIGHT, payload: e.target.value})
                                if(newState1.goldWeight){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: false})}
                            }} />
                            {
                                newState1.goldWeight ? (<p className="text-danger m-1 small fw-bold">Enter valid weight!</p>) : <></>
                            }
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Silver Weight</Form.Label>
                            <Form.Control type="text" defaultValue={newState.silverWeight} style={{border: newState1.silverWeight ? "3px solid red" : ""}} onChange={e => {
                                dispatch({type: ACTIONS.SILVER_WEIGHT, payload: e.target.value})
                                if(newState1.silverWeight){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: false})}
                            }} />
                            {
                                newState1.silverWeight ? (<p className="text-danger m-1 small fw-bold">Enter valid weight!</p>) : <></>
                            }
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Amount</Form.Label>
                            <Form.Control type="text" style={{border: newState1.amount ? "3px solid red" : ""}} onChange={e => {
                                dispatch({type: ACTIONS.AMOUNT_RECEIVED, payload: e})
                                if(newState1.amount){dispatch1({type:ACTIONS1.AMOUNT, payload: false})}
                            }} />
                            {
                                newState1.amount ? (<p className="text-danger m-1 small fw-bold">Enter valid value!</p>) : <></>
                            }
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Payment Status</Form.Label>
                            <Form.Select style={{border: newState1.paymentStatus ? "3px solid red" : ""}} onChange={e => {
                                    dispatch({type:ACTIONS.STATUS, payload: e.target.value})
                                    if(newState1.paymentStatus){dispatch1({type:ACTIONS1.PAYMENT_STATUS, payload: false})}
                                }}>
                                    <option value=""></option>
                                    <option value="In Progress">Pending</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Cancelled">Cancelled</option>
                                </Form.Select>
                                {
                                    newState1.paymentStatus ? (<p className="text-danger m-1 small fw-bold">Enter valid option!</p>) : <></>
                                }
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Customer Due Status</Form.Label>
                            <Form.Select style={{border: newState1.customerDueStatus ? "3px solid red" : ""}} onChange={e => {
                                    dispatch({type:ACTIONS.CUSTOMER_DUE_STATUS, payload: e.target.value})
                                    if(newState1.customerDueStatus){dispatch1({type:ACTIONS1.CUSTOMER_DUE_STATUS, payload: false})}
                                }}>
                                    <option value=""></option>
                                    <option value="No Dues">No Dues</option>
                                    <option value="Due">Due</option>
                                </Form.Select>
                                {
                                    newState1.customerDueStatus ? (<p className="text-danger m-1 small fw-bold">Enter valid option!</p>) : <></>
                                }
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Customer Due Amount</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.CUSTOMER_DUE_AMOUNT, payload: e.target.value})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Customer Due Gold</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.CUSTOMER_DUE_GOLD, payload: e.target.value})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Customer Due Silver</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.CUSTOMER_DUE_SILVER, payload: e.target.value})} />
                        </Form.Group>
                    </div>
                    <div className="col-3">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Payment Entered By</Form.Label>
                            <Form.Control type="text" defaultValue={newState.paymentEnteredBy} style={{border: newState1.paymentEnteredBy ? "3px solid red" : ""}} disabled/>
                            {
                                newState1.paymentEnteredBy ? (<p className="text-danger m-1 small fw-bold">Enter valid value!</p>) : <></>
                            }
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">RRJ Due Status</Form.Label>
                            <Form.Select style={{border: newState1.rrjDueStatus ? "3px solid red" : ""}} onChange={e => {
                                    dispatch({type:ACTIONS.RRJ_DUE_STATUS, payload: e.target.value})
                                    if(newState1.rrjDueStatus){dispatch1({type:ACTIONS1.RRJ_DUE_STATUS, payload: false})}
                                }}>
                                    <option value=""></option>
                                    <option value="No Dues">No Dues</option>
                                    <option value="Due">Due</option>
                                </Form.Select>
                                {
                                    newState1.rrjDueStatus ? (<p className="text-danger m-1 small fw-bold">Enter valid option!</p>) : <></>
                                }
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">RRJ Due Amount</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.RRJ_DUE_AMOUNT, payload: e.target.value})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">RRJ Due Gold</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.RRJ_DUE_GOLD, payload: e.target.value})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">RRJ Due Silver</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.RRJ_DUE_SILVER, payload: e.target.value})} />
                        </Form.Group>
                    </div>
                    <div className="col-3">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Payment Received By</Form.Label>
                            <Form.Select style={{border: newState1.paymentReceivedBy ? "3px solid red" : ""}} onChange={e => {
                                dispatch({type: ACTIONS.PAYMENT_RECEIVED_BY, payload: e.target.value})
                                if(newState1.paymentReceivedBy){dispatch1({type:ACTIONS1.PAYMENT_RECEIVED_BY, payload: false})}
                                }}>
                                    <option value=""></option>
                                    <option value="LAXMINARSAIAH YEDULAPURAM">LAXMINARSAIAH YEDULAPURAM</option>
                                    <option value="RAVI KUMAR RANGU">RAVI KUMAR RANGU</option>
                                    <option value="SRAVAN KUMAR RANGU">SRAVAN KUMAR RANGU</option>
                            </Form.Select>
                            {
                                newState1.paymentReceivedBy ? (<p className="text-danger m-1 small fw-bold">Enter valid option!</p>) : <></>
                            }
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