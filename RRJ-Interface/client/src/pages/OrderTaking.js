import React, { useReducer, useState } from "react";
import { Container, Form, Button, Modal } from "react-bootstrap";
import axios from "axios";

const initialState = {
    orderId: "",
    expectedDeliveryDate: "",
    customerMobile: "",
    customerRemarks: "",
    orderReceiverRemarks: "",
    orderStatus: "",
    GST: "",
    orderReceivedBy: "",
    orderResponsibility: "",
    customerFullName: "",
    customerInfoStatus: "",
    orderTakingStatus: "",
    itemInfoStatus: "",
    alternateMobileOne: "",
    alternateMobileTwo: "",
    address: "",
    remarks: "",
    itemId: "",
    itemType: "",
    itemName: "",
    itemDeliveryDate: "",
    customerComments: "",
    orderReceiverComments: "",
    itemStatus: "",
    itemResponsibility: "",
    makingCharges: "",
    itemGrossWeight: "",
    itemNetWeight: "",
    wastage: "",
    beadsWeight: "",
    beadsCost: "",
    stoneWeight: "",
    stoneCost: "",
    show1: false,
    show2: false,
    show3: false,
    nameShow: false,
    generateShow: true,
}

const ACTIONS = {
    SHOW1: "SHOW1",
    SHOW2: "SHOW2",
    SHOW3: "SHOW3",
    NAMESHOW: "NAMESHOW",
    GENERATESHOW: "GENERATESHOW",
    ORDER_ID: "ORDER_ID",
    CUSTOMER_FULL_NAME: "CUSTOMER_FULL_NAME",
    EXPECTED_DELIVERY_DATE: "EXPECTED_DELIVERY_DATE",
    CUSTOMER_MOBILE: "CUSTOMER_MOBILE",
    CUSTOMER_REMARKS: "CUSTOMER_REMARKS",
    ORDER_REVCEIVER_REMARKS: "ORDER_RECEIVER_REMARKS",
    ORDER_STATUS: "ORDER_STATUS",
    GST:"GST",
    ORDER_RECEIVED_BY: "ORDER_RECEIVED_BY",
    ORDER_RESPONSIBILITY: "ORDER_RESPONSIBILITY",
    SUBMISSION: "SUBMISSION",
    CUSTOMER_INFO_STATUS: "CUSTOMER_INFO_STATUS",
    ORDERTAKING_STATUS: "ORDERTAKING_STATUS",
    ITEM_INFO_STATUS: "ITEM_INFO_STATUS",
    ALTERNATE_MOBILE_ONE: "ALTERNATE_MOBILEONE",
    ALTERNATE_MOBILE_TWO: "ALTERNATE_MOBILETWO",
    ADDRESS: "ADDRESS",
    REMARKS: "REMARKS",
    ITEM_ID: "ITEM_ID",
    ITEM_TYPE: "ITEM_TYPE",
    ITEM_NAME: "ITEM_NAME",
    ITEM_DELIVERY_DATE: "ITEM_DELIVERY_DATE",
    CUSTOMER_COMMENTS: "CUSTOMER_COMMENTS",
    ORDER_RECEIVER_COMMENTS: "ORDER_RECEIVER_COMMENTS",
    ITEM_STATUS: "ITEM_STATUS",
    ITEM_RESPONSIBILITY: "ITEM_RESPONSIBILITY",
    MAKING_CHARGES: "MAKING_CHARGES",
    ITEM_GROSS_WEIGHT: "ITEM_GROSS_WEIGHT",
    ITEM_NET_WEIGHT: "ITEM_NET_WEIGHT",
    WASTAGE: "WASTAGE",
    BEADS_WEIGHT: "BEADS_WEIGHT",
    BEADS_COST: "BEADS_COST",
    STONE_WEIGHT: "STONE_WEIGHT",
    STONE_COST: "STONE_COST",
    ITEM_PRICE: "ITEM_PRICE",
    INITIAL: "INITIAL",
    ITEM_INFO_INITIAL_STATE: "ITEM_INFO_INITIAL_STATE",
    CUSTOMER_INFO_INITIAL_STATE: "CUSTOMER_INFO_INITIAL_STATE"
}

