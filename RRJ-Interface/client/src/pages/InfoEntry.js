import React from "react";
import { Card, Container } from "react-bootstrap";

const InfoEntry = ({navigate}) => {
    return(
        <>
        <Container>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb flex-nowrap">
            <li className="breadcrumb-item fw-bold text-truncate"><p style={{"cursor":"pointer"}} onClick={() => {navigate('/homepage')}}>Home</p></li>
            <li className="breadcrumb-item active text-white fw-bold text-truncate" aria-current="page">InformationEntry</li>
            </ol>
        </nav>
        </Container>
        <div className="row justify-content-center">
            <div className="col-sm-6">
                <Card style={{"cursor":"pointer"}} className="m-3 rounded" onClick={() => {navigate('/ordertaking')}}>
                    <Card.Body>
                        <Card.Title><h5 className="link-dark">ORDER TAKING ENTRY</h5></Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-sm-6">
                <Card style={{"cursor":"pointer"}} className="m-3 rounded" onClick={() => {navigate('/customerinfo')}}>
                    <Card.Body>
                        <Card.Title><h5 className="link-dark"> ENTER CUSTOMER INFORMATION</h5></Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-sm-6">
                <Card style={{"cursor":"pointer"}} className="m-3 rounded" onClick={() => {navigate('/paymentdetails')}}>
                    <Card.Body>
                        <Card.Title><h5 className="link-dark">ENTER PAYMENT DETAILS</h5></Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-sm-6">
                <Card style={{"cursor":"pointer"}}  className="m-3 rounded" onClick={() => {navigate('/dailyprice')}}>
                    <Card.Body>
                        <Card.Title><h5 className="link-dark"> ENTER DAILY PRICE INFORMATION</h5></Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-sm-6">
                <Card style={{"cursor":"pointer"}}  className="m-3 rounded" onClick={() => {navigate('/transactionentry')}}>
                    <Card.Body>
                        <Card.Title><h5 className="link-dark"> ENTER TRANSACTION DETAILS</h5></Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </div>
        </>
    )
}

export default InfoEntry