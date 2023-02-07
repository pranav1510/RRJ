import React from "react";
import { Container, Nav } from "react-bootstrap";

const PendingOrders = ({navigate}) => {
    return(
        <>
        <Container>
            <Nav className="nav-tabs">
                <Nav.Item><p onClick={() => {navigate("/customerupdate/inprogressorders")}}>In Progress</p></Nav.Item>
                <Nav.Item className="active"><p onClick={() => {navigate("/customerupdate/pendingorders")}}>Pending</p></Nav.Item>
                <Nav.Item><p onClick={() => {navigate("/customerupdate/completedorders")}}>Completed</p></Nav.Item>
                <Nav.Item><p onClick={() => {navigate("/customerupdate/cancelledorders")}}>Cancelled</p></Nav.Item>
            </Nav>
        </Container>
        </>
    )
}

export default PendingOrders