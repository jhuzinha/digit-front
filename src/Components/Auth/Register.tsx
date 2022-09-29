import { Container, Navbar, InputArea, NavbarLink } from "./style";
import React from "react";  
import { Button } from "../../assets/styles/Button";
import { Input } from "../../assets/styles/Input";
import { Link } from "react-router-dom";

export const Register: React.FC = () => {
    return (
        <Container>
            <InputArea> 
                <Navbar>
                    <Link to={''}> <NavbarLink> REGISTER </NavbarLink> </Link>
                    <Link to={'/login'}> <NavbarLink style={{color: 'gray'}}> LOGIN </NavbarLink> </Link>
                </Navbar>
                <Input type="text" placeholder="Email"  required />
                <Input type="text" placeholder="Password" required />
                <Input type="text" placeholder="Confirm password" required />
                <Button type="submit"> Enviar </Button> 
                <Link to={'/login'}>  
                    <p> Já possui conta? Entre </p>
                </Link>
            </InputArea>
            
        </Container>
    )
}