import React from "react";
import { Card, Container } from "react-bootstrap";

const HomePage = ({navigate}) => {
    return(
        <>
        <Container>
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb flex-nowrap">
                <li className="breadcrumb-item active text-white fw-bold text-truncate" aria-current="page">Home</li>
            </ol>
            </nav>
        </Container>
        <div className="row justify-content-center">
            <div className="col-sm-6">
                <Card style={{"cursor":"pointer"}} className="m-3 rounded" onClick={() => {navigate('/infoentry')}}>
                    <Card.Body>
                        <Card.Title><h5 className="link-dark">INFORMATION ENTRY</h5></Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-sm-6">
                <Card style={{"cursor":"pointer"}} className="m-3 rounded" onClick={() => {navigate('/searchinfo')}}>
                    <Card.Body>
                        <Card.Title><h5 className="link-dark">SEARCH INFORMATION</h5></Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </div>
        </>
    )
}

export default HomePage