import styled from "styled-components";


const Container = styled.header` 
    width: 100%;
    height: 50px;
    background-color: rgba( 240, 233, 233, 0.6 ) ;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 3.5px );
    -webkit-backdrop-filter: blur( 3.5px );
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: fixed;
    top: 0;
    z-index: 1;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
    }

    img {
        width: 150px;
        height: 150px;
    }
    svg {
        margin-left: 20px;
        font-size: 25px;
    }
`

const Sidebar = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 300px;
    height: 100vh;
    transition: 850ms;
    position: fixed;
    /* left: -100%; */

    background-color: rgba( 174, 217, 212, 1) ;
    /* box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 3.5px );
    -webkit-backdrop-filter: blur( 3.5px ); */
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 1);
    li {
        list-style-type: none;
        margin-top: 10px;
    }
    &&:active{
        left: 0;
        transition: 350ms;
    }
`


export {
    Container,
    Sidebar
}