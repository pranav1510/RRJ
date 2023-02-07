import React from "react";
import { Container, Nav } from "react-bootstrap";

const InProgressOrders = ({navigate}) => {
    return(
        <>
        <Container>
            <ul>
                <Nav className="nav-tabs">
                    <li><Nav.Item className="active"><p onClick={() => {navigate("/customerupdate/inprogressorders")}}>In Progress</p></Nav.Item></li>
                    <li><Nav.Item><p onClick={() => {navigate("/customerupdate/pendingorders")}}>Pending</p></Nav.Item></li>
                    <li><Nav.Item><p onClick={() => {navigate("/customerupdate/completedorders")}}>Completed</p></Nav.Item></li>
                    <li><Nav.Item><p onClick={() => {navigate("/customerupdate/cancelledorders")}}>Cancelled</p></Nav.Item></li>
                </Nav>
            </ul>
        </Container>
        </>
    )
}

export default InProgressOrders