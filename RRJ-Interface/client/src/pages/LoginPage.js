import React from "react";
import { Button, Card, Form } from "react-bootstrap";

const LoginPage = ({navigate}) => {

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
                                <Button variant="primary" className="mt-3 mb-3" onClick={() => {navigate('/homepage')}}>Submit</Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default LoginPage;