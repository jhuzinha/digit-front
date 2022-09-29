import styled from "styled-components";


export const Input = styled.input`
    width: 400px;
    height: 40px;
    background-color: var(--bg_input);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
    padding: 10px;
    margin: 5px 10px;
    border: var(--border_input);
    font-size: 16px;
    @media (max-width: 470px) {
        width: 250px;
        font-size: 14px;
   }
`