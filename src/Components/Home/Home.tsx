import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";
import Typical from 'react-typical';
import logo from '../../assets/images/logo.png'

const Home: React.FC = () => {
    return (
        <Container> 
            <img src={logo} alt="" />
            <Link to={'/register'}> 
            <h1>
               <Typical steps = { [ 'DIG IT', 3000, '', 2000 ]} wrapper= 'w' loop = {Infinity} /> 
            </h1> 
            </Link>
        </Container> 
    )
}

export default Home;