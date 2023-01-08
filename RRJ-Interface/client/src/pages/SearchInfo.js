import React from "react";
import { Container } from "react-bootstrap";

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
        </>
    )
}

export default SearchInfo