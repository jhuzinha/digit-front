import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";
import Typical from 'react-typical';
import { GiKeyboard } from 'react-icons/gi';


const Home: React.FC = () => {
    return (
        <>
        <Link to={'/register'}>
        <Container>    
            <div>
                <GiKeyboard />
                <h1>
                    <Typical steps = { [ 'DIG IT', 3000, '', 2000 ]} wrapper= 'w' loop = {Infinity} /> 
                </h1> 
            </div> 
        </Container> 
        </Link>
        </>
        
    )
}

export default Home;