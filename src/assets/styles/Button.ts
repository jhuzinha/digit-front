import styled from "styled-components";

export const Button = styled.button`
    margin: 5px 10px 10px 10px;
    height: 40px;
    width: 400px;
    border-radius: 2px;
    background: var(--button);
    color: var(--word_secundary);
    &&:hover {
        background-color: var(--hover_button);
    }
    @media (max-width: 470px) {
        width: 250px;
    }
` 