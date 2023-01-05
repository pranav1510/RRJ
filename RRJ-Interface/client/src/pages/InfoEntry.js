import React from "react";
import { Container } from "react-bootstrap";

const InfoEntry = () => {
    return(
        <>
        <Container>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
            <li className="breadcrumb-item fw-bold"><a href="/homepage">Home</a></li>
            <li className="breadcrumb-item active text-white fw-bold" aria-current="page">Information Entry</li>
            </ol>
        </nav>
        </Container>
        <div className="row justify-content-center">
            <div className="col-sm-6">
                <a href="/ordertaking">
                    <div className="card m-3 rounded">
                        <div className="card-body">
                            <h5 className="card-title link-dark">ORDER TAKING ENTRY</h5>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-sm-6">
                <a href="/customerinfo">
                    <div className="card m-3 rounded">
                        <div className="card-body">
                            <h5 className="card-title link-dark"> ENTER CUSTOMER INFORMATION</h5>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-sm-6">
                <a href="/paymentdetails">
                    <div className="card m-3 rounded">
                        <div className="card-body">
                            <h5 className="card-title link-dark">ENTER PAYMENT DETAILS</h5>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-sm-6">
                <a href="/dailyprice">
                    <div className="card m-3 rounded">
                        <div className="card-body">
                            <h5 className="card-title link-dark"> ENTER DAILY PRICE INFORMATION</h5>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        </>
    )
}

export default InfoEntry