import axios from "axios";
import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setGoldPrice, setSilverPrice } from "../features/DailyPrice/DailyPriceSlice";

const LoginPage = ({navigate}) => {
    const dispatcher = useDispatch()
    const SubmitHandler = () => {
        axios.get("http://localhost:8080/DailyPrice/dailyprice")
            .then(res => {
                let val = res.data[0]
                if(val !== undefined){
                    dispatcher(setGoldPrice(val[0]))
                    dispatcher(setSilverPrice(val[1]))
                }
            })
            .catch(err => console.log(err))
        navigate('/homepage')
    }

    return(
        <div className="row d-flex flex-row justify-content-center mt-5">
            <div className="col-4">
                <Card className="mycard" style={{"backgroundColor": "rgba(0, 0, 0, 0.20)"}}>
                    <Card.Body>
                        <Form>
                            <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">Employee Id</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">Password</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <div className="d-flex justify-content-center m-3">
                                <Button variant="primary" className="mt-3 mb-3" onClick={SubmitHandler}>Submit</Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default LoginPage;