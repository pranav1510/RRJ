import React from "react";
import { Form, Button } from "react-bootstrap";

const DailyPrice = ({date}) => {

    const time = new Date().toLocaleTimeString();

    const SubmitHandler = () => {

    }

    return(
        <>
        <Form>
            <div className="d-flex justify-content-center">
                <div className="row">
                    <div className="col-12">
                        <fieldset disabled>
                            <Form.Group className="m-3">
                                <Form.Label className="fw-bold m-1">Date</Form.Label>
                                <Form.Control type="text" value={date} />
                            </Form.Group>
                        </fieldset>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row">
                    <div className="col-12">
                        <fieldset disabled>
                            <Form.Group className="mb-3">
                                <Form.Label className="fw-bold m-1">Time</Form.Label>
                                <Form.Control type="text" value={time} />
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
                                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
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
                                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
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
        
        </>
    )
}

export default DailyPrice