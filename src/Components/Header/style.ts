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

    img {
        position: fixed;
        top:-50px;
        width: 150px;
        height: 150px;
    }
`


export {
    Container
}