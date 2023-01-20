import React from "react";
import { Card, Container } from "react-bootstrap";

const SearchInfo = ({navigate}) => {
    return(
        <>
        <Container>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb flex-nowrap">
            <li className="breadcrumb-item fw-bold text-truncate"><p style={{"cursor":"pointer"}} onClick={() => {navigate('/homepage')}}>Home</p></li>
            <li className="breadcrumb-item active text-white fw-bold text-truncate" aria-current="page">SearchInfo</li>
            </ol>
        </nav>
        </Container>
        <div className="row justify-content-center">
            <div className="col-sm-6">
                <Card style={{"cursor":"pointer"}} className="m-3 rounded" onClick={() => {navigate('/orderinfo')}}>
                    <Card.Body>
                        <Card.Title><h5 className="link-dark">SEARCH ORDER INFORMATION</h5></Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-sm-6">
                <Card style={{"cursor":"pointer"}} className="m-3 rounded" onClick={() => {navigate('/customerupdate')}}>
                    <Card.Body>
                        <Card.Title><h5 className="link-dark">SEARCH CUSTOMER INFORMATION</h5></Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-sm-6">
                <Card style={{"cursor":"pointer"}} className="m-3 rounded" onClick={() => {navigate('/transactioninfo')}}>
                    <Card.Body>
                        <Card.Title><h5 className="link-dark">SEARCH TRANSACTION INFORMATION</h5></Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </div>
        </>
    )
}

export default SearchInfo