const reducer = (state, {type, payload}) => {
    switch(type){
        case ACTIONS.ITEM_PRICE:
            return {...state, itemPrice: payload.target.value}
        case ACTIONS.STONE_COST:
            return {...state, stoneCost: payload.target.value}
        case ACTIONS.STONE_WEIGHT:
            return {...state, stoneWeight: payload.target.value}
        case ACTIONS.BEADS_COST:
            return {...state, beadsCost: payload.target.value}
        case ACTIONS.BEADS_WEIGHT:
            return {...state, beadsWeight: payload.target.value}
        case ACTIONS.WASTAGE:
            return {...state, wastage: payload.target.value}
        case ACTIONS.ITEM_NET_WEIGHT:
            return {...state, itemNetWeight: payload.target.value}
        case ACTIONS.ITEM_GROSS_WEIGHT:
            return {...state, itemGrossWeight: payload.target.value}
        case ACTIONS.MAKING_CHARGES:
            return {...state, makingCharges: payload.target.value}
        case ACTIONS.ITEM_RESPONSIBILITY:
            return {...state, itemResponsibility: payload.target.value}
        case ACTIONS.ITEM_STATUS:
            return {...state, itemStatus: payload.target.value}
        case ACTIONS.ORDER_RECEIVER_COMMENTS:
            return {...state, orderReceiverComments: payload.target.value}
        case ACTIONS.CUSTOMER_COMMENTS:
            return {...state, customerComments: payload.target.value}
        case ACTIONS.ITEM_DELIVERY_DATE:
            return {...state, itemDeliveryDate: payload.target.value}
        case ACTIONS.ITEM_NAME:
            return {...state, itemName: payload.target.value}
        case ACTIONS.ITEM_TYPE:
            return {...state, itemType: payload.target.value}
        case ACTIONS.ITEM_ID:
            return {...state, itemId: payload}
        case ACTIONS.INITIAL:
            return initialState
        case ACTIONS.ORDER_ID:
            return {...state, orderId: payload}
        case ACTIONS.ALTERNATE_MOBILE_ONE:
            return {...state, alternateMobileOne: payload.target.value}
        case ACTIONS.ALTERNATE_MOBILE_TWO:
            return {...state, alternateMobileTwo: payload.target.value}
        case ACTIONS.ADDRESS:
            return {...state, address: payload.target.value}
        case ACTIONS.REMARKS:
            return {...state, remarks: payload.target.value}
        case ACTIONS.CUSTOMER_INFO_STATUS:
            return {...state, customerInfoStatus: payload}
        case ACTIONS.ORDERTAKING_STATUS:
            return {...state, orderTakingStatus: payload}
        case ACTIONS.ITEM_INFO_STATUS:
            return {...state, itemInfoStatus: payload}
        case ACTIONS.SUBMISSION:
            return initialState
        case ACTIONS.CUSTOMER_FULL_NAME:
            return {...state, customerFullName: payload}
        case ACTIONS.EXPECTED_DELIVERY_DATE:
            return {...state, expectedDeliveryDate: payload.target.value}
        case ACTIONS.CUSTOMER_MOBILE:
            return {...state, customerMobile: payload.target.value}
        case ACTIONS.CUSTOMER_REMARKS:
            return {...state, customerRemarks: payload.target.value}
        case ACTIONS.ORDER_REVCEIVER_REMARKS:
            return {...state, orderReceiverRemarks: payload.target.value}
        case ACTIONS.ORDER_STATUS:
            return {...state, orderStatus: payload.target.value}
        case ACTIONS.GST:
            return {...state, GST: payload.target.value}
        case ACTIONS.ORDER_RECEIVED_BY:
            return {...state, orderReceivedBy: payload.target.value}
        case ACTIONS.ORDER_RESPONSIBILITY:
            return {...state, orderResponsibility: payload.target.value}
        case ACTIONS.ITEM_INFO_INITIAL_STATE:
            return {...state,
                itemId: "",
                itemType: "",
                itemName: "",
                itemDeliveryDate: "",
                customerComments: "",
                orderReceiverComments: "",
                itemStatus: "",
                itemResponsibility: "",
                makingCharges: "",
                itemGrossWeight: "",
                itemNetWeight: "",
                wastage: "",
                beadsWeight: "",
                beadsCost: "",
                stoneWeight: "",
                stoneCost:"",
                itemPrice: ""
            }
        case ACTIONS.SHOW1:
            return {...state, show1: payload}
        case ACTIONS.SHOW2:
            return {...state, show2: payload}
        case ACTIONS.SHOW3:
            return {...state, show3: payload}
        case ACTIONS.NAMESHOW:
            return {...state, nameShow: payload}
        case ACTIONS.GENERATESHOW:
            return {...state, generateShow: payload}
        case ACTIONS.PREVORDERIDPATTERN:
            return {...state, prevOrderIdPattern: payload}
        case ACTIONS.PREVITEMIDPATTERN:
            return {...state, prevItemOrderIdPattern: payload}
        default:
            return state
    }
}

