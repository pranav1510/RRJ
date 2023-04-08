import axios from "axios";
import React, { useReducer } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

const MY_ACTIONS = {
    ORDER_ID : "ORDER_ID",
    ITEM_ID : "ITEM_ID",
    ITEM_TYPE: "ITEM_TYPE",
    ITEM_NAME: "ITEM_NAME",
    OTHER_WEIGHT: "OTHER_WEIGHT",
    TOTAL_WEIGHT: "TOTAL_WEIGHT",
    ESTIMATED_WEIGHT: "ESTIMATED_WEIGHT",
    DESIGN_DETAILS: "DESIGN_DETAILS",
    DELIVERY_DATE: "DELIVERY_DATE",
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
    ITEM_INFO_STATUS: "ITEM_INFO_STATUS"
}

const myReducer = (state, {type, payload}) => {
    switch(type){
        case MY_ACTIONS.OTHER_WEIGHT:
            return {...state, otherWeight: payload}
        case MY_ACTIONS.TOTAL_WEIGHT:
            return {...state, totalWeight: payload}
        case MY_ACTIONS.ITEM_INFO_STATUS:
            return {...state, itemInfoStatus: payload}
        case MY_ACTIONS.ORDER_ID:
            return {...state, orderId: payload}
        case MY_ACTIONS.ITEM_ID:
            return {...state, itemId: payload}
        case MY_ACTIONS.ITEM_TYPE:
            return {...state, itemType: payload}
        case MY_ACTIONS.ITEM_NAME:
            return {...state, itemName: payload.toLowerCase()}
        case MY_ACTIONS.ESTIMATED_WEIGHT:
            return {...state, estimatedWeight: payload}
        case MY_ACTIONS.DESIGN_DETAILS:
            return {...state, designDetails: payload}
        case MY_ACTIONS.DELIVERY_DATE:
            return {...state, deliveryDate: payload}
        case MY_ACTIONS.CUSTOMER_COMMENTS:
            return {...state, customerComments: payload.toLowerCase()}
        case MY_ACTIONS.ORDER_RECEIVER_COMMENTS:
            return {...state, orderReceiverComments: payload.toLowerCase()}
        case MY_ACTIONS.ITEM_STATUS:
            return {...state, itemStatus: payload}
        case MY_ACTIONS.MAKING_CHARGES:
            return {...state, makingCharges: payload}
        case MY_ACTIONS.ITEM_GROSS_WEIGHT:
            return {...state, itemGrossWeight: payload}
        case MY_ACTIONS.ITEM_NET_WEIGHT:
            return {...state, itemNetWeight: payload}
        case MY_ACTIONS.WASTAGE:
            return {...state, wastage: payload}
        case MY_ACTIONS.OVERALL_STONE_COST:
            return {...state, overallStoneCost: payload.target.value}
        case MY_ACTIONS.OVERALL_STONE_WEIGHT:
            return {...state, overallStoneWeight: payload.target.value}
        case MY_ACTIONS.STONES_TYPE:
            return {...state, stonesType: payload}
        case MY_ACTIONS.CZ_WEIGHT:
            return {...state, czWeight: payload.target.value}
        case MY_ACTIONS.CZ_COST:
            return {...state, czCost: payload.target.value}
        case MY_ACTIONS.EMERALD_WEIGHT:
            return {...state, emeraldWeight: payload.target.value}
        case MY_ACTIONS.EMERALD_COST:
            return {...state, emeraldCost: payload.target.value}
        case MY_ACTIONS.RUBY_WEIGHT:
            return {...state, rubyWeight: payload.target.value}
        case MY_ACTIONS.RUBY_COST:
            return {...state, rubyCost: payload.target.value}
        case MY_ACTIONS.PEARLS_COST:
            return {...state, pearlsCost: payload.target.value}
        case MY_ACTIONS.PEARLS_WEIGHT:
            return {...state, pearlsWeight: payload.target.value}
        case MY_ACTIONS.ITEM_PRICE:
            return {...state, itemPrice: payload}
        default:
            return state
    }
}

