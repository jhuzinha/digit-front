import { Container, InputArea, Navbar, NavbarLink } from "./style";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../assets/styles/Button";
import { Input } from "../../assets/styles/Input";

export const Login: React.FC = () => {
    return (
        <Container>
            <InputArea> 
                <Navbar>
                    <Link to={''}> <NavbarLink> LOGIN </NavbarLink> </Link>
                    <Link to={'/register'}> <NavbarLink style={{color: 'gray'}}> REGISTER </NavbarLink> </Link>
                </Navbar>
                <Input type="text" placeholder="Email"  required />
                <Input type="text" placeholder="Password" required />
                <Button type="submit"> Enviar </Button> 
                <Link to={'/register'}>  
                    <p> Não possui conta? Cadastre-se </p>
                </Link>
            </InputArea>
        </Container>
    )
} 