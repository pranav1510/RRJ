import axios from "axios";
import React, { useReducer } from "react";
import { Container, Form, Button } from "react-bootstrap";

const initialState = {
    itemName: "",
    itemType: "",
    customerComments: "",
    receiverComments: "",
    itemResponsibility: "",
    itemStatus: "",
    itemPrice: "",
    makingCharges: "",
    itemGrossWeight: "",
    itemNetWeight: "",
    Wastage: "",
    beadsWeight: "",
    beadsCost: "",
    stoneWeight: "",
    stonesCost: ""
}

const ACTIONS = {
    ITEM_NAME: "ITEM_NAME",
    ITEM_TYPE: "ITEM_TYPE",
    CUSTOMER_COMMENTS: "CUSTOMER_COMMENTS",
    RECEIVER_COMMENTS: "RECEIVER_COMMENTS",
    ITEM_RESPONSIBILITY: "ITEM_RESPONSIBILITY",
    ITEM_STATUS: "ITEM_STATUS",
    ITEM_PRICE: "ITEM_PRICE",
    MAKING_CHARGES: "MAKING_CHARGES",
    ITEM_GROSS_WEIGHT: "ITEM_GROSS_WEIGHT",
    ITEM_NET_WEIGHT: "ITEM_NET_WEIGHT",
    WASTAGE: "WASTAGE",
    BEADS_WEIGHT: "BEADS_WEIGHT",
    STONE_WEIGHT: "STONE_WEIGHT",
    BEADS_COST: "BEADS_COST",
    STONES_COST: "STONES_COST"
}

const reducer = (state, {type, payload}) => {
    switch(type){
        case ACTIONS.ITEM_NAME:
            return {...state, itemName: payload.target.value}
        case ACTIONS.ITEM_TYPE:
            return {...state, itemType: payload.target.value}
        case ACTIONS.CUSTOMER_COMMENTS:
            return {...state, customerComments: payload.target.value}
        case ACTIONS.RECEIVER_COMMENTS:
            return {...state, receiverComments: payload.target.value}
        case ACTIONS.ITEM_RESPONSIBILITY:
            return {...state, itemResponsibility: payload.target.value}
        case ACTIONS.ITEM_STATUS:
            return {...state, itemStatus: payload.target.value}
        case ACTIONS.ITEM_PRICE:
            return {...state, itemPrice: payload.target.value}
        case ACTIONS.MAKING_CHARGES:
            return {...state, makingCharges: payload.target.value}
        case ACTIONS.ITEM_GROSS_WEIGHT:
            return {...state, itemGrossWeight: payload.target.value}
        case ACTIONS.ITEM_NET_WEIGHT:
            return {...state, itemNetWeight: payload.target.value}
        case ACTIONS.WASTAGE:
            return {...state, wastage: payload.target.value}
        case ACTIONS.BEADS_WEIGHT:
            return {...state, beadsWeight: payload.target.value}
        case ACTIONS.STONE_WEIGHT:
            return {...state, stoneWeight: payload.target.value}
        case ACTIONS.BEADS_COST:
            return {...state, beadsCost: payload.target.value}
        case ACTIONS.STONES_COST:
            return {...state, stonesCost: payload.target.value}
        default:
            return state
    }
}

const ItemInfo = ({date}) => {

    const [newState,dispatch] = useReducer(reducer, initialState)

    const SubmitHandler = () => {
        axios.post("http://localhost:8080/OrderDelivery/add", newState)
        .then(() => console.log("new delivered item is added!"))
        .catch(err => console.log(err))
    }


    return(
        <>
        <Container>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item fw-bold"><a href="/homepage">Home</a></li>
                    <li className="breadcrumb-item active text-white fw-bold" aria-current="page">Item Information</li>
                </ol>
            </nav>
            <Form>
                <div className="row">
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Item Type</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.ITEM_TYPE, payload: e})}/>
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Item Status</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.ITEM_STATUS, payload: e})}/>
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Item Responsibility</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.ITEM_RESPONSIBILITY, payload: e})}/>
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Item Name</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.ITEM_NAME, payload: e})}/>
                        </Form.Group>
                    </div>
                    <div className="col-4">
                        <fieldset disabled>
                            <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">Delivery Date</Form.Label>
                                <Form.Control type="text" value={date}/>
                            </Form.Group>
                        </fieldset>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Customer Comments</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.CUSTOMER_COMMENTS, payload: e})}/>
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Receiver Comments</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.RECEIVER_COMMENTS, payload: e})}/>
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Making Charges</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.MAKING_CHARGES, payload: e})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Wastage</Form.Label>
                            <Form.Control type="text"  onChange={e => dispatch({type: ACTIONS.WASTAGE, payload: e})}/>
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Item Gross Weight</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.ITEM_GROSS_WEIGHT, payload: e})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Item Net Weight</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.ITEM_NET_WEIGHT, payload: e})} />
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Beads Weight</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.BEADS_WEIGHT, payload: e})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Beads Cost</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.BEADS_COST, payload: e})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Stone Weight</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.STONE_WEIGHT, payload: e})} />
                        </Form.Group>
                    </div>
                    <div className="col">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Stones Cost</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.STONES_COST, payload: e})} />
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <Form.Group className="mt-3">
                            <Form.Label class="fw-bold m-1">Item Price</Form.Label>
                            <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.ITEM_PRICE, payload: e})}/>
                        </Form.Group>
                    </div>
                </div>
                <div className="d-flex justify-content-center m-3">
                    <Button variant="primary" className="mt-3 mb-3" onClick={SubmitHandler}>Save Item</Button>
                </div>
            </Form>
        </Container>
        </>
    )
}

export default ItemInfo