import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 60px; 
    padding: 20px;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    div {
        background-color: white;
    }
    h2 {
        margin-bottom: 5px;
    }
`
const EditorContainer = styled.form`
    display: flex;
    flex-direction:  column;
    li {
        font-size: 16px;
    }

    input {
        padding: 8px;
        margin: 5px 0 5px 0;
        font-size: 16px;
        border-radius: 2px;
    }
`

const ButtonEdition = styled.button`
    margin: 10px 0 10px 0;
    padding: 10px;
    background-color: var(--button);
    width: 100%;
    color: white
`


export {
    Container,
    EditorContainer,
    ButtonEdition
}