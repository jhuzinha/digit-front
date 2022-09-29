import React from "react";
import { Container } from "./style";
import logoHeader from '../../assets/images/logoHeader.png'

export const Header: React.FC = () => {
    return (
        <Container>
            <img src={logoHeader} alt="" />
        </Container>
    )
}