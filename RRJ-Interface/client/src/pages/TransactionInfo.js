import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

const TransactionInfo = ({navigate}) => {
    return(
        <>
        <Container>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb flex-nowrap">
                <li className="breadcrumb-item fw-bold text-truncate"><p style={{"cursor":"pointer"}} onClick={() => {navigate('/homepage')}}>Home</p></li>
                <li className="breadcrumb-item fw-bold text-truncate"><p style={{"cursor":"pointer"}} onClick={() => {navigate('/searchinfo')}}>SearchInfo</p></li>
                <li className="breadcrumb-item active text-white fw-bold text-truncate" aria-current="page">SearchTransaction</li>
                </ol>
            </nav>
            <Card className="d-flex justify-content-center w-50">
                <Container>
                    <div className="row">
                        <div className="col">
                            <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">Transaction Id</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </div>
                        <div className="col">
                            <Form.Group className="mt-3">
                                <Form.Label className="fw-bold m-1">Customer Mobile</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <Form.Group className="mt-3">
                            <Form.Label className="fw-bold m-1">Customer Full Name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </div>
                    <div className="row m-3">
                        <Button variant="primary">Search</Button>
                    </div>
                </Container>
            </Card>
        </Container>
        </>
    )
}

export default TransactionInfo