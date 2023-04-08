import React from "react";
import { Card, Container } from "react-bootstrap";

const InfoEntry = ({navigate}) => {
    return(
        <>
        <Container>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb flex-nowrap">
            <li className="breadcrumb-item fw-bold text-truncate"><p style={{"cursor":"pointer"}} onClick={() => {navigate('/homepage', { replace: true })}}>Home</p></li>
            <li className="breadcrumb-item active text-white fw-bold text-truncate" aria-current="page">InformationEntry</li>
            </ol>
        </nav>
        </Container>
        <div className="row justify-content-center">
            <div className="col-sm-6">
                <Card style={{"cursor":"pointer"}} className="m-3 rounded" onClick={() => {navigate('/ordertaking', { replace: true })}}>
                    <Card.Body>
                        <Card.Title><h5 className="link-dark">ORDER TAKING ENTRY</h5></Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-sm-6">
                <Card style={{"cursor":"pointer"}} className="m-3 rounded" onClick={() => {navigate('/customerinfo', { replace: true })}}>
                    <Card.Body>
                        <Card.Title><h5 className="link-dark"> ENTER CUSTOMER INFORMATION</h5></Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-sm-6">
                <Card style={{"cursor":"pointer"}} className="m-3 rounded" onClick={() => {navigate('/paymentdetails', { replace: true })}}>
                    <Card.Body>
                        <Card.Title><h5 className="link-dark">ENTER PAYMENT DETAILS</h5></Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-sm-6">
                <Card style={{"cursor":"pointer"}}  className="m-3 rounded" onClick={() => {navigate('/dailyprice', { replace: true })}}>
                    <Card.Body>
                        <Card.Title><h5 className="link-dark"> ENTER DAILY PRICE INFORMATION</h5></Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-sm-6">
                <Card style={{"cursor":"pointer"}}  className="m-3 rounded" onClick={() => {navigate('/validation', { replace: true })}}>
                    <Card.Body>
                        <Card.Title><h5 className="link-dark">TRANSACTIONS VALIDATION</h5></Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </div>
        </>
    )
}

export default InfoEntry