import styled, { keyframes } from "styled-components";

export const backgroundAnimation = keyframes`
 0% { background-position: 0% 50% }
 50% { background-position: 80% 50%  }
 100% { background-position: 0% 50%  }
`


export const Container = styled.div `
    background: rgb(62,77,75);
    background: var(--background);
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-size: 300% 200%;
    animation-name: ${backgroundAnimation};
    animation-duration: 7s;
    animation-iteration-count: infinite;
    img {
        width: 300px;
        height: 300px;
    }
    button {
        height: 40px;
        min-width: 80%;
        padding: 10px;
        border-radius: 2px;
    }
    h1 {
        color:  black;
        font-size: 70px;
    }
`