import axios from "axios";
import React, { useReducer } from "react";
import { Button, Card, Container, Form, Modal, Table } from "react-bootstrap";

const date1 = new Date();
const val = date1.getFullYear().toString() + "-" + (date1.getMonth() + 1).toString().padStart(2, "0") + "-" + date1.getDate().toString().padStart(2, "0")

const initialState = {
    todayDate : String(val),
    details: [],
    show1: false,
    show2: false,
    show3: false,
    overallCashIn: "",
    overallCashOut: "",
    overallGoldIn: "",
    overallGoldOut: "",
    overallSilverIn: "",
    overallSilverOut: "",
    overallAccountIn: "",
    overallAccountOut: "",
    opening: [],
    closingGold: "",
    closingSilver: "",
    closingCash: "",
    closingAccount: ""
}

const ACTIONS = {
    TODAY_DATE : "TODAY_DATE",
    DETAILS: "DETAILS",
    SHOW1: "SHOW1",
    SHOW2: "SHOW2",
    SHOW3: "SHOW3",
    OVERALL_CASH_IN: "OVERALL_CASH_IN",
    OVERALL_CASH_OUT: "OVERALL_CASH_OUT",
    OVERALL_GOLD_IN: "OVERALL_GOLD_IN",
    OVERALL_GOLD_OUT: "OVERALL_GOLD_OUT",
    OVERALL_SILVER_IN: "OVERALL_SILVER_IN",
    OVERALL_SILVER_OUT: "OVERALL_SILVER_OUT",
    OVERALL_ACCOUNT_IN: "OVERALL_ACCOUNT_IN",
    OVERALL_ACCOUNT_OUT: "OVERALL_ACCOUNT_OUT",
    OPENING: "OPENING",
    CLOSING_GOLD: "CLOSING_GOLD",
    CLOSING_SILVER: "CLOSING_SILVER",
    CLOSING_CASH: "CLOSING_CASH",
    CLOSING_ACCOUNT: "CLOSING_ACCOUNT"
}

const reducer = (state, {type, payload}) => {
    switch(type){
        case ACTIONS.TODAY_DATE:
            return {...state, todayDate: payload}
        case ACTIONS.DETAILS:
            return {...state, details: payload}
        case ACTIONS.SHOW1:
            return {...state, show1: payload}
        case ACTIONS.SHOW2:
            return {...state, show2: payload}
        case ACTIONS.SHOW3:
            return {...state, show3: payload}
        case ACTIONS.OVERALL_CASH_IN:
            return {...state, cashIn: payload}
        case ACTIONS.OVERALL_CASH_OUT:
            return {...state, cashOut: payload}
        case ACTIONS.OVERALL_GOLD_IN:
            return {...state, goldIn: payload}
        case ACTIONS.OVERALL_GOLD_OUT:
            return {...state, goldOut: payload}
        case ACTIONS.OVERALL_SILVER_IN:
            return {...state, silverIn: payload}
        case ACTIONS.OVERALL_SILVER_OUT:
            return {...state, silverOut: payload}
        case ACTIONS.OVERALL_ACCOUNT_IN:
            return {...state, accountIn: payload}
        case ACTIONS.OVERALL_ACCOUNT_OUT:
            return {...state, accountOut: payload}
        case ACTIONS.OPENING:
            return {...state, opening: payload}
        case ACTIONS.CLOSING_GOLD:
            return {...state, closingGold: payload}
        case ACTIONS.CLOSING_SILVER:
            return {...state, closingSilver: payload}
        case ACTIONS.CLOSING_CASH:
            return {...state, closingCash: payload}
        case ACTIONS.CLOSING_ACCOUNT:
            return {...state, closingAccount: payload}
        default:
            return state
    }
}

const ValidationPage = ({navigate}) => {

    const [newState, dispatch] = useReducer(reducer, initialState)

    const handleClose1 = () => {dispatch({type:ACTIONS.SHOW1, payload: false})}
    const handleClose3 = () => {dispatch({type:ACTIONS.SHOW3, payload: false})}

    return(
        <>
        <Modal show={newState.show1} onHide={handleClose1} >
        <Modal.Header closeButton>
          <Modal.Title>Confirm to Validate the Transactions</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            axios.get("http://localhost:8080/ClosingInfo/getdetails")
                .then(res => {
                    const val = res.data[0]
                    dispatch({type:ACTIONS.OPENING, payload: val})
                    dispatch({type:ACTIONS.CLOSING_CASH, payload: String(Number(val[1]) + Number(newState.cashIn) - Number(newState.cashOut))})
                    dispatch({type:ACTIONS.CLOSING_GOLD, payload: String(Number(val[2]) +  Number(newState.goldIn) - Number(newState.goldOut))})
                    dispatch({type:ACTIONS.CLOSING_SILVER, payload: String(Number(val[3]) + Number(newState.silverIn) - Number(newState.silverOut))})
                    dispatch({type:ACTIONS.CLOSING_ACCOUNT, payload: String(Number(val[4]) + Number(newState.accountIn) - Number(newState.accountOut))})
                })
                .catch(err => console.log(err))
                
                dispatch({type:ACTIONS.SHOW1, payload: false})
                dispatch({type:ACTIONS.SHOW3, payload:true})
          }}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
        <Modal show={newState.show3} onHide={handleClose3} className="modal-lg">
        <Modal.Header closeButton>
          <Modal.Title>Transaction Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h5 className="text-decoration-underline">Opening Balance:</h5>
            <Table  className="table-hover w-100 mt-1">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Cash</th>
                        <th scope="col">Gold</th>
                        <th scope="col">Silver</th>
                        <th scope="col">Account</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {
                            newState.opening.map((val, index) => {
                                return(
                                    <td key={index}>{val}</td>
                                )
                            })
                        }
                    </tr>
                </tbody>
            </Table>
            <h5 className="text-decoration-underline mt-3">Today's Transactions:</h5>
            <Table>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">In</th>
                        <th scope="col">Out</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Cash</th>
                        <td>{newState.cashIn}</td>
                        <td>{newState.cashOut}</td>
                    </tr>
                    <tr>
                        <th>Gold</th>
                        <td>{newState.goldIn}</td>
                        <td>{newState.goldOut}</td>
                    </tr>
                    <tr>
                        <th>Silver</th>
                        <td>{newState.silverIn}</td>
                        <td>{newState.silverOut}</td>
                    </tr>
                    <tr>
                        <th>Account</th>
                        <td>{newState.accountIn}</td>
                        <td>{newState.accountOut}</td>
                    </tr>
                </tbody>
            </Table>
            <h5 className="text-decoration-underline mt-3">Closing Balance:</h5>
            <Table>
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Cash</th>
                        <th scope="col">Gold</th>
                        <th scope="col">Silver</th>
                        <th scope="col">Account</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{val}</td>
                        <td>{newState.closingCash}</td>
                        <td>{newState.closingGold}</td>
                        <td>{newState.closingSilver}</td>
                        <td>{newState.closingAccount}</td>
                    </tr>
                </tbody>
            </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            axios.post("http://localhost:8080/ClosingInfo/add",{
                date: val,
                cash: newState.closingCash,
                gold: newState.closingGold,
                silver: newState.closingSilver,
                account: newState.closingAccount
            })
                .then(() => {console.log("saved")})
                .catch(err => console.log(err))
          }}>
            Save Closing Balance
          </Button>
        </Modal.Footer>
      </Modal>
        <Container>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb flex-nowrap">
                    <li className="breadcrumb-item fw-bold text-truncate"><p style={{"cursor":"pointer"}} onClick={() => {navigate('/homepage')}}>Home</p></li>
                    <li className="breadcrumb-item fw-bold text-truncate"><p style={{"cursor":"pointer"}} onClick={() => {navigate('/infoentry')}}>InfoEntry__</p></li>
                    <li className="breadcrumb-item active text-white fw-bold text-truncate" aria-current="page">Validation</li>
                </ol>
            </nav>
            <div className="row justify-content-center">
                <div className="col-sm-4">
                    <Card className="m-3 rounded">
                        <Card.Body>
                            <Card.Title>
                                <Form.Group>
                                    <Form.Control type="date" defaultValue={newState.todayDate} onChange={e => {
                                        dispatch({type:ACTIONS.TODAY_DATE, payload: String(e.target.value)})
                                    }}/>
                                    <Button className="mt-3" variant="primary" onClick={() => {
                                        axios.post("http://localhost:8080/TransactionInfo/getdetails", {transactionDate: newState.todayDate})
                                            .then((res) => {
                                                dispatch({type:ACTIONS.DETAILS, payload: res.data})
                                                dispatch({type:ACTIONS.SHOW2, payload: true})
                                            })
                                            .catch(err => console.log(err))
                                    }}>Get Transaction Details</Button>
                                </Form.Group>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <Table className="table-hover w-100 mt-4">
                <thead>
                    <tr>
                        <th scope="col">Transaction Id</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Description</th>
                        <th scope="col">Status</th>
                        <th scope="col">Done By</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        newState.details.map((info, index) => {
                            return(
                                <tr key={index}>
                                    <td>{info.transactionId}</td>
                                    <td>{info.fullName}</td>
                                    <td>{info.transactionType}</td>
                                    <td>{info.transactionDescription}</td>
                                    <td>{info.transactionStatus}</td>
                                    <td>{info.transactionDoneBy}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            {
                newState.show2 ? (
                    <Button variant="info" onClick={() => {
                        dispatch({type:ACTIONS.SHOW1, payload: true})
                        axios.post("http://localhost:8080/DayInfo/getdetails", {date: newState.todayDate})
                            .then(res => {
                                let cashin = 0
                                let cashout = 0
                                let goldin = 0
                                let goldout = 0
                                let silverin = 0
                                let silverout = 0
                                let acntin = 0
                                let acntout = 0
                                
                                res.data.forEach(element => {
                                    if (element.cashIn !== ""){cashin += Number(element.cashIn)}
                                    if (element.cashOut !== ""){cashout += Number(element.cashOut)}
                                    if (element.goldIn !== ""){goldin += Number(element.goldIn)}
                                    if (element.goldOut !== ""){goldout += Number(element.goldOut)}
                                    if (element.silverIn !== ""){silverin += Number(element.silverIn)}
                                    if (element.silverOut !== ""){silverout += Number(element.silverOut)}
                                    if (element.accountIn !== ""){acntin += Number(element.accountIn)}
                                    if (element.accountOut !== ""){acntout += Number(element.accountOut)}
                                });

                                
                                dispatch({type:ACTIONS.OVERALL_CASH_IN , payload: String(cashin)})
                                dispatch({type:ACTIONS.OVERALL_CASH_OUT , payload: String(cashout)})
                                dispatch({type:ACTIONS.OVERALL_GOLD_IN , payload: String(goldin)})
                                dispatch({type:ACTIONS.OVERALL_GOLD_OUT , payload: String(goldout)})
                                dispatch({type:ACTIONS.OVERALL_SILVER_IN , payload: String(silverin)})
                                dispatch({type:ACTIONS.OVERALL_SILVER_OUT , payload: String(silverout)})
                                dispatch({type:ACTIONS.OVERALL_ACCOUNT_IN , payload: String(acntin)})
                                dispatch({type:ACTIONS.OVERALL_ACCOUNT_OUT , payload: String(acntout)})
                            })
                            .catch(err => console.log(err))
                    }} >Validate Transactions</Button>
                ) : <></>
            }
        </Container>
        </>
    )
}

export default ValidationPage