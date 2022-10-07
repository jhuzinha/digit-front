import { Container, Navbar, InputArea, NavbarLink } from "./style";
import React, { useState } from "react";  
import { Button } from "../../Assets/styles/Button";
import { Input } from "../../Assets/styles/Input";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


export type AuthForm = {
    email: string,
    password: string,
    confirmPassword?: string
}

export const Register: React.FC = () => {
    const [formRegister, setformRegister] = useState<AuthForm>({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate();

    function register(event: React.SyntheticEvent){
        event.preventDefault()
        const body = {
            email: formRegister.email,
            password: formRegister.password,
            confirmPassword: formRegister.confirmPassword
        }
        axios
            .post('http://localhost:5000/register', body)
            .then((res) => {
                toast.success('Usuário criado com sucesso')
                navigate('/login')})
            .catch((err) => toast.error(err.response.data))
    }

    return (
        <Container>
            <InputArea onSubmit={(e)=> register(e)}> 
                <Navbar>
                    <Link to={''}> <NavbarLink> REGISTER </NavbarLink> </Link>
                    <Link to={'/login'}> <NavbarLink style={{color: 'gray'}}> LOGIN </NavbarLink> </Link>
                </Navbar>
                <Input type="text" 
                       placeholder="Email" 
                       value={formRegister.email} 
                       onChange={(e) => setformRegister({...formRegister, email: e.target.value})} 
                       required />
                <Input type="password" 
                       placeholder="Password" 
                       value={formRegister.password}  
                       onChange={(e) => setformRegister({...formRegister, password: e.target.value})} 
                       required />
                <Input type="password" 
                       placeholder="Confirm password" 
                       value={formRegister.confirmPassword}  
                       onChange={(e) => setformRegister({...formRegister, confirmPassword: e.target.value})} 
                       required />
                <Button type="submit"> Enviar </Button> 
                <Link to={'/login'}>  
                    <p> Já possui conta? Entre </p>
                </Link>
            </InputArea>
        </Container>
    )
}