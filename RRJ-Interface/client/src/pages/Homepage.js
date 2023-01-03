import React from "react";
import { Container } from "react-bootstrap";

const HomePage = () => {
    return(
        <>
        <Container>
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item active text-white fw-bold" aria-current="page">Home</li>
            </ol>
            </nav>
        </Container>
        
        <div className="row justify-content-center">
            <div className="col-sm-6">
                <a href="/ordertaking">
                    <div className="card m-3 rounded">
                        <div className="card-body">
                            <h5 className="card-title link-dark">INFORMATION ENTRY</h5>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-sm-6">
                <a href="/searchinfo">
                    <div className="card m-3 rounded">
                        <div className="card-body">
                            <h5 className="card-title link-dark">SEARCH INFORMATION</h5>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        </>
    )
}

export default HomePage