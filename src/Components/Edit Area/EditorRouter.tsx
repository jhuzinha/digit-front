import React, { useState, useRef, useContext } from "react";
import { Header } from "../Header/Header";
import EditorComponent from "./Editor";
import { Container, EditorContainer, ButtonEdition } from "./style";
import { IReference } from './Editor';
import axios from "axios";
import  UserContext from '../../Contexts/userContext';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type Header = { 
    title: string,
    image: string,
    summary: string
}

export const EditorArea: React.FC = () => {
    let items = JSON.parse(localStorage.getItem('header')!)
    const formRef = useRef<IReference>({ formEditor: {text: ''}})
    const [header, setHeader] = useState<Header>({
        title: items? items.title: '' ,
        image: items? items.image: '',
        summary: items? items.summary: ''
    })
    const navigate = useNavigate();
    const { token } = useContext(UserContext);

    localStorage.setItem("header", JSON.stringify({...header}))


    function sendText(event: React.SyntheticEvent) {
        event.preventDefault()
        const text = (formRef.current.formEditor.text)
        if(text.length < 50){
            return toast.error("Tamanho de texto não permitido, digite mais :)")
        }
        if (token.token === ''){
            toast.error("Logue para publicar")
            navigate('/login')
            return
        }
        const config = { headers: {Authorization: `Bearer ${token}` } }
        const body = {
            text,
            title: header.title,
            image: header.image,
            summary: header.summary
         }
        
        axios
            .post('http://localhost:5000/post/create', body , config)
            .then((res) =>  {toast.success("Criado com sucesso"); navigate('/profile'); cleanForms() })
            .catch((err) => toast.error(err.response.data))
    }

    function cleanForms(){
        localStorage.setItem('text', JSON.stringify({text: ''}))
        localStorage.setItem('header', JSON.stringify({
            title: '' ,
            image: '',
            summary: ''
        }))
        setHeader({
            title: '' ,
            image: '',
            summary: ''
        })
    }

    return (
        <>   
        <Header />
        
        <Container>
            <h2> AREA DE CRIAÇÃO </h2>
            <EditorContainer onSubmit={(e) => sendText(e)}>
                <input placeholder="Title" value={header.title} 
                       onChange={(e) => setHeader({...header, title: e.target.value})}  
                       required></input>
                 <input placeholder="Image" value={header.image} 
                       onChange={(e) => setHeader({...header, image: e.target.value})}  
                       required></input>
                <input placeholder="Resumo" value={header.summary} 
                       onChange={(e) => setHeader({...header, summary: e.target.value})}  
                       ></input>
                <EditorComponent placeholder = {'Start typings...'} ref = {formRef} />
                <ButtonEdition type="submit"> CRIAR </ButtonEdition>
            </EditorContainer>
            <ButtonEdition onClick={cleanForms}> LIMPAR FORMULARIO </ButtonEdition>
        </Container> 
        </>
    
    )
}