const ItemUpdate = ({item}) => {

    const myInitialState = {
        orderId: item.orderId,
        goldCost: item.goldCost,
        silverCost: item.silverCost,
        itemId: item.itemId,
        itemType: item.itemType,
        itemName: item.itemName,
        estimatedWeight: item.estimatedWeight,
        designDetails: item.designDetails,
        deliveryDate: item.itemDeliveryDate,
        customerComments: item.customerComments,
        orderReceiverComments: item.orderReceiverComments,
        itemStatus: item.itemStatus,
        itemEnteredBy: item.itemEnteredBy,
        makingCharges: item.makingCharges,
        itemGrossWeight: item.itemGrossWeight,
        itemNetWeight: item.itemNetWeight,
        otherWeight: item.otherWeight,
        totalWeight: item.totalWeight,
        wastage: item.wastage,
        stonesType: item.stonesType,
        czWeight: item.czWeight,
        czCost: item.czCost,
        emeraldWeight: item.emeraldWeight,
        emeraldCost: item.emeraldCost,
        rubyWeight: item.rubyWeight,
        rubyCost: item.rubyCost,
        pearlsWeight: item.pearlsWeight,
        pearlsCost: item.pearlsCost,
        overallStoneWeight: item.overallStoneWeight,
        overallStoneCost: item.overallStoneCost,
        itemPrice: item.itemPrice,
        itemInfoStatus: ""
    }

    const myInitialState1 = {
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
        otherWeight : false,
        totalWeight: false,
        itemPrice: false
    }

    const MY_ACTIONS1 = {
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
        ITEM_PRICE: "ITEM_PRICE",
        OTHER_WEIGHT: "OTHER_WEIGHT",
        TOTAL_WEIGHT: "TOTAL_WEIGHT"
    }

    const myReducer1 = (state, {type, payload}) => {
        switch(type){
            case MY_ACTIONS1.OTHER_WEIGHT:
                return {...state, otherWeight: payload}
            case MY_ACTIONS1.TOTAL_WEIGHT:
                return {...state, totalWeight: payload}
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

    const [myNewState, myDispatch] = useReducer(myReducer, myInitialState)
    const [myNewState1, myDispatch1] = useReducer(myReducer1, myInitialState1)
    
    return(
        <>
        <div className="row">
            <div className="row"><h5 className="text-success d-flex flex-row justify-content-center">{myNewState.itemInfoStatus}</h5></div>
                <div className="col">
                    <fieldset disabled>
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Order Id</Form.Label>
                            <Form.Control type="text" defaultValue={myNewState.orderId}/>
                        </Form.Group>
                    </fieldset>
                </div>
                <div className="col">
                    <fieldset disabled>
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Item Id</Form.Label>
                            <Form.Control type="text" defaultValue={myNewState.itemId}/>
                        </Form.Group>
                    </fieldset>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Item Type</Form.Label>
                        <Form.Select defaultValue={myNewState.itemType} style={{border: myNewState1.itemType ? "3px solid red" : ""}} onChange={e => {
                            myDispatch({type:MY_ACTIONS.ITEM_TYPE, payload: e.target.value})
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
                        <Form.Control type="date" defaultValue={myNewState.deliveryDate} style={{border: myNewState1.deliveryDate ? "3px solid red" : ""}} onChange={e => {
                            myDispatch({type:MY_ACTIONS.DELIVERY_DATE, payload: e.target.value})
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
                <Form.Group>
                    <Form.Label className="fw-bold mt-3">Gold Cost</Form.Label>
                    <div className="d-flex flex-row">
                    <Form.Control type="text" defaultValue={myNewState.goldCost} disabled/>
                    <span className="input-group-text fw-bold p-1">/10 gms</span>
                    </div>
                </Form.Group>
            </div>
            <div className="col">
                <Form.Group>
                    <Form.Label className="fw-bold mt-3">Silver Cost</Form.Label>
                    <div className="d-flex flex-row">
                    <Form.Control type="text" defaultValue={myNewState.silverCost} disabled/>
                    <span className="input-group-text fw-bold p-1">/10 gms</span>
                    </div>
                </Form.Group>
            </div>
            </div>
            <div className="row">
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Item Name</Form.Label>
                        <Form.Control type="text" defaultValue={myNewState.itemName} style={{border: myNewState1.itemName ? "3px solid red" : ""}} onChange={e => {
                            myDispatch({type:MY_ACTIONS.ITEM_NAME, payload: e.target.value})
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
                        <Form.Control type="text" defaultValue={myNewState.estimatedWeight} style={{border: myNewState1.estimatedWeight ? "3px solid red" : ""}} onChange={e => {
                            myDispatch({type:MY_ACTIONS.ESTIMATED_WEIGHT, payload: e.target.value})
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
                        <Form.Control type="text" defaultValue={myNewState.designDetails} onChange={e => {
                            myDispatch({type:MY_ACTIONS.DESIGN_DETAILS, payload: e.target.value})
                        }} />
                    </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Customer Comments</Form.Label>
                        <Form.Control type="text" defaultValue={myNewState.customerComments} onChange={e => myDispatch({type:MY_ACTIONS.CUSTOMER_COMMENTS, payload: e.target.value})} />
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Order Receiver Comments</Form.Label>
                        <Form.Control type="text" defaultValue={myNewState.orderReceiverComments} onChange={e => myDispatch({type:MY_ACTIONS.ORDER_RECEIVER_COMMENTS, payload: e.target.value})} />
                    </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Item Status</Form.Label>
                        <Form.Select defaultValue={myNewState.itemStatus} style={{border: myNewState1.itemStatus ? "3px solid red" : ""}} onChange={e => {
                            myDispatch({type:MY_ACTIONS.ITEM_STATUS, payload: e.target.value})
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
                        <Form.Control type="text" defaultValue={item.itemEnteredBy} disabled />
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Stones Type</Form.Label>
                        <Form.Select defaultValue={myNewState.stonesType} style={{border: myNewState1.stonesType ? "3px solid red" : ""}} onChange={e => {
                            myDispatch({type:MY_ACTIONS.STONES_TYPE, payload: e.target.value})
                            if(myNewState1.stonesType){myDispatch1({type:MY_ACTIONS1.STONES_TYPE, payload: false})}
                            if(e.target.value === ""){
                                myDispatch({type:MY_ACTIONS.CZ_WEIGHT, payload: ""})
                                myDispatch({type:MY_ACTIONS.CZ_COST, payload: ""})
                                myDispatch({type:MY_ACTIONS.EMERALD_WEIGHT, payload: ""})
                                myDispatch({type:MY_ACTIONS.EMERALD_COST, payload: ""})
                                myDispatch({type:MY_ACTIONS.RUBY_COST, payload: ""})
                                myDispatch({type:MY_ACTIONS.RUBY_WEIGHT, payload: ""})
                                myDispatch({type:MY_ACTIONS.OVERALL_STONE_COST, payload: ""})
                                myDispatch({type:MY_ACTIONS.OVERALL_STONE_WEIGHT, payload: ""})
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
                (myNewState.stonesType !== "") ? (
                    <Card className="mt-3 w-75" style={{backgroundColor: "peachpuff"}}>
                        <Container>
                            <div className="row">
                                <div className="col-3">
                                    {
                                        (myNewState.stonesType.includes("CZ")) ? <>
                                            <Form.Group className="mt-2 mb-1">
                                                <Form.Label className="fw-bold m-1">CZ Weight</Form.Label>
                                                <Form.Control defaultValue={myNewState.czWeight} type="text" style={{border: myNewState1.czWeight ? "3px solid red" : ""}} onChange={e => {
                                                    myDispatch({type:MY_ACTIONS.CZ_WEIGHT, payload: e.target.value})
                                                    if(myNewState1.czWeight){myDispatch1({type:MY_ACTIONS1.CZ_WEIGHT, payload: false})}
                                                }} />
                                                {
                                                    myNewState1.czWeight ? (<p className="text-danger m-1 small fw-bold">Enter valid weight!</p>) : <></>
                                                }
                                            </Form.Group>
                                            <Form.Group className="mt-1 mb-2">
                                                <Form.Label className="fw-bold m-1">CZ Cost</Form.Label>
                                                <Form.Control type="text" defaultValue={myNewState.czCost} style={{border: myNewState1.czCost ? "3px solid red" : ""}} onChange={e => {
                                                    myDispatch({type:MY_ACTIONS.CZ_COST, payload: e.target.value})
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
                                        myNewState.stonesType.includes("Emerald") ? <>
                                            <Form.Group className="mt-2 mb-1">
                                                <Form.Label className="fw-bold m-1">Emerald Weight</Form.Label>
                                                <Form.Control type="text" defaultValue={myNewState.emeraldWeight} style={{border: myNewState1.emeraldWeight ? "3px solid red" : ""}} onChange={e => {
                                                    myDispatch({type:MY_ACTIONS.EMERALD_WEIGHT, payload: e.target.value})
                                                    if(myNewState1.emeraldWeight){myDispatch1({type:MY_ACTIONS1.EMERALD_WEIGHT, payload: false})}
                                                }} />
                                                {
                                                    myNewState1.emeraldWeight ? (<p className="text-danger m-1 small fw-bold">Enter valid weight!</p>) : <></>
                                                }
                                            </Form.Group>
                                            <Form.Group className="mt-1 mb-2">
                                                <Form.Label className="fw-bold m-1">Emerald Cost</Form.Label>
                                                <Form.Control type="text" defaultValue={myNewState.emeraldCost} style={{border: myNewState1.emeraldCost ? "3px solid red" : ""}} onChange={e => {
                                                    myDispatch({type:MY_ACTIONS.EMERALD_COST, payload: e.target.value})
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
                                        myNewState.stonesType.includes("Ruby") ? <>
                                            <Form.Group className="mt-2 mb-1">
                                                <Form.Label className="fw-bold m-1">Ruby Weight</Form.Label>
                                                <Form.Control type="text" defaultValue={myNewState.rubyWeight} style={{border: myNewState1.rubyWeight ? "3px solid red" : ""}} onChange={e => {
                                                    myDispatch({type:MY_ACTIONS.RUBY_WEIGHT, payload: e.target.value})
                                                    if(myNewState1.rubyWeight){myDispatch1({type:MY_ACTIONS1.RUBY_WEIGHT, payload: false})}
                                                }} />
                                                {
                                                    myNewState1.rubyWeight ? (<p className="text-danger m-1 small fw-bold">Enter valid weight!</p>) : <></>
                                                }
                                            </Form.Group>
                                            <Form.Group className="mt-1 mb-2">
                                                <Form.Label className="fw-bold m-1">Ruby Cost</Form.Label>
                                                <Form.Control type="text" defaultValue={myNewState.rubyCost} style={{border: myNewState1.rubyCost ? "3px solid red" : ""}} onChange={e => {
                                                    myDispatch({type:MY_ACTIONS.RUBY_COST, payload: e.target.value})
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
                                        <Form.Control type="text" defaultValue={myNewState.overallStoneWeight} style={{border: myNewState1.overallStoneWeight ? "3px solid red" : ""}} onChange={e => {
                                            myDispatch({type:MY_ACTIONS.OVERALL_STONE_WEIGHT, payload: e.target.value})
                                            if(myNewState1.overallStoneWeight){myDispatch1({type:MY_ACTIONS1.OVERALL_STONE_WEIGHT, payload: false})}
                                        }} />
                                        {
                                            myNewState1.overallStoneWeight ? (<p className="text-danger m-1 small fw-bold">Enter valid weight!</p>) : <></>
                                        }
                                    </Form.Group>
                                    <Form.Group className="mt-1 mb-2">
                                        <Form.Label className="fw-bold m-1">Overall Stone Cost</Form.Label>
                                        <Form.Control type="text" defaultValue={myNewState.overallStoneCost} style={{border: myNewState1.overallStoneCost ? "3px solid red" : ""}} onChange={e => {
                                            myDispatch({type:MY_ACTIONS.OVERALL_STONE_COST, payload: e.target.value})
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
                                        if(myNewState.czWeight !== ""){weight += Number(myNewState.czWeight)}
                                        if(myNewState.czCost !== ""){cost += Number(myNewState.czCost)}
                                        if(myNewState.emeraldWeight !== ""){weight += Number(myNewState.emeraldWeight)}
                                        if(myNewState.emeraldCost !== ""){cost += Number(myNewState.emeraldCost)}
                                        if(myNewState.rubyWeight !== ""){weight += Number(myNewState.rubyWeight)}
                                        if(myNewState.rubyCost !== ""){cost += Number(myNewState.rubyCost)}
                                        myDispatch({type:MY_ACTIONS.OVERALL_STONE_WEIGHT, payload: String(weight)})
                                        myDispatch({type:MY_ACTIONS.OVERALL_STONE_COST, payload: String(cost)})
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
                                <Form.Control type="text" defaultValue={myNewState.itemGrossWeight} style={{border: myNewState1.itemGrossWeight ? "3px solid red" : ""}} onChange={e => {
                                    myDispatch({type:MY_ACTIONS.ITEM_GROSS_WEIGHT, payload: e.target.value})
                                    if(myNewState1.itemGrossWeight){myDispatch1({type:MY_ACTIONS1.ITEM_GROSS_WEIGHT, payload: false})}
                                }} />
                                {
                                    myNewState1.itemGrossWeight ? (<p className="text-danger m-1 small fw-bold">Enter valid weight!</p>) : <></>
                                }
                            </Form.Group>
                            <Form.Group className="mt-1 mb-2">
                                <Form.Label className="fw-bold m-1">Wastage (in %)</Form.Label>
                                <Form.Control type="text" defaultValue={myNewState.wastage} style={{border: myNewState1.wastage ? "3px solid red" : ""}} onChange={e => {
                                    myDispatch({type:MY_ACTIONS.WASTAGE, payload: e.target.value})
                                    if(myNewState1.wastage){myDispatch1({type:MY_ACTIONS1.WASTAGE, payload: false})}
                                }} />
                                {
                                    myNewState1.wastage ? (<p className="text-danger m-1 small fw-bold">Enter valid value!</p>) : <></>
                                }
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group className="mt-1 mb-2">
                                <Form.Label className="fw-bold m-1">Pearls Weight</Form.Label>
                                <Form.Control type="text" defaultValue={myNewState.pearlsWeight} style={{border: myNewState1.pearlsWeight ? "3px solid red" : ""}} onChange={e => {
                                    myDispatch({type:MY_ACTIONS.PEARLS_WEIGHT, payload: e.target.value})
                                    if(myNewState1.pearlsWeight){myDispatch1({type:MY_ACTIONS1.PEARLS_WEIGHT, payload: false})}
                                }} />
                                {
                                    myNewState1.pearlsWeight ? (<p className="text-danger m-1 small fw-bold">Enter valid weight!</p>) : <></>
                                }
                            </Form.Group>
                            <Form.Group className="mt-1 mb-2">
                                <Form.Label className="fw-bold m-1">Pearls Cost</Form.Label>
                                <Form.Control type="text" defaultValue={myNewState.pearlsCost} style={{border: myNewState1.pearlsCost ? "3px solid red" : ""}} onChange={e => {
                                    myDispatch({type:MY_ACTIONS.PEARLS_COST, payload: e.target.value})
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
                                <Form.Control type="text" defaultValue={myNewState.otherWeight} style={{border: myNewState1.otherWeight ? "3px solid red" : ""}} onChange={e => {
                                    myDispatch({type:MY_ACTIONS.OTHER_WEIGHT, payload: e.target.value})
                                    if(myNewState1.otherWeight){myDispatch1({type:MY_ACTIONS1.OTHER_WEIGHT, payload: false})}
                                }} />
                                {
                                    myNewState1.otherWeight ? (<p className="text-danger m-1 small fw-bold">Enter valid weight!</p>) : <></>
                                }
                            </Form.Group>
                            <Form.Group className="mt-1 mb-2">
                                <Form.Label className="fw-bold m-1">Making Charges</Form.Label>
                                <Form.Control type="text" defaultValue={myNewState.makingCharges} style={{border: myNewState1.makingCharges ? "3px solid red" : ""}} onChange={e => {
                                    myDispatch({type:MY_ACTIONS.MAKING_CHARGES, payload: e.target.value})
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
                                if(myNewState.stonesType !== "" && (myNewState.overallStoneWeight === "" || myNewState.overallStoneCost === "")){
                                    myDispatch1({type:MY_ACTIONS1.OVERALL_STONE_COST, payload: true})
                                    myDispatch1({type:MY_ACTIONS1.OVERALL_STONE_WEIGHT, payload: true})
                                }else if(myNewState.itemGrossWeight === "" || !(/\d*\.?\d*/.test(myNewState.itemGrossWeight))){
                                    myDispatch1({type:MY_ACTIONS1.ITEM_GROSS_WEIGHT, payload: true})
                                } else {
                                    let net = Number(myNewState.itemGrossWeight)
                                    if(myNewState.overallStoneWeight !== ""){net -= Number(myNewState.overallStoneWeight)}
                                    if(myNewState.pearlsWeight !== ""){net -= Number(myNewState.pearlsWeight)}
                                    if(myNewState.otherWeight !== ""){net -= Number(myNewState.otherWeight)}
                                    myDispatch({type:MY_ACTIONS.ITEM_NET_WEIGHT, payload: net.toString()})
                                    let total = net
                                    if(myNewState.wastage !== "" && Number(myNewState.wastage) > 0){total = ((100 + Number(myNewState.wastage)) * net) / 100}
                                    myDispatch({type:MY_ACTIONS.TOTAL_WEIGHT, payload: total.toString()})
                                    let price = 0
                                    if(myNewState.overallStoneCost !== ""){price += Number(myNewState.overallStoneCost)}
                                    if(myNewState.pearlsCost !== ""){price += Number(myNewState.pearlsCost)}
                                    if(myNewState.makingCharges !== ""){price += Number(myNewState.makingCharges)}
                                    if(myNewState.itemType.includes("Gold")){
                                        price += total * (Number(myNewState.goldCost) / 10)
                                        myDispatch({type:MY_ACTIONS.ITEM_PRICE, payload: price.toString()})
                                    } else if(myNewState.itemType.includes("Silver")){
                                        price += total * (Number(myNewState.silverCost) / 10)
                                        myDispatch({type:MY_ACTIONS.ITEM_PRICE, payload: price.toString()})
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
                        <Form.Control type="text" defaultValue={myNewState.itemNetWeight} style={{border: myNewState1.itemNetWeight ? "3px solid red" : ""}} onChange={e => {
                            myDispatch({type:MY_ACTIONS.ITEM_NET_WEIGHT, payload: e.target.value})
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
                        <Form.Control type="text" defaultValue={myNewState.totalWeight} style={{border: myNewState1.totalWeight ? "3px solid red" : ""}} onChange={e => {
                            myDispatch({type:MY_ACTIONS.TOTAL_WEIGHT, payload: e.target.value})
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
                        <Form.Control type="text" defaultValue={myNewState.itemPrice} style={{border: myNewState1.itemPrice ? "3px solid red" : ""}} onChange={e => {
                            myDispatch({type:MY_ACTIONS.ITEM_PRICE, payload: e.target.value})
                            if(myNewState1.itemPrice){myDispatch1({type:MY_ACTIONS1.ITEM_PRICE, payload: false})}
                        }} />
                        {
                            myNewState1.itemPrice ? (<p className="text-danger m-1 small fw-bold">Enter valid price!</p>) : <></>
                        }
                    </Form.Group>
                </div>
            </div>
            <div className="d-flex justify-content-center m-3">
                <Button variant="primary" className="mt-3 mb-3" onClick={() => {
                    if(myNewState.stonesType.includes("CZ") && (myNewState.czCost === "" || !(/\d*\.?\d*/.test(myNewState.czCost)))){myDispatch1({type:MY_ACTIONS1.CZ_COST, payload: true})}
                    else if(myNewState.stonesType.includes("CZ") && (myNewState.czWeight === "" || !(/\d*\.?\d*/.test(myNewState.czWeight)))){myDispatch1({type:MY_ACTIONS1.CZ_WEIGHT, payload: true})}
                    else if(myNewState.stonesType.includes("Emerald") && (myNewState.emeraldCost === "" || !(/\d*\.?\d*/.test(myNewState.emeraldCost)))){myDispatch1({type:MY_ACTIONS1.EMERALD_COST, payload: true})}
                    else if(myNewState.stonesType.includes("Emerald") && (myNewState.emeraldWeight === "" || !(/\d*\.?\d*/.test(myNewState.emeraldWeight)))){myDispatch1({type:MY_ACTIONS1.EMERALD_WEIGHT, payload: true})}
                    else if(myNewState.stonesType.includes("Ruby") && (myNewState.rubyCost === "" || !(/\d*\.?\d*/.test(myNewState.rubyCost)))){myDispatch1({type:MY_ACTIONS1.RUBY_COST, payload: true})}
                    else if(myNewState.stonesType.includes("Ruby") && (myNewState.rubyWeight === "" || !(/\d*\.?\d*/.test(myNewState.rubyWeight)))){myDispatch1({type:MY_ACTIONS1.RUBY_WEIGHT, payload: true})}
                    else if(myNewState.itemType === ""){myDispatch1({type:MY_ACTIONS1.ITEM_TYPE, payload: true})}
                    else if(myNewState.itemName === "" || !(/^[a-zA-Z\s]*$/.test(myNewState.itemName))){myDispatch1({type:MY_ACTIONS1.ITEM_NAME, payload: true})}
                    else if(myNewState.deliveryDate === ""){myDispatch1({type:MY_ACTIONS1.DELIVERY_DATE, payload: true})}
                    else if(myNewState.itemStatus === ""){myDispatch1({type:MY_ACTIONS1.ITEM_STATUS, payload: true})}
                    else if(myNewState.makingCharges !== "" && !(/\d*\.?\d*/.test(myNewState.makingCharges))){myDispatch1({type:MY_ACTIONS1.MAKING_CHARGES, payload: true})}
                    else if(myNewState.itemGrossWeight !== "" && !(/\d*\.?\d*/.test(myNewState.itemGrossWeight))){myDispatch1({type:MY_ACTIONS1.ITEM_GROSS_WEIGHT, payload: true})}
                    else if(myNewState.itemNetWeight !== "" && !(/\d*\.?\d*/.test(myNewState.itemNetWeight))){myDispatch1({type:MY_ACTIONS1.ITEM_NET_WEIGHT, payload: true})}
                    else if(myNewState.otherWeight !== "" && !(/\d*\.?\d*/.test(myNewState.otherWeight))){myDispatch1({type:MY_ACTIONS1.OTHER_WEIGHT, payload: true})}
                    else if(myNewState.totalWeight !== "" && !(/\d*\.?\d*/.test(myNewState.totalWeight))){myDispatch1({type:MY_ACTIONS1.TOTAL_WEIGHT, payload: true})}
                    else if(myNewState.wastage !== "" && !(/\d*\.?\d*/.test(myNewState.wastage))){myDispatch1({type:MY_ACTIONS1.WASTAGE, payload: true})}
                    else if(myNewState.pearlsWeight !== "" && !(/\d*\.?\d*/.test(myNewState.pearlsWeight))){myDispatch1({type:MY_ACTIONS1.PEARLS_WEIGHT, payload: true})}
                    else if(myNewState.pearlsCost !== "" && !(/\d*\.?\d*/.test(myNewState.pearlsCost))){myDispatch1({type:MY_ACTIONS1.PEARLS_COST, payload: true})}
                    else if(myNewState.overallStoneWeight !== "" && !(/\d*\.?\d*/.test(myNewState.overallStoneWeight))){myDispatch1({type:MY_ACTIONS1.OVERALL_STONE_WEIGHT, payload: true})}
                    else if(myNewState.overallStoneCost !== "" && !(/\d*\.?\d*/.test(myNewState.overallStoneCost))){myDispatch1({type:MY_ACTIONS1.OVERALL_STONE_COST, payload: true})}
                    else if(myNewState.itemPrice !== "" && !(/\d*\.?\d*/.test(myNewState.itemPrice))){myDispatch1({type:MY_ACTIONS1.ITEM_PRICE, payload: true})}
                    else {
                        axios.put(`http://localhost:8080/RRJ/ItemInfo/itemupdate/${item.itemId}`, myNewState)
                            .then(() => {
                                myDispatch({type:MY_ACTIONS.ITEM_INFO_STATUS, payload: "Item Updated Successfully!"})
                            }).catch(err => {console.log(err)})        
                    }
                }}>Modify Details</Button>
            </div>
        </>
    )
}

export default ItemUpdate