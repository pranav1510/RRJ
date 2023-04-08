import React, { useReducer, useState } from "react";
import { Container, Form, Button, Modal, Card } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import ItemUpdate from "./ItemUpdate";

const OrderTaking = ({order, navigate, names}) => {
    
    const myName = useSelector(state => state.LoginPage.employeeName)

    const goldprice = useSelector(state => state.DailyPrice.goldPrice)
    const silverprice = useSelector(state => state.DailyPrice.silverPrice)

    const initialState = {
        orderId: (order === undefined)? "" : order.orderId,
        expectedDeliveryDate: (order === undefined)? "" : order.expectedDeliveryDate,
        customerMobile:  (order === undefined)? "" : order.customerMobile,
        customerRemarks:  (order === undefined)? "" : order.customerRemarks,
        orderReceiverRemarks:  (order === undefined)? "" : order.orderReceiverRemarks,
        goldCost:  (order === undefined)? goldprice : order.goldCost,
        silverCost:  (order === undefined)? silverprice : order.silverCost,
        orderStatus:  (order === undefined)? "" : order.orderStatus,
        gst: (order === undefined)? "" : order.gst,
        orderReceivedBy:  (order === undefined)? "" : order.orderReceivedBy,
        orderEnteredBy:  (order === undefined)? myName : order.orderEnteredBy,
        customerFullName:  (order === undefined)? "" : order.customerFullName,
        customerFullNameOne: "",
        customerInfoStatus: "",
        orderTakingStatus: "",
        itemInfoStatus: "",
        alternateMobileOne: "",
        alternateMobileTwo: "",
        customerId: (order === undefined)? 0 : order.customerId,
        address: "",
        remarks: "",
        itemId: "",
        itemType: "",
        itemName: "",
        estimatedWeight: "",
        designDetails: "",
        itemDeliveryDate: "",
        customerComments: "",
        orderReceiverComments: "",
        itemStatus: "",
        itemEnteredBy: myName,
        makingCharges: "",
        itemGrossWeight: "",
        itemNetWeight: "",
        wastage: "",
        stonesType: "",
        czWeight: "",
        czCost: "",
        emeraldWeight: "",
        emeraldCost: "",
        rubyWeight: "",
        rubyCost: "",
        pearlsWeight: "",
        pearlsCost: "",
        overallStoneWeight: "",
        overallStoneCost: "",
        otherWeight: "",
        totalWeight: "",
        show1: false,
        show2: false,
        show3: false,
        show4: true,
        show5: false,
        show6: true,
        generateShow: true,
        editVal: {},
        wastageParam: "%"
    }

    const ACTIONS = {
        EDIT_VAL: "EDIT_VAL",
        SHOW01: "SHOW1",
        SHOW02: "SHOW2",
        SHOW3: "SHOW3",
        SHOW4: "SHOW4",
        SHOW5: "SHOW5",
        SHOW6: "SHOW6",
        GENERATESHOW: "GENERATESHOW",
        OTHER_WEIGHT: "OTHER_WEIGHT",
        TOTAL_WEIGHT: "TOTAL_WEIGHT",
        ORDER_ID: "ORDER_ID",
        CUSTOMER_FULL_NAME: "CUSTOMER_FULL_NAME",
        EXPECTED_DELIVERY_DATE: "EXPECTED_DELIVERY_DATE",
        CUSTOMER_MOBILE: "CUSTOMER_MOBILE",
        CUSTOMER_REMARKS: "CUSTOMER_REMARKS",
        ORDER_REVCEIVER_REMARKS: "ORDER_RECEIVER_REMARKS",
        GOLD_COST: "GOLD_COST",
        SILVER_COST: "SILVER_COST",
        ORDER_STATUS: "ORDER_STATUS",
        GST:"GST",
        ORDER_RECEIVED_BY: "ORDER_RECEIVED_BY",
        ORDER_ENTERED_BY: "ORDER_ENTERED_BY",
        SUBMISSION: "SUBMISSION",
        CUSTOMER_INFO_STATUS: "CUSTOMER_INFO_STATUS",
        ORDERTAKING_STATUS: "ORDERTAKING_STATUS",
        ITEM_INFO_STATUS: "ITEM_INFO_STATUS",
        ALTERNATE_MOBILE_ONE: "ALTERNATE_MOBILEONE",
        ALTERNATE_MOBILE_TWO: "ALTERNATE_MOBILETWO",
        CUSTOMER_ID: "CUSTOMER_ID",
        ADDRESS: "ADDRESS",
        REMARKS: "REMARKS",
        ITEM_ID: "ITEM_ID",
        ITEM_TYPE: "ITEM_TYPE",
        ITEM_NAME: "ITEM_NAME",
        ESTIMATED_WEIGHT: "ESTIMATED_WEIGHT",
        DESIGN_DETAILS: "DESIGN_DETAILS",
        ITEM_DELIVERY_DATE: "ITEM_DELIVERY_DATE",
        CUSTOMER_COMMENTS: "CUSTOMER_COMMENTS",
        ORDER_RECEIVER_COMMENTS: "ORDER_RECEIVER_COMMENTS",
        ITEM_STATUS: "ITEM_STATUS",
        ITEM_ENTERED_BY: "ITEM_ENTERED_BY",
        MAKING_CHARGES: "MAKING_CHARGES",
        ITEM_GROSS_WEIGHT: "ITEM_GROSS_WEIGHT",
        ITEM_NET_WEIGHT: "ITEM_NET_WEIGHT",
        WASTAGE: "WASTAGE",
        PEARLS_WEIGHT: "PEARLS_WEIGHT",
        PEARLS_COST: "PEARLS_COST",
        STONES_TYPE: "STONES_TYPE",
        CZ_WEIGHT: "CZ_WEIGHT",
        CZ_COST: "CZ_COST",
        EMERALD_WEIGHT: "EMERALD_WEIGHT",
        EMERALD_COST: "EMERALD_COST",
        RUBY_WEIGHT: "RUBY_WEIGHT",
        RUBY_COST: "RUBY_COST",
        OVERALL_STONE_WEIGHT: "STONE_WEIGHT",
        OVERALL_STONE_COST: "STONE_COST",
        ITEM_PRICE: "ITEM_PRICE",
        INITIAL: "INITIAL",
        CUSTOMER_INFO_INITIAL_STATE: "CUSTOMER_INFO_INITIAL_STATE",
        CUSTOMER_FULL_NAME_ONE: "CUSTOMER_FULL_NAME_ONE",
        WASTAGE_PARAM: "WASTAGE_PARAM"
    }
    
    const reducer = (state, {type, payload}) => {
        switch(type){
            case ACTIONS.OTHER_WEIGHT:
                return {...state, otherWeight: payload}
            case ACTIONS.TOTAL_WEIGHT:
                return {...state, totalWeight: payload}
            case ACTIONS.CUSTOMER_FULL_NAME_ONE:
                return {...state, customerFullNameOne: payload}
            case ACTIONS.EDIT_VAL:
                return {...state, editVal: payload}
            case ACTIONS.ITEM_PRICE:
                return {...state, itemPrice: payload}
            case ACTIONS.OVERALL_STONE_COST:
                return {...state, overallStoneCost: payload}
            case ACTIONS.OVERALL_STONE_WEIGHT:
                return {...state, overallStoneWeight: payload}
            case ACTIONS.STONES_TYPE:
                return {...state, stonesType: payload}
            case ACTIONS.CZ_WEIGHT:
                return {...state, czWeight: payload}
            case ACTIONS.CZ_COST:
                return {...state, czCost: payload}
            case ACTIONS.EMERALD_WEIGHT:
                return {...state, emeraldWeight: payload}
            case ACTIONS.EMERALD_COST:
                return {...state, emeraldCost: payload}
            case ACTIONS.RUBY_WEIGHT:
                return {...state, rubyWeight: payload}
            case ACTIONS.RUBY_COST:
                return {...state, rubyCost: payload}
            case ACTIONS.PEARLS_COST:
                return {...state, pearlsCost: payload}
            case ACTIONS.PEARLS_WEIGHT:
                return {...state, pearlsWeight: payload}
            case ACTIONS.WASTAGE:
                return {...state, wastage: payload}
            case ACTIONS.ITEM_NET_WEIGHT:
                return {...state, itemNetWeight: payload}
            case ACTIONS.ITEM_GROSS_WEIGHT:
                return {...state, itemGrossWeight: payload}
            case ACTIONS.MAKING_CHARGES:
                return {...state, makingCharges: payload}
            case ACTIONS.ITEM_STATUS:
                return {...state, itemStatus: payload}
            case ACTIONS.ORDER_RECEIVER_COMMENTS:
                return {...state, orderReceiverComments: payload.target.value.toLowerCase()}
            case ACTIONS.CUSTOMER_COMMENTS:
                return {...state, customerComments: payload.target.value.toLowerCase()}
            case ACTIONS.ITEM_DELIVERY_DATE:
                return {...state, itemDeliveryDate: String(payload.target.value)}
            case ACTIONS.ITEM_NAME:
                return {...state, itemName: payload.target.value.toLowerCase()}
            case ACTIONS.ESTIMATED_WEIGHT:
                return {...state, estimatedWeight: payload.target.value}
            case ACTIONS.DESIGN_DETAILS:
                return {...state, designDetails: payload.target.value}
            case ACTIONS.ITEM_TYPE:
                return {...state, itemType: payload}
            case ACTIONS.ITEM_ID:
                return {...state, itemId: payload}
            case ACTIONS.ORDER_ID:
                return {...state, orderId: payload}
            case ACTIONS.ALTERNATE_MOBILE_ONE:
                return {...state, alternateMobileOne: payload.target.value}
            case ACTIONS.ALTERNATE_MOBILE_TWO:
                return {...state, alternateMobileTwo: payload.target.value}
            case ACTIONS.CUSTOMER_ID:
                return {...state, customerId: payload}
            case ACTIONS.ADDRESS:
                return {...state, address: payload.target.value.toLowerCase()}
            case ACTIONS.REMARKS:
                return {...state, remarks: payload.target.value.toLowerCase()}
            case ACTIONS.CUSTOMER_INFO_STATUS:
                return {...state, customerInfoStatus: payload}
            case ACTIONS.ORDERTAKING_STATUS:
                return {...state, orderTakingStatus: payload}
            case ACTIONS.ITEM_INFO_STATUS:
                return {...state, itemInfoStatus: payload}
            case ACTIONS.CUSTOMER_FULL_NAME:
                return {...state, customerFullName: payload.toLowerCase()}
            case ACTIONS.EXPECTED_DELIVERY_DATE:
                return {...state, expectedDeliveryDate: payload}
            case ACTIONS.CUSTOMER_MOBILE:
                return {...state, customerMobile: payload}
            case ACTIONS.CUSTOMER_REMARKS:
                return {...state, customerRemarks: payload.toLowerCase()}
            case ACTIONS.ORDER_REVCEIVER_REMARKS:
                return {...state, orderReceiverRemarks: payload.toLowerCase()}
            case ACTIONS.GOLD_COST:
                return {...state, goldCost: payload}
            case ACTIONS.SILVER_COST:
                return {...state, silverCost: payload}
            case ACTIONS.ORDER_STATUS:
                return {...state, orderStatus: payload}
            case ACTIONS.GST:
                return {...state, gst: payload}
            case ACTIONS.ORDER_RECEIVED_BY:
                return {...state, orderReceivedBy: payload}
            case ACTIONS.ORDER_ENTERED_BY:
                return {...state, orderEnteredBy: payload}
            case ACTIONS.SHOW01:
                return {...state, show1: payload}
            case ACTIONS.SHOW02:
                return {...state, show2: payload}
            case ACTIONS.SHOW3:
                return {...state, show3: payload}
            case ACTIONS.GENERATESHOW:
                return {...state, generateShow: payload}
            case ACTIONS.PREVORDERIDPATTERN:
                return {...state, prevOrderIdPattern: payload}
            case ACTIONS.PREVITEMIDPATTERN:
                return {...state, prevItemOrderIdPattern: payload}
            case ACTIONS.SHOW4:
                return {...state, show4: payload}
            case ACTIONS.SHOW5:
                return {...state, show5: payload}
            case ACTIONS.SHOW6:
                return {...state, show6: payload}
            case ACTIONS.WASTAGE_PARAM:
                return {...state, wastageParam: payload}
            default:
                return state
        }
    }
    const handleClose1 = () => dispatch({type:ACTIONS.SHOW01, payload: false})
    const handleClose2 = () => dispatch({type:ACTIONS.SHOW02, payload: false})
    const handleClose5 = () => dispatch({type:ACTIONS.SHOW5, payload: false})
    const handleClose3 = () => {
        dispatch({type:ACTIONS.SHOW3, payload: false})
        dispatch({type:ACTIONS.ITEM_INFO_STATUS, payload: ""})
    }
    const [formfields, setFormfields] = useState([])
    const [newState, dispatch] = useReducer(reducer, initialState)

    const GenerateId = () => {
        if(myNewState1.orderId){myDispatch1({type:MY_ACTIONS1.ORDER_ID, payload: false})}
        axios.get("http://localhost:8080/RRJ/OrderTaking/orderid")
            .then(res => {
                let newIdPattern = new Date().getFullYear().toString() + (new Date().getMonth() + 1).toString().padStart(2, "0") + new Date().getDate().toString().padStart(2, "0")
                let prevIdPattern = res.data[0]
                if(prevIdPattern === undefined){
                    let value = newIdPattern + "01"
                    dispatch({type:ACTIONS.ORDER_ID, payload: value})
                } else {
                    if(prevIdPattern.slice(0,8) !== newIdPattern){
                        let value = newIdPattern + "01"
                        dispatch({type:ACTIONS.ORDER_ID, payload: value})
                    } else {
                        let value = Number(prevIdPattern) + 1
                        dispatch({type:ACTIONS.ORDER_ID, payload: value.toString()})
                    }
                }
            })
            .catch(err => console.log(err))
        dispatch({type:ACTIONS.GENERATESHOW, payload: false})
        dispatch({type:ACTIONS.SHOW4, payload: false})
    }

    const SubmitHandler = () => {
        if(newState.orderId === ""){myDispatch1({type:MY_ACTIONS1.ORDER_ID, payload: true})}
        else if(newState.expectedDeliveryDate === ""){myDispatch1({type:MY_ACTIONS1.EXPECTED_DELIVERY_DATE, payload: true})}
        else if(newState.orderStatus === ""){myDispatch1({type:MY_ACTIONS1.ORDER_STATUS, payload: true})}
        else if(newState.gst === ""){myDispatch1({type:MY_ACTIONS1.GST, payload: true})}
        else if(newState.orderReceivedBy === ""){myDispatch1({type:MY_ACTIONS1.ORDER_RECEIVED_BY, payload: true})}
        else if(newState.customerMobile === ""){myDispatch1({type:MY_ACTIONS1.CUSTOMER_MOBILE, payload: true})}
        else if(newState.customerFullName === ""){myDispatch1({type:MY_ACTIONS1.CUSTOMER_FULL_NAME, payload: true})}
        else {
            axios.post("http://localhost:8080/RRJ/OrderTaking/add", newState)
                .then(() => {
                    dispatch({type: ACTIONS.ORDERTAKING_STATUS, payload: "Order saved Successfully!"})
                    setTimeout(() => {
                        window.location.reload(false)
                    },1200)
                })
                .catch(err => console.log(err));
        }
    }

    const Validate = () => {
        if(newState.customerMobile === "" || !(/^(\d){10}$/.test(newState.customerMobile))){
            myDispatch1({type:MY_ACTIONS1.CUSTOMER_MOBILE, payload: true})
        } else {
            if(myNewState1.customerFullName){myDispatch1({type:MY_ACTIONS1.CUSTOMER_FULL_NAME, payload: false})}
            axios.post("http://localhost:8080/RRJ/CustomerInfo/check", {customerMobile: newState.customerMobile})
            .then(res => {
                var val = res.data[0]
                if(val === undefined) {
                    dispatch({type:ACTIONS.SHOW01, payload: true})
                }
                else{
                    dispatch({type: ACTIONS.CUSTOMER_FULL_NAME, payload: val[0]})
                    dispatch({type: ACTIONS.CUSTOMER_ID, payload: val[1]})
                }
            })
            .catch(err => console.log(err));
        }
    }

    const myInitialState1 = {
        orderId: false,
        otherWeight: false,
        totalWeight: false,
        expectedDeliveryDate: false,
        orderStatus: false,
        gst: false,
        orderReceivedBy: false,
        customerMobile: false,
        customerFullName: false,
        customerFullNameOne: false,
        alternateMobileOne: false,
        alternateMobileTwo: false,
        address: false,
        itemType: false,
        itemName: false,
        estimatedWeight: false,
        deliveryDate: false,
        itemStatus: false,
        makingCharges: false,
        itemGrossWeight: false,
        itemNetWeight: false,
        wastage: false,
        stonesType: false,
        czWeight: false,
        czCost: false,
        emeraldWeight: false,
        emeraldCost: false,
        rubyWeight: false,
        rubyCost: false,
        pearlsWeight: false,
        pearlsCost: false,
        overallStoneWeight: false,
        overallStoneCost: false,
        itemPrice: false
    }

    const MY_ACTIONS1 = {
        ORDER_ID: "ORDER_ID",
        OTHER_WEIGHT: "OTHER_WEIGHT",
        TOTAL_WEIGHT: "TOTAL_WEIGHT",
        EXPECTED_DELIVERY_DATE: "EXPECTED_DELIVERY_DATE",
        ORDER_STATUS: "ORDER_STATUS",
        GST: "GST",
        ORDER_RECEIVED_BY: "ORDER_RECEIVED_BY",
        CUSTOMER_FULL_NAME: "CUSTOMER_FULL_NAME",
        CUSTOMER_FULL_NAME_ONE: "CUSTOMER_FULL_NAME_ONE",
        CUSTOMER_MOBILE: "CUSTOMER_MOBILE",
        ALTERNATE_MOBILE_ONE: "ALTERNATE_MOBILE_ONE",
        ALTERNATE_MOBILE_TWO: "ALTERNATE_MOBILE_TWO",
        ADDRESS: "ADDRESS",
        ITEM_TYPE: "ITEM_TYPE",
        ITEM_NAME: "ITEM_NAME",
        ESTIMATED_WEIGHT: "ESTIMATED_WEIGHT",
        DELIVERY_DATE: "DELIVERY_DATE",
        ITEM_STATUS: "ITEM_STATUS",
        MAKING_CHARGES: "MAKING_CHARGES",
        ITEM_GROSS_WEIGHT: "ITEM_GROSS_WEIGHT",
        ITEM_NET_WEIGHT: "ITEM_NET_WEIGHT",
        WASTAGE: "WASTAGE",
        STONES_TYPE: "STONE_TYPE",
        CZ_WEIGHT: "CZ_WEIGHT",
        CZ_COST: "CZ_COST",
        EMERALD_WEIGHT: "EMERALD_WEIGHT",
        EMERALD_COST: "EMERALD_COST",
        RUBY_WEIGHT: "RUBY_WEIGHT",
        RUBY_COST: "RUBY_COST",
        PEARLS_WEIGHT: "PEARLS_WEIGHT",
        PEARLS_COST: "PEARLS_COST",
        OVERALL_STONE_WEIGHT: "OVERALL_STONE_WEIGHT",
        OVERALL_STONE_COST: "OVERALL_STONE_COST",
        ITEM_PRICE: "ITEM_PRICE"
    }

    const myReducer1 = (state, {type, payload}) => {
        switch(type){
            case MY_ACTIONS1.ORDER_ID:
                return {...state, orderId: payload}
            case MY_ACTIONS1.OTHER_WEIGHT:
                return {...state, otherWeight: payload}
            case MY_ACTIONS1.TOTAL_WEIGHT:
                return {...state, totalWeight: payload}
            case MY_ACTIONS1.EXPECTED_DELIVERY_DATE:
                return {...state, expectedDeliveryDate: payload}
            case MY_ACTIONS1.ORDER_STATUS:
                return {...state, orderStatus: payload}
            case MY_ACTIONS1.GST:
                return {...state, gst: payload}
            case MY_ACTIONS1.ORDER_RECEIVED_BY:
                return {...state, orderReceivedBy: payload}
            case MY_ACTIONS1.CUSTOMER_MOBILE:
                return {...state, customerMobile: payload}
            case MY_ACTIONS1.CUSTOMER_FULL_NAME:
                return {...state, customerFullName: payload}
            case MY_ACTIONS1.CUSTOMER_FULL_NAME_ONE:
                return {...state, customerFullNameOne: payload}
            case MY_ACTIONS1.ALTERNATE_MOBILE_ONE:
                return {...state, alternateMobileOne: payload}
            case MY_ACTIONS1.ALTERNATE_MOBILE_TWO:
                return {...state, alternateMobileTwo: payload}
            case MY_ACTIONS1.ADDRESS:
                return {...state, address: payload}
            case MY_ACTIONS1.ITEM_TYPE:
                return {...state, itemType: payload}
            case MY_ACTIONS1.ITEM_NAME:
                return {...state, itemName: payload}
            case MY_ACTIONS1.ESTIMATED_WEIGHT:
                return {...state, estimatedWeight: payload}
            case MY_ACTIONS1.DELIVERY_DATE:
                return {...state, deliveryDate: payload}
            case MY_ACTIONS1.ITEM_STATUS:
                return {...state, itemStatus: payload}
            case MY_ACTIONS1.MAKING_CHARGES:
                return {...state, makingCharges: payload}
            case MY_ACTIONS1.ITEM_GROSS_WEIGHT:
                return {...state, itemGrossWeight: payload}
            case MY_ACTIONS1.ITEM_NET_WEIGHT:
                return {...state, itemNetWeight: payload}
            case MY_ACTIONS1.WASTAGE:
                return {...state, wastage: payload}
            case MY_ACTIONS1.OVERALL_STONE_COST:
                return {...state, overallStoneCost: payload}
            case MY_ACTIONS1.OVERALL_STONE_WEIGHT:
                return {...state, overallStoneWeight: payload}
            case MY_ACTIONS1.STONES_TYPE:
                return {...state, stonesType: payload}
            case MY_ACTIONS1.CZ_WEIGHT:
                return {...state, czWeight: payload}
            case MY_ACTIONS1.CZ_COST:
                return {...state, czCost: payload}
            case MY_ACTIONS1.EMERALD_WEIGHT:
                return {...state, emeraldWeight: payload}
            case MY_ACTIONS1.EMERALD_COST:
                return {...state, emeraldCost: payload}
            case MY_ACTIONS1.RUBY_WEIGHT:
                return {...state, rubyWeight: payload}
            case MY_ACTIONS1.RUBY_COST:
                return {...state, rubyCost: payload}
            case MY_ACTIONS1.PEARLS_COST:
                return {...state, pearlsCost: payload}
            case MY_ACTIONS1.PEARLS_WEIGHT:
                return {...state, pearlsWeight: payload}
            case MY_ACTIONS1.ITEM_PRICE:
                return {...state, itemPrice: payload}
            default:
                return state
        }
    }

    const [myNewState1, myDispatch1] = useReducer(myReducer1, myInitialState1)

    return (
        <>
        <Modal show={newState.show5} onHide={handleClose5} className="modal-xl">
        <Modal.Header closeButton>
          <Modal.Title>Update Item Information</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{height: "500px", overflow: "hidden", overflowY: "auto"}}>
            <ItemUpdate item={newState.editVal} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose5}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        <Modal show={newState.show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Customer does not exist</Modal.Title>
        </Modal.Header>
        <Modal.Body>Click here to add Customer</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            dispatch({type:ACTIONS.SHOW01, payload: false})
            dispatch({type:ACTIONS.SHOW02, payload: true})
          }}>
            Add New Customer
          </Button>
        </Modal.Footer>
      </Modal>
        <Modal show={newState.show2} onHide={handleClose2} className="modal-lg">
        <Modal.Header closeButton>
          <Modal.Title>Enter Customer Details</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{height: "550px", overflow: "hidden", overflowY: "auto"}}>
            <Form>
            <div className="row"><h5 className="text-success d-flex flex-row justify-content-center">{newState.customerInfoStatus}</h5></div>
            <Form.Group className="mt-3">
                <Form.Label className="fw-bold m-1">Customer Full Name</Form.Label>
                <Form.Control type="text" style={{border: myNewState1.customerFullNameOne ? "3px solid red" : ""}} onChange={e => {
                    dispatch({type: ACTIONS.CUSTOMER_FULL_NAME_ONE, payload: e.target.value})
                    if(myNewState1.customerFullNameOne){myDispatch1({type: MY_ACTIONS1.CUSTOMER_FULL_NAME_ONE, payload: false})}
                }}/>
                {
                    myNewState1.customerFullNameOne ? (<p className="text-danger m-1 small fw-bold">Enter valid name!</p>) : <></>
                }
            </Form.Group>
            <div className="row">
                <Form.Group className="mt-3">
                    <Form.Label className="fw-bold m-1">Customer Mobile</Form.Label>
                    <Form.Control type="text" defaultValue={newState.customerMobile} style={{border: myNewState1.customerMobile ? "3px solid red" : ""}} onChange={e => {
                        dispatch({type: ACTIONS.CUSTOMER_MOBILE, payload: e.target.value})
                        if(myNewState1.customerMobile){myDispatch1({type:MY_ACTIONS1.CUSTOMER_MOBILE, payload: false})}
                    }}/>
                    {
                        myNewState1.customerMobile ? (<p className="text-danger m-1 small fw-bold">Enter valid mobile!</p>) : <></>
                    }
                </Form.Group>
            </div>
            <div className="row">
                <Form.Group className="mt-3">
                    <Form.Label className="fw-bold m-1">Alternate Mobile 01</Form.Label>
                    <Form.Control type="text" style={{border: myNewState1.alternateMobileOne ? "3px solid red" : ""}} onChange={e => {
                        dispatch({type: ACTIONS.ALTERNATE_MOBILE_ONE, payload: e})
                        if(myNewState1.alternateMobileOne){myDispatch1({type:MY_ACTIONS1.ALTERNATE_MOBILE_ONE, payload: false})}
                    }} />
                    {
                        myNewState1.alternateMobileOne ? (<p className="text-danger m-1 small fw-bold">Enter valid mobile!</p>) : <></>
                    }
                </Form.Group>
            </div>
            <div className="row">
                <Form.Group className="mt-3">
                    <Form.Label className="fw-bold m-1">Alternate Mobile 02</Form.Label>
                    <Form.Control type="text" style={{border: myNewState1.alternateMobileTwo ? "3px solid red" : ""}} onChange={e => {
                        dispatch({type: ACTIONS.ALTERNATE_MOBILE_TWO, payload: e})
                        if(myNewState1.alternateMobileTwo){myDispatch1({type:MY_ACTIONS1.ALTERNATE_MOBILE_TWO, payload: false})}
                    }} />
                    {
                        myNewState1.alternateMobileTwo ? (<p className="text-danger m-1 small fw-bold">Enter valid mobile!</p>) : <></>
                    }
                </Form.Group>
            </div>   
            <div className="row">
                <Form.Group className="mt-3">
                    <Form.Label className="fw-bold m-1">Address</Form.Label>
                    <Form.Control type="text" style={{border: myNewState1.address ? "3px solid red" : ""}} onChange={e => {
                        dispatch({type: ACTIONS.ADDRESS, payload: e})
                        if(myNewState1.address){myDispatch1({type:MY_ACTIONS1.ADDRESS, payload: false})}
                    }} />
                    {
                        myNewState1.address ? (<p className="text-danger m-1 small fw-bold">Enter valid address!</p>) : <></>
                    }
                </Form.Group>
            </div>
            <div className="col">
                <Form.Group className="mt-3">
                    <Form.Label className="fw-bold m-1">Remarks</Form.Label>
                    <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.REMARKS, payload: e})} />
                </Form.Group>
            </div>        
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
              const customerData = {
                  customerFullName: newState.customerFullNameOne,
                  customerMobile: newState.customerMobile,
                  alternateMobileOne: newState.alternateMobileOne,
                  alternateMobileTwo: newState.alternateMobileTwo,
                  address: newState.address,
                  remarks: newState.remarks
                }
                if(customerData.customerFullName === "" || !(/^[a-zA-Z\s]*$/.test(customerData.customerFullName))){
                    myDispatch1({type:MY_ACTIONS1.CUSTOMER_FULL_NAME_ONE, payload: true})
                } else if(customerData.customerMobile === "" || !(/^(\d){10}$/.test(customerData.customerMobile))){
                    myDispatch1({type:MY_ACTIONS1.CUSTOMER_MOBILE, payload: true})
                } else if(customerData.alternateMobileOne !== "" && !(/^(\d){10}$/.test(customerData.alternateMobileOne))){
                    myDispatch1({type:MY_ACTIONS1.ALTERNATE_MOBILE_ONE, payload: true})
                } else if(customerData.alternateMobileOne !== "" && !(/^(\d){10}$/.test(customerData.alternateMobileTwo))){
                    myDispatch1({type:MY_ACTIONS1.ALTERNATE_MOBILE_TWO, payload: true})
                } else if(customerData.address === ""){
                    myDispatch1({type:MY_ACTIONS1.ADDRESS, payload: true})
                } else {
                    axios.post("http://localhost:8080/RRJ/CustomerInfo/add",customerData)
                    .then((response) => {
                        axios.post("http://localhost:8080/RRJ/CustomerInfo/getcustomerid", customerData)
                        .then(res => {
                            dispatch({type:ACTIONS.CUSTOMER_ID, payload: res.data})
                            dispatch({type:ACTIONS.CUSTOMER_FULL_NAME, payload: customerData.customerFullName})
                            dispatch({type:ACTIONS.CUSTOMER_INFO_STATUS, payload: response.data})
                        })
                    setTimeout(() => {
                        dispatch({type:ACTIONS.CUSTOMER_INFO_STATUS, payload: ""})
                        dispatch({type:ACTIONS.SHOW02, payload: false})
                    },1200)
                })
                .catch(err => console.log(err.message));
                }
          }}>
            Save Customer
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={newState.show3} onHide={handleClose3} className="modal-xl">
        <Modal.Header closeButton>
            <Modal.Title>Enter Item Information</Modal.Title>
        </Modal.Header>
        <Modal.Body  style={{height: "500px", overflow: "hidden", overflowY: "auto"}}>
            <div className="row">
            <div className="row"><h5 className="text-success d-flex flex-row justify-content-center">{newState.itemInfoStatus}</h5></div>
                <div className="col">
                    <fieldset disabled>
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Order Id</Form.Label>
                            <Form.Control type="text" defaultValue={newState.orderId}/>
                        </Form.Group>
                    </fieldset>
                </div>
                <div className="col">
                    <fieldset disabled>
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Item Id</Form.Label>
                            <Form.Control type="text" defaultValue={newState.itemId}/>
                        </Form.Group>
                    </fieldset>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Item Type</Form.Label>
                        <Form.Select style={{border: myNewState1.itemType ? "3px solid red" : ""}} onChange={e => {
                            dispatch({type:ACTIONS.ITEM_TYPE, payload: e.target.value})
                            if(myNewState1.itemType){myDispatch1({type:MY_ACTIONS1.ITEM_TYPE, payload: false})}
                        }}>
                            <option value=""></option>
                            <option value="Manufactured Gold Item">Manufactured Gold Item</option>
                            <option value="Readymade Gold Item">Readymade Gold Item</option>
                            <option value="Manufactured Silver Item">Manufactured Silver Item</option>
                            <option value="Readymade Silver Item">Readymade Silver Item</option>
                        </Form.Select>
                        {
                            myNewState1.itemType ? (<p className="text-danger m-1 small fw-bold">Enter valid type!</p>) : <></>
                        }
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Delivery Date</Form.Label>
                        <Form.Control type="date" style={{border: myNewState1.deliveryDate ? "3px solid red" : ""}} onChange={e => {
                            dispatch({type:ACTIONS.ITEM_DELIVERY_DATE, payload: e})
                            if(myNewState1.deliveryDate){myDispatch1({type:MY_ACTIONS1.DELIVERY_DATE, payload: false})}
                        }}/>
                        {
                            myNewState1.deliveryDate ? (<p className="text-danger m-1 small fw-bold">Enter valid date!</p>) : <></>
                        }
                    </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Item Name</Form.Label>
                        <Form.Control type="text" style={{border: myNewState1.itemName ? "3px solid red" : ""}} onChange={e => {
                            dispatch({type:ACTIONS.ITEM_NAME, payload: e})
                            if(myNewState1.itemName){myDispatch1({type:MY_ACTIONS1.ITEM_NAME, payload: false})}
                        }} />
                        {
                            myNewState1.itemName ? (<p className="text-danger m-1 small fw-bold">Enter valid name!</p>) : <></>
                        }
                    </Form.Group>
                </div>
                <div className="col-2">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Estimated Weight</Form.Label>
                        <Form.Control type="text" style={{border: myNewState1.estimatedWeight ? "3px solid red" : ""}} onChange={e => {
                            dispatch({type:ACTIONS.ESTIMATED_WEIGHT, payload: e})
                            if(myNewState1.estimatedWeight){myDispatch1({type:MY_ACTIONS1.ESTIMATED_WEIGHT, payload: false})}
                        }} />
                        {
                            myNewState1.estimatedWeight ? (<p className="text-danger m-1 small fw-bold">Enter valid weight!</p>) : <></>
                        }
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Design Details</Form.Label>
                        <Form.Control type="text" onChange={e => {dispatch({type:ACTIONS.DESIGN_DETAILS, payload: e})}} />
                    </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Customer Comments</Form.Label>
                        <Form.Control type="text" onChange={e => dispatch({type:ACTIONS.CUSTOMER_COMMENTS, payload: e})} />
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Order Receiver Comments</Form.Label>
                        <Form.Control type="text" onChange={e => dispatch({type:ACTIONS.ORDER_RECEIVER_COMMENTS, payload: e})} />
                    </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Item Status</Form.Label>
                        <Form.Select style={{border: myNewState1.itemStatus ? "3px solid red" : ""}} onChange={e => {
                            dispatch({type:ACTIONS.ITEM_STATUS, payload: e.target.value})
                            if(myNewState1.itemStatus){myDispatch1({type:MY_ACTIONS1.ITEM_STATUS, payload: false})}
                        }}>
                            <option value=""></option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Cancelled">Cancelled</option>
                        </Form.Select>
                        {
                            myNewState1.itemStatus ? (<p className="text-danger m-1 small fw-bold">Enter valid status!</p>) : <></>
                        }
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Item Entered By</Form.Label>
                        <Form.Control type="text" defaultValue={myName} disabled />
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Stones Type</Form.Label>
                        <Form.Select style={{border: myNewState1.stonesType ? "3px solid red" : ""}} onChange={e => {
                            dispatch({type:ACTIONS.STONES_TYPE, payload: e.target.value})
                            if(myNewState1.stonesType){myDispatch1({type:MY_ACTIONS1.STONES_TYPE, payload: false})}
                            if(e.target.value === ""){
                                dispatch({type:ACTIONS.CZ_WEIGHT, payload: ""})
                                dispatch({type:ACTIONS.CZ_COST, payload: ""})
                                dispatch({type:ACTIONS.EMERALD_WEIGHT, payload: ""})
                                dispatch({type:ACTIONS.EMERALD_COST, payload: ""})
                                dispatch({type:ACTIONS.RUBY_COST, payload: ""})
                                dispatch({type:ACTIONS.RUBY_WEIGHT, payload: ""})
                                dispatch({type:ACTIONS.OVERALL_STONE_COST, payload: ""})
                                dispatch({type:ACTIONS.OVERALL_STONE_WEIGHT, payload: ""})
                            }
                        }}>
                            <option value=""></option>
                            <option value="CZ">CZ</option>
                            <option value="Emerald">Emerald</option>
                            <option value="Ruby">Ruby</option>
                            <option value="CZ & Emerald">CZ & Emerald</option>
                            <option value="CZ & Ruby">CZ & Ruby</option>
                            <option value="Emerald & Ruby">Emerald & Ruby</option>
                            <option value="CZ & Emerald & Ruby">CZ & Emerald & Ruby</option>
                        </Form.Select>
                        {
                            myNewState1.stonesType ? (<p className="text-danger m-1 small fw-bold">Enter valid type!</p>) : <></>
                        }
                    </Form.Group>
                </div>
            </div>
            {
                (newState.stonesType !== "") ? (
                    <Card className="mt-3 w-75" style={{backgroundColor: "peachpuff"}}>
                        <Container>
                            <div className="row">
                                <div className="col-3">
                                    {
                                        (newState.stonesType.includes("CZ")) ? <>
                                            <Form.Group className="mt-2 mb-1">
                                                <Form.Label className="fw-bold m-1">CZ Weight</Form.Label>
                                                <Form.Control type="text" style={{border: myNewState1.czWeight ? "3px solid red" : ""}} onChange={e => {
                                                    dispatch({type:ACTIONS.CZ_WEIGHT, payload: e.target.value})
                                                    if(myNewState1.czWeight){myDispatch1({type:MY_ACTIONS1.CZ_WEIGHT, payload: false})}
                                                }} />
                                                {
                                                    myNewState1.czWeight ? (<p className="text-danger m-1 small fw-bold">Enter valid weight!</p>) : <></>
                                                }
                                            </Form.Group>
                                            <Form.Group className="mt-1 mb-2">
                                                <Form.Label className="fw-bold m-1">CZ Cost</Form.Label>
                                                <Form.Control type="text" style={{border: myNewState1.czCost ? "3px solid red" : ""}} onChange={e => {
                                                    dispatch({type:ACTIONS.CZ_COST, payload: e.target.value})
                                                    if(myNewState1.czCost){myDispatch1({type:MY_ACTIONS1.CZ_COST, payload: false})}
                                                }} />
                                                {
                                                    myNewState1.czCost ? (<p className="text-danger m-1 small fw-bold">Enter valid cost!</p>) : <></>
                                                }
                                            </Form.Group>
                                        </> : <></>
                                    }
                                </div>
                                <div className="col-3">
                                    {
                                        newState.stonesType.includes("Emerald") ? <>
                                            <Form.Group className="mt-2 mb-1">
                                                <Form.Label className="fw-bold m-1">Emerald Weight</Form.Label>
                                                <Form.Control type="text" style={{border: myNewState1.emeraldWeight ? "3px solid red" : ""}} onChange={e => {
                                                    dispatch({type:ACTIONS.EMERALD_WEIGHT, payload: e.target.value})
                                                    if(myNewState1.emeraldWeight){myDispatch1({type:MY_ACTIONS1.EMERALD_WEIGHT, payload: false})}
                                                }} />
                                                {
                                                    myNewState1.emeraldWeight ? (<p className="text-danger m-1 small fw-bold">Enter valid weight!</p>) : <></>
                                                }
                                            </Form.Group>
                                            <Form.Group className="mt-1 mb-2">
                                                <Form.Label className="fw-bold m-1">Emerald Cost</Form.Label>
                                                <Form.Control type="text" style={{border: myNewState1.emeraldCost ? "3px solid red" : ""}} onChange={e => {
                                                    dispatch({type:ACTIONS.EMERALD_COST, payload: e.target.value})
                                                    if(myNewState1.emeraldCost){myDispatch1({type:MY_ACTIONS1.EMERALD_COST, payload: false})}
                                                }} />
                                                {
                                                    myNewState1.emeraldCost ? (<p className="text-danger m-1 small fw-bold">Enter valid cost!</p>) : <></>
                                                }
                                            </Form.Group>
                                        </> : <></>
                                    }
                                </div>
                                <div className="col-3">
                                    {
                                        newState.stonesType.includes("Ruby") ? <>
                                            <Form.Group className="mt-2 mb-1">
                                                <Form.Label className="fw-bold m-1">Ruby Weight</Form.Label>
                                                <Form.Control type="text" style={{border: myNewState1.rubyWeight ? "3px solid red" : ""}} onChange={e => {
                                                    dispatch({type:ACTIONS.RUBY_WEIGHT, payload: e.target.value})
                                                    if(myNewState1.rubyWeight){myDispatch1({type:MY_ACTIONS1.RUBY_WEIGHT, payload: false})}
                                                }} />
                                                {
                                                    myNewState1.rubyWeight ? (<p className="text-danger m-1 small fw-bold">Enter valid weight!</p>) : <></>
                                                }
                                            </Form.Group>
                                            <Form.Group className="mt-1 mb-2">
                                                <Form.Label className="fw-bold m-1">Ruby Cost</Form.Label>
                                                <Form.Control type="text" style={{border: myNewState1.rubyCost ? "3px solid red" : ""}} onChange={e => {
                                                    dispatch({type:ACTIONS.RUBY_COST, payload: e.target.value})
                                                    if(myNewState1.rubyCost){myDispatch1({type:MY_ACTIONS1.RUBY_COST, payload: false})}
                                                }} />
                                                {
                                                    myNewState1.rubyCost ? (<p className="text-danger m-1 small fw-bold">Enter valid cost!</p>) : <></>
                                                }
                                            </Form.Group>
                                        </> : <></>
                                    }
                                </div>
                                <div className="col-3">
                                    <Form.Group className="mt-2 mb-1">
                                        <Form.Label className="fw-bold m-1">Overall Stone Weight</Form.Label>
                                        <Form.Control type="text" defaultValue={newState.overallStoneWeight} style={{border: myNewState1.overallStoneWeight ? "3px solid red" : ""}} onChange={e => {
                                            dispatch({type:ACTIONS.OVERALL_STONE_WEIGHT, payload: e.target.value})
                                            if(myNewState1.overallStoneWeight){myDispatch1({type:MY_ACTIONS1.OVERALL_STONE_WEIGHT, payload: false})}
                                        }} />
                                        {
                                            myNewState1.overallStoneWeight ? (<p className="text-danger m-1 small fw-bold">Enter valid weight!</p>) : <></>
                                        }
                                    </Form.Group>
                                    <Form.Group className="mt-1 mb-2">
                                        <Form.Label className="fw-bold m-1">Overall Stone Cost</Form.Label>
                                        <Form.Control type="text" defaultValue={newState.overallStoneCost} style={{border: myNewState1.overallStoneCost ? "3px solid red" : ""}} onChange={e => {
                                            dispatch({type:ACTIONS.OVERALL_STONE_COST, payload: e.target.value})
                                            if(myNewState1.overallStoneCost){myDispatch1({type:MY_ACTIONS1.OVERALL_STONE_COST, payload: false})}
                                        }} />
                                        {
                                            myNewState1.overallStoneCost ? (<p className="text-danger m-1 small fw-bold">Enter valid cost!</p>) : <></>
                                        }
                                    </Form.Group>
                                </div> 
                            </div>
                            <div className="row">
                                <div className="col d-flex justify-content-end">
                                    <Button className="m-2" variant="primary" onClick={() => {
                                        let weight = 0
                                        let cost = 0
                                        if(newState.czWeight !== ""){weight += Number(newState.czWeight)}
                                        if(newState.czCost !== ""){cost += Number(newState.czCost)}
                                        if(newState.emeraldWeight !== ""){weight += Number(newState.emeraldWeight)}
                                        if(newState.emeraldCost !== ""){cost += Number(newState.emeraldCost)}
                                        if(newState.rubyWeight !== ""){weight += Number(newState.rubyWeight)}
                                        if(newState.rubyCost !== ""){cost += Number(newState.rubyCost)}
                                        dispatch({type:ACTIONS.OVERALL_STONE_WEIGHT, payload: String(weight)})
                                        dispatch({type:ACTIONS.OVERALL_STONE_COST, payload: String(cost)})
                                    }}>Calculate Overall</Button>
                                </div>
                            </div>
                        </Container>
                    </Card>
                ) : <></>
            }
            <Card className="mt-3 w-75" style={{backgroundColor: "honeydew"}}>
                <Container>
                    <div className="row">
                        <div className="col">
                            <Form.Group className="mt-1 mb-2">
                                <Form.Label className="fw-bold m-1">Item Gross Weight</Form.Label>
                                <Form.Control type="text" style={{border: myNewState1.itemGrossWeight ? "3px solid red" : ""}} onChange={e => {
                                    dispatch({type:ACTIONS.ITEM_GROSS_WEIGHT, payload: e.target.value})
                                    if(myNewState1.itemGrossWeight){myDispatch1({type:MY_ACTIONS1.ITEM_GROSS_WEIGHT, payload: false})}
                                }} />
                                {
                                    myNewState1.itemGrossWeight ? (<p className="text-danger m-1 small fw-bold">Enter valid weight!</p>) : <></>
                                }
                            </Form.Group>
                            <Form.Group className="mt-1 mb-2">
                                <Form.Label className="fw-bold m-1">Wastage</Form.Label>
                                <div className="row">
                                    <div className="col">
                                        <Form.Control type="text" style={{border: myNewState1.wastage ? "3px solid red" : ""}} onChange={e => {
                                            dispatch({type:ACTIONS.WASTAGE, payload: e.target.value})
                                            if(myNewState1.wastage){myDispatch1({type:MY_ACTIONS1.WASTAGE, payload: false})}
                                        }} />
                                    </div>
                                    <div className="col">
                                        <Form.Select className="ms-0" onChange={e => {dispatch({type:ACTIONS.WASTAGE_PARAM, payload: e.target.value})}}>
                                            <option value = "%"> % </option>
                                            <option value= "grams"> grams </option>
                                        </Form.Select>
                                    </div>
                                </div>
                                {
                                    myNewState1.wastage ? (<p className="text-danger m-1 small fw-bold">Enter valid value!</p>) : <></>
                                }
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group className="mt-1 mb-2">
                                <Form.Label className="fw-bold m-1">Pearls Weight</Form.Label>
                                <Form.Control type="text" style={{border: myNewState1.pearlsWeight ? "3px solid red" : ""}} onChange={e => {
                                    dispatch({type:ACTIONS.PEARLS_WEIGHT, payload: e.target.value})
                                    if(myNewState1.pearlsWeight){myDispatch1({type:MY_ACTIONS1.PEARLS_WEIGHT, payload: false})}
                                }} />
                                {
                                    myNewState1.pearlsWeight ? (<p className="text-danger m-1 small fw-bold">Enter valid weight!</p>) : <></>
                                }
                            </Form.Group>
                            <Form.Group className="mt-1 mb-2">
                                <Form.Label className="fw-bold m-1">Pearls Cost</Form.Label>
                                <Form.Control type="text" style={{border: myNewState1.pearlsCost ? "3px solid red" : ""}} onChange={e => {
                                    dispatch({type:ACTIONS.PEARLS_COST, payload: e.target.value})
                                    if(myNewState1.pearlsCost){myDispatch1({type:MY_ACTIONS1.PEARLS_COST, payload: false})}
                                }} />
                                {
                                    myNewState1.pearlsCost ? (<p className="text-danger m-1 small fw-bold">Enter valid cost!</p>) : <></>
                                }
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group className="mt-1 mb-2">
                                <Form.Label className="fw-bold m-1">Other Weight</Form.Label>
                                <Form.Control type="text" style={{border: myNewState1.otherWeight ? "3px solid red" : ""}} onChange={e => {
                                    dispatch({type:ACTIONS.OTHER_WEIGHT, payload: e.target.value})
                                    if(myNewState1.otherWeight){myDispatch1({type:MY_ACTIONS1.OTHER_WEIGHT, payload: false})}
                                }} />
                                {
                                    myNewState1.otherWeight ? (<p className="text-danger m-1 small fw-bold">Enter valid weight!</p>) : <></>
                                }
                            </Form.Group>
                            <Form.Group className="mt-1 mb-2">
                                <Form.Label className="fw-bold m-1">Making Charges</Form.Label>
                                <Form.Control type="text" style={{border: myNewState1.makingCharges ? "3px solid red" : ""}} onChange={e => {
                                    dispatch({type:ACTIONS.MAKING_CHARGES, payload: e.target.value})
                                    if(myNewState1.makingCharges){myDispatch1({type:MY_ACTIONS1.MAKING_CHARGES, payload: false})}
                                }} />
                                {
                                    myNewState1.makingCharges ? (<p className="text-danger m-1 small fw-bold">Enter valid value!</p>) : <></>
                                }
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m-2">
                            <Button variant="primary" onClick={() => {
                                if(newState.stonesType !== "" && (newState.overallStoneWeight === "" || newState.overallStoneCost === "")){
                                    myDispatch1({type:MY_ACTIONS1.OVERALL_STONE_COST, payload: true})
                                    myDispatch1({type:MY_ACTIONS1.OVERALL_STONE_WEIGHT, payload: true})
                                }else if(newState.itemGrossWeight === "" || !(/\d*\.?\d*/.test(newState.itemGrossWeight))){
                                    myDispatch1({type:MY_ACTIONS1.ITEM_GROSS_WEIGHT, payload: true})
                                } else {
                                    let net = Number(newState.itemGrossWeight)
                                    if(newState.overallStoneWeight !== ""){net -= Number(newState.overallStoneWeight)}
                                    if(newState.pearlsWeight !== ""){net -= Number(newState.pearlsWeight)}
                                    if(newState.otherWeight !== ""){net -= Number(newState.otherWeight)}
                                    dispatch({type:ACTIONS.ITEM_NET_WEIGHT, payload: net.toString()})
                                    let total = 0
                                    if(newState.wastage !== ""){
                                        if(newState.wastageParam === "%"){
                                            total = ((100 + Number(newState.wastage)) * net) / 100
                                        } else if(newState.wastageParam === "grams"){
                                            total = net + Number(newState.wastage)
                                        }
                                    }
                                    dispatch({type:ACTIONS.TOTAL_WEIGHT, payload: total.toString()})
                                    let price = 0
                                    if(newState.overallStoneCost !== ""){price += Number(newState.overallStoneCost)}
                                    if(newState.pearlsCost !== ""){price += Number(newState.pearlsCost)}
                                    if(newState.makingCharges !== ""){price += Number(newState.makingCharges)}
                                    if(newState.itemType.includes("Gold")){
                                        price += total * (Number(goldprice) / 10)
                                        dispatch({type:ACTIONS.ITEM_PRICE, payload: price.toString()})
                                    } else if(newState.itemType.includes("Silver")){
                                        price += total * (Number(silverprice) / 10)
                                        dispatch({type:ACTIONS.ITEM_PRICE, payload: price.toString()})
                                    }
                                }
                            }}>Click here to Calculate</Button>
                        </div>
                    </div>
                </Container>
            </Card>
            <div className="row">
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Item Net Weight</Form.Label>
                        <Form.Control type="text" defaultValue={newState.itemNetWeight} style={{border: myNewState1.itemNetWeight ? "3px solid red" : ""}} onChange={e => {
                            dispatch({type:ACTIONS.ITEM_NET_WEIGHT, payload: e.target.value})
                            if(myNewState1.itemNetWeight){myDispatch1({type:MY_ACTIONS1.ITEM_NET_WEIGHT, payload: false})}
                        }} />
                        {
                            myNewState1.itemNetWeight ? (<p className="text-danger m-1 small fw-bold">Enter valid weight!</p>) : <></>
                        }
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Total Weight</Form.Label>
                        <Form.Control type="text" defaultValue={newState.totalWeight} style={{border: myNewState1.totalWeight ? "3px solid red" : ""}} onChange={e => {
                            dispatch({type:ACTIONS.TOTAL_WEIGHT, payload: e.target.value})
                            if(myNewState1.totalWeight){myDispatch1({type:MY_ACTIONS1.TOTAL_WEIGHT, payload: false})}
                        }} />
                        {
                            myNewState1.totalWeight ? (<p className="text-danger m-1 small fw-bold">Enter valid weight!</p>) : <></>
                        }
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Item Price</Form.Label>
                        <Form.Control type="text" defaultValue={newState.itemPrice} style={{border: myNewState1.itemPrice ? "3px solid red" : ""}} onChange={e => {
                            dispatch({type:ACTIONS.ITEM_PRICE, payload: e.target.value})
                            if(myNewState1.itemPrice){myDispatch1({type:MY_ACTIONS1.ITEM_PRICE, payload: false})}
                        }} />
                        {
                            myNewState1.itemPrice ? (<p className="text-danger m-1 small fw-bold">Enter valid price!</p>) : <></>
                        }
                    </Form.Group>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            if(newState.stonesType.includes("CZ") && (newState.czCost === "" || !(/\d*\.?\d*/.test(newState.czCost)))){myDispatch1({type:MY_ACTIONS1.CZ_COST, payload: true})}
            else if(newState.stonesType.includes("CZ") && (newState.czWeight === "" || !(/\d*\.?\d*/.test(newState.czWeight)))){myDispatch1({type:MY_ACTIONS1.CZ_WEIGHT, payload: true})}
            else if(newState.stonesType.includes("Emerald") && (newState.emeraldCost === "" || !(/\d*\.?\d*/.test(newState.emeraldCost)))){myDispatch1({type:MY_ACTIONS1.EMERALD_COST, payload: true})}
            else if(newState.stonesType.includes("Emerald") && (newState.emeraldWeight === "" || !(/\d*\.?\d*/.test(newState.emeraldWeight)))){myDispatch1({type:MY_ACTIONS1.EMERALD_WEIGHT, payload: true})}
            else if(newState.stonesType.includes("Ruby") && (newState.rubyCost === "" || !(/\d*\.?\d*/.test(newState.rubyCost)))){myDispatch1({type:MY_ACTIONS1.RUBY_COST, payload: true})}
            else if(newState.stonesType.includes("Ruby") && (newState.rubyWeight === "" || !(/\d*\.?\d*/.test(newState.rubyWeight)))){myDispatch1({type:MY_ACTIONS1.RUBY_WEIGHT, payload: true})}
            else if(newState.itemType === ""){myDispatch1({type:MY_ACTIONS1.ITEM_TYPE, payload: true})}
            else if(newState.estimatedWeight !== "" && !(/\d*\.?\d*/.test(newState.estimatedWeight))){myDispatch1({type:MY_ACTIONS1.ESTIMATED_WEIGHT, payload: true})}
            else if(newState.itemName === "" || !(/^[a-zA-Z\s]*$/.test(newState.itemName))){myDispatch1({type:MY_ACTIONS1.ITEM_NAME, payload: true})}
            else if(newState.deliveryDate === ""){myDispatch1({type:MY_ACTIONS1.DELIVERY_DATE, payload: true})}
            else if(newState.itemStatus === ""){myDispatch1({type:MY_ACTIONS1.ITEM_STATUS, payload: true})}
            else if(newState.makingCharges !== "" && !(/\d*\.?\d*/.test(newState.makingCharges))){myDispatch1({type:MY_ACTIONS1.MAKING_CHARGES, payload: true})}
            else if(newState.itemGrossWeight !== "" && !(/\d*\.?\d*/.test(newState.itemGrossWeight))){myDispatch1({type:MY_ACTIONS1.ITEM_GROSS_WEIGHT, payload: true})}
            else if(newState.itemNetWeight !== "" && !(/\d*\.?\d*/.test(newState.itemNetWeight))){myDispatch1({type:MY_ACTIONS1.ITEM_NET_WEIGHT, payload: true})}
            else if(newState.otherWeight !== "" && !(/\d*\.?\d*/.test(newState.otherWeight))){myDispatch1({type:MY_ACTIONS1.OTHER_WEIGHT, payload: true})}
            else if(newState.totalWeight !== "" && !(/\d*\.?\d*/.test(newState.totalWeight))){myDispatch1({type:MY_ACTIONS1.TOTAL_WEIGHT, payload: true})}
            else if(newState.wastage !== "" && !(/\d*\.?\d*/.test(newState.wastage))){myDispatch1({type:MY_ACTIONS1.WASTAGE, payload: true})}
            else if(newState.pearlsWeight !== "" && !(/\d*\.?\d*/.test(newState.pearlsWeight))){myDispatch1({type:MY_ACTIONS1.PEARLS_WEIGHT, payload: true})}
            else if(newState.pearlsCost !== "" && !(/\d*\.?\d*/.test(newState.pearlsCost))){myDispatch1({type:MY_ACTIONS1.PEARLS_COST, payload: true})}
            else if(newState.overallStoneWeight !== "" && !(/\d*\.?\d*/.test(newState.overallStoneWeight))){myDispatch1({type:MY_ACTIONS1.OVERALL_STONE_WEIGHT, payload: true})}
            else if(newState.overallStoneCost !== "" && !(/\d*\.?\d*/.test(newState.overallStoneCost))){myDispatch1({type:MY_ACTIONS1.OVERALL_STONE_COST, payload: true})}
            else if(newState.itemPrice !== "" && !(/\d*\.?\d*/.test(newState.itemPrice))){myDispatch1({type:MY_ACTIONS1.ITEM_PRICE, payload: true})}
            else {
                axios.post("http://localhost:8080/RRJ/ItemInfo/add", newState)
                    .then(() => {
                        dispatch({type:ACTIONS.ITEM_INFO_STATUS, payload: "Item saved Successfully!"})
                        setFormfields([...formfields, [newState.itemName, newState.itemId]])
                    })
                    .catch(err => console.log(err))
                setTimeout(() => {
                    dispatch({type:ACTIONS.ITEM_INFO_STATUS, payload: ""})
                    dispatch({type:ACTIONS.SHOW3, payload: false})
                }, 1200)
            }
          }}>Add New Item</Button>
        </Modal.Footer>
      </Modal>
            <Container>
                {
                    (order === undefined) ? (
                    <>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb flex-nowrap">
                                <li className="breadcrumb-item fw-bold text-truncate"><p style={{"cursor":"pointer"}} onClick={() => {navigate('/homepage', { replace: true })}}>Home</p></li>
                                <li className="breadcrumb-item fw-bold text-truncate"><p style={{"cursor":"pointer"}} onClick={() => {navigate('/infoentry', { replace: true })}}>InfoEntry__</p></li>
                                <li className="breadcrumb-item active text-white fw-bold text-truncate" aria-current="page">OrderTakingEntry</li>
                            </ol>
                        </nav>
                    </>) : <></>
                }
                <Form>
                    <div className="row"><h5 className="text-success d-flex flex-row justify-content-center">{newState.orderTakingStatus}</h5></div>
                    <div className="row">
                        <div className="col">
                            <div className="d-flex flex-column">
                                <div>
                                    <Form.Group className="mt-3">
                                        <Form.Label className="fw-bold m-1">Order Id</Form.Label>
                                        <Form.Control type="text" style={{border: myNewState1.orderId ? "3px solid red" : ""}} defaultValue={newState.orderId} disabled/>
                                        {
                                            myNewState1.orderId ? (<p className="text-danger m-1 small fw-bold">Enter valid Id!</p>) : <></>
                                        }
                                    </Form.Group>
                                </div>
                                {
                                    (order === undefined) ? (
                                        <>
                                        <div className="mt-2">
                                            {
                                                newState.generateShow? <Button variant="secondary" onClick={GenerateId}>Get Order Id</Button> : <></>
                                            }
                                        </div>
                                        </>
                                    ) : <></>
                                }
                            </div>
                        </div>
                        <div className="col">
                            <Form.Group>
                                <Form.Label className="fw-bold mt-3">Gold Cost</Form.Label>
                                <div className="d-flex flex-row">
                                <Form.Control type="text" defaultValue={newState.goldCost} onChange={e => dispatch({type:ACTIONS.GOLD_COST, payload: e.target.value})} disabled/>
                                <span className="input-group-text fw-bold p-1">/10 gms</span>
                                </div>
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group>
                                <Form.Label className="fw-bold mt-3">Silver Cost</Form.Label>
                                <div className="d-flex flex-row">
                                <Form.Control type="text" defaultValue={newState.silverCost} onChange={e => dispatch({type:ACTIONS.SILVER_COST, payload: e.target.value})} disabled/>
                                <span className="input-group-text fw-bold p-1">/10 gms</span>
                                </div>
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">Expected Delivery Date</Form.Label>
                                <Form.Control type="date" style={{border: myNewState1.expectedDeliveryDate ? "3px solid red" : ""}} defaultValue={newState.expectedDeliveryDate} onChange={e => {
                                    dispatch({type: ACTIONS.EXPECTED_DELIVERY_DATE, payload: String(e.target.value)})
                                    if(myNewState1.expectedDeliveryDate){myDispatch1({type:MY_ACTIONS1.EXPECTED_DELIVERY_DATE, payload: false})}
                                    if(newState.status !== ""){dispatch({type: ACTIONS.STATUS, payload: ""})}
                                    }} />
                                    {
                                        myNewState1.expectedDeliveryDate ? (<p className="text-danger m-1 small fw-bold">Enter valid date!</p>) : <></>
                                    }
                            </Form.Group>
                        </div>
                    </div>
                    <div>
                        <div className="col-3">
                            <fieldset disabled>
                                <Form.Group className="mt-3 d-flex flex-column">
                                    <Form.Label className="fw-bold m-1">Add Item Information</Form.Label>
                                </Form.Group>
                            </fieldset>
                        </div>
                        {
                            formfields.map((data, index) => {
                                return (
                                    <div key={index}>
                                        <div className="row m-1">
                                            <div className="col-4">
                                                <Form.Control type="text" defaultValue={data[0]}
                                                />
                                            </div>
                                            <div className="col-1"><Button variant="dark" onClick={() => {
                                                axios.post("http://localhost:8080/RRJ/ItemInfo/getitem",{itemId: data[1]})
                                                .then(res => {
                                                    dispatch({type:ACTIONS.EDIT_VAL, payload: res.data})
                                                    dispatch({type:ACTIONS.SHOW5, payload: true})
                                                    }).catch(err => console.log(err))
                                            }}>Edit</Button></div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className="col">
                            {
                                newState.show4 ? (<></>) : (
                                    <Button variant="info" onClick={() => {
                                        dispatch({type:ACTIONS.SHOW3, payload: true})
                                       axios.get("http://localhost:8080/RRJ/ItemInfo/itemid")
                                       .then(res => {
                                           let newIdPattern = newState.orderId
                                           let prevIdPattern = res.data[0]
                                           if(prevIdPattern === undefined){
                                               let value = newIdPattern + "01"
                                               dispatch({type:ACTIONS.ITEM_ID, payload: value})
                                           } else {
                                               if(prevIdPattern.slice(0,10) !== newIdPattern){
                                                   let value = newIdPattern + "01"
                                                   dispatch({type:ACTIONS.ITEM_ID, payload: value})
                                               } else {
                                                   let value = Number(prevIdPattern) + 1
                                                   dispatch({type:ACTIONS.ITEM_ID, payload: value.toString()})
                                               }}
                                       }).catch(err => console.log(err))
                                   }}>Add more...</Button>
                                )
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">Order Status</Form.Label>
                                <Form.Select defaultValue={newState.orderStatus} style={{border: myNewState1.orderStatus ? "3px solid red" : ""}} onChange={e => {
                                    dispatch({type:ACTIONS.ORDER_STATUS, payload: e.target.value})
                                    if(myNewState1.orderStatus){myDispatch1({type:MY_ACTIONS1.ORDER_STATUS, payload: false})}
                                    if(newState.status !== ""){dispatch({type: ACTIONS.STATUS, payload: ""})}
                                }}>
                                    <option value=""></option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Completed but Delivery Pending">Completed but Delivery Pending</option>
                                    <option value="Payment Done but Delivery Pending">Payment Done but Delivery Pending</option>
                                    <option value="Delivered but Payment Pending">Delivered but Payment Pending</option>
                                    <option value="Completed Successfully!">Completed Successfully!</option>
                                    <option value="Cancelled">Cancelled</option>
                                </Form.Select>
                                {
                                    myNewState1.orderStatus ? (<p className="text-danger m-1 small fw-bold">Enter valid status!</p>) : <></>
                                }
                            </Form.Group>
                        </div>
                        <div className="col-1">
                            <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">GST</Form.Label>
                                <Form.Select defaultValue={newState.gst} style={{border: myNewState1.gst ? "3px solid red" : ""}} onChange={e => {
                                    dispatch({type:ACTIONS.GST, payload: e.target.value})
                                    if(myNewState1.gst){myDispatch1({type:MY_ACTIONS1.GST, payload: false})}
                                    if(newState.status !== ""){dispatch({type: ACTIONS.STATUS, payload: ""})}
                                }}>
                                    <option value=""></option>
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </Form.Select>
                                {
                                    myNewState1.gst ? (<p className="text-danger m-1 small fw-bold">Enter valid value!</p>) : <></>
                                }
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">Order Entered By</Form.Label>
                                <Form.Control type="text" defaultValue={newState.orderEnteredBy} disabled/>
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">Order Received By</Form.Label>
                                {
                                    (order === undefined)? (
                                        <Form.Select defaultValue={newState.orderReceivedBy} style={{border: myNewState1.orderReceivedBy ? "3px solid red" : ""}} onChange={e => {
                                            dispatch({type: ACTIONS.ORDER_RECEIVED_BY, payload: e.target.value})
                                            if(myNewState1.orderReceivedBy){myDispatch1({type:MY_ACTIONS1.ORDER_RECEIVED_BY, payload: false})}
                                            if(newState.status !== ""){dispatch({type: ACTIONS.STATUS, payload: ""})}
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
                                        <Form.Control defaultValue={newState.orderReceivedBy} disabled />
                                    )
                                }
                                {
                                    myNewState1.orderReceivedBy ? (<p className="text-danger m-1 small fw-bold">Enter valid input!</p>) : <></>
                                }
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">Customer Remarks</Form.Label>
                                <Form.Control type="text" defaultValue={newState.customerRemarks} onChange={e => {
                                    dispatch({type: ACTIONS.CUSTOMER_REMARKS, payload: e.target.value})
                                    if(newState.status !== ""){dispatch({type: ACTIONS.STATUS, payload: ""})}
                                }} />
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">Order Receiver Remarks</Form.Label>
                                <Form.Control type="text" defaultValue={newState.orderReceiverRemarks} onChange={e => {
                                    dispatch({type: ACTIONS.ORDER_REVCEIVER_REMARKS, payload: e.target.value})
                                    if(newState.status !== ""){dispatch({type: ACTIONS.STATUS, payload: ""})}
                                }} />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            {
                                (order === undefined)? <>
                                <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">Customer Mobile</Form.Label>
                                <Form.Control type="text" defaultValue={newState.customerMobile} style={{border: myNewState1.customerMobile ? "3px solid red" : ""}} onChange={e => {
                                    if(newState.status !== ""){dispatch({type: ACTIONS.STATUS, payload: ""})}
                                    if(newState.customerFullName !== ""){dispatch({type: ACTIONS.CUSTOMER_FULL_NAME, payload: ""})}
                                    dispatch({type: ACTIONS.CUSTOMER_MOBILE, payload: e.target.value})
                                    if(myNewState1.customerMobile){myDispatch1({type:MY_ACTIONS1.CUSTOMER_MOBILE, payload: false})}
                                    if(e.target.value === "nil"){dispatch({type: ACTIONS.SHOW6, payload: false})}
                                    else{dispatch({type:ACTIONS.SHOW6, payload: true})}
                                }} />
                                {
                                    myNewState1.customerMobile ? (<p className="text-danger m-1 small fw-bold">Enter valid mobile!</p>) : <></>
                                }
                                {
                                    newState.show6 ? <Button className="btn btn-secondary mt-2" onClick={Validate}>Validate Mobile</Button> : <></>
                                }
                            </Form.Group>
                                </> : <>
                                <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">Customer Mobile</Form.Label>
                                <Form.Control type="text" defaultValue={newState.customerMobile} disabled />
                            </Form.Group>
                                </>
                            }
                        </div>
                        <div className="col">
                            <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Customers Full Name</Form.Label>
                            <Form.Control type="text" style={{border: myNewState1.customerFullName ? "3px solid red" : ""}} defaultValue={newState.customerFullName} disabled={newState.show6} onChange={e => {
                                dispatch({type:ACTIONS.CUSTOMER_FULL_NAME, payload: e.target.value})
                                if(myNewState1.customerFullName){myDispatch1({type:MY_ACTIONS1.CUSTOMER_FULL_NAME, payload: false})}
                            }}/>
                            {
                                myNewState1.customerFullName ? (<p className="text-danger m-1 small fw-bold">Enter valid name!</p>) : <></>
                            }
                            </Form.Group>
                        </div>
                    </div>
                </Form>
                <div className="d-flex justify-content-center m-3">
                    {
                        (order === undefined) ? (
                            <Button variant="primary" className="mt-3 mb-3" onClick={SubmitHandler}>Save Order</Button>
                        ) : (<Button variant="primary" className="mt-3 mb-3" onClick={() => {
                            if(newState.expectedDeliveryDate === ""){myDispatch1({type:MY_ACTIONS1.EXPECTED_DELIVERY_DATE, payload: true})}
                            else if(newState.orderStatus === ""){myDispatch1({type:MY_ACTIONS1.ORDER_STATUS, payload: true})}
                            else if(newState.gst === ""){myDispatch1({type:MY_ACTIONS1.GST, payload: true})}
                            else{
                                axios.put(`http://localhost:8080/RRJ/OrderTaking/orderupdate/${newState.orderId}`, newState)
                                .then(() =>{
                                    dispatch({type:ACTIONS.ORDERTAKING_STATUS, payload: "Order Updated Successfully"})
                                })
                                .catch(err => console.log(err))
                            }
                        }}>Modify Order</Button>)
                    }
                </div>
            </Container>

        </>
    )
}

export default OrderTaking