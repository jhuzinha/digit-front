import React, { useState, useContext } from "react";
import { Container,Sidebar } from "./style";
import logoHeader from '../../Assets/images/logoHeader.png'
import { BiMenu } from 'react-icons/bi'
import { sidebarData } from "./sidebarData";
import { Link } from "react-router-dom";
import {IoClose} from 'react-icons/io5';
import UserContext from "../../Contexts/userContext";

export const Header: React.FC = () => {
    const [sideBar, setSideBar] = useState(false)
    const {token, setToken} = useContext(UserContext)
    const showSidebar = () => setSideBar(!sideBar);

    function Logout() {
        setToken({token: ''})
    }
    
    return (
        <Container>
            <div>
                <div onClick={showSidebar}>
                {
                !sideBar? 
                    <BiMenu /> : <IoClose/> }
                </div>
                <div>
                    <img src={logoHeader} alt="" />
                </div>
            </div>
            {
                sideBar? 
            <Sidebar>
                {sidebarData.map((item, index)=> {
                    const click = item.name === "Logout"? Logout: undefined
                return(
                <li key={index}> <Link to={item.path} onClick={showSidebar}>       
                {item.icon}
                <span onClick={click}> {item.name}</span>
                </Link> </li>
                )
                })}
            </Sidebar>:
            ''
            }
           
            
        </Container>
    )
}