const OrderTaking = ({date}) => {

    const handleClose1 = () => dispatch({type:ACTIONS.SHOW1, payload: false})
    const handleClose2 = () => dispatch({type:ACTIONS.SHOW2, payload: false})
    const handleClose3 = () => {
        dispatch({type:ACTIONS.SHOW3, payload: false})
        dispatch({type:ACTIONS.ITEM_INFO_STATUS, payload: ""})
    }
    const [formfields, setFormfields] = useState([])
    const [newState, dispatch] = useReducer(reducer, initialState)

    const GenerateId = () => {
        axios.post("http://localhost:8080/OrderTaking/orderid", {})
            .then(res => {
                let newIdPattern = new Date().getFullYear().toString() + (new Date().getMonth() + 1).toString().padStart(2, "0") + new Date().getDate().toString().padStart(2, "0")
                let prevIdPattern = res.data[0]
                if(prevIdPattern === undefined){
                    let value = newIdPattern + "01"
                    dispatch({type:ACTIONS.ORDER_ID, payload: value})
                } else {
                    if(prevIdPattern.orderId.slice(0,8) !== newIdPattern){
                        let value = newIdPattern + "01"
                        dispatch({type:ACTIONS.ORDER_ID, payload: value})
                    } else {
                        let value = Number(prevIdPattern.orderId) + 1
                        dispatch({type:ACTIONS.ORDER_ID, payload: value.toString()})
                    }
                }
            })
            .catch(err => console.log(err))
        dispatch({type:ACTIONS.GENERATESHOW, payload: false})
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8080/OrderTaking/add", newState)
            .then(() => dispatch({type: ACTIONS.ORDERTAKING_STATUS, payload: "Order saved Successfully!"}))
            .catch(err => console.log(err));
        dispatch({type: ACTIONS.SUBMISSION})
        dispatch({type:ACTIONS.NAMESHOW, payload:false})
        setTimeout(() => {
            dispatch({type: ACTIONS.INITIAL})
            dispatch({type:ACTIONS.GENERATESHOW, payload: true})
            setFormfields([])
        },2000)
    }

    const Validate = () => {
        axios.post("http://localhost:8080/CustomerInfo/check", newState)
        .then(res => {
            if(res.data.length === 0) {
                dispatch({type:ACTIONS.SHOW1, payload: true})
            }
            else{
                dispatch({type: ACTIONS.CUSTOMER_FULL_NAME, payload: res.data[0].customerFullName})
            }
        })
        .catch(err => console.log(err));
    }


    return (
        <>
        <Modal show={newState.show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Customer doesn't exist</Modal.Title>
        </Modal.Header>
        <Modal.Body>Click here to add Customer</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            dispatch({type:ACTIONS.SHOW1, payload: false})
            dispatch({type:ACTIONS.SHOW2, payload: true})
          }}>
            Add New Customer
          </Button>
        </Modal.Footer>
      </Modal>
        <Modal show={newState.show2} onHide={handleClose2} className="modal-lg">
        <Modal.Header closeButton>
          <Modal.Title>Enter Customer Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <div className="row"><h5 className="text-dark d-flex flex-row justify-content-center">{newState.customerInfoStatus}</h5></div>
            <Form.Group className="mt-3">
                <Form.Label className="fw-bold m-1">Customer Full Name</Form.Label>
                <Form.Control type="text"  onChange={e => dispatch({type: ACTIONS.CUSTOMER_FULL_NAME, payload: e})}/>
            </Form.Group>
            <div className="row">
                <Form.Group className="mt-3">
                    <Form.Label className="fw-bold m-1">Customer Mobile</Form.Label>
                    <Form.Control type="text" defaultValue={newState.customerMobile} onChange={e => dispatch({type: ACTIONS.CUSTOMER_MOBILE, payload: e})}/>
                </Form.Group>
            </div>
            <div className="row">
                <Form.Group className="mt-3">
                    <Form.Label className="fw-bold m-1">Alternate Mobile 01</Form.Label>
                    <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.ALTERNATE_MOBILE_ONE, payload: e})} />
                </Form.Group>
            </div>
            <div className="row">
                <Form.Group className="mt-3">
                    <Form.Label className="fw-bold m-1">Alternate Mobile 02</Form.Label>
                    <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.ALTERNATE_MOBILE_TWO, payload: e})} />
                </Form.Group>
            </div>   
            <div className="row">
                <Form.Group className="mt-3">
                    <Form.Label className="fw-bold m-1">Address</Form.Label>
                    <Form.Control type="text" onChange={e => dispatch({type: ACTIONS.ADDRESS, payload: e})} />
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
            dispatch({type:ACTIONS.SHOW2, payload: false})
            dispatch({type:ACTIONS.NAMESHOW, payload: true})
            const customerData = {
                customerFullName: newState.customerFullName.target.value,
                customerMobile: newState.customerMobile,
                alternateMobileOne: newState.alternateMobileOne,
                alternateMobileTwo: newState.alternateMobileTwo,
                address: newState.address,
                remarks: newState.remarks
            }
            axios.post("http://localhost:8080/CustomerInfo/add",customerData)
            .then((response) => {
                dispatch({type:ACTIONS.CUSTOMER_INFO_STATUS, payload: response.data})
                setTimeout(() => {dispatch({type:ACTIONS.SHOW2, payload: false})},2000)
            })
            .catch(err => console.log(err.message));
          }}>
            Save Customer
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={newState.show3} onHide={handleClose3} className="modal-xl">
        <Modal.Header closeButton>
            <Modal.Title>Enter Item Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                        <Form.Control type="text" onChange={e => dispatch({type:ACTIONS.ITEM_TYPE, payload: e})} />
                    </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Item Name</Form.Label>
                        <Form.Control type="text" onChange={e => dispatch({type:ACTIONS.ITEM_NAME, payload: e})} />
                    </Form.Group>
                </div>
                <div className="col-4">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Delivery Date</Form.Label>
                        <Form.Control type="text" placeholder="dd/mm/yyyy" onChange={e => dispatch({type:ACTIONS.ITEM_DELIVERY_DATE, payload: e})}/>
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
                        <Form.Control type="text" onChange={e => dispatch({type:ACTIONS.ITEM_STATUS, payload: e})} />
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Item Responsibility</Form.Label>
                        <Form.Control type="text" onChange={e => dispatch({type:ACTIONS.ITEM_RESPONSIBILITY, payload: e})} />
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Making Charges</Form.Label>
                        <Form.Control type="text" onChange={e => dispatch({type:ACTIONS.MAKING_CHARGES, payload: e})} />
                    </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Item Gross Weight</Form.Label>
                        <Form.Control type="text" onChange={e => dispatch({type:ACTIONS.ITEM_GROSS_WEIGHT, payload: e})} />
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Item Net Weight</Form.Label>
                        <Form.Control type="text" onChange={e => dispatch({type:ACTIONS.ITEM_NET_WEIGHT, payload: e})} />
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Wastage</Form.Label>
                        <Form.Control type="text" onChange={e => dispatch({type:ACTIONS.WASTAGE, payload: e})} />
                    </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Beads Weight</Form.Label>
                        <Form.Control type="text" onChange={e => dispatch({type:ACTIONS.BEADS_WEIGHT, payload: e})} />
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Beads Cost</Form.Label>
                        <Form.Control type="text" onChange={e => dispatch({type:ACTIONS.BEADS_COST, payload: e})} />
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Stone Weight</Form.Label>
                        <Form.Control type="text" onChange={e => dispatch({type:ACTIONS.STONE_WEIGHT, payload: e})} />
                    </Form.Group>
                </div>
                <div className="col">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Stone Cost</Form.Label>
                        <Form.Control type="text" onChange={e => dispatch({type:ACTIONS.STONE_COST, payload: e})} />
                    </Form.Group>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Item Price</Form.Label>
                        <Form.Control type="text"  onChange={e => dispatch({type:ACTIONS.ITEM_PRICE, payload: e})} />
                    </Form.Group>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            axios.post("http://localhost:8080/ItemInfo/add", newState)
                .then(res => {
                    dispatch({type:ACTIONS.ITEM_INFO_STATUS, payload: res.data})
                    setFormfields([...formfields, newState.itemName])
                })
                .catch(err => console.log(err))
            dispatch({type:ACTIONS.ITEM_INFO_INITIAL_STATE})
            setTimeout(() => {
                dispatch({type:ACTIONS.SHOW3, payload: false})
                dispatch({type:ACTIONS.ITEM_INFO_STATUS, payload: ""})
            }, 1000)
          }}>Add New Item</Button>
        </Modal.Footer>
      </Modal>
            <Container>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item fw-bold"><a href="/homepage">Home</a></li>
                        <li className="breadcrumb-item fw-bold"><a href="/infoentry">Information Entry</a></li>
                        <li className="breadcrumb-item active text-white fw-bold" aria-current="page">Order Taking</li>
                    </ol>
                </nav>
                <Form>
                    <div className="row"><h5 className="text-success d-flex flex-row justify-content-center">{newState.orderTakingStatus}</h5></div>
                    <div className="row">
                        <div className="col">
                            <div className="d-flex flex-column">
                                <div>
                                    <fieldset disabled>
                                        <Form.Group className="mt-3">
                                            <Form.Label className="fw-bold m-1">Order Id</Form.Label>
                                            <Form.Control type="text" defaultValue={newState.orderId}/>
                                        </Form.Group>
                                    </fieldset>
                                </div>
                                <div className="mt-2">
                                    {
                                        newState.generateShow? <Button variant="secondary" onClick={GenerateId}>Get Order Id</Button> : <div></div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <fieldset disabled>
                                <Form.Group className="mt-3">
                                    <Form.Label className="fw-bold m-1">Date</Form.Label>
                                    <Form.Control type="text" defaultValue={date} />
                                </Form.Group>
                            </fieldset>
                        </div>
                        <div className="col">
                            <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">Expected Delivery Date</Form.Label>
                                <Form.Control type="text" placeholder="dd/mm/yyyy" onChange={e => {
                                    dispatch({type: ACTIONS.EXPECTED_DELIVERY_DATE, payload: e})
                                    if(newState.status !== ""){dispatch({type: ACTIONS.STATUS, payload: ""})}
                                    }} />
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
                                                <Form.Control type="text" defaultValue={data}
                                                />
                                            </div>
                                            <div className="col-1"><Button variant="dark">Edit</Button></div>
                                            <div className="col-1"><Button variant="danger">Delete</Button></div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className="col">
                            <Button variant="info" onClick={() => {
                                 dispatch({type:ACTIONS.SHOW3, payload: true})
                                axios.post("http://localhost:8080/ItemInfo/itemid",{})
                                .then(res => {
                                    let newIdPattern = newState.orderId
                                    let prevIdPattern = res.data[0]
                                    if(prevIdPattern === undefined){
                                        let value = newIdPattern + "01"
                                        dispatch({type:ACTIONS.ITEM_ID, payload: value})
                                    } else {
                                        if(prevIdPattern.itemId.slice(0,10) !== newIdPattern){
                                            let value = newIdPattern + "01"
                                            dispatch({type:ACTIONS.ITEM_ID, payload: value})
                                        } else {
                                            let value = Number(prevIdPattern.itemId) + 1
                                            dispatch({type:ACTIONS.ITEM_ID, payload: value.toString()})
                                        }}
                                }).catch(err => console.log(err))
                            }}>Add more...</Button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">Order Status</Form.Label>
                                <Form.Control type="text" onChange={e => {
                                    dispatch({type: ACTIONS.ORDER_STATUS, payload: e})
                                    if(newState.status !== ""){dispatch({type: ACTIONS.STATUS, payload: ""})}
                                }} />
                            </Form.Group>
                        </div>
                        <div className="col-1">
                            <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">GST</Form.Label>
                                <Form.Control type="text" onChange={e => {
                                    dispatch({type: ACTIONS.GST, payload: e})
                                    if(newState.status !== ""){dispatch({type: ACTIONS.STATUS, payload: ""})}
                                }} />
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">Order's Responsibility</Form.Label>
                                <Form.Control type="text" onChange={e => {
                                    dispatch({type: ACTIONS.ORDER_RESPONSIBILITY, payload: e})
                                    if(newState.status !== ""){dispatch({type: ACTIONS.STATUS, payload: ""})}
                                }} />
                            </Form.Group>
                        </div>
                        <div className="col-3">
                            <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">Order Received By</Form.Label>
                                <Form.Control type="text" onChange={e => {
                                    dispatch({type: ACTIONS.ORDER_RECEIVED_BY, payload: e})
                                    if(newState.status !== ""){dispatch({type: ACTIONS.STATUS, payload: ""})}
                                }} />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">Customer Remarks</Form.Label>
                                <Form.Control type="text" onChange={e => {
                                    dispatch({type: ACTIONS.CUSTOMER_REMARKS, payload: e})
                                    if(newState.status !== ""){dispatch({type: ACTIONS.STATUS, payload: ""})}
                                }} />
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">Order Receiver Remarks</Form.Label>
                                <Form.Control type="text" onChange={e => {
                                    dispatch({type: ACTIONS.ORDER_REVCEIVER_REMARKS, payload: e})
                                    if(newState.status !== ""){dispatch({type: ACTIONS.STATUS, payload: ""})}
                                }} />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">Customer Mobile</Form.Label>
                                <Form.Control type="text" onChange={e => {
                                    dispatch({type: ACTIONS.CUSTOMER_MOBILE, payload: e})
                                    if(newState.status !== ""){dispatch({type: ACTIONS.STATUS, payload: ""})}
                                }} />
                                <Button className="btn btn-secondary mt-2" onClick={Validate}>Validate Mobile</Button>
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Customers Full Name</Form.Label>
                            <Form.Control type="text" defaultValue={newState.nameShow? newState.customerFullName.target.value : newState.customerFullName} onChange={e => dispatch({type: ACTIONS.CUSTOMER_FULL_NAME, payload: e})}/>
                            </Form.Group>
                        </div>
                    </div>
                </Form>
                <div className="d-flex justify-content-center m-3">
                    <Button variant="primary" className="mt-3 mb-3" onClick={SubmitHandler}>Save Order</Button>
                </div>
            </Container>

        </>
    )
}

export default OrderTaking