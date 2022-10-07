import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fixDate } from "../Profile/Profile";
import parse from 'html-react-parser';
import { Container, ContainerText } from "./style";
import {Header} from '../Header/Header';
import { IoReturnDownBack } from 'react-icons/io5'

interface Post {
    id: number
    image: string
    text: string
    title: string
    Users: {
        id: number
        email: string
    }
    createAt: Date
}

const Post: React.FC = () =>  {
    let {id} = useParams()
    const [text, setText] = useState<Post[]>([])
    let dateAndHour;
    useEffect(() => {
        axios.get(`http://localhost:5000/post/${id}`)
             .then((res) => { console.log(res.data); setText([...res.data]) })
             .catch((err) => { })
    },[]
    )
    if(text[0]){
        dateAndHour = fixDate(text[0].createAt.toString()) 
    }


    return(
        <Container>
        <Header></Header>
        <ContainerText>
        <div><Link to={'/profile'}><IoReturnDownBack /></Link></div>
            {
                text[0]?  
                <>
                    <h2>{text[0].title}</h2>
                    <p>{dateAndHour?.brasilianDay} - {text[0].Users.email} - {dateAndHour?.hourMinute}</p>
                    <br></br>
                    <img src={text[0].image} alt="" />
                    <br></br>
                    <Text textHTML = {text[0].text} />
                </>
                : ''}
        </ContainerText>
        </Container>
    )
}

const Text = ({textHTML}: any) => {
    
    return(
        <>   
        { parse(textHTML)}
        </>
    
    )
}

export default Post;