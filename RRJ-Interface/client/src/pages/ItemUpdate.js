import axios from "axios";
import React, { useReducer } from "react";
import { Button, Form } from "react-bootstrap";

const ACTIONS = {
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

const reducer = (state, {type,payload}) => {
    switch(type){
        case ACTIONS.ITEM_INFO_STATUS:
            return {...state, itemInfoStatus: payload}
        case ACTIONS.ORDER_ID:
            return {...state, orderId: payload}
        case ACTIONS.ITEM_ID:
            return {...state, itemId: payload}
        case ACTIONS.ITEM_TYPE:
            return {...state, itemType: payload}
        case ACTIONS.ITEM_NAME:
            return {...state, itemName: payload}
        case ACTIONS.DELIVERY_DATE:
            return {...state, deliveryDate: payload}
        case ACTIONS.CUSTOMER_COMMENTS:
            return {...state, customerComments: payload}
        case ACTIONS.ORDER_RECEIVER_COMMENTS:
            return {...state, orderReceiverComments: payload}
        case ACTIONS.ITEM_STATUS:
            return {...state, itemStatus: payload}
        case ACTIONS.ITEM_ENTERED_BY:
            return {...state, itemEnteredBy: payload}
        case ACTIONS.MAKING_CHARGES:
            return {...state, makingCharges: payload}
        case ACTIONS.ITEM_GROSS_WEIGHT:
            return {...state, itemGrossWeight: payload}
        case ACTIONS.ITEM_NET_WEIGHT:
            return {...state, itemNetWeight: payload}
        case ACTIONS.WASTAGE:
            return {...state, wastage: payload}
        case ACTIONS.OVERALL_STONE_COST:
            return {...state, overallStoneCost: payload.target.value}
        case ACTIONS.OVERALL_STONE_WEIGHT:
            return {...state, overallStoneWeight: payload.target.value}
        case ACTIONS.STONES_TYPE:
            return {...state, stonesType: payload}
        case ACTIONS.CZ_COST:
            return {...state, czCost: payload.target.value}
        case ACTIONS.EMERALD_COST:
            return {...state, emeraldCost: payload.target.value}
        case ACTIONS.RUBY_COST:
            return {...state, rubyCost: payload.target.value}
        case ACTIONS.PEARLS_COST:
            return {...state, pearlsCost: payload.target.value}
        case ACTIONS.PEARLS_WEIGHT:
            return {...state, pearlsWeight: payload.target.value}
        case ACTIONS.ITEM_PRICE:
            return {...state, itemPrice: payload}
        default:
            return state
    }
}

const ItemUpdate = ({item, dispatch1, action}) => {
    const initialState = {
        orderId: item.orderId,
        itemId: item.itemId,
        itemType: item.itemType,
        itemName: item.itemName,
        deliveryDate: item.deliveryDate,
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

    const [newState, dispatch] = useReducer(reducer, initialState)


    console.log(item)

    return(
        <>
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
                        <Form.Select defaultValue={newState.itemType} onChange={e => {
                            dispatch({type:ACTIONS.ITEM_TYPE, payload: e.target.value})
                        }}>
                            <option value=""></option>
                            <option value="Gold Sale">Gold Sale</option>
                            <option value="Manufactured Gold Item">Manufactured Gold Item</option>
                            <option value="Readymade Gold Item">Readymade Gold Item</option>
                            <option value="Silver Sale">Silver Sale</option>
                            <option value="Manufactured Silver Item">Manufactured Silver Item</option>
                            <option value="Readymade Silver Item">Readymade Silver Item</option>
                        </Form.Select>
                    </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Item Name</Form.Label>
                        <Form.Control type="text" defaultValue={newState.itemName} onChange={e => dispatch({type:ACTIONS.ITEM_NAME, payload: e.target.value})} />
                    </Form.Group>
                </div>
                <div className="col-4">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Delivery Date</Form.Label>
                        <Form.Control type="date" defaultValue={newState.deliveryDate} onChange={e => dispatch({type:ACTIONS.DELIVERY_DATE, payload: e.target.value})}/>
                    </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Customer Comments</Form.Label>
                        <Form.Control type="text" defaultValue={newState.customerComments} onChange={e => dispatch({type:ACTIONS.CUSTOMER_COMMENTS, payload: e.target.value})} />
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Order Receiver Comments</Form.Label>
                        <Form.Control type="text" defaultValue={newState.orderReceiverComments} onChange={e => dispatch({type:ACTIONS.ORDER_RECEIVER_COMMENTS, payload: e.target.value})} />
                    </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Item Status</Form.Label>
                        <Form.Select defaultValue={newState.itemStatus} onChange={e => {
                            dispatch({type:ACTIONS.ITEM_STATUS, payload: e.target.value})
                        }}>
                            <option value=""></option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Cancelled">Cancelled</option>
                        </Form.Select>
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Item Entered By</Form.Label>
                        <Form.Control type="text" defaultValue={newState.itemEnteredBy} onChange={e => dispatch({type:ACTIONS.ITEM_ENTERED_BY, payload: e.target.value})} />
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Making Charges</Form.Label>
                        <Form.Control type="text" defaultValue={newState.makingCharges} onChange={e => dispatch({type:ACTIONS.MAKING_CHARGES, payload: e.target.value})} />
                    </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Item Gross Weight</Form.Label>
                        <Form.Control type="text" defaultValue={newState.itemGrossWeight} onChange={e => dispatch({type:ACTIONS.ITEM_GROSS_WEIGHT, payload: e.target.value})} />
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Item Net Weight</Form.Label>
                        <Form.Control type="text" defaultValue={newState.itemNetWeight} onChange={e => dispatch({type:ACTIONS.ITEM_NET_WEIGHT, payload: e.target.value})} />
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Wastage</Form.Label>
                        <Form.Control type="text" defaultValue={newState.wastage} onChange={e => dispatch({type:ACTIONS.WASTAGE, payload: e.target.value})} />
                    </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Stones Type</Form.Label>
                        <Form.Select defaultValue={newState.stonesType} onChange={e => {
                            dispatch({type:ACTIONS.STONES_TYPE, payload: e.target.value})
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
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">CZ Cost</Form.Label>
                        <Form.Control type="text" defaultValue={newState.czCost} onChange={e => dispatch({type:ACTIONS.CZ_COST, payload: e})} />
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Emerald Cost</Form.Label>
                        <Form.Control type="text" defaultValue={newState.emeraldCost} onChange={e => dispatch({type:ACTIONS.EMERALD_COST, payload: e})} />
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Ruby Cost</Form.Label>
                        <Form.Control type="text" defaultValue={newState.rubyCost} onChange={e => dispatch({type:ACTIONS.RUBY_COST, payload: e})} />
                    </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Pearls Weight</Form.Label>
                        <Form.Control type="text" defaultValue={newState.pearlsWeight} onChange={e => dispatch({type:ACTIONS.PEARLS_WEIGHT, payload: e})} />
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Pearls Cost</Form.Label>
                        <Form.Control type="text" defaultValue={newState.pearlsCost} onChange={e => dispatch({type:ACTIONS.PEARLS_COST, payload: e})} />
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Overall Stone Weight</Form.Label>
                        <Form.Control type="text" defaultValue={newState.overallStoneWeight} onChange={e => dispatch({type:ACTIONS.OVERALL_STONE_WEIGHT, payload: e})} />
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Overall Stone Cost</Form.Label>
                        <Form.Control type="text" defaultValue={newState.overallStoneCost} onChange={e => dispatch({type:ACTIONS.OVERALL_STONE_COST, payload: e})} />
                    </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Item Price</Form.Label>
                        <Form.Control type="text" defaultValue={newState.itemPrice} onChange={e => dispatch({type:ACTIONS.ITEM_PRICE, payload: e.target.value})} />
                    </Form.Group>
                </div>
            </div>
            <div className="d-flex justify-content-center m-3">
                <Button variant="primary" className="mt-3 mb-3" onClick={() => {
                    axios.put(`http://localhost:8080/ItemInfo/itemupdate/${item.itemId}`, newState)
                        .then(() => {
                            dispatch({type:ACTIONS.ITEM_INFO_STATUS, payload: "Item Updated Successfully!"})
                            setTimeout(() => {
                                dispatch1({type:action.SHOW1, payload: true})
                                dispatch1({type:action.SHOW2, payload: true})
                            }, 1000)
                        }).catch(err => {console.log(err)})
                }}>Modify Details</Button>
            </div>
        </>
    )
}

export default ItemUpdate