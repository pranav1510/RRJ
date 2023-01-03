import React from "react";
import { Container } from "react-bootstrap";

const SearchInfo = () => {
    return(
        <>
        <Container>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
            <li className="breadcrumb-item fw-bold"><a href="/homepage">Home</a></li>
            <li className="breadcrumb-item active text-white fw-bold" aria-current="page">Search Information</li>
            </ol>
        </nav>
        </Container>
        </>
    )
}

export default SearchInfo