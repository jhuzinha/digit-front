import { Container, InputArea, Navbar, NavbarLink } from "./style";
import React, {useState, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import userContext from "../../Contexts/userContext";
import { Button } from "../../Assets/styles/Button";
import { Input } from "../../Assets/styles/Input";
import axios from "axios";
import { AuthForm } from "./Register";
import { toast } from "react-toastify";

export const Login: React.FC = () => {
    const [formLogin, setFormLogin] = useState<AuthForm>({
        email: '',
        password:''
    });
    const navigate = useNavigate();
    const {token, setToken } = useContext(userContext);
    function login(event: React.SyntheticEvent){
        event.preventDefault();
        const body = {
            email: formLogin.email,
            password: formLogin.password
        }
        axios
            .post(`http://localhost:5000/login`, body)
            .then((res) => {setToken(res.data); navigate('/profile')})
            .catch((err) => {toast.error(err.response.data)})
    }

    return (
        <Container>
            <InputArea onSubmit={(event) => login(event)}> 
                <Navbar>
                    <Link to={''}> <NavbarLink> LOGIN </NavbarLink> </Link>
                    <Link to={'/register'}> <NavbarLink style={{color: 'gray'}}> REGISTER </NavbarLink> </Link>
                </Navbar>
                <Input type="text" placeholder="Email" 
                       value={formLogin.email} 
                       onChange={(e) => setFormLogin({...formLogin, email: e.target.value})} 
                       required />
                <Input type="password" placeholder="Password" 
                       value={formLogin.password}  
                       onChange={(e) => setFormLogin({...formLogin, password: e.target.value})} 
                       required />
                <Button type="submit"> Enviar </Button> 
                <Link to={'/register'}>  
                    <p> Não possui conta? Cadastre-se </p>
                </Link>
            </InputArea>
        </Container>
    )
} 