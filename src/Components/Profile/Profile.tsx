import React, { useEffect, useRef, useState } from "react";
import { Header } from "../Header/Header";
import { Container, PublishContainer, InfoPublish, InfiniteScroll  } from "./style";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const Profile: React.FC = () => {
    const [posts, setPosts] = useState<any>([])
    // const [status, setStatus] = useState("Loading...");
    const ref = useRef<any>();
    const top = useRef<any>();

    async function getData() {
        try {
        const response = await axios.get(`http://localhost:5000/post`)
        const { data } = response
        setPosts([...data])

        } catch (error) {
        toast.error("Algo deu errado, recarregue a pagina")
      }
    }
    useEffect(() => {
        getData();
    }, []);

    return (
    <Container>
        <Header></Header>
        {posts.length === 0? 
            <p> Sem textos! Crie um :) </p> 
            : 
            <InfiniteScroll ref={top}> 
                {posts.map((post: any, index: number)=> {
                    const date = fixDate(post.createAt)
                    return (  
                    <PublishContainer key={post.id}>

                    <div>
                    <Link to={`/postPage/${post.id}`}> <img src={post.image} alt="" /></Link> 
                    </div>
                    <InfoPublish>
                        <h4>{post.title}</h4>
                        <p>{post.summary}</p>
                        <h6> <Link to={`/postPage/${post.id}`}> Clique para ler mais</Link> </h6> 
                        <p> {post.Users.email}</p>
                        <div>
                            <p> {date.brasilianDay}</p>
                            <p> {date.hourMinute} </p>
                        </div>
                        </InfoPublish>
                    </PublishContainer >
                )})}
                {/* <div ref={ref}> 
                    <p>{status}</p> 
                </div> */}
            </InfiniteScroll>
        }
    </Container>
    )
};

export function fixDate(data: string){
    const newData = data.split('T')
    const day = newData[0].split('-')
    const hour = newData[1].split(':')

    const brasilianDay = `${day[2]}/${day[1]}/${day[0]}`
    const hourMinute = `${hour[0]}:${hour[1]}`
    return {brasilianDay, hourMinute}
}