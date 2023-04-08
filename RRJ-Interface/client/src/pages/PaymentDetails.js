import axios from "axios";
import React, { useReducer } from "react";
import { Container, Form, Button, Table, Modal, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const initialState1 = {
    oldWeight: false,
    fineWeight: false,
    billNo: false,
    paymentId: false,
    transactionType: false,
    paymentPurpose: false,
    sentType: false,
    paymentType: false,
    paymentStatus: false,
    customerMobile: false,
    customerFullName: false,
    orderId: false,
    paymentDate: false,
    totalPrice: false,
    goldWeight: false,
    silverWeight: false,
    cash: false,
    acntTransfer: false,
    receivedWeight: false,
    percentage: false,
    oneGramCost: false,
    exchangeWeight: false,
    customerDueStatus: false,
    rrjDueStatus: false,
    paymentEnteredBy: false,
    paymentReceivedBy: false
}

const ACTIONS1 = {
    OLD_WEIGHT: "OLD_WEIGHT",
    FINE_WEIGHT: "FINE_WEIGHT",
    BILL_NO: "BILL_NO",
    PAYMENT_ID: "PAYMENT_ID",
    TRANSACTION_TYPE: "TRANSACTION_TYPE",
    PAYMENT_PURPOSE: "PAYMENT_PURPOSE",
    SENT_TYPE: "SENT_TYPE",
    PAYMENT_TYPE: "PAYMENT_TYPE",
    PAYMENT_STATUS: "PAYMENT_STATUS",
    CUSTOMER_MOBILE: "CUSTOMER_MOBILE",
    CUSTOMER_FULL_NAME: "CUSTOMER_FULL_NAME",
    ORDER_ID: "ORDER_ID",
    PAYMENT_DATE: "PAYMENT_DATE",
    TOTAL_PRICE: "TOTAL_PRICE",
    GOLD_WEIGHT: "GOLD_WEIGHT",
    SILVER_WEIGHT: "SILVER_WEIGHT",
    CASH: "CASH",
    ACNT_TRANSFER: "ACNT_TRANSFER",
    RECEIVED_WEIGHT: "RECEIVED_WEIGHT",
    PERCENTAGE: "PERCENTAGE",
    ONE_GRAM_COST: "ONE_GRAM_COST",
    EXCHANGE_WEIGHT: "EXCHANGE_WEIGHT",
    CUSTOMER_DUE_STATUS: "CUSTOMER_DUE_STATUS",
    RRJ_DUE_STATUS: "RRJ_DUE_STATUS",
    PAYMENT_ENTERED_BY: "PAYMENT_ENTERED_BY",
    PAYMENT_RECEIVED_BY: "PAYMENT_RECEIVED_BY"
}

const reducer1 = (state, {type,payload}) => {
    switch(type){
        case ACTIONS1.OLD_WEIGHT:
            return {...state, oldWeight: payload}
        case ACTIONS1.FINE_WEIGHT:
            return {...state, fineWeight: payload}
        case ACTIONS1.BILL_NO:
            return {...state, billNo: payload}
        case ACTIONS1.PAYMENT_ID:
            return {...state, paymentId: payload}
        case ACTIONS1.TRANSACTION_TYPE:
            return {...state, transactionType: payload}
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
        case ACTIONS1.TOTAL_PRICE:
            return {...state, totalPrice: payload}
        case ACTIONS1.GOLD_WEIGHT:
            return {...state, goldWeight: payload}
        case ACTIONS1.SILVER_WEIGHT:
            return {...state, silverWeight: payload}
        case ACTIONS1.CASH:
            return {...state, cash: payload}
        case ACTIONS1.ACNT_TRANSFER:
            return {...state, acntTransfer: payload}
        case ACTIONS1.RECEIVED_WEIGHT:
            return {...state, receivedWeight: payload}
        case ACTIONS1.PERCENTAGE:
            return {...state, percentage: payload}
        case ACTIONS1.ONE_GRAM_COST:
            return {...state, oneGramCost: payload}
        case ACTIONS1.EXCHANGE_WEIGHT:
            return {...state, exchangeWeight: payload}
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
    ITEM_IN: "ITEM_IN",
    ORDER_ID: "ORDER_ID",
    PAYMENT_ID: "PAYMENT_ID",
    PAYMENT_INFO_STATUS: "PAYMENT_INFO_STATUS",
    TABLE_SHOW: "TABLE_SHOW",
    ITEM_DETAILS: "ITEM_DETAILS",
    ORDER_DETAILS: "ORDER_DETAILS",
    CUSTOMER_MOBILE: "CUSTOMER_MOBILE",
    CUSTOMER_FULL_NAME: "CUSTOMER_FULL_NAME",
    EXCHANGE_WEIGHT: "EXCHANGE_WEIGHT",
    PERCENTAGE: "PERCENTAGE",
    ONE_GRAM_COST: "ONE_GRAM_COST",
    RECEIVED_WEIGHT: "RECEIVED_WEIGHT",
    OLD_WEIGHT: "OLD_WEIGHT",
    FINE_WEIGHT: "FINE_WEIGHT",
    ORDER_GOLD_WEIGHT: "ORDER_GOLD_WEIGHT",
    ORDER_SILVER_WEIGHT: "ORDER_SILVER_WEIGHT",
    GOLD_WEIGHT: "GOLD_WEIGHT",
    SILVER_WEIGHT: "SILVER_WEIGHT",
    TOTAL_PRICE: "TOTAL_PRICE",
    DISCOUNT: "DISCOUNT",
    CASH: "CASH",
    ACNT_TRANSFER: "ACNT_TRANSFER",
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
    SHOW4: "SHOW4",
    SHOW5: "SHOW5",
    EXCHANGE_SHOW: "EXCHANGE_SHOW",
    STATUS: "STATUS",
    PAYMENT_DATE: "PAYMENT_DATE",
    PAYMENT_PURPOSE: "PAYMENT_PURPOSE",
    PAYMENT_ENTERED_BY: "PAYMENT_ENTERED_BY",
    SENT_OPTIONS: "SENT_OPTIONS",
    RECEIVE_OPTIONS: "RECEIVE_OPTIONS",
    GOLD_VALUES: "GOLD_VALUES",
    SILVER_VALUES: "SILVER_VALUES",
    TRANSACTION_TYPE: "TRANSACTION_TYPE",
    PAYMENT_PURPOSE_VALUES: "PAYMENT_PURPOSE_VALUES",
    PRICE_VALUES: "PRICE_VALUES",
    BILL_NO: "BILL_NO"
}

const reducer = (state, {type, payload}) => {
    switch(type) {
        case ACTIONS.ORDER_GOLD_WEIGHT:
            return {...state, orderGoldWeight: payload}
        case ACTIONS.ORDER_SILVER_WEIGHT:
            return {...state, orderSilverWeight: payload}
        case ACTIONS.BILL_NO:
            return {...state, billNo: payload}
        case ACTIONS.CUSTOMER_ID:
            return {...state, customerId: payload}
        case ACTIONS.ITEM_IN:
            return {...state, itemin: payload}
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
        case ACTIONS.PERCENTAGE:
            return {...state, percentage: payload}
        case ACTIONS.ONE_GRAM_COST:
            return {...state, oneGramCost: payload}
        case ACTIONS.RECEIVED_WEIGHT:
            return {...state, receivedWeight: payload}
        case ACTIONS.OLD_WEIGHT:
            return {...state, oldWeight: payload}
        case ACTIONS.FINE_WEIGHT:
            return {...state, fineWeight: payload}
        case ACTIONS.SILVER_WEIGHT:
            return {...state, silverWeight: payload}
        case ACTIONS.GOLD_WEIGHT:
            return {...state, goldWeight: payload}
        case ACTIONS.TOTAL_PRICE:
            return {...state, totalPrice: payload}
        case ACTIONS.DISCOUNT:
            return {...state, discount: payload.target.value}
        case ACTIONS.CASH:
            return {...state, cash: payload.target.value}
        case ACTIONS.ACNT_TRANSFER:
            return {...state, acntTransfer: payload.target.value}
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
        case ACTIONS.SHOW4:
            return {...state, show4: payload}
        case ACTIONS.SHOW5:
            return {...state, show5: payload}
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
        case ACTIONS.TRANSACTION_TYPE:
            return {...state, transactionType: payload}
        case ACTIONS.PAYMENT_PURPOSE_VALUES:
            return {...state, paymentPurposeValues: payload}
        case ACTIONS.PRICE_VALUES:
            return {...state, priceValues: payload}
        default:
            return state
    }
}

const PaymentDetails = ({date, navigate, transin, showMain, names}) => {

    const myName = useSelector(state => state.LoginPage.employeeName)

    const[newState1, dispatch1] = useReducer(reducer1, initialState1)

    const initialState = {
        transactionType: (transin === undefined) ? "": transin.transactionType,
        orderId: (transin === undefined) ? "": transin.orderId,
        customerId: (transin === undefined) ? 0 : transin.customerId,
        paymentId: (transin === undefined) ? "": transin.paymentId,
        billNo: (transin === undefined) ? "" : transin.billNo,
        paymentInfoStatus: "",
        itemin: [],
        itemDetails: [],
        orderDetails: [],
        tableShow: false,
        customerFullName: (transin === undefined) ? "": transin.customerFullName,
        customerMobile: (transin === undefined) ? "": transin.customerMobile,
        exchangeWeight: (transin === undefined) ? "": transin.exchangeWeight,
        percentage: (transin === undefined) ? "": transin.percentage,
        oneGramCost: (transin === undefined) ? "": transin.oneGramCost,
        receivedWeight: (transin === undefined) ? "": transin.receivedWeight,
        oldWeight: (transin === undefined) ? "": transin.oldWeight,
        fineWeight: (transin === undefined) ? "": transin.fineWeight,
        goldWeight: (transin === undefined) ? "": transin.goldWeight,
        silverWeight: (transin === undefined) ? "": transin.silverWeight,
        totalPrice: (transin === undefined) ? "": transin.totalPrice,
        cash: (transin === undefined) ? "": transin.cash,
        acntTransfer: (transin === undefined) ? "": transin.acntTransfer,
        customerDueStatus: (transin === undefined) ? "": transin.customerDueStatus,
        customerDueAmount: (transin === undefined) ? "": transin.customerDueAmount,
        customerDueGold: (transin === undefined) ? "": transin.customerDueGold,
        customerDueSilver: (transin === undefined) ? "": transin.customerDueSilver,
        rrjDueStatus: (transin === undefined) ? "": transin.rrjDueStatus,
        rrjDueAmount: (transin === undefined) ? "": transin.rrjDueAmount,
        rrjDueGold: (transin === undefined) ? "": transin.rrjDueGold,
        rrjDueSilver: (transin === undefined) ? "": transin.rrjDueSilver,
        paymentDescription: (transin === undefined) ? "": transin.paymentDescription,
        sentType: (transin === undefined) ? "": transin.sentType,
        paymentType: (transin === undefined) ? "": transin.paymentType,
        paymentReceivedBy: (transin === undefined) ? "": transin.paymentReceivedBy,
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        show5: true,
        exchangeShow: false,
        paymentDate: (transin === undefined) ? String(date) : transin.paymentDate,
        paymentPurpose: (transin === undefined) ? "": transin.paymentPurpose,
        status: (transin === undefined) ? "": transin.status,
        paymentEnteredBy: (transin === undefined) ? myName : transin.paymentEnteredBy,
        overallGold: "",
        overallSilver: "",
        sentOptions: [],
        receiveOptions: [],
        goldValues: [],
        silverValues: [],
        priceValues: [],
        paymentPurposeValues: [],
        orderGoldWeight: 0,
        orderSilverWeight: 0
    }

    const [newState, dispatch] = useReducer(reducer, initialState)
    const handleClose1 = () => dispatch({type:ACTIONS.SHOW1, payload: false})
    const handleClose2 = () => {
        dispatch({type:ACTIONS.SHOW2, payload: false})
        dispatch({type:ACTIONS.ORDER_ID, payload: ""})
        dispatch({type:ACTIONS.CUSTOMER_FULL_NAME, payload: ""})
    }
    const handleClose3 = () => dispatch({type:ACTIONS.SHOW3, payload: false})
    const handleClose4 = () => dispatch({type:ACTIONS.SHOW4, payload: false})

    const options1 = ["Gold", "Silver"]
    const options2 = ["Cash", "Gold", "Gold and Cash", "Gold and Acnt Transfer", "Gold, Cash and Acnt Transfer", "Silver", "Silver and Cash", "Silver and Acnt Transfer", "Silver, Cash and Acnt Transfer", "Acnt Transfer", "Cash and Acnt Transfer"]
    const options3 = ["Cash", "Acnt Transfer", "Cash and Acnt Transfer"]
    const options4 = ["Advance for Order", "Order Delivery", "Return Excess", "Dues Payment"]
    const options5 = ["Buying", "Selling", "Borrowing", "Repaying Borrowed", "Lending", "Lended Repaying", "General Expenses", "Self Transfer"]

    const SubmitHandler = () => {
        if(newState.paymentId === ""){dispatch1({type:ACTIONS1.PAYMENT_ID, payload: true})}
        else if(newState.transactionType === ""){dispatch1({type:ACTIONS1.TRANSACTION_TYPE, payload: true})}
        else if(newState.paymentPurpose === ""){dispatch1({type:ACTIONS1.PAYMENT_PURPOSE, payload: true})}
        else if(newState.customerMobile === "" || !(/^(\d){10}$/).test(newState.customerMobile)){dispatch1({type:ACTIONS1.CUSTOMER_MOBILE, payload: true})}
        else if(newState.customerFullName === ""){dispatch1({type:ACTIONS1.CUSTOMER_FULL_NAME, payload: true})}
        else if(newState.paymentStatus === ""){dispatch1({type:ACTIONS1.PAYMENT_STATUS, payload: true})}
        else if(newState.paymentDate === ""){dispatch1({type:ACTIONS1.PAYMENT_DATE, payload: true})}
        else if(newState.customerDueStatus === ""){dispatch1({type:ACTIONS1.CUSTOMER_DUE_STATUS, payload: true})}
        else if(newState.paymentEnteredBy === ""){dispatch1({type:ACTIONS1.PAYMENT_ENTERED_BY, payload: true})}
        else if(newState.rrjDueStatus === ""){dispatch1({type:ACTIONS1.RRJ_DUE_STATUS, payload: true})}
        else if(newState.paymentReceivedBy === ""){dispatch1({type:ACTIONS1.PAYMENT_RECEIVED_BY, payload: true})}
        else{
            if(newState.transactionType === "General" && newState.paymentPurpose === "Buying"){
                if(newState.sentType === ""){dispatch1({type:ACTIONS1.SENT_TYPE, payload: true})}
                else if(newState.paymentType === ""){dispatch1({type:ACTIONS1.PAYMENT_TYPE, payload: true})}
                else {
                    if(newState.paymentType === "Gold" && newState.sentType === "Cash"){
                        if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                        else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                        else {
                            axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                cashOut: newState.cash,
                                goldIn: newState.goldWeight,
                                id: newState.paymentId,
                                date: newState.paymentDate
                            }).then(() => {
                                axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                .then(() => {
                                    dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                    setTimeout(() => {
                                        window.location.reload(false)
                                    },1200)
                                    }).catch(err => console.log(err))
                            }).catch(err => console.log(err))
                        }
                    } else if(newState.paymentType === "Silver" && newState.sentType === "Cash"){
                        if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                        else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                        else {
                            axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                cashOut: newState.cash,
                                silverIn: newState.silverWeight,
                                id: newState.paymentId,
                                date: newState.paymentDate
                            }).then(() => {
                                axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                .then(() => {
                                    dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                    setTimeout(() => {
                                        window.location.reload(false)
                                    },1200)
                                    }).catch(err => console.log(err))
                            }).catch(err => console.log(err))
                        }
                    } else if(newState.paymentType === "Gold" && newState.sentType === "Acnt Transfer"){
                        if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                        else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                        else {
                            axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                accountOut: newState.acntTransfer,
                                goldIn: newState.goldWeight,
                                id: newState.paymentId,
                                date: newState.paymentDate
                            }).then(() => {
                                axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                .then(() => {
                                    dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                    setTimeout(() => {
                                        window.location.reload(false)
                                    },1200)
                                    }).catch(err => console.log(err))
                            }).catch(err => console.log(err))
                        }
                    } else if(newState.paymentType === "Silver" && newState.sentType === "Acnt Transfer"){
                        if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                        else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                        else {
                            axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                accountOut: newState.acntTransfer,
                                silverIn: newState.silverWeight,
                                id: newState.paymentId,
                                date: newState.paymentDate
                            }).then(() => {
                                axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                .then(() => {
                                    dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                    setTimeout(() => {
                                        window.location.reload(false)
                                    },1200)
                                    }).catch(err => console.log(err))
                            }).catch(err => console.log(err))
                        }
                    } else if(newState.paymentType === "Gold" && newState.sentType === "Cash and Acnt Transfer"){
                        if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                        else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                        else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                        else {
                            axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                cashOut: newState.cash,
                                accountOut: newState.acntTransfer,
                                goldIn: newState.goldWeight,
                                id: newState.paymentId,
                                date: newState.paymentDate
                            }).then(() => {
                                axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                .then(() => {
                                    dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                    setTimeout(() => {
                                        window.location.reload(false)
                                    },1200)
                                    }).catch(err => console.log(err))
                            }).catch(err => console.log(err))
                        }
                    } else if(newState.paymentType === "Silver" && newState.sentType === "Cash and Acnt Transfer"){
                        if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                        else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                        else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                        else {
                            axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                cashOut: newState.cash,
                                accountOut: newState.acntTransfer,
                                silverIn: newState.silverWeight,
                                id: newState.paymentId,
                                date: newState.paymentDate
                            }).then(() => {
                                axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                .then(() => {
                                    dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                    setTimeout(() => {
                                        window.location.reload(false)
                                    },1200)
                                    }).catch(err => console.log(err))
                            }).catch(err => console.log(err))
                        }
                    }}
                if(newState.transactionType === "General" && newState.paymentPurpose === "Selling"){
                    if(newState.sentType === ""){dispatch1({type:ACTIONS1.SENT_TYPE, payload: true})}
                    else if(newState.paymentType === ""){dispatch1({type:ACTIONS1.PAYMENT_TYPE, payload: true})}
                    else{
                        if(newState.paymentType === "Cash" && newState.sentType === "Gold"){
                            if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    cashIn: newState.cash,
                                    goldOut: newState.goldWeight,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                    .then(() => {
                                        dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                        setTimeout(() => {
                                            window.location.reload(false)
                                        },1200)
                                        }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.paymentType === "Acnt Transfer" && newState.sentType === "Gold"){
                            if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    accountIn: newState.acntTransfer,
                                    goldOut: newState.goldWeight,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                    .then(() => {
                                        dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                        setTimeout(() => {
                                            window.location.reload(false)
                                        },1200)
                                        }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.paymentType === "Cash" && newState.sentType === "Silver"){
                            if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    cashIn: newState.cash,
                                    silverOut: newState.silverWeight,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                    .then(() => {
                                        dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                        setTimeout(() => {
                                            window.location.reload(false)
                                        },1200)
                                        }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.paymentType === "Acnt Transfer" && newState.sentType === "Silver"){
                            if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    accountIn: newState.acntTransfer,
                                    silverOut: newState.silverWeight,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                    .then(() => {
                                        dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                        setTimeout(() => {
                                            window.location.reload(false)
                                        },1200)
                                        }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.paymentType === "Cash and Acnt Transfer" && newState.sentType === "Gold"){
                            if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    cashIn: newState.cash,
                                    accountIn: newState.acntTransfer,
                                    goldOut: newState.goldWeight,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                    .then(() => {
                                        dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                        setTimeout(() => {
                                            window.location.reload(false)
                                        },1200)
                                        }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.paymentType === "Cash and Acnt Transfer" && newState.sentType === "Silver"){
                            if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    cashIn: newState.cash,
                                    accountIn: newState.acntTransfer,
                                    silverOut: newState.silverWeight,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                    .then(() => {
                                        dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                        setTimeout(() => {
                                            window.location.reload(false)
                                        },1200)
                                        }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        }}
                    }
                if(newState.transactionType === "General" && (newState.paymentPurpose === "Borrowing" || newState.paymentPurpose === "Lended Repaying")){
                    if(newState.paymentType === ""){dispatch1({type:ACTIONS1.PAYMENT_TYPE, payload: true})}
                    else {
                        if(newState.paymentType === "Cash"){
                            if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    cashIn: newState.cash,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.paymentType === "Gold"){
                            if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    goldIn: newState.goldWeight,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        }else if(newState.paymentType === "Silver"){
                            if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    silverIn: newState.silverWeight,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.paymentType === "Acnt Transfer"){
                            if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    accountIn: newState.acntTransfer,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.paymentType === "Cash and Acnt Transfer"){
                            if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    cashIn: newState.cash,
                                    accountIn: newState.acntTransfer,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.paymentType === "Gold and Cash"){
                            if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    cashIn: newState.cash,
                                    goldIn: newState.goldWeight,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.paymentType === "Gold and Acnt Transfer"){
                            if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    accountIn: newState.acntTransfer,
                                    goldIn: newState.goldWeight,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.paymentType === "Gold, Cash and Acnt Transfer"){
                            if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    cashIn: newState.cash,
                                    accountIn: newState.acntTransfer,
                                    goldIn: newState.goldWeight,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.paymentType === "Silver and Cash"){
                            if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    cashIn: newState.cash,
                                    silverIn: newState.silverWeight,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.paymentType === "Silver and Acnt Transfer"){
                            if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    accountIn: newState.acntTransfer,
                                    silverIn: newState.silverWeight,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.paymentType === "Silver, Cash and Acnt Transfer"){
                            if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    cashIn: newState.cash,
                                    accountIn: newState.acntTransfer,
                                    silverIn: newState.silverWeight,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        }}
                    }
                if(newState.paymentPurpose === "Lending" || newState.paymentPurpose === "Repaying Borrowed" || newState.paymentPurpose === "General Expenses"){
                    if(newState.sentType === ""){dispatch1({type:ACTIONS1.SENT_TYPE, payload: true})}
                    else {
                        if(newState.sentType === "Cash"){
                            if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    cashOut: newState.cash,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.sentType === "Gold"){
                            if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    goldOut: newState.goldWeight,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.sentType === "Silver"){
                            if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    silverOut: newState.silverWeight,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.sentType === "Acnt Transfer"){
                            if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    accountOut: newState.acntTransfer,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.sentType === "Cash and Acnt Transfer"){
                            if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    cashOut: newState.cash,
                                    accountOut: newState.acntTransfer,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.sentType === "Gold and Cash"){
                            if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    cashOut: newState.cash,
                                    goldOut: newState.goldWeight,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.sentType === "Gold and Acnt Transfer"){
                            if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    accountOut: newState.acntTransfer,
                                    goldOut: newState.goldWeight,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.sentType === "Gold, Cash and Acnt Transfer"){
                            if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    cashOut: newState.cash,
                                    accountOut: newState.acntTransfer,
                                    goldOut: newState.goldWeight,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.sentType === "Silver and Cash"){
                            if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    cashOut: newState.cash,
                                    silverOut: newState.silverWeight,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.sentType === "Silver and Acnt Transfer"){
                            if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    accountOut: newState.acntTransfer,
                                    silverOut: newState.silverWeight,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.sentType === "Silver, Cash and Acnt Transfer"){
                            if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    cashOut: newState.cashOut,
                                    accountOut: newState.acntTransfer,
                                    silverOut: newState.silverWeight,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        }}
                    }
                if(newState.paymentPurpose === "Self Transfer"){
                    if(newState.sentType === ""){dispatch1({type:ACTIONS1.SENT_TYPE, payload: true})}
                    else if(newState.paymentType === ""){dispatch1({type:ACTIONS1.PAYMENT_TYPE, payload: true})}
                    else {
                        if(newState.sentType === "Cash" && newState.paymentType === "Acnt Transfer"){
                            if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    cashOut: newState.cash,
                                    accountIn: newState.acntTransfer,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                    .then(() => {
                                        dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                        setTimeout(() => {
                                            window.location.reload(false)
                                        },1200)
                                        }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.sentType === "Acnt Transfer" && newState.paymentType === "Cash") {
                            if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    cashIn: newState.cash,
                                    accountOut: newState.acntTransfer,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                    .then(() => {
                                        dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                        setTimeout(() => {
                                            window.location.reload(false)
                                        },1200)
                                        }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        }
                    }
                }
            } else if(newState.transactionType === "Order Related"){
                if(newState.billNo === "" || !(/\d*\.?\d*/.test(newState.billNo))){dispatch1({type:ACTIONS1.BILL_NO, payload: true})}
                else if((newState.paymentPurpose === "Advance for Order" || newState.paymentPurpose === "Dues Payment") && newState.paymentType === ""){dispatch1({type:ACTIONS1.PAYMENT_TYPE, payload: true})}
                else if(newState.paymentPurpose === "Order Delivery" && newState.sentType === ""){dispatch1({type:ACTIONS1.SENT_TYPE, payload: true})}
                else if(newState.paymentPurpose === "Order Delivery" && newState.paymentType === ""){dispatch1({type:ACTIONS1.PAYMENT_TYPE, payload: true})}
                else if(newState.paymentPurpose === "Order Delivery" && newState.totalPrice === ""){dispatch1({type:ACTIONS1.TOTAL_PRICE, payload: true})}
                else if(newState.paymentPurpose === "Return Excess" && newState.sentType === ""){dispatch1({type:ACTIONS1.SENT_TYPE, payload: true})}
                else{
                    if(newState.paymentPurpose === "Advance for Order" || newState.paymentPurpose === "Order Delivery" || newState.paymentPurpose === "Dues Payment"){
                        if(newState.paymentType === "Cash"){
                            if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    goldOut: (newState.paymentPurpose === "Order Delivery") ? newState.orderGoldWeight.toString() : "",
                                    silverOut: (newState.paymentPurpose === "Order Delivery") ? newState.orderSilverWeight.toString() : "",
                                    cashIn: newState.cash,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                    .then(() => {
                                        dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                        setTimeout(() => {
                                            window.location.reload(false)
                                        },1200)
                                        }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.paymentType === "Gold"){
                            if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    goldOut: (newState.paymentPurpose === "Order Delivery") ? newState.orderGoldWeight.toString() : "",
                                    silverOut: (newState.paymentPurpose === "Order Delivery") ? newState.orderSilverWeight.toString() : "",
                                    goldIn: newState.goldWeight,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                    .then(() => {
                                        dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                        setTimeout(() => {
                                            window.location.reload(false)
                                        },1200)
                                        }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.paymentType === "Gold and Cash"){
                            if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    goldOut: (newState.paymentPurpose === "Order Delivery") ? newState.orderGoldWeight.toString() : "",
                                    silverOut: (newState.paymentPurpose === "Order Delivery") ? newState.orderSilverWeight.toString() : "",
                                    goldIn: newState.goldWeight,
                                    cashIn: newState.cash,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                    .then(() => {
                                        dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                        setTimeout(() => {
                                            window.location.reload(false)
                                        },1200)
                                        }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.paymentType === "Gold and Acnt Transfer"){
                            if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    goldOut: (newState.paymentPurpose === "Order Delivery") ? newState.orderGoldWeight.toString() : "",
                                    silverOut: (newState.paymentPurpose === "Order Delivery") ? newState.orderSilverWeight.toString() : "",
                                    goldIn: newState.goldWeight,
                                    accountIn: newState.acntTransfer,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                    .then(() => {
                                        dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                        setTimeout(() => {
                                            window.location.reload(false)
                                        },1200)
                                        }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.paymentType === "Gold, Cash and Acnt Transfer"){
                            if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    goldOut: (newState.paymentPurpose === "Order Delivery") ? newState.orderGoldWeight.toString() : "",
                                    silverOut: (newState.paymentPurpose === "Order Delivery") ? newState.orderSilverWeight.toString() : "",
                                    goldIn: newState.goldWeight,
                                    accountIn: newState.acntTransfer,
                                    cashIn: newState.cash,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                    .then(() => {
                                        dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                        setTimeout(() => {
                                            window.location.reload(false)
                                        },1200)
                                        }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.paymentType === "Silver"){
                            if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    goldOut: (newState.paymentPurpose === "Order Delivery") ? newState.orderGoldWeight.toString() : "",
                                    silverOut: (newState.paymentPurpose === "Order Delivery") ? newState.orderSilverWeight.toString() : "",
                                    silverIn: newState.silverWeight,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                        }
                        } else if(newState.paymentType === "Silver and Cash"){
                            if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    goldOut: (newState.paymentPurpose === "Order Delivery") ? newState.orderGoldWeight.toString() : "",
                                    silverOut: (newState.paymentPurpose === "Order Delivery") ? newState.orderSilverWeight.toString() : "",
                                    silverIn: newState.silverWeight,
                                    cashIn: newState.cash,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.paymentType === "Silver and Acnt Transfer"){
                            if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    goldOut: (newState.paymentPurpose === "Order Delivery") ? newState.orderGoldWeight.toString() : "",
                                    silverOut: (newState.paymentPurpose === "Order Delivery") ? newState.orderSilverWeight.toString() : "",
                                    silverIn: newState.silverWeight,
                                    accountIn: newState.acntTransfer,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.paymentType === "Silver, Cash and Acnt Transfer"){
                            if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    goldOut: (newState.paymentPurpose === "Order Delivery") ? newState.orderGoldWeight.toString() : "",
                                    silverOut: (newState.paymentPurpose === "Order Delivery") ? newState.orderSilverWeight.toString() : "",
                                    silverIn: newState.silverWeight,
                                    cashIn: newState.cash,
                                    accountIn: newState.acntTransfer,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.paymentType === "Acnt Transfer"){
                            if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    goldOut: (newState.paymentPurpose === "Order Delivery") ? newState.orderGoldWeight.toString() : "",
                                    silverOut: (newState.paymentPurpose === "Order Delivery") ? newState.orderSilverWeight.toString() : "",
                                    accountIn: newState.acntTransfer,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.paymentType === "Cash and Acnt Transfer"){
                            if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    goldOut: (newState.paymentPurpose === "Order Delivery") ? newState.orderGoldWeight.toString() : "",
                                    silverOut: (newState.paymentPurpose === "Order Delivery") ? newState.orderSilverWeight.toString() : "",
                                    accountIn: newState.acntTransfer,
                                    cashIn: newState.cashIn,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        }
                    } else if(newState.paymentPurpose === "Return Excess"){
                        if(newState.sentType === "Cash"){
                            if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    cashOut: newState.cash,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.sentType === "Gold"){
                            if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    goldOut: newState.goldWeight,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.sentType === "Gold and Cash"){
                            if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    goldOut: newState.goldWeight,
                                    cashOut: newState.cash,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.sentType === "Gold and Acnt Transfer"){
                            if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    goldOut: newState.goldWeight,
                                    accountOut: newState.acntTransfer,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.sentType === "Gold, Cash and Acnt Transfer"){
                            if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    goldOut: newState.goldWeight,
                                    cashOut: newState.cash,
                                    accountOut: newState.acntTransfer,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.sentType === "Silver"){
                            if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    silverOut: newState.silverWeight,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.sentType === "Silver and Cash"){
                            if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    silverOut: newState.silverWeight,
                                    cashOut: newState.cash,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.sentType === "Silver and Acnt Transfer"){
                            if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    silverOut: newState.silverWeight,
                                    accountOut: newState.acntTransfer,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.sentType === "Silver, Cash and Acnt Transfer"){
                            if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    silverOut: newState.silverWeight,
                                    accountOut: newState.acntTransfer,
                                    cashOut: newState.cash,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.sentType === "Acnt Transfer"){
                            if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    accountOut: newState.acntTransfer,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        } else if(newState.sentType === "Cash and Acnt Transfer"){
                            if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                            else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                            else {
                                axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                    cashOut: newState.cash,
                                    accountOut: newState.acntTransfer,
                                    id: newState.paymentId,
                                    date: newState.paymentDate
                                }).then(() => {
                                    axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                        .then(() => {
                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                            setTimeout(() => {
                                                window.location.reload(false)
                                            },1200)
                                            }).catch(err => console.log(err))
                                }).catch(err => console.log(err))
                            }
                        }
                    }
                }
            } else if(newState.transactionType === "For Exchange" && newState.paymentPurpose === "Exchange Related"){
                if(newState.billNo === ""){dispatch1({type:ACTIONS1.BILL_NO, payload: true})}
                else if(newState.receivedWeight === "" || !(/\d*\.?\d*/.test(newState.receivedWeight))){dispatch1({type:ACTIONS1.RECEIVED_WEIGHT, payload: true})}
                else if(newState.exchangeWeight === "" || !(/\d*\.?\d*/.test(newState.exchangeWeight))){dispatch1({type:ACTIONS1.EXCHANGE_WEIGHT, payload: true})}
                else{
                    if(newState.paymentType === "Gold" && newState.sentType === "Cash"){
                        if(newState.goldWeight === "" || !(/\d*\.?\d*/.test(newState.goldWeight))){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                        else if(newState.cash === "" || !(/\d*\.?\d*/.test(newState.cash))){dispatch1({type:ACTIONS1.CASH, payload: true})}
                        else {
                            axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                goldIn: newState.goldWeight,
                                cashOut: newState.cash,
                                id: newState.paymentId,
                                date: newState.paymentDate
                            }).then(() => {
                                axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                    .then(() => {
                                        dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                        setTimeout(() => {
                                            window.location.reload(false)
                                        },1200)
                                        }).catch(err => console.log(err))
                            }).catch(err => console.log(err))
                        }
                    } else if(newState.paymentType === "Gold" && newState.sentType === "Cash and Acnt Transfer"){
                        if(newState.goldWeight === "" || !(/\d*\.?\d*/.test(newState.goldWeight))){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                        else if(newState.cash === "" || !(/\d*\.?\d*/.test(newState.cash))){dispatch1({type:ACTIONS1.CASH, payload: true})}
                        else if(newState.acntTransfer === "" || !(/\d*\.?\d*/.test(newState.acntTransfer))){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                        else {
                            axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                goldIn: newState.goldWeight,
                                cashOut: newState.cash,
                                accountOut: newState.acntTransfer,
                                id: newState.paymentId,
                                date: newState.paymentDate
                            }).then(() => {
                                axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                    .then(() => {
                                        dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                        setTimeout(() => {
                                            window.location.reload(false)
                                        },1200)
                                        }).catch(err => console.log(err))
                            }).catch(err => console.log(err))
                        }
                    } else if(newState.paymentType === "Gold" && newState.sentType === "Acnt Transfer"){
                        if(newState.goldWeight === "" || !(/\d*\.?\d*/.test(newState.goldWeight))){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                        else if(newState.acntTransfer === "" || !(/\d*\.?\d*/.test(newState.acntTransfer))){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                        else {
                            axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                goldIn: newState.goldWeight,
                                accountOut: newState.acntTransfer,
                                id: newState.paymentId,
                                date: newState.paymentDate
                            }).then(() => {
                                axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                    .then(() => {
                                        dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                        setTimeout(() => {
                                            window.location.reload(false)
                                        },1200)
                                        }).catch(err => console.log(err))
                            }).catch(err => console.log(err))
                        }
                    } else if(newState.paymentType === "Silver" && newState.sentType === "Cash"){
                        if(newState.silverWeight === "" || !(/\d*\.?\d*/.test(newState.silverWeight))){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                        else if(newState.cash === "" || !(/\d*\.?\d*/.test(newState.cash))){dispatch1({type:ACTIONS1.CASH, payload: true})}
                        else {
                            axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                silverIn: newState.silverWeight,
                                cashOut: newState.cash,
                                id: newState.paymentId,
                                date: newState.paymentDate
                            }).then(() => {
                                axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                    .then(() => {
                                        dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                        setTimeout(() => {
                                            window.location.reload(false)
                                        },1200)
                                        }).catch(err => console.log(err))
                            }).catch(err => console.log(err))
                        }
                    } else if(newState.paymentType === "Silver" && newState.sentType === "Acnt Transfer"){
                        if(newState.silverWeight === "" || !(/\d*\.?\d*/.test(newState.silverWeight))){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                        else if(newState.acntTransfer === "" || !(/\d*\.?\d*/.test(newState.acntTransfer))){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                        else {
                            axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                silverIn: newState.silverWeight,
                                accountOut: newState.acntTransfer,
                                id: newState.paymentId,
                                date: newState.paymentDate
                            }).then(() => {
                                axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                    .then(() => {
                                        dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                        setTimeout(() => {
                                            window.location.reload(false)
                                        },1200)
                                        }).catch(err => console.log(err))
                            }).catch(err => console.log(err))
                        }
                    } else if(newState.paymentType === "Silver" && newState.sentType === "Cash and Acnt Transfer"){
                        if(newState.silverWeight === "" || !(/\d*\.?\d*/.test(newState.silverWeight))){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                        else if(newState.cash === "" || !(/\d*\.?\d*/.test(newState.cash))){dispatch1({type:ACTIONS1.CASH, payload: true})}
                        else if(newState.acntTransfer === "" || !(/\d*\.?\d*/.test(newState.acntTransfer))){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}

                        else{
                            axios.post("http://localhost:8080/RRJ/DayInfo/add", {
                                cashOut: newState.cash,
                                accountOut: newState.acntTransfer,
                                silverIn: newState.silverWeight,
                                id: newState.paymentId,
                                date: newState.paymentDate
                            }).then(() => {
                                axios.post("http://localhost:8080/RRJ/PaymentInfo/add", newState)
                                    .then(() => {
                                        dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details saved Successfully!"})
                                        setTimeout(() => {
                                            window.location.reload(false)
                                        },1200)
                                        }).catch(err => console.log(err))
                            }).catch(err => console.log(err))
                        }
                    }
                }
            }
            
        }
    }

    const Validate = () => {
        if(newState.transactionType === "Order Related"){
            axios.post("http://localhost:8080/RRJ/OrderTaking/check", newState)
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
        } else if(newState.transactionType === "General" || newState.transactionType === "For Exchange"){
            axios.post("http://localhost:8080/RRJ/CustomerInfo/check", {customerMobile: newState.customerMobile})
            .then(res => {
                var val = res.data[0]
                if(val === undefined) {
                    dispatch({type:ACTIONS.SHOW1, payload: true})
                }
                else{
                    dispatch({type: ACTIONS.CUSTOMER_FULL_NAME, payload: val[0]})
                    dispatch({type: ACTIONS.CUSTOMER_ID, payload: val[1]})
                }
            })
            .catch(err => console.log(err));
        }
    }
 
    return(
        <>
        <Modal show={newState.show4} onHide={handleClose4}>
            <Modal.Header closeButton>
                <Modal.Title>Enter Valid Item Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Note: Item Price and Item weight must be filled to proceed for Delivery</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose4}>Close</Button>
            </Modal.Footer>
        </Modal>
        <Modal show={newState.show3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title>Item Details</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{height: "500px", overflow: "hidden", overflowY: "auto"}}>
        <Table className="table-hover w-100 mt-1 small">
                <tbody>
                <tr>
                    <th>Gold Cost</th>
                    <td>{newState.itemin.goldCost}</td>
                </tr>
                <tr>
                    <th>Silver Cost</th>
                    <td>{newState.itemin.silverCost}</td>
                </tr>
                <tr>
                    <th>Item Id</th>
                    <td>{newState.itemin.itemId}</td>
                </tr>
                <tr>
                    <th>Item Type</th>
                    <td>{newState.itemin.itemType}</td>
                </tr>
                <tr>
                    <th>Item Name</th>
                    <td>{newState.itemin.itemName}</td>
                </tr>
                <tr>
                    <th>Item Delivery Date</th>
                    <td>{newState.itemin.itemDeliveryDate}</td>
                </tr>
                {(newState.itemin.estimatedWeight !== "") ?
                <tr>
                    <th>Estimated Weight</th>
                    <td>{newState.itemin.estimatedWeight}</td>
                </tr> : <></>
                }
                {(newState.itemin.designDetails !== "") ?
                <tr>
                    <th>Design Details</th>
                    <td>{newState.itemin.designDetails}</td>
                </tr> : <></>
                }
                {
                    (newState.itemin.customerComments !== "") ? (
                        <tr>
                            <th>Customer Comments</th>
                            <td>{newState.itemin.customerComments}</td>
                        </tr>
                    ) : <></>
                }
                {
                    (newState.itemin.orderReceiverComments !== "") ? (
                        <tr>
                            <th>Order Receiver Comments</th>
                            <td>{newState.itemin.orderReceiverComments}</td>
                        </tr>
                    ) : <></>
                }
                <tr>
                    <th>Item Status</th>
                    <td>{newState.itemin.itemStatus}</td>
                </tr>
                <tr>
                    <th>Item Entered By</th>
                    <td>{newState.itemin.itemEnteredBy}</td>
                </tr>
                {
                    (newState.itemin.stonesType !== "") ? (
                        <tr>
                            <th>Stones Type</th>
                            <td>{newState.itemin.stonesType}</td>
                        </tr>
                    ) : <></>
                }
                {
                (newState.itemin.czWeight !== "") ? <>
                    <tr>
                        <th>Cz Weight</th>
                        <td>{newState.itemin.czWeight}</td>
                    </tr>
                    <tr>
                        <th>Cz Cost</th>
                        <td>{newState.itemin.czCost}</td>
                    </tr>
                </> : <></>
                }
                {
                (newState.itemin.emeraldWeight !== "") ? <>
                    <tr>
                        <th>Emerald Weight</th>
                        <td>{newState.itemin.emeraldWeight}</td>
                    </tr>
                    <tr>
                        <th>Emerald Cost</th>
                        <td>{newState.itemin.emeraldCost}</td>
                    </tr>
                </> : <></>
                }
                {
                (newState.itemin.rubyWeight !== "") ? <>
                    <tr>
                        <th>Ruby Weight</th>
                        <td>{newState.itemin.rubyWeight}</td>
                    </tr>
                    <tr>
                        <th>Ruby Cost</th>
                        <td>{newState.itemin.rubyCost}</td>
                    </tr>
                </> : <></>
                }
                {
                    (newState.itemin.overallStoneWeight !== "") ? (
                        <>
                        <tr>
                            <th>Overall Stone Weight</th>
                            <td>{newState.itemin.overallStoneWeight}</td>
                        </tr>
                        <tr>
                            <th>Overall Stone Cost</th>
                            <td>{newState.itemin.overallStoneCost}</td>
                        </tr>
                        </>
                    ) : <></>
                }
                {
                    (newState.itemin.pearlsWeight !== "") ? (
                        <tr>
                            <th>Pearls Weight</th>
                            <td>{newState.itemin.pearlsWeight}</td>
                        </tr>
                    ) : <></>
                }
                {
                    (newState.itemin.pearlsCost !== "") ? (
                        <tr>
                            <th>Pearls Cost</th>
                            <td>{newState.itemin.pearlsCost}</td>
                        </tr>
                    ) : <></>
                }
                {
                    (newState.itemin.makingCharges !== "") ? (
                        <tr>
                            <th>Making Charges</th>
                            <td>{newState.itemin.makingCharges}</td>
                        </tr>
                    ) : <></>
                }
                {
                    (newState.itemin.itemGrossWeight !== "") ? (
                        <tr>
                            <th>Item Gross Weight</th>
                            <td>{newState.itemin.itemGrossWeight}</td>
                        </tr>
                    ) : <></>
                }
                {
                    (newState.itemin.itemNetWeight !== "") ? (
                        <tr>
                            <th>Item Net Weight</th>
                            <td>{newState.itemin.itemNetWeight}</td>
                        </tr>
                    ) : <></>
                }
                {
                    (newState.itemin.wastage !== "") ? (
                        <tr>
                            <th>Wastage</th>
                            <td>{newState.itemin.wastage}</td>
                        </tr>
                    ) : <></>
                }
                {
                    (newState.itemin.otherWeight !== "") ? (
                        <tr>
                            <th>Other Weight</th>
                            <td>{newState.itemin.otherWeight}</td>
                        </tr>
                    ) : <></>
                }
                {
                    (newState.itemin.totalWeight !== "") ? (
                        <tr>
                            <th>Total Weight</th>
                            <td>{newState.itemin.totalWeight}</td>
                        </tr>
                    ) : <></>
                }
                {
                    (newState.itemin.itemPrice !== "") ? (
                        <tr>
                            <th>Item Price</th>
                            <td>{newState.itemin.itemPrice}</td>
                        </tr>
                    ) : <></>
                }
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
            {
                (newState.transactionType === "Order Related") ? (
                    <Modal.Title>Order does not exist</Modal.Title>
                ) : (
                    <Modal.Title>Customer does not exist</Modal.Title>
                )
            }
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
        <Modal.Body style={{height: "400px", overflow: "hidden", overflowY: "auto"}}>
            <div className="row">
                <div className="col-4">
                    <Form.Select style={{maxHeight: "300px", overflow: "hidden", overflowY: "auto"}} onChange={e => {
                            let val = {
                                orderId: e.target.value
                            }
                            axios.post("http://localhost:8080/RRJ/OrderTaking/getcustomerinfo", val)
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
                        axios.post("http://localhost:8080/RRJ/ItemInfo/getitemdetails", newState)
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
                                        dispatch({type:ACTIONS.ITEM_IN, payload: item})
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
                                            if(info.itemPrice === "" || info.totalWeight === ""){
                                                dispatch({type:ACTIONS.SHOW4, payload: true})
                                            } else {
                                                if(e.target.checked){
                                                    newState.priceValues.push(Number(info.itemPrice))
                                                    if(info.itemType.includes("Gold")){
                                                        newState.goldValues.push(Number(info.totalWeight))
                                                    } else{
                                                        newState.silverValues.push(Number(info.totalWeight))
                                                    }
                                                } else {
                                                    newState.priceValues.splice(newState.priceValues.indexOf(Number(info.itemPrice)))
                                                    if(info.itemType.includes("Gold")){
                                                        newState.goldValues.splice(newState.goldValues.indexOf(Number(info.totalWeight)),1)
                                                    } else{
                                                        newState.silverValues.splice(newState.silverValues.indexOf(Number(info.totalWeight)),1)
                                                    }
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
                  dispatch({type:ACTIONS.ORDER_GOLD_WEIGHT, payload: goldSum})
                  dispatch({type:ACTIONS.ORDER_SILVER_WEIGHT, payload: silverSum})
                  dispatch({type:ACTIONS.TOTAL_PRICE, payload: priceSum.toString()})
              }
          }}>Submit</Button>
        </Modal.Footer>
      </Modal>
        <Container>
            {
                (transin === undefined) ? (
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb flex-nowrap">
                            <li className="breadcrumb-item fw-bold text-truncate"><p style={{"cursor":"pointer"}} onClick={() => {navigate('/homepage', { replace: true })}}>Home</p></li>
                            <li className="breadcrumb-item fw-bold text-truncate"><p style={{"cursor":"pointer"}} onClick={() => {navigate('/infoentry', { replace: true })}}>InfoEntry__</p></li>
                            <li className="breadcrumb-item active text-white fw-bold text-truncate" aria-current="page">PaymentDetails</li>
                        </ol>
                    </nav>
                ) : <></>
            }
            <Form>
                <div className="row"><h5 className="text-success d-flex flex-row justify-content-center">{newState.paymentInfoStatus}</h5></div>
                <div className="row">
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Payment Id</Form.Label>
                            <Form.Control type="text" defaultValue={newState.paymentId} style={{border: newState1.paymentId ? "3px solid red" : ""}} disabled/>
                            {
                                newState1.paymentId ? (<p className="text-danger m-1 small fw-bold">Enter valid Id!</p>) : <></>
                            }
                            {
                                (transin === undefined) ? (
                                    <Button className="btn btn-secondary mt-2" onClick={() => {
                                        const temp = new Date()
                                        const time = String(temp.getFullYear()) + String(temp.getMonth() + 1).padStart(2, '0') + String(temp.getDate()).padStart(2, '0') + String(temp.getHours()).padStart(2, '0') + String(temp.getMinutes()).padStart(2, '0') + String(temp.getSeconds()).padStart(2, '0')
                                        dispatch({type:ACTIONS.PAYMENT_ID, payload: time})
                                        if(newState1.paymentId){dispatch1({type:ACTIONS1.PAYMENT_ID, payload: false})}
                                    }}>Get Payment Id</Button>
                                ) : <></>
                            }
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label  className="fw-bold m-1">Transaction Type</Form.Label>
                            {
                                (transin === undefined) ? (
                                    <Form.Select defaultValue={newState.transactionType}  style={{border: newState1.transactionType ? "3px solid red" : ""}} onChange={e => {
                                        if(newState.paymentPurpose !== ""){dispatch({type:ACTIONS.PAYMENT_PURPOSE, payload: ""})}
                                        if(newState.paymentType !== ""){dispatch({type:ACTIONS.RECEIVE_OPTIONS, payload: []})}
                                        if(newState.sentType !== ""){dispatch({type:ACTIONS.SENT_OPTIONS, payload: []})}
                                        if(newState1.transactionType){dispatch1({type:ACTIONS1.TRANSACTION_TYPE, payload: false})}
                                        dispatch({type:ACTIONS.TRANSACTION_TYPE, payload: e.target.value})
                                        if(e.target.value === "Order Related"){
                                            dispatch({type:ACTIONS.PAYMENT_PURPOSE_VALUES, payload: options4})
                                        } else if(e.target.value === "General"){
                                            dispatch({type:ACTIONS.PAYMENT_PURPOSE_VALUES, payload: options5})
                                        } else if(e.target.value === "For Exchange"){
                                            dispatch({type:ACTIONS.PAYMENT_PURPOSE_VALUES, payload: ["Exchange Related"]})
                                        } else {
                                            dispatch({type:ACTIONS.PAYMENT_PURPOSE_VALUES, payload: []})
                                        }
                                    } }>
                                        <option value=""></option>
                                        <option value="Order Related">Order Related</option>
                                        <option value="General">General</option>
                                        <option value="For Exchange">For Exchange</option>
                                    </Form.Select>
                                ) : (
                                    <Form.Control type="text" defaultValue={newState.transactionType} disabled/>
                                )
                            }
                            {
                                newState1.transactionType ? (<p className="text-danger m-1 small fw-bold">Enter valid option!</p>) : <></>
                            }
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Payment Purpose</Form.Label>
                            {
                                (transin === undefined) ? (
                                    <Form.Select defaultValue={newState.paymentPurpose} style={{border: newState1.paymentPurpose ? "3px solid red" : ""}} onChange={e => {
                                        if(newState.paymentType !== ""){dispatch({type:ACTIONS.PAYMENT_TYPE, payload: []})}
                                        if(newState.sentType !== ""){dispatch({type:ACTIONS.SENT_TYPE, payload: []})}
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
                                                dispatch({type:ACTIONS.RECEIVE_OPTIONS, payload: ["Cash", "Acnt Transfer"]})
                                            } else if(e.target.value === "General Expenses"){
                                                dispatch({type:ACTIONS.SENT_OPTIONS, payload: options2})
                                                dispatch({type:ACTIONS.RECEIVE_OPTIONS, payload: []})
                                            } else {
                                                dispatch({type:ACTIONS.RECEIVE_OPTIONS, payload: []})
                                                dispatch({type:ACTIONS.SENT_OPTIONS, payload: []})
                                            }
                                        } else if(newState.transactionType === "For Exchange"){
                                            if(e.target.value === "Exchange Related"){
                                                dispatch({type:ACTIONS.RECEIVE_OPTIONS, payload: options1})
                                            } else {
                                                dispatch({type:ACTIONS.RECEIVE_OPTIONS, payload: []})
                                                dispatch({type:ACTIONS.SENT_OPTIONS, payload: []})
                                            }
                                        } else {
                                            dispatch({type:ACTIONS.RECEIVE_OPTIONS, payload: []})
                                            dispatch({type:ACTIONS.SENT_OPTIONS, payload: []})
                                        }
                                    }}>
                                        <option defaultValue=""></option>
                                        {
                                            newState.paymentPurposeValues.map((info,index) => {
                                                return(
                                                    <option value={info} key={index}>{info}</option>
                                                )
                                            })
                                        }
                                    </Form.Select>
                                ) : (
                                    <Form.Control type="text" defaultValue={newState.paymentPurpose} disabled/>
                                )
                            }
                            {
                                newState1.paymentPurpose ? (<p className="text-danger m-1 small fw-bold">Enter valid option!</p>) : <></>
                            }
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Received Type</Form.Label>
                            {
                                (transin === undefined) ? (
                                    <Form.Select defaultValue={newState.paymentType} style={{border: newState1.paymentType ? "3px solid red" : ""}} onChange={e => {
                                        dispatch({type:ACTIONS.PAYMENT_TYPE, payload: e.target.value})
                                        if(newState1.paymentType){dispatch1({type:ACTIONS1.PAYMENT_TYPE, payload: false})}
                                        else if(newState.transactionType === "For Exchange" && newState.paymentPurpose === "Exchange Related"){
                                            if(e.target.value === "Gold"){dispatch({type:ACTIONS.SENT_OPTIONS, payload: ["Cash", "Acnt Transfer", "Cash and Acnt Transfer"]})}
                                            else if(e.target.value === "Silver"){dispatch({type:ACTIONS.SENT_OPTIONS, payload: ["Cash", "Acnt Transfer", "Cash and Acnt Transfer"]})}
                                            else {dispatch({type:ACTIONS.SENT_OPTIONS, payload: []})}
                                        } else if(newState.transactionType === "General" && newState.paymentPurpose === "Self Transfer"){
                                            if(e.target.value === "Cash"){dispatch({type:ACTIONS.SENT_OPTIONS, payload: ["Acnt Transfer"]})}
                                            else if(e.target.value === "Acnt Transfer"){dispatch({type:ACTIONS.SENT_OPTIONS, payload: ["Cash"]})}
                                        }
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
                                ) : (
                                    showMain ? (
                                        <Form.Control type="text" defaultValue={newState.paymentType} disabled/>
                                    ) : (
                                        <Form.Select defaultValue={newState.paymentType} style={{border: newState1.paymentType ? "3px solid red" : ""}} onChange={e => {
                                            dispatch({type:ACTIONS.PAYMENT_TYPE, payload: e.target.value})
                                            if(newState1.paymentType){dispatch1({type:ACTIONS1.PAYMENT_TYPE, payload: false})}
                                            else if(newState.transactionType === "For Exchange" && newState.paymentPurpose === "Exchange Related"){
                                            if(e.target.value === "Gold"){dispatch({type:ACTIONS.SENT_OPTIONS, payload: ["Cash", "Acnt Transfer", "Cash and Acnt Transfer"]})}
                                            else if(e.target.value === "Silver"){dispatch({type:ACTIONS.SENT_OPTIONS, payload: ["Cash", "Acnt Transfer", "Cash and Acnt Transfer"]})}
                                            else {dispatch({type:ACTIONS.SENT_OPTIONS, payload: []})}
                                        } else if(newState.transactionType === "General" && newState.paymentPurpose === "Self Transfer"){
                                            if(e.target.value === "Cash"){dispatch({type:ACTIONS.SENT_OPTIONS, payload: ["Acnt Transfer"]})}
                                            else if(e.target.value === "Acnt Transfer"){dispatch({type:ACTIONS.SENT_OPTIONS, payload: ["Cash"]})}
                                        }
                                        }}>
                                            <option value=""></option>
                                            {
                                                options2.map((info, index) => {
                                                    return(
                                                        <option value={info} key={index}>{info}</option>
                                                    )
                                                })
                                            }
                                        </Form.Select>
                                    )
                                )
                            }
                            {
                                newState1.paymentType ? (<p className="text-danger m-1 small fw-bold">Enter valid option!</p>) : <></>
                            }
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Sent Type</Form.Label>
                            {
                                (transin === undefined) ? (
                                    <Form.Select defaultValue={newState.sentType} style={{border: newState1.sentType ? "3px solid red" : ""}} onChange={e => {
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
                                ) : (
                                    showMain ? (
                                        <Form.Control type="text" defaultValue={newState.sentType} disabled/>
                                    ) : (
                                        <Form.Select defaultValue={newState.sentType} style={{border: newState1.sentType ? "3px solid red" : ""}} onChange={e => {
                                            dispatch({type:ACTIONS.SENT_TYPE, payload: e.target.value})
                                            if(newState1.sentType){dispatch1({type:ACTIONS1.SENT_TYPE, payload: false})}
                                        }}>
                                            <option value=""></option>
                                            {
                                                options2.map((info, index) => {
                                                    return(
                                                        <option value={info} key={index}>{info}</option>
                                                    )
                                                })
                                            }
                                        </Form.Select>
                                    )

                                    )
                            }
                            {
                                newState1.sentType ? (<p className="text-danger m-1 small fw-bold">Enter valid option!</p>) : <></>
                            }
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Bill No.</Form.Label>
                            <Form.Control type="text" defaultValue={newState.billNo} style={{border: newState1.billNo ? "3px solid red" : ""}} onChange={e => {
                                dispatch({type:ACTIONS.BILL_NO, payload: e.target.value})
                                if(newState1.billNo){dispatch1({type:ACTIONS1.BILL_NO, payload: false})}
                            }} />
                            {
                                newState1.billNo ? (<p className="text-danger m-1 small fw-bold">Enter valid value!</p>) : <></>
                            }
                        </Form.Group>
                    </div>
                    <div className="col-2">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Customer Mobile</Form.Label>
                            {
                                (transin === undefined) ? (
                                    <Form.Control type="text" defaultValue={newState.customerMobile} style={{border: newState1.customerMobile ? "3px solid red" : ""}} onChange={e => {
                                        dispatch({type: ACTIONS.CUSTOMER_MOBILE, payload: e.target.value})
                                        if(newState1.customerMobile){dispatch1({type: ACTIONS1.CUSTOMER_MOBILE, payload: false})}
                                        if(newState1.orderId){dispatch1({type:ACTIONS1.ORDER_ID, payload: false})}
                                        if(e.target.value === "nil" && newState.transactionType !== "Order Related"){
                                            dispatch({type:ACTIONS.SHOW5, payload: false})
                                        } else {dispatch({type:ACTIONS.SHOW5, payload: true})}
                                    }} />
                                ) : (
                                    <Form.Control type="text" defaultValue={newState.customerMobile} disabled />
                                )
                            }
                            {
                                newState1.customerMobile ? (<p className="text-danger m-1 small fw-bold">Enter valid mobile!</p>) : <></>
                            }
                            {
                                (transin === undefined) ? (
                                newState.show5 ? <Button className="btn btn-secondary mt-2" onClick={Validate}>Validate</Button> : <></>
                                ) : <></>
                            }
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Customer Full Name</Form.Label>
                            {
                                (transin === undefined) ? (
                                    <Form.Control type="text" defaultValue={newState.customerFullName} style={{border: newState1.customerFullName ? "3px solid red" : ""}} onChange={e => {
                                        dispatch({type:ACTIONS.CUSTOMER_FULL_NAME, payload: e.target.value})
                                        if(newState.customerFullName !== ""){dispatch({type:ACTIONS.CUSTOMER_FULL_NAME, payload: ""})}
                                    }}/>
                                ) : (
                                    <Form.Control type="text" defaultValue={newState.customerFullName} disabled />
                                )
                            }
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
                            {
                                (transin === undefined) ? (
                                    <Form.Control type="date" defaultValue={newState.paymentDate} style={{border: newState1.paymentDate ? "3px solid red" : ""}} onChange={e => {
                                        dispatch({type: ACTIONS.PAYMENT_DATE, payload: e})
                                        if(newState1.paymentDate){dispatch1({type:ACTIONS1.PAYMENT_DATE, payload: false})}
                                    }}/>
                                ) : (
                                    <Form.Control type="date" defaultValue={newState.paymentDate} disabled />
                                )
                            }
                            {
                                newState1.paymentDate ? (<p className="text-danger m-1 small fw-bold">Enter valid date!</p>) : <></>
                            }
                        </Form.Group>
                    </div>
                </div>
                {
                    ((newState.paymentType === "Gold" || newState.paymentType === "Silver") && (newState.transactionType === "Order Related")) ? (
                        <Card className="mt-3 w-50" style={{backgroundColor: "skyblue"}}>
                            <Container>
                                <div className="row">
                                    <div className="col">
                                        <Form.Group className="mt-2 mb-2">
                                            <Form.Label className="fw-bold m-1">Old Weight</Form.Label>
                                            {
                                                (transin === undefined) ? (
                                                    <Form.Control type="text" defaultValue={newState.oldWeight} style={{border: newState1.oldWeight ? "3px solid red" : ""}} onChange={e => {
                                                        dispatch({type:ACTIONS.OLD_WEIGHT, payload: e.target.value})
                                                        if(newState1.oldWeight){dispatch1({type:ACTIONS1.OLD_WEIGHT, payload: false})}
                                                    }}/>
                                                    ) : (
                                                        showMain ? (
                                                            <Form.Control type="text" defaultValue={newState.oldWeight} disabled/>
                                                            ) : (
                                                                <Form.Control type="text" defaultValue={newState.oldWeight} style={{border: newState1.oldWeight ? "3px solid red" : ""}} onChange={e => {
                                                                    dispatch({type:ACTIONS.OLD_WEIGHT, payload: e.target.value})
                                                                    if(newState1.oldWeight){dispatch1({type:ACTIONS1.OLD_WEIGHT, payload: false})}
                                                                }}/>
                                                                )
                                                                )
                                            }
                                            {
                                                newState1.oldWeight ? (<p className="text-danger m-1 small fw-bold">Enter valid weight!</p>) : <></>
                                            }
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group className="mt-2 mb-2">
                                            <Form.Label className="fw-bold m-1">Fine Weight</Form.Label>
                                            {
                                                (transin === undefined) ? (
                                                    <Form.Control type="text" defaultValue={newState.fineWeight} style={{border: newState1.fineWeight ? "3px solid red" : ""}} onChange={e => {
                                                        dispatch({type: ACTIONS.FINE_WEIGHT, payload: e.target.value})
                                                        if(newState1.fineWeight){dispatch1({type:ACTIONS1.FINE_WEIGHT, payload: false})}
                                                    }} />
                                                    ) : (
                                                        showMain ? (
                                                            <Form.Control type="text" defaultValue={newState.fineWeight} disabled />
                                                            ) : (
                                                                <Form.Control type="text" defaultValue={newState.fineWeight} style={{border: newState1.fineWeight ? "3px solid red" : ""}} onChange={e => {
                                                                    dispatch({type: ACTIONS.FINE_WEIGHT, payload: e.target.value})
                                                                    if(newState1.fineWeight){dispatch1({type:ACTIONS1.FINE_WEIGHT, payload: false})}
                                                                }} />
                                                                )
                                                                )
                                            }
                                            {
                                                newState1.fineWeight ? (<p className="text-danger m-1 small fw-bold">Enter valid weight!</p>) : <></>
                                            }
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <Button variant="primary" className="m-1" onClick={() => {
                                        if(newState.oldWeight === "" && newState.fineWeight === ""){
                                            dispatch1({type:ACTIONS1.OLD_WEIGHT, payload: true})
                                            dispatch1({type:ACTIONS1.FINE_WEIGHT, payload: true})
                                        } else if(newState.oldWeight === "" && newState.fineWeight !== ""){
                                            if(!(/\d*\.?\d*/.test(newState.fineWeight))){dispatch1({type:ACTIONS1.FINE_WEIGHT, payload: true})}
                                            else{
                                                if(newState.paymentType.includes("Gold")){
                                                    dispatch({type:ACTIONS.GOLD_WEIGHT, payload: newState.fineWeight})
                                                } else {
                                                    dispatch({type:ACTIONS.SILVER_WEIGHT, payload: newState.fineWeight})
                                                }
                                            }
                                        } else if(newState.oldWeight !== "" && newState.fineWeight === ""){
                                            if(newState.oldWeight !== "" && !(/\d*\.?\d*/.test(newState.oldWeight))){dispatch1({type:ACTIONS1.OLD_WEIGHT, payload: true})}
                                            else{
                                                if(newState.paymentType.includes("Gold")){
                                                    dispatch({type:ACTIONS.GOLD_WEIGHT, payload: newState.oldWeight})
                                                } else {
                                                    dispatch({type:ACTIONS.SILVER_WEIGHT, payload: newState.oldWeight})
                                                }
                                            }
                                        } else {
                                            if(newState.oldWeight !== "" && !(/\d*\.?\d*/.test(newState.oldWeight))){dispatch1({type:ACTIONS1.OLD_WEIGHT, payload: true})}
                                            else if(newState.fineWeight !== "" && !(/\d*\.?\d*/.test(newState.fineWeight))){dispatch1({type:ACTIONS1.FINE_WEIGHT, payload: true})}
                                            else {
                                                const res = Number(newState.fineWeight) + Number(newState.oldWeight)
                                                if(newState.paymentType.includes("Gold")){
                                                    dispatch({type:ACTIONS.GOLD_WEIGHT, payload: res})
                                                } else {
                                                    dispatch({type:ACTIONS.SILVER_WEIGHT, payload: res})
                                                }
                                            }
                                        }
                                    }}>Submit</Button>
                                </div>
                            </Container>
                        </Card>
                    ) : <></>
                }
                {
                    (newState.paymentPurpose === "Exchange Related" && newState.transactionType === "For Exchange") ? (
                        <Card className="mt-3 w-75" style={{backgroundColor: "skyblue"}}>
                            <Container>
                                <div className="row">
                                    <div className="col">
                                        <Form.Group className="mt-2 mb-2">
                                            <Form.Label className="fw-bold m-1">Received Weight</Form.Label>
                                            {
                                                (transin === undefined) ? (
                                                    <Form.Control type="text" defaultValue={newState.receivedWeight} style={{border: newState1.receivedWeight ? "3px solid red" : ""}} onChange={e => {
                                                        dispatch({type:ACTIONS.RECEIVED_WEIGHT, payload: e.target.value})
                                                        if(newState1.receivedWeight){dispatch1({type:ACTIONS1.RECEIVED_WEIGHT, payload: false})}
                                                    }}/>
                                                ) : (
                                                    showMain ? (
                                                        <Form.Control type="text" defaultValue={newState.receivedWeight} disabled/>
                                                    ) : (
                                                        <Form.Control type="text" defaultValue={newState.receivedWeight} style={{border: newState1.receivedWeight ? "3px solid red" : ""}} onChange={e => {
                                                            dispatch({type:ACTIONS.RECEIVED_WEIGHT, payload: e.target.value})
                                                            if(newState1.receivedWeight){dispatch1({type:ACTIONS1.RECEIVED_WEIGHT, payload: false})}
                                                        }}/>
                                                    )
                                                )
                                            }
                                            {
                                                newState1.receivedWeight ? (<p className="text-danger m-1 small fw-bold">Enter valid weight!</p>) : <></>
                                            }
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group className="mt-2 mb-2">
                                            <Form.Label className="fw-bold m-1">Percentage</Form.Label>
                                            {
                                                (transin === undefined) ? (
                                                    <Form.Control type="text" defaultValue={newState.percentage} style={{border: newState1.percentage ? "3px solid red" : ""}} onChange={e => {
                                                        dispatch({type:ACTIONS.PERCENTAGE, payload: e.target.value})
                                                        if(newState1.percentage){dispatch1({type:ACTIONS1.PERCENTAGE, payload: false})}
                                                    }}/>
                                                ) : (
                                                    showMain ? (
                                                        <Form.Control type="text" defaultValue={newState.percentage} disabled/>
                                                    ) : (
                                                        <Form.Control type="text" defaultValue={newState.percentage} style={{border: newState1.percentage ? "3px solid red" : ""}} onChange={e => {
                                                            dispatch({type:ACTIONS.PERCENTAGE, payload: e.target.value})
                                                            if(newState1.percentage){dispatch1({type:ACTIONS1.PERCENTAGE, payload: false})}
                                                        }}/>
                                                    )
                                                )
                                            }
                                            {
                                                newState1.percentage ? (<p className="text-danger m-1 small fw-bold">Enter valid value!</p>) : <></>
                                            }
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group className="mt-2 mb-2">
                                            <Form.Label className="fw-bold m-1">One Gram Cost</Form.Label>
                                            {
                                                (transin === undefined) ? (
                                                    <Form.Control type="text" defaultValue={newState.oneGramCost} style={{border: newState1.oneGramCost ? "3px solid red" : ""}} onChange={e => {
                                                        dispatch({type:ACTIONS.ONE_GRAM_COST, payload: e.target.value})
                                                        if(newState1.oneGramCost){dispatch1({type:ACTIONS1.ONE_GRAM_COST, payload: false})}
                                                    }}/>
                                                ) : (
                                                    showMain ? (
                                                        <Form.Control type="text" defaultValue={newState.oneGramCost} disabled/>
                                                    ) : (
                                                        <Form.Control type="text" defaultValue={newState.oneGramCost} style={{border: newState1.oneGramCost ? "3px solid red" : ""}} onChange={e => {
                                                            dispatch({type:ACTIONS.ONE_GRAM_COST, payload: e.target.value})
                                                            if(newState1.oneGramCost){dispatch1({type:ACTIONS1.ONE_GRAM_COST, payload: false})}
                                                        }}/>
                                                    )
                                                )
                                            }
                                            {
                                                newState1.oneGramCost ? (<p className="text-danger m-1 small fw-bold">Enter valid cost!</p>) : <></>
                                            }
                                        </Form.Group>
                                    </div>
                                    <div className="col">
                                        <Form.Group className="mt-2 mb-2">
                                            <Form.Label className="fw-bold m-1">Exchange Weight</Form.Label>
                                            {
                                                (transin === undefined) ? (
                                                    <Form.Control type="text" defaultValue={newState.exchangeWeight} style={{border: newState1.exchangeWeight ? "3px solid red" : ""}} onChange={e => {
                                                        dispatch({type: ACTIONS.EXCHANGE_WEIGHT, payload: e.target.value})
                                                        if(newState.exchangeWeight){dispatch1({type:ACTIONS1.EXCHANGE_WEIGHT, payload: false})}
                                                    }} />
                                                ) : (
                                                    showMain ? (
                                                        <Form.Control type="text" defaultValue={newState.exchangeWeight} disabled />
                                                    ) : (
                                                        <Form.Control type="text" defaultValue={newState.exchangeWeight} style={{border: newState1.exchangeWeight ? "3px solid red" : ""}} onChange={e => {
                                                            dispatch({type: ACTIONS.EXCHANGE_WEIGHT, payload: e.target.value})
                                                            if(newState.exchangeWeight){dispatch1({type:ACTIONS1.EXCHANGE_WEIGHT, payload: false})}
                                                        }} />
                                                    )
                                                )
                                            }
                                            {
                                                newState1.exchangeWeight ? (<p className="text-danger m-1 small fw-bold">Enter valid weight!</p>) : <></>
                                            }
                                        </Form.Group>
                                    </div>
                                    <div className="row">
                                        <div className="d-flex justify-content-between">
                                            <p className="text-danger small fw-bold">mandatory fields*</p>
                                            <Button variant="primary" className="m-1" onClick={() => {
                                                if(newState.receivedWeight === "" || !(/\d*\.?\d*/.test(newState.receivedWeight))){dispatch1({type:ACTIONS1.RECEIVED_WEIGHT, payload: true})}
                                                else if((newState.percentage === "" || !(/\d*\.?\d*/.test(newState.percentage))) && Number(newState.percentage <= 100)){dispatch1({type:ACTIONS1.PERCENTAGE, payload: true})}
                                                else if(newState.oneGramCost === "" || !(/\d*\.?\d*/.test(newState.oneGramCost))){dispatch1({type:ACTIONS1.ONE_GRAM_COST, payload: true})}
                                                else {
                                                    let val2 = Number(newState.receivedWeight) * Number(newState.percentage) / 100
                                                    if(newState.paymentType === "Gold"){
                                                        dispatch({type:ACTIONS.GOLD_WEIGHT, payload: val2.toString()})
                                                    } else {
                                                        dispatch({type:ACTIONS.SILVER_WEIGHT, payload: val2.toString()})
                                                    }
                                                    let price1 = val2 * Number(newState.oneGramCost)
                                                    dispatch({type: ACTIONS.EXCHANGE_WEIGHT, payload: val2.toString()})
                                                    dispatch({type: ACTIONS.TOTAL_PRICE, payload: price1.toString()})
                                                }
                                            }}>Calculate Exchange Weight</Button>
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
                            <Form.Label className="fw-bold m-1">Total Price</Form.Label>
                            {
                                ((newState.transactionType === "Order Related" && newState.paymentPurpose === "Order Delivery") || newState.transactionType === "For Exchange") ? (
                                    (transin === undefined) ? (
                                        <Form.Control type="text" defaultValue={newState.totalPrice} style={{border: newState1.totalPrice ? "3px solid red" : ""}} onChange={e => {
                                            dispatch({type: ACTIONS.TOTAL_PRICE, payload: e.target.value})
                                            if(newState1.totalPrice){dispatch1({type:ACTIONS1.TOTAL_PRICE, payload: false})}
                                        }} />
                                    ) : (
                                        showMain? (
                                            <Form.Control type="text" defaultValue={newState.totalPrice} disabled/>
                                        ) : (
                                            <Form.Control type="text" defaultValue={newState.totalPrice} style={{border: newState1.totalPrice ? "3px solid red" : ""}} onChange={e => {
                                                dispatch({type: ACTIONS.TOTAL_PRICE, payload: e.target.value})
                                                if(newState1.totalPrice){dispatch1({type:ACTIONS1.TOTAL_PRICE, payload: false})}
                                            }} />
                                        )
                                    )
                                ) : (
                                    <Form.Control type="text" defaultValue={newState.totalPrice} disabled />
                                )
                            }
                            {
                                newState1.totalPrice ? (<p className="text-danger m-1 small fw-bold">Enter valid price!</p>) : <></>
                            }
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Gold Weight</Form.Label>
                            {
                                (transin === undefined) ? (
                                    <Form.Control type="text" defaultValue={newState.goldWeight} style={{border: newState1.goldWeight ? "3px solid red" : ""}} onChange={e => {
                                        dispatch({type: ACTIONS.GOLD_WEIGHT, payload: e.target.value})
                                        if(newState1.goldWeight){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: false})}
                                    }} />
                                ) : (
                                    showMain ? (
                                        <Form.Control type="text" defaultValue={newState.goldWeight} disabled />
                                    ) : (
                                        <Form.Control type="text" defaultValue={newState.goldWeight} style={{border: newState1.goldWeight ? "3px solid red" : ""}} onChange={e => {
                                            dispatch({type: ACTIONS.GOLD_WEIGHT, payload: e.target.value})
                                            if(newState1.goldWeight){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: false})}
                                        }} />
                                    )
                                )
                            }
                            {
                                newState1.goldWeight ? (<p className="text-danger m-1 small fw-bold">Enter valid weight!</p>) : <></>
                            }
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Silver Weight</Form.Label>
                            {
                                (transin === undefined) ? (
                                    <Form.Control type="text" defaultValue={newState.silverWeight} style={{border: newState1.silverWeight ? "3px solid red" : ""}} onChange={e => {
                                        dispatch({type: ACTIONS.SILVER_WEIGHT, payload: e.target.value})
                                        if(newState1.silverWeight){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: false})}
                                    }} />
                                ) : (
                                    showMain ? (
                                        <Form.Control type="text" defaultValue={newState.silverWeight} disabled />
                                    ) : (
                                        <Form.Control type="text" defaultValue={newState.silverWeight} style={{border: newState1.silverWeight ? "3px solid red" : ""}} onChange={e => {
                                            dispatch({type: ACTIONS.SILVER_WEIGHT, payload: e.target.value})
                                            if(newState1.silverWeight){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: false})}
                                        }} />
                                    )
                                )
                            }
                            {
                                newState1.silverWeight ? (<p className="text-danger m-1 small fw-bold">Enter valid weight!</p>) : <></>
                            }
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Cash</Form.Label>
                            {
                                (transin === undefined) ? (
                                    <Form.Control type="text" defaultValue={newState.cash} style={{border: newState1.cash ? "3px solid red" : ""}} onChange={e => {
                                        dispatch({type: ACTIONS.CASH, payload: e})
                                        if(newState1.cash){dispatch1({type:ACTIONS1.CASH, payload: false})}
                                    }} />
                                ) : (
                                    showMain ? (
                                        <Form.Control type="text" defaultValue={newState.cash} disabled />
                                    ) : (
                                        <Form.Control type="text" defaultValue={newState.cash} style={{border: newState1.cash ? "3px solid red" : ""}} onChange={e => {
                                            dispatch({type: ACTIONS.CASH, payload: e})
                                            if(newState1.cash){dispatch1({type:ACTIONS1.CASH, payload: false})}
                                        }} />
                                    )
                                )
                            }
                            {
                                newState1.cash ? (<p className="text-danger m-1 small fw-bold">Enter valid value!</p>) : <></>
                            }
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Acnt Transfer</Form.Label>
                            {
                                (transin === undefined) ? (
                                    <Form.Control type="text" defaultValue={newState.acntTransfer} style={{border: newState1.acntTransfer ? "3px solid red" : ""}} onChange={e => {
                                        dispatch({type: ACTIONS.ACNT_TRANSFER, payload: e})
                                        if(newState1.acntTransfer){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: false})}
                                    }} />
                                ) : (
                                    showMain ? (
                                        <Form.Control type="text" defaultValue={newState.acntTransfer} disabled />
                                    ) : (
                                        <Form.Control type="text" defaultValue={newState.acntTransfer} style={{border: newState1.acntTransfer ? "3px solid red" : ""}} onChange={e => {
                                            dispatch({type: ACTIONS.ACNT_TRANSFER, payload: e})
                                            if(newState1.acntTransfer){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: false})}
                                        }} />
                                    )
                                )
                            }
                            {
                                newState1.acntTransfer ? (<p className="text-danger m-1 small fw-bold">Enter valid value!</p>) : <></>
                            }
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Payment Status</Form.Label>
                            <Form.Select defaultValue={newState.status} style={{border: newState1.paymentStatus ? "3px solid red" : ""}} onChange={e => {
                                    dispatch({type:ACTIONS.STATUS, payload: e.target.value})
                                    if(newState1.paymentStatus){dispatch1({type:ACTIONS1.PAYMENT_STATUS, payload: false})}
                                }}>
                                    <option value=""></option>
                                    <option value="Pending">Pending</option>
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
                            <Form.Select defaultValue={newState.customerDueStatus} style={{border: newState1.customerDueStatus ? "3px solid red" : ""}} onChange={e => {
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
                            <Form.Control type="text" defaultValue={newState.customerDueAmount} onChange={e => dispatch({type: ACTIONS.CUSTOMER_DUE_AMOUNT, payload: e.target.value})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Customer Due Gold</Form.Label>
                            <Form.Control type="text" defaultValue={newState.customerDueGold} onChange={e => dispatch({type: ACTIONS.CUSTOMER_DUE_GOLD, payload: e.target.value})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Customer Due Silver</Form.Label>
                            <Form.Control type="text" defaultValue={newState.customerDueSilver} onChange={e => dispatch({type: ACTIONS.CUSTOMER_DUE_SILVER, payload: e.target.value})} />
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
                            <Form.Select defaultValue={newState.rrjDueStatus} style={{border: newState1.rrjDueStatus ? "3px solid red" : ""}} onChange={e => {
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
                            <Form.Control type="text" defaultValue={newState.rrjDueAmount} onChange={e => dispatch({type: ACTIONS.RRJ_DUE_AMOUNT, payload: e.target.value})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">RRJ Due Gold</Form.Label>
                            <Form.Control type="text" defaultValue={newState.rrjDueGold} onChange={e => dispatch({type: ACTIONS.RRJ_DUE_GOLD, payload: e.target.value})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">RRJ Due Silver</Form.Label>
                            <Form.Control type="text" defaultValue={newState.rrjDueSilver} onChange={e => dispatch({type: ACTIONS.RRJ_DUE_SILVER, payload: e.target.value})} />
                        </Form.Group>
                    </div>
                    <div className="col-3">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Payment Received By</Form.Label>
                            {
                                (transin === undefined) ? (
                                    <Form.Select defaultValue={newState.paymentReceivedBy} style={{border: newState1.paymentReceivedBy ? "3px solid red" : ""}} onChange={e => {
                                        dispatch({type: ACTIONS.PAYMENT_RECEIVED_BY, payload: e.target.value})
                                        if(newState1.paymentReceivedBy){dispatch1({type:ACTIONS1.PAYMENT_RECEIVED_BY, payload: false})}
                                        }}>
                                            <option value=""></option>
                                            {
                                                names.map((name,index) => {
                                                    return(
                                                        <option value={name} key={index}>{name}</option>
                                                    )
                                                })
                                            }
                                    </Form.Select>
                                ) : (
                                    <Form.Control type="text" defaultValue={newState.paymentReceivedBy} disabled />
                                )
                            }
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
                            <Form.Control type="text" defaultValue={newState.paymentDescription} onChange={e => dispatch({type: ACTIONS.PAYMENT_DESCRIPTION, payload: e})} />
                        </Form.Group>
                    </div>
                </div>
                <div className="d-flex justify-content-center m-3">
                    {
                        (transin === undefined) ? (
                            <Button variant="primary" className="mt-3 mb-3" onClick={SubmitHandler}>Submit Details</Button>
                        ) : (
                            <Button variant="primary" className="mt-3 mb-3" onClick={() => {
                                if(newState.transactionType === "General" && newState.paymentPurpose === "Buying"){
                                    if(newState.sentType === ""){dispatch1({type:ACTIONS1.SENT_TYPE, payload: true})}
                                    else if(newState.paymentType === ""){dispatch1({type:ACTIONS1.PAYMENT_TYPE, payload: true})}
                                    else {
                                        if(newState.paymentType === "Gold" && newState.sentType === "Cash"){
                                            if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                                            else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                            else {
                                                if(showMain){
                                                    axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                    .then(() => {
                                                        dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                    }).catch(err => console.log(err))
                                                } else {
                                                    axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                        cashIn: "",
                                                        cashOut: newState.cash,
                                                        goldIn: newState.goldWeight,
                                                        goldOut: "",
                                                        silverIn: "",
                                                        silverOut: "",
                                                        accountIn: "",
                                                        accountOut: "",
                                                        id: newState.paymentId, 
                                                        date: newState.paymentDate
                                                    }).then(() => {
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                        .then(() => {
                                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                        }).catch(err => console.log(err))
                                                    }).catch(err => console.log(err))
                                                }
                                            }
                                        } else if(newState.paymentType === "Silver" && newState.sentType === "Cash"){
                                            if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                                            else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                            else {
                                                if(showMain){
                                                    axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                    .then(() => {
                                                        dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                    }).catch(err => console.log(err))
                                                } else {
                                                    axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                        cashIn: "",
                                                        cashOut: newState.cash,
                                                        goldIn: "",
                                                        goldOut: "",
                                                        silverIn: newState.silverWeight,
                                                        silverOut: "",
                                                        accountIn: "",
                                                        accountOut: "",
                                                        id: newState.paymentId,
                                                        date: newState.paymentDate
                                                    }).then(() => {
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                        .then(() => {
                                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                        }).catch(err => console.log(err))
                                                    }).catch(err => console.log(err))
                                                }
                                            }
                                        } else if(newState.paymentType === "Gold" && newState.sentType === "Acnt Transfer"){
                                            if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                                            else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                            else {
                                                if(showMain){
                                                    axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                    .then(() => {
                                                        dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                    }).catch(err => console.log(err))
                                                } else {
                                                    axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                        cashIn: "",
                                                        cashOut: "",
                                                        goldIn: newState.goldWeight,
                                                        goldOut: "",
                                                        silverIn: "",
                                                        silverOut: "",
                                                        accountIn: "",
                                                        accountOut: newState.acntTransfer,
                                                        id: newState.paymentId,
                                                        date: newState.paymentDate
                                                    }).then(() => {
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                        .then(() => {
                                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                        }).catch(err => console.log(err))
                                                    }).catch(err => console.log(err))
                                                }
                                            }
                                        } else if(newState.paymentType === "Silver" && newState.sentType === "Acnt Transfer"){
                                            if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                                            else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                            else {
                                                if(showMain){
                                                    axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                    .then(() => {
                                                        dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                    }).catch(err => console.log(err))
                                                } else {
                                                    axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                        cashIn: "",
                                                        cashOut: "",
                                                        goldIn: "",
                                                        goldOut: "",
                                                        silverIn: newState.silverWeight,
                                                        silverOut: "",
                                                        accountIn: "",
                                                        accountOut: newState.acntTransfer,
                                                        id: newState.paymentId,
                                                        date: newState.paymentDate
                                                    }).then(() => {
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                        .then(() => {
                                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                        }).catch(err => console.log(err))
                                                    }).catch(err => console.log(err))
                                                }
                                            }
                                        } else if(newState.paymentType === "Gold" && newState.sentType === "Cash and Acnt Transfer"){
                                            if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                                            else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                            else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                            else {
                                                if(showMain){
                                                    axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                    .then(() => {
                                                        dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                    }).catch(err => console.log(err))
                                                } else {
                                                    axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                        cashIn: "",
                                                        cashOut: newState.cash,
                                                        goldIn: newState.goldWeight,
                                                        goldOut: "",
                                                        silverIn: "",
                                                        silverOut: "",
                                                        accountIn: "",
                                                        accountOut: newState.acntTransfer,
                                                        id: newState.paymentId,
                                                        date: newState.paymentDate
                                                    }).then(() => {
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                        .then(() => {
                                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                        }).catch(err => console.log(err))
                                                    }).catch(err => console.log(err))
                                                }
                                            }
                                        } else if(newState.paymentType === "Silver" && newState.sentType === "Cash and Acnt Transfer"){
                                            if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                                            else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                            else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                            else {
                                                if(showMain){
                                                    axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                    .then(() => {
                                                        dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                    }).catch(err => console.log(err))
                                                } else {
                                                    axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                        cashIn: "",
                                                        cashOut: newState.cash,
                                                        goldIn: "",
                                                        goldOut: "",
                                                        silverIn: newState.silverWeight,
                                                        silverOut: "",
                                                        accountIn: "",
                                                        accountOut: newState.acntTransfer,
                                                        id: newState.paymentId,
                                                        date: newState.paymentDate
                                                    }).then(() => {
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                        .then(() => {
                                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                        }).catch(err => console.log(err))
                                                    }).catch(err => console.log(err))
                                                }
                                            }
                                        }}
                                    if(newState.transactionType === "General" && newState.paymentPurpose === "Selling"){
                                        if(newState.sentType === ""){dispatch1({type:ACTIONS1.SENT_TYPE, payload: true})}
                                        else if(newState.paymentType === ""){dispatch1({type:ACTIONS1.PAYMENT_TYPE, payload: true})}
                                        else {
                                            if(newState.paymentType === "Cash" && newState.sentType === "Gold"){
                                                if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                        .then(() => {
                                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                        }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: newState.cash,
                                                            cashOut: "",
                                                            goldIn: "",
                                                            goldOut: newState.goldWeight,
                                                            silverIn: "",
                                                            silverOut: "",
                                                            accountIn: "",
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.paymentType === "Acnt Transfer" && newState.sentType === "Gold"){
                                                if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: "",
                                                            goldIn: "",
                                                            goldOut: newState.goldWeight,
                                                            silverIn: "",
                                                            silverOut: "",
                                                            accountIn: newState.acntTransfer,
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.paymentType === "Cash and Acnt Transfer" && newState.sentType === "Gold"){
                                                if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: newState.cash,
                                                            cashOut: "",
                                                            goldIn: "",
                                                            goldOut: newState.goldWeight,
                                                            silverIn: "",
                                                            silverOut: "",
                                                            accountIn: newState.acntTransfer,
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.paymentType === "Cash" && newState.sentType === "Silver"){
                                                if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: newState.cash,
                                                            cashOut: "",
                                                            goldIn: "",
                                                            goldOut: "",
                                                            silverIn: "",
                                                            silverOut: newState.silverWeight,
                                                            accountIn: "",
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.paymentType === "Acnt Transfer" && newState.sentType === "Silver"){
                                                if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: "",
                                                            goldIn: "",
                                                            goldOut: "",
                                                            silverIn: "",
                                                            silverOut: newState.silverWeight,
                                                            accountIn: newState.acntTransfer,
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.paymentType === "Cash and Acnt Transfer" && newState.sentType === "Silver"){
                                                if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: newState.cash,
                                                            cashOut: "",
                                                            goldIn: "",
                                                            goldOut: "",
                                                            silverIn: "",
                                                            silverOut: newState.silverWeight,
                                                            accountIn: newState.acntTransfer,
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            }}
                                        }
                                    if(newState.transactionType === "General" && (newState.paymentPurpose === "Borrowing" || newState.paymentPurpose === "Lended Repaying")){
                                        if(newState.paymentType === ""){dispatch1({type:ACTIONS1.PAYMENT_TYPE, payload: true})}
                                        else {
                                            if(newState.paymentType === "Cash"){
                                                if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: newState.cash,
                                                            cashOut: "",
                                                            goldIn: "",
                                                            goldOut: "",
                                                            silverIn: "",
                                                            silverOut: "",
                                                            accountIn: "",
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.paymentType === "Gold"){
                                                if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: "",
                                                            goldIn: newState.goldWeight,
                                                            goldOut: "",
                                                            silverIn: "",
                                                            silverOut: "",
                                                            accountIn: "",
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.paymentType === "Silver"){
                                                if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: "",
                                                            goldIn: "",
                                                            goldOut: "",
                                                            silverIn: newState.silverWeight,
                                                            silverOut: "",
                                                            accountIn: "",
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.paymentType === "Acnt Transfer"){
                                                if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: "",
                                                            goldIn: "",
                                                            goldOut: "",
                                                            silverIn: "",
                                                            silverOut: "",
                                                            accountIn: newState.acntTransfer,
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.paymentType === "Cash and Acnt Transfer"){
                                                if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: newState.cash,
                                                            cashOut: "",
                                                            goldIn: "",
                                                            goldOut: "",
                                                            silverIn: "",
                                                            silverOut: "",
                                                            accountIn: newState.acntTransfer,
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.paymentType === "Gold and Cash"){
                                                if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: newState.cash,
                                                            cashOut: "",
                                                            goldIn: newState.goldWeight,
                                                            goldOut: "",
                                                            silverIn: "",
                                                            silverOut: "",
                                                            accountIn: "",
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.paymentType === "Gold and Acnt Transfer"){
                                                if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: "",
                                                            goldIn: newState.goldWeight,
                                                            goldOut: "",
                                                            silverIn: "",
                                                            silverOut: "",
                                                            accountIn: newState.acntTransfer,
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.paymentType === "Gold, Cash and Acnt Transfer"){
                                                if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: newState.cash,
                                                            cashOut: "",
                                                            goldIn: newState.goldWeight,
                                                            goldOut: "",
                                                            silverIn: "",
                                                            silverOut: "",
                                                            accountIn: newState.acntTransfer,
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.paymentType === "Silver and Cash"){
                                                if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: newState.cash,
                                                            cashOut: "",
                                                            goldIn: "",
                                                            goldOut: "",
                                                            silverIn: newState.silverWeight,
                                                            silverOut: "",
                                                            accountIn: "",
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.paymentType === "Silver and Acnt Transfer"){
                                                if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: "",
                                                            goldIn: "",
                                                            goldOut: "",
                                                            silverIn: newState.silverWeight,
                                                            silverOut: "",
                                                            accountIn: newState.acntTransfer,
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.paymentType === "Silver, Cash and Acnt Transfer"){
                                                if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: newState.cash,
                                                            cashOut: "",
                                                            goldIn: "",
                                                            goldOut: "",
                                                            silverIn: newState.silverWeight,
                                                            silverOut: "",
                                                            accountIn: newState.acntTransfer,
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            }}
                                        }
                                    if(newState.transactionType === "General" && (newState.paymentPurpose === "Lending" || newState.paymentPurpose === "Repaying Borrowed" || newState.paymentPurpose === "General Expenses")){
                                        if(newState.sentType === ""){dispatch1({type:ACTIONS1.SENT_TYPE, payload: true})}
                                        else {
                                            if(newState.sentType === "Cash"){
                                                if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                                .then(() => {
                                                                    dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                                }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: newState.cash,
                                                            goldIn: "",
                                                            goldOut: "",
                                                            silverIn: "",
                                                            silverOut: "",
                                                            accountIn: "",
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.sentType === "Gold"){
                                                if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: "",
                                                            goldIn: "",
                                                            goldOut: newState.goldWeight,
                                                            silverIn: "",
                                                            silverOut: "",
                                                            accountIn: "",
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.sentType === "Silver"){
                                                if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: "",
                                                            goldIn: "",
                                                            goldOut: "",
                                                            silverOut: newState.silverWeight,
                                                            silverIn: "",
                                                            accountIn: "",
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.sentType === "Acnt Transfer"){
                                                if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: "",
                                                            goldIn: "",
                                                            goldOut: "",
                                                            silverIn: "",
                                                            silverOut: "",
                                                            accountIn: "",
                                                            accountOut: newState.acntTransfer,
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.sentType === "Cash and Acnt Transfer"){
                                                if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: newState.cash,
                                                            goldIn: "",
                                                            goldOut: "",
                                                            silverIn: "",
                                                            silverOut: "",
                                                            accountIn: "",
                                                            accountOut: newState.acntTransfer,
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.sentType === "Gold and Cash"){
                                                if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: newState.amountReceived,
                                                            goldIn: "",
                                                            goldOut: newState.goldWeight,
                                                            silverIn: "",
                                                            silverOut: "",
                                                            accountIn: "",
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.sentType === "Gold and Acnt Transfer"){
                                                if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: "",
                                                            goldIn: "",
                                                            goldOut: newState.goldWeight,
                                                            silverIn: "",
                                                            silverOut: "",
                                                            accountIn: "",
                                                            accountOut: newState.acntTransfer,
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.sentType === "Gold, Cash and Acnt Transfer"){
                                                if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: newState.cash,
                                                            goldIn: "",
                                                            goldOut: newState.goldWeight,
                                                            silverIn: "",
                                                            silverOut: "",
                                                            accountIn: "",
                                                            accountOut: newState.acntTransfer,
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.sentType === "Silver and Cash"){
                                                if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: newState.cash,
                                                            goldIn: "",
                                                            goldOut: "",
                                                            silverIn: "",
                                                            silverOut: newState.silverWeight,
                                                            accountIn: "",
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.sentType === "Silver and Acnt Transfer"){
                                                if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: "",
                                                            goldIn: "",
                                                            goldOut: "",
                                                            silverIn: "",
                                                            silverOut: newState.silverWeight,
                                                            accountIn: "",
                                                            accountOut: newState.acntTransfer,
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.sentType === "Silver, Cash and Acnt Transfer"){
                                                if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: newState.cash,
                                                            goldIn: "",
                                                            goldOut: "",
                                                            silverIn: "",
                                                            silverOut: newState.silverWeight,
                                                            accountIn: "",
                                                            accountOut: newState.acntTransfer,
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            }}
                                        }
                                    if(newState.paymentPurpose === "Self Transfer"){
                                        if(newState.sentType === ""){dispatch1({type:ACTIONS1.SENT_TYPE, payload: true})}
                                        else if(newState.paymentType === ""){dispatch1({type:ACTIONS1.PAYMENT_TYPE, payload: true})}
                                        else {
                                            if(newState.sentType === "Cash" && newState.paymentType === "Acnt Transfer"){
                                                if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                        .then(() => {
                                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                        }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: newState.cash,
                                                            goldIn: "",
                                                            goldOut: "",
                                                            silverIn: "",
                                                            silverOut: "",
                                                            accountIn: newState.acntTransfer,
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.sentType === "Acnt Transfer" && newState.paymentType === "Cash") {
                                                if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: newState.cash,
                                                            cashOut: "",
                                                            goldIn: "",
                                                            goldOut: "",
                                                            silverIn: "",
                                                            silverOut: "",
                                                            accountIn: "",
                                                            accountOut: newState.acntTransfer,
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            }
                                        }
                                    }
                                } else if(newState.transactionType === "Order Related"){
                                    if((newState.paymentPurpose === "Advance for Order" || newState.paymentPurpose === "Dues Payment") && newState.paymentType === ""){dispatch1({type:ACTIONS1.PAYMENT_TYPE, payload: true})}
                                    else if(newState.paymentPurpose === "Order Delivery" && newState.sentType === ""){dispatch1({type:ACTIONS1.SENT_TYPE, payload: true})}
                                    else if(newState.paymentPurpose === "Order Delivery" && newState.paymentType === ""){dispatch1({type:ACTIONS1.PAYMENT_TYPE, payload: true})}
                                    else if(newState.paymentPurpose === "Order Delivery" && newState.totalPrice === ""){dispatch1({type:ACTIONS1.TOTAL_PRICE, payload: true})}
                                    else if(newState.paymentPurpose === "Return Excess" && newState.sentType === ""){dispatch1({type:ACTIONS1.SENT_TYPE, payload: true})}
                                    else {
                                        if(newState.paymentPurpose === "Advance for Order" || newState.paymentPurpose === "Order Delivery" || newState.paymentPurpose === "Dues Payment"){
                                            if(newState.paymentType === "Cash"){
                                                if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                        .then(() => {
                                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                        }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: newState.cash,
                                                            cashOut: "",
                                                            goldIn: "",
                                                            silverIn: "",
                                                            accountIn: "",
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.paymentType === "Gold"){
                                                if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                        .then(() => {
                                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                        }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: "",
                                                            goldIn: newState.goldWeight,
                                                            silverIn: "",
                                                            accountIn: "",
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.paymentType === "Gold and Cash"){
                                                if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                        .then(() => {
                                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                        }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: newState.cash,
                                                            cashOut: "",
                                                            goldIn: newState.goldWeight,
                                                            silverIn: "",
                                                            accountIn: "",
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.paymentType === "Gold and Acnt Transfer"){
                                                if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                        .then(() => {
                                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                        }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: "",
                                                            goldIn: newState.goldWeight,
                                                            silverIn: "",
                                                            accountIn: newState.acntTransfer,
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.paymentType === "Gold, Cash and Acnt Transfer"){
                                                if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                        .then(() => {
                                                            dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                        }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: newState.cash,
                                                            cashOut: "",
                                                            goldIn: newState.goldWeight,
                                                            silverIn: "",
                                                            accountIn: newState.acntTransfer,
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.paymentType === "Silver"){
                                                if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: "",
                                                            goldIn: "",
                                                            silverIn: newState.silverWeight,
                                                            accountIn: "",
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.paymentType === "Silver and Cash"){
                                                if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: newState.cash,
                                                            cashOut: "",
                                                            goldIn: "",
                                                            silverIn: newState.silverWeight,
                                                            accountIn: "",
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.paymentType === "Silver and Acnt Transfer"){
                                                if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: "",
                                                            goldIn: "",
                                                            silverIn: newState.silverWeight,
                                                            accountIn: newState.acntTransfer,
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.paymentType === "Silver, Cash and Acnt Transfer"){
                                                if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: newState.cash,
                                                            cashOut: "",
                                                            goldIn: "",
                                                            silverIn: newState.silverWeight,
                                                            accountIn: newState.acntTransfer,
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.paymentType === "Acnt Transfer"){
                                                if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: "",
                                                            goldIn: "",
                                                            silverIn: "",
                                                            accountIn: newState.acntTransfer,
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.paymentType === "Cash and Acnt Transfer"){
                                                if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: newState.cash,
                                                            cashOut: "",
                                                            goldIn: "",
                                                            silverIn: "",
                                                            accountIn: newState.acntTransfer,
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            }
                                        } else if(newState.paymentPurpose === "Return Excess"){
                                            if(newState.sentType === "Cash"){
                                                if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: newState.cash,
                                                            goldIn: "",
                                                            goldOut: "",
                                                            silverIn: "",
                                                            silverOut: "",
                                                            accountIn: "",
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.sentType === "Gold"){
                                                if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: "",
                                                            goldIn: "",
                                                            goldOut: newState.goldWeight,
                                                            silverIn: "",
                                                            silverOut: "",
                                                            accountIn: "",
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.sentType === "Gold and Cash"){
                                                if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: newState.cash,
                                                            goldIn: "",
                                                            goldOut: newState.goldWeight,
                                                            silverIn: "",
                                                            silverOut: "",
                                                            accountIn: "",
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.sentType === "Gold and Acnt Transfer"){
                                                if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: "",
                                                            goldIn: "",
                                                            goldOut: newState.goldWeight,
                                                            silverIn: "",
                                                            silverOut: "",
                                                            accountIn: "",
                                                            accountOut: newState.acntTransfer,
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.sentType === "Gold, Cash and Acnt Transfer"){
                                                if(!(/\d*\.?\d*/.test(newState.goldWeight)) || newState.goldWeight === ""){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: newState.cash,
                                                            goldIn: "",
                                                            goldOut: newState.goldWeight,
                                                            silverIn: "",
                                                            silverOut: "",
                                                            accountIn: "",
                                                            accountOut: newState.acntTransfer,
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.sentType === "Silver"){
                                                if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: "",
                                                            goldIn: "",
                                                            goldOut: "",
                                                            silverIn: "",
                                                            silverOut: newState.silverWeight,
                                                            accountIn: "",
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.sentType === "Silver and Cash"){
                                                if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: newState.cash,
                                                            goldIn: "",
                                                            goldOut: "",
                                                            silverIn: "",
                                                            silverOut: newState.silverWeight,
                                                            accountIn: "",
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.sentType === "Silver and Acnt Transfer"){
                                                if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: "",
                                                            goldIn: "",
                                                            goldOut: "",
                                                            silverIn: "",
                                                            silverOut: newState.silverWeight,
                                                            accountIn: "",
                                                            accountOut: newState.acntTransfer,
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.sentType === "Silver, Cash and Acnt Transfer"){
                                                if(!(/\d*\.?\d*/.test(newState.silverWeight)) || newState.silverWeight === ""){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: newState.cash,
                                                            goldIn: "",
                                                            goldOut: "",
                                                            silverIn: "",
                                                            silverOut: newState.silverWeight,
                                                            accountIn: "",
                                                            accountOut: newState.acntTransfer,
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.sentType === "Acnt Transfer"){
                                                if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: "",
                                                            goldIn: "",
                                                            goldOut: "",
                                                            silverIn: "",
                                                            silverOut: "",
                                                            accountIn: "",
                                                            accountOut: newState.acntTransfer,
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            } else if(newState.sentType === "Cash and Acnt Transfer"){
                                                if(!(/\d*\.?\d*/.test(newState.cash)) || newState.cash === ""){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                                else if(!(/\d*\.?\d*/.test(newState.acntTransfer)) || newState.acntTransfer === ""){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                                else {
                                                    if(showMain){
                                                        axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                    } else {
                                                        axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: newState.cash,
                                                            goldIn: "",
                                                            goldOut: "",
                                                            silverIn: "",
                                                            silverOut: "",
                                                            accountIn: "",
                                                            accountOut: newState.acntTransfer,
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                    }
                                                }
                                            }
                                        }
                                    }
                                } else if(newState.transactionType === "For Exchange" && newState.paymentPurpose === "Exchange Related"){
                                    if(newState.billNo === ""){dispatch1({type:ACTIONS1.BILL_NO, payload: true})}
                                    else if(newState.receivedWeight === "" || !(/\d*\.?\d*/.test(newState.receivedWeight))){dispatch1({type:ACTIONS1.RECEIVED_WEIGHT, payload: true})}
                                    else if(newState.exchangeWeight === "" || !(/\d*\.?\d*/.test(newState.exchangeWeight))){dispatch1({type:ACTIONS1.EXCHANGE_WEIGHT, payload: true})}
                                    else{
                                        if(newState.paymentType === "Gold" && newState.sentType === "Acnt Transfer"){
                                            if(newState.goldWeight === "" || !(/\d*\.?\d*/.test(newState.goldWeight))){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                                            else if(newState.acntTransfer === "" || !(/\d*\.?\d*/.test(newState.acntTransfer))){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                            else{
                                                if(showMain){
                                                    axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                } else {
                                                    axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: "",
                                                            goldIn: newState.goldWeight,
                                                            goldOut: "",
                                                            silverIn: "",
                                                            silverOut: "",
                                                            accountIn: "",
                                                            accountOut: newState.acntTransfer,
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                }
                                            }
                                        } else if(newState.paymentType === "Gold" && newState.sentType === "Cash"){
                                            if(newState.goldWeight === "" || !(/\d*\.?\d*/.test(newState.goldWeight))){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                                            else if(newState.cash === "" || !(/\d*\.?\d*/.test(newState.cash))){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                            else{
                                                if(showMain){
                                                    axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                } else {
                                                    axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: newState.cash,
                                                            goldIn: newState.goldWeight,
                                                            goldOut: "",
                                                            silverIn: "",
                                                            silverOut: "",
                                                            accountIn: "",
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                }
                                            }
                                        } else if(newState.paymentType === "Gold" && newState.sentType === "Cash and Acnt Transfer"){
                                            if(newState.goldWeight === "" || !(/\d*\.?\d*/.test(newState.goldWeight))){dispatch1({type:ACTIONS1.GOLD_WEIGHT, payload: true})}
                                            else if(newState.cash === "" || !(/\d*\.?\d*/.test(newState.cash))){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                            else if(newState.acntTransfer === "" || !(/\d*\.?\d*/.test(newState.acntTransfer))){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                            else{
                                                if(showMain){
                                                    axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                } else {
                                                    axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: newState.cash,
                                                            goldIn: newState.goldWeight,
                                                            goldOut: "",
                                                            silverIn: "",
                                                            silverOut: "",
                                                            accountIn: "",
                                                            accountOut: newState.acntTransfer,
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                }
                                            }
                                        } else if(newState.paymentType === "Silver" && newState.sentType === "Cash"){
                                            if(newState.silverWeight === "" || !(/\d*\.?\d*/.test(newState.silverWeight))){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                                            else if(newState.cash === "" || !(/\d*\.?\d*/.test(newState.cash))){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                            else{
                                                if(showMain){
                                                    axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                } else {
                                                    axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: newState.cash,
                                                            goldIn: "",
                                                            goldOut: "",
                                                            silverIn: newState.silverWeight,
                                                            silverOut: "",
                                                            accountIn: "",
                                                            accountOut: "",
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                }
                                            }
                                        } else if(newState.paymentType === "Silver" && newState.sentType === "Acnt Transfer"){
                                            if(newState.silverWeight === "" || !(/\d*\.?\d*/.test(newState.silverWeight))){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                                            else if(newState.acntTransfer === "" || !(/\d*\.?\d*/.test(newState.acntTransfer))){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                            else{
                                                if(showMain){
                                                    axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                } else {
                                                    axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: "",
                                                            goldIn: "",
                                                            goldOut: "",
                                                            silverIn: newState.silverWeight,
                                                            silverOut: "",
                                                            accountIn: "",
                                                            accountOut: newState.acntTransfer,
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                }
                                            }
                                        } else if(newState.paymentType === "Silver" && newState.sentType === "Cash and Acnt Transfer"){
                                            if(newState.silverWeight === "" || !(/\d*\.?\d*/.test(newState.silverWeight))){dispatch1({type:ACTIONS1.SILVER_WEIGHT, payload: true})}
                                            else if(newState.cash === "" || !(/\d*\.?\d*/.test(newState.cash))){dispatch1({type:ACTIONS1.CASH, payload: true})}
                                            else if(newState.acntTransfer === "" || !(/\d*\.?\d*/.test(newState.acntTransfer))){dispatch1({type:ACTIONS1.ACNT_TRANSFER, payload: true})}
                                            else{
                                                if(showMain){
                                                    axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                } else {
                                                    axios.put(`http://localhost:8080/RRJ/DayInfo/infoupdate/${newState.paymentId}`, {
                                                            cashIn: "",
                                                            cashOut: newState.cash,
                                                            goldIn: "",
                                                            goldOut: "",
                                                            silverIn: newState.silverWeight,
                                                            silverOut: "",
                                                            accountIn: "",
                                                            accountOut: newState.acntTransfer,
                                                            id: newState.paymentId,
                                                            date: newState.paymentDate
                                                        }).then(() => {
                                                            axios.put(`http://localhost:8080/RRJ/PaymentInfo/updatetrans/${newState.paymentId}`, newState)
                                                            .then(() => {
                                                                dispatch({type:ACTIONS.PAYMENT_INFO_STATUS, payload: "Details modified Successfully!"})
                                                            }).catch(err => console.log(err))
                                                        }).catch(err => console.log(err))
                                                }
                                            }
                                        }
                                    }
                                }}}>Modify Details</Button>
                        )
                    }
                </div>
            </Form>
        </Container>
        </>
    )
}

export default PaymentDetails