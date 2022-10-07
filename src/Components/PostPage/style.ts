import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
    flex-direction: column;
    /* font-size: 14px; */
`

const ContainerText = styled.div`
    width: 60%;
    background-color: white;
    height: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    word-wrap: break-word;
    word-break: break-word;
    text-align: justify;
    border-radius: 5px;
    position: relative;

    p, li {
        font-size: 14px;
    }
    h1 {
        font-size: 16px;
    }
    img {
        max-width: 200px;
        max-height: 200px;
        width: 80%;
        height: auto;
        min-width: 50px;
        min-height: 50px;
        object-fit: cover;
    }
    svg {
        position: absolute;
        top: 0;
        right: 0;
        margin: 10px;
    }

    @media (max-width: 425px) {
        width: 80%;
    }
`
export {
    Container,
    ContainerText
}