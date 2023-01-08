import axios from "axios";
import React, { useReducer } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { setGoldPrice, setSilverPrice } from "./DailyPriceSlice";
import { useDispatch } from "react-redux";

const temp = new Date()
const time = String(temp.getFullYear()).padStart(2, '0') + String(temp.getMonth() + 1).padStart(2, '0') + String(temp.getDate()).padStart(2, '0') + String(temp.getHours()).padStart(2, "0") + String(temp.getMinutes()).padStart(2, "0")
const initialState = {
    date: time,
    goldCost: "",
    silverCost: "",
    status: ""
}

const ACTIONS = {
    DATE: "DATE",
    GOLD_COST : "GOLD_COST",
    SILVER_COST: "SILVER_COST",
    STATUS: "STATUS"
}

const reducer = (state, {type, payload}) => {
    switch(type){
        case ACTIONS.DATE:
            return {...state, date: payload}
        case ACTIONS.GOLD_COST:
            return {...state, goldCost: payload.target.value}
        case ACTIONS.SILVER_COST:
            return {...state, silverCost: payload.target.value}
        case ACTIONS.STATUS:
            return {...state, status: payload}
        default:
            return state
    }
}

const DailyPrice = ({navigate}) => {

    const dispatcher = useDispatch()
    const [newState, dispatch] = useReducer(reducer, initialState)

    const SubmitHandler = () => {
        axios.post("http://localhost:8080/DailyPrice/add", newState)
            .then((res) => {
                let val = res.data[0]
                if(val !== undefined){
                    dispatcher(setGoldPrice(val[0]))
                    dispatcher(setSilverPrice(val[1]))
                }
                dispatch({type:ACTIONS.STATUS, payload: "Saved Successfully!"})
            })
    }

    return(
        <>
        <Container>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb flex-nowrap">
                    <li className="breadcrumb-item fw-bold text-truncate"><p style={{"cursor":"pointer"}} onClick={() => {navigate('/homepage')}}>Home</p></li>
                    <li className="breadcrumb-item fw-bold text-truncate"><p style={{"cursor":"pointer"}} onClick={() => {navigate('/infoentry')}}>InfoEntry__</p></li>
                    <li className="breadcrumb-item active text-white fw-bold text-truncate" aria-current="page">DailyPriceEntry</li>
                </ol>
            </nav>
            <Form>
            <div className="row"><h5 className="text-success d-flex flex-row justify-content-center">{newState.status}</h5></div>
                <div className="d-flex justify-content-center">
                    <div className="row">
                        <div className="col">
                            <fieldset disabled>
                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-bold m-1">Date</Form.Label>
                                    <Form.Control type="text" defaultValue={newState.date}/>
                                </Form.Group>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="row">
                        <div className="col-12">
                            <Form.Group className="mb-3">
                                <Form.Label className="fw-bold m-1">Gold Price</Form.Label>
                                <div className="d-flex justify-content-center m-1">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text material-symbols-outlined">
                                                currency_rupee
                                            </span>
                                        </div>
                                        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"
                                        onChange={e => dispatch({type:ACTIONS.GOLD_COST, payload: e})}
                                        />
                                        <div className="input-group-append">
                                            <span className="input-group-text">/10 grams</span>
                                        </div>
                                    </div>
                                </div>
                            </Form.Group>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="row">
                        <div className="col-12">
                            <Form.Group className="mb-3">
                                <Form.Label className="fw-bold m-1">Silver Price</Form.Label>
                                <div className="d-flex justify-content-center m-1">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text material-symbols-outlined">
                                                currency_rupee
                                            </span>
                                        </div>
                                        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"
                                        onChange={e => dispatch({type:ACTIONS.SILVER_COST, payload: e})}
                                        />
                                        <div className="input-group-append">
                                            <span className="input-group-text">/10 grams</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center m-3">
                                    <Button variant="primary" className="mt-3 mb-3" onClick={SubmitHandler}>Submit</Button>
                                </div>
                            </Form.Group>
                        </div>
                    </div>
                </div>
            </Form>
        </Container>       
        </>
    )
}

export default DailyPrice