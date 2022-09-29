import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    html, body, #root {
        height: 100%;
        background-color: #9FD2CB;
        font-family: 'Inria Serif', serif;
        color: black;
    }

    *, button, input {
        border: 0;
        outline: 0;
        color: black;
    }

    :root {
        /* colocar as cores do projeto */
        --primary: #BAC8F8;
        --button: #385E57;
        --hover_button: #559086;
        --background: linear-gradient(45deg, rgba(62,77,75,1) 5%, rgba(109,163,156,1) 60%, rgba(77,193,177,1) 80%, rgba(34,237,210,1) 100%);
        --border_input: 1px solid rgba(56, 94, 87, 0.4);
        --word_secundary: white;
        --bg_input: rgba(255, 255, 255, 0.4);
        --bg_area_input: rgba( 240, 233, 233, 0.6 );
    
    }
`