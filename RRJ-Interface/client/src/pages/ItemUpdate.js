import axios from "axios";
import React, { useReducer } from "react";
import { Button, Form } from "react-bootstrap";

const MY_ACTIONS = {
    ORDER_ID : "ORDER_ID",
    ITEM_ID : "ITEM_ID",
    ITEM_TYPE: "ITEM_TYPE",
    ITEM_NAME: "ITEM_NAME",
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
    CZ_COST: "CZ_COST",
    EMERALD_COST: "EMERALD_COST",
    RUBY_COST: "RUBY_COST",
    OVERALL_STONE_WEIGHT: "STONE_WEIGHT",
    OVERALL_STONE_COST: "STONE_COST",
    ITEM_PRICE: "ITEM_PRICE",
    ITEM_INFO_STATUS: "ITEM_INFO_STATUS"
}

const myReducer = (state, {type, payload}) => {
    switch(type){
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
        case MY_ACTIONS.CZ_COST:
            return {...state, czCost: payload.target.value}
        case MY_ACTIONS.EMERALD_COST:
            return {...state, emeraldCost: payload.target.value}
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
        itemId: item.itemId,
        itemType: item.itemType,
        itemName: item.itemName,
        deliveryDate: item.itemDeliveryDate,
        customerComments: item.customerComments,
        orderReceiverComments: item.orderReceiverComments,
        itemStatus: item.itemStatus,
        itemEnteredBy: item.itemEnteredBy,
        makingCharges: item.makingCharges,
        itemGrossWeight: item.itemGrossWeight,
        itemNetWeight: item.itemNetWeight,
        wastage: item.wastage,
        stonesType: item.stonesType,
        czCost: item.czCost,
        emeraldCost: item.emeraldCost,
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
        deliveryDate: false,
        itemStatus: false,
        makingCharges: false,
        itemGrossWeight: false,
        itemNetWeight: false,
        wastage: false,
        stonesType: false,
        czCost: false,
        emeraldCost: false,
        rubyCost: false,
        pearlsWeight: false,
        pearlsCost: false,
        overallStoneWeight: false,
        overallStoneCost: false,
        itemPrice: false
    }

    const MY_ACTIONS1 = {
        ITEM_TYPE: "ITEM_TYPE",
        ITEM_NAME: "ITEM_NAME",
        DELIVERY_DATE: "DELIVERY_DATE",
        ITEM_STATUS: "ITEM_STATUS",
        MAKING_CHARGES: "MAKING_CHARGES",
        ITEM_GROSS_WEIGHT: "ITEM_GROSS_WEIGHT",
        ITEM_NET_WEIGHT: "ITEM_NET_WEIGHT",
        WASTAGE: "WASTAGE",
        STONES_TYPE: "STONE_TYPE",
        CZ_COST: "CZ_COST",
        EMERALD_COST: "EMERALD_COST",
        RUBY_COST: "RUBY_COST",
        PEARLS_WEIGHT: "PEARLS_WEIGHT",
        PEARLS_COST: "PEARLS_COST",
        OVERALL_STONE_WEIGHT: "OVERALL_STONE_WEIGHT",
        OVERALL_STONE_COST: "OVERALL_STONE_COST",
        ITEM_PRICE: "ITEM_PRICE"
    }

    const myReducer1 = (state, {type, payload}) => {
        switch({type}){
            case MY_ACTIONS1.ITEM_TYPE:
                return {...state, itemType: payload}
            case MY_ACTIONS1.ITEM_NAME:
                return {...state, itemName: payload}
            case MY_ACTIONS1.DELIVERY_DATE:
                return {...state, deliveryDate: payload}
            case MY_ACTIONS1.ITEM_STATUS:
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
                return {...state, overallStoneCost: payload}
            case MY_ACTIONS.OVERALL_STONE_WEIGHT:
                return {...state, overallStoneWeight: payload}
            case MY_ACTIONS.STONES_TYPE:
                return {...state, stonesType: payload}
            case MY_ACTIONS.CZ_COST:
                return {...state, czCost: payload}
            case MY_ACTIONS.EMERALD_COST:
                return {...state, emeraldCost: payload}
            case MY_ACTIONS.RUBY_COST:
                return {...state, rubyCost: payload}
            case MY_ACTIONS.PEARLS_COST:
                return {...state, pearlsCost: payload}
            case MY_ACTIONS.PEARLS_WEIGHT:
                return {...state, pearlsWeight: payload}
            case MY_ACTIONS.ITEM_PRICE:
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
                            myDispatch1({type:MY_ACTIONS1.ITEM_TYPE, payload: false})
                        }}>
                            <option value=""></option>
                            <option value="Gold Sale">Gold Sale</option>
                            <option value="Manufactured Gold Item">Manufactured Gold Item</option>
                            <option value="Readymade Gold Item">Readymade Gold Item</option>
                            <option value="Silver Sale">Silver Sale</option>
                            <option value="Manufactured Silver Item">Manufactured Silver Item</option>
                            <option value="Readymade Silver Item">Readymade Silver Item</option>
                        </Form.Select>
                        {
                            myNewState1.itemType ? (<p className="text-danger m-1 small fw-bold">Enter valid type!</p>) : <></>
                        }
                    </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Item Name</Form.Label>
                        <Form.Control type="text" defaultValue={myNewState.itemName} style={{border: myNewState1.itemName ? "3px solid red" : ""}} onChange={e => {
                            myDispatch({type:MY_ACTIONS.ITEM_NAME, payload: e.target.value})
                            myDispatch1({type:MY_ACTIONS1.ITEM_NAME, payload: false})
                        }} />
                        {
                            myNewState1.itemName ? (<p className="text-danger m-1 small fw-bold">Enter valid name!</p>) : <></>
                        }
                    </Form.Group>
                </div>
                <div className="col-4">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Delivery Date</Form.Label>
                        <Form.Control type="date" defaultValue={myNewState.deliveryDate} style={{border: myNewState1.deliveryDate ? "3px solid red" : ""}} onChange={e => {
                            myDispatch({type:MY_ACTIONS.DELIVERY_DATE, payload: e.target.value})
                            myDispatch1({type:MY_ACTIONS1.DELIVERY_DATE, payload: false})
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
                            myDispatch1({type:MY_ACTIONS1.ITEM_STATUS, payload: false})
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
                        <Form.Control type="text" defaultValue={myNewState.itemEnteredBy} disabled/>
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Making Charges</Form.Label>
                        <Form.Control type="text" defaultValue={myNewState.makingCharges} style={{border: myNewState1.makingCharges ? "3px solid red" : ""}} onChange={e => {
                            myDispatch({type:MY_ACTIONS.MAKING_CHARGES, payload: e.target.value})
                            myDispatch1({type:MY_ACTIONS1.MAKING_CHARGES, payload: false})
                        }} />
                        {
                            myNewState1.makingCharges ? (<p className="text-danger m-1 small fw-bold">Enter valid making charges!</p>) : <></>
                        }
                    </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Item Gross Weight</Form.Label>
                        <Form.Control type="text" defaultValue={myNewState.itemGrossWeight} style={{border: myNewState1.itemGrossWeight ? "3px solid red" : ""}} onChange={e => {
                            myDispatch({type:MY_ACTIONS.ITEM_GROSS_WEIGHT, payload: e.target.value})
                            myDispatch1({type:MY_ACTIONS1.ITEM_GROSS_WEIGHT, payload: false})
                        }} />
                        {
                            myNewState1.itemGrossWeight ? (<p className="text-danger m-1 small fw-bold">Enter valid weight!</p>) : <></>
                        }
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Item Net Weight</Form.Label>
                        <Form.Control type="text" defaultValue={myNewState.itemNetWeight} style={{border: myNewState1.itemNetWeight ? "3px solid red" : ""}} onChange={e => {
                            myDispatch({type:MY_ACTIONS.ITEM_NET_WEIGHT, payload: e.target.value})
                            myDispatch1({type:MY_ACTIONS1.ITEM_NET_WEIGHT, payload: false})
                        }} />
                        {
                            myNewState1.itemNetWeight ? (<p className="text-danger m-1 small fw-bold">Enter valid weight!</p>) : <></>
                        }
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Wastage</Form.Label>
                        <Form.Control type="text" defaultValue={myNewState.wastage} style={{border: myNewState1.wastage ? "3px solid red" : ""}} onChange={e => {
                            myDispatch({type:MY_ACTIONS.WASTAGE, payload: e.target.value})
                            myDispatch1({type:MY_ACTIONS1.WASTAGE, payload: false})
                        }} />
                        {
                            myNewState1.wastage ? (<p className="text-danger m-1 small fw-bold">Enter valid wastage!</p>) : <></>
                        }
                    </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Stones Type</Form.Label>
                        <Form.Select defaultValue={myNewState.stonesType} style={{border: myNewState1.stonesType ? "3px solid red" : ""}} onChange={e => {
                            myDispatch({type:MY_ACTIONS.STONES_TYPE, payload: e.target.value})
                            myDispatch1({type:MY_ACTIONS1.STONES_TYPE, payload: false})
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
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">CZ Cost</Form.Label>
                        <Form.Control type="text" defaultValue={myNewState.czCost} style={{border: myNewState1.czCost ? "3px solid red" : ""}} onChange={e => {
                            myDispatch({type:MY_ACTIONS.CZ_COST, payload: e})
                            myDispatch1({type:MY_ACTIONS1.CZ_COST, payload: false})
                        }} />
                        {
                            myNewState1.czCost ? (<p className="text-danger m-1 small fw-bold">Enter valid cost!</p>) : <></>
                        }
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Emerald Cost</Form.Label>
                        <Form.Control type="text" defaultValue={myNewState.emeraldCost} style={{border: myNewState1.emeraldCost ? "3px solid red" : ""}} onChange={e => {
                            myDispatch({type:MY_ACTIONS.EMERALD_COST, payload: e})
                            myDispatch1({type:MY_ACTIONS1.EMERALD_COST, payload: false})
                        }} />
                        {
                            myNewState1.emeraldCost ? (<p className="text-danger m-1 small fw-bold">Enter valid cost!</p>) : <></>
                        }
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Ruby Cost</Form.Label>
                        <Form.Control type="text" defaultValue={myNewState.rubyCost} style={{border: myNewState1.rubyCost ? "3px solid red" : ""}} onChange={e => {
                            myDispatch({type:MY_ACTIONS.RUBY_COST, payload: e})
                            myDispatch1({type:MY_ACTIONS1.RUBY_COST, payload: false})
                        }} />
                        {
                            myNewState1.rubyCost ? (<p className="text-danger m-1 small fw-bold">Enter valid cost!</p>) : <></>
                        }
                    </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Pearls Weight</Form.Label>
                        <Form.Control type="text" defaultValue={myNewState.pearlsWeight} style={{border: myNewState1.pearlsWeight ? "3px solid red" : ""}} onChange={e => {
                            myDispatch({type:MY_ACTIONS.PEARLS_WEIGHT, payload: e})
                            myDispatch1({type:MY_ACTIONS1.PEARLS_WEIGHT, payload: false})
                        }} />
                        {
                            myNewState1.pearlsWeight ? (<p className="text-danger m-1 small fw-bold">Enter valid weight!</p>) : <></>
                        }
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Pearls Cost</Form.Label>
                        <Form.Control type="text" defaultValue={myNewState.pearlsCost} style={{border: myNewState1.pearlsCost ? "3px solid red" : ""}} onChange={e => {
                            myDispatch({type:MY_ACTIONS.PEARLS_COST, payload: e})
                            myDispatch1({type:MY_ACTIONS1.PEARLS_COST, payload: false})
                        }} />
                        {
                            myNewState1.pearlsCost ? (<p className="text-danger m-1 small fw-bold">Enter valid item cost!</p>) : <></>
                        }
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Overall Stone Weight</Form.Label>
                        <Form.Control type="text" defaultValue={myNewState.overallStoneWeight} style={{border: myNewState1.overallStoneWeight ? "3px solid red" : ""}} onChange={e => {
                            myDispatch({type:MY_ACTIONS.OVERALL_STONE_WEIGHT, payload: e})
                            myDispatch1({type:MY_ACTIONS1.OVERALL_STONE_WEIGHT, payload: false})
                        }} />
                        {
                            myNewState1.overallStoneWeight ? (<p className="text-danger m-1 small fw-bold">Enter valid weight!</p>) : <></>
                        }
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Overall Stone Cost</Form.Label>
                        <Form.Control type="text" defaultValue={myNewState.overallStoneCost} style={{border: myNewState1.overallStoneCost ? "3px solid red" : ""}} onChange={e => {
                            myDispatch({type:MY_ACTIONS.OVERALL_STONE_COST, payload: e})
                            myDispatch1({type:MY_ACTIONS1.OVERALL_STONE_COST, payload: false})
                        }} />
                        {
                            myNewState1.overallStoneCost ? (<p className="text-danger m-1 small fw-bold">Enter valid cost!</p>) : <></>
                        }
                    </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Item Price</Form.Label>
                        <Form.Control type="text" defaultValue={myNewState.itemPrice} style={{border: myNewState1.itemPrice ? "3px solid red" : ""}} onChange={e => {
                            myDispatch({type:MY_ACTIONS.ITEM_PRICE, payload: e.target.value})
                            myDispatch1({type:MY_ACTIONS1.ITEM_PRICE, payload: false})
                        }} />
                        {
                            myNewState1.itemPrice ? (<p className="text-danger m-1 small fw-bold">Enter valid price!</p>) : <></>
                        }
                    </Form.Group>
                </div>
            </div>
            <div className="d-flex justify-content-center m-3">
                <Button variant="primary" className="mt-3 mb-3" onClick={() => {
                    if(myNewState.itemType === ""){myDispatch1({type:MY_ACTIONS1.ITEM_TYPE, payload: true})}
                    else if(myNewState.itemName === "" || !(/[a-zA-Z\s]*/.test(myNewState.itemName))){myDispatch1({type:MY_ACTIONS1.ITEM_NAME, payload: true})}
                    else if(myNewState.deliveryDate === ""){myDispatch1({type:MY_ACTIONS1.DELIVERY_DATE, payload: true})}
                    else if(myNewState.itemStatus === ""){myDispatch1({type:MY_ACTIONS1.ITEM_STATUS, payload: true})}
                    axios.put(`http://localhost:8080/ItemInfo/itemupdate/${item.itemId}`, myNewState)
                        .then(() => {
                            myDispatch({type:MY_ACTIONS.ITEM_INFO_STATUS, payload: "Item Updated Successfully!"})
                        }).catch(err => {console.log(err)})
                }}>Modify Details</Button>
            </div>
        </>
    )
}

export default ItemUpdate