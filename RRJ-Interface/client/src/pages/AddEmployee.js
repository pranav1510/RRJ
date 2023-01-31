import axios from "axios";
import React, { useReducer } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

const initialState = {
    employeeUsername: "",
    password: "",
    employeeName: "",
    employeeMobile: "",
    role: ""
}

const initialState1 = {
    employeeUsername: false,
    password: false,
    employeeName: false,
    employeeMobile: false,
    role: false
}


const ACTIONS1= {
    EMPLOYEE_USERNAME: "EMPLOYEE_USERNAME",
    PASSWORD: "PASSWORD",
    EMPLOYEE_NAME: "EMPLOYEE_NAME",
    EMPLOYEE_MOBILE: "EMPLOYEE_MOBILE",
    ROLE: "ROLE"
}

const ACTIONS= {
    EMPLOYEE_USERNAME: "EMPLOYEE_USERNAME",
    PASSWORD: "PASSWORD",
    EMPLOYEE_NAME: "EMPLOYEE_NAME",
    EMPLOYEE_MOBILE: "EMPLOYEE_MOBILE",
    ROLE: "ROLE"
}

const reducer = (state, {type, payload}) => {
    switch(type){
        case ACTIONS.EMPLOYEE_USERNAME:
            return {...state, employeeUsername: payload}
        case ACTIONS.PASSWORD:
            return {...state, password: payload}
        case ACTIONS.EMPLOYEE_NAME:
            return {...state, employeeName: payload.toUpperCase()}
        case ACTIONS.EMPLOYEE_MOBILE:
            return {...state, employeeMobile: payload}
        case ACTIONS.ROLE:
            return {...state, role: payload.toUpperCase()}
        default:
            return state
    }
}

const reducer1 = (state, {type, payload}) => {
    switch(type){
        case ACTIONS.EMPLOYEE_USERNAME:
            return {...state, employeeUsername: payload}
        case ACTIONS.PASSWORD:
            return {...state, password: payload}
        case ACTIONS.EMPLOYEE_NAME:
            return {...state, employeeName: payload}
        case ACTIONS.EMPLOYEE_MOBILE:
            return {...state, employeeMobile: payload}
        case ACTIONS.ROLE:
            return {...state, role: payload}
        default:
            return state
    }
}

const AddEmployee = () => {

    const [newState, dispatch] = useReducer(reducer, initialState)
    const [newState1, dispatch1] = useReducer(reducer1, initialState1)

    return(
        <Card>
            <Container>
                <Form>
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Username</Form.Label>
                        <Form.Control type="text" style={{border: newState1.employeeUsername ? "3px solid red" : ""}} onChange={e => {
                            dispatch({type:ACTIONS.EMPLOYEE_USERNAME, payload: e.target.value})
                            dispatch1({type:ACTIONS1.EMPLOYEE_USERNAME, payload: false})
                            }}/>
                        {
                            newState1.employeeUsername ? (<p className="text-danger m-1 small fw-bold">Enter valid username!</p>) : <></>
                        }
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Password</Form.Label>
                        <Form.Control type="password" style={{border: newState1.password ? "3px solid red" : ""}} onChange={e => {
                            dispatch({type:ACTIONS.PASSWORD, payload: e.target.value})
                            dispatch1({type:ACTIONS1.PASSWORD, payload: false})
                            }} />
                        {
                            newState1.password ? (<p className="text-danger m-1 small fw-bold">Enter valid password!</p>) : <></>
                        }
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Employee Full Name</Form.Label>
                        <Form.Control type="text" style={{border: newState1.employeeName ? "3px solid red" : ""}} onChange={e => {
                            dispatch({type:ACTIONS.EMPLOYEE_NAME, payload: e.target.value})
                            dispatch1({type:ACTIONS1.EMPLOYEE_NAME, payload: false})
                        }} />
                        {
                            newState1.employeeName ? (<p className="text-danger m-1 small fw-bold">Enter valid name!</p>) : <></>
                        }
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Employee Mobile</Form.Label>
                        <Form.Control type="text" style={{border: newState1.employeeMobile ? "3px solid red" : ""}} onChange={e => {
                            dispatch({type:ACTIONS.EMPLOYEE_MOBILE, payload: e.target.value})
                            dispatch1({type:ACTIONS1.EMPLOYEE_MOBILE, payload: false})
                        }} />
                        {
                            newState1.employeeMobile ? (<p className="text-danger m-1 small fw-bold">Enter valid mobile!</p>) : <></>
                        }
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label className="fw-bold m-1">Role</Form.Label>
                        <Form.Select type="text" style={{border: newState1.role ? "3px solid red" : ""}} onChange={e => {
                            dispatch({type:ACTIONS.ROLE, payload: e.target.value})
                            dispatch1({type:ACTIONS1.ROLE, payload: false})
                        }} >
                            <option value=""></option>
                            <option value="Owner">Owner</option>
                            <option value="Employee">Employee</option>
                        </Form.Select>
                        {
                            newState1.role ? (<p className="text-danger m-1 small fw-bold">Enter valid role!</p>) : <></>
                        }
                    </Form.Group>
                </Form>
                <div className="d-flex justify-content-center m-3">
                    <Button variant="primary" onClick={() => {
                        if(newState.employeeUsername === "" || !(/[a-zA-Z\S0-9]*/.test(newState.employeeUsername))){
                            dispatch1({type:ACTIONS1.EMPLOYEE_USERNAME, payload: true})
                        } else if(newState.password === "" || !(/[a-zA-Z\S0-9]*/.test(newState.password))){
                            dispatch1({type:ACTIONS1.PASSWORD, payload: true})
                        } else if(newState.employeeName === "" || !(/[A-Z\s]*/.test(newState.employeeName))){
                            dispatch1({type:ACTIONS1.EMPLOYEE_NAME, payload: true})
                        } else if(newState.employeeMobile === "" || !(/^(\d){10}$/.test(newState.employeeMobile))){
                            dispatch1({type:ACTIONS1.EMPLOYEE_MOBILE, payload: true})
                        } else if(newState.role === ""){
                            dispatch1({type:ACTIONS1.ROLE, payload: true})
                        } else {
                            axios.post("http://localhost:8080/EmployeeInfo/add", newState)
                                .then(() => {console.log("saved")})
                                .catch(err => console.log(err))
                        }
                    }}>Submit</Button>
                </div>
            </Container>
        </Card>
    )
}

export default AddEmployee