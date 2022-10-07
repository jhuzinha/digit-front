import styled from "styled-components";

const Container = styled.div` 
    margin-top: 50px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
        align-self: flex-end;
        padding: 10px;
        margin-right: 22%;
        margin-top: 10px;
        border-radius: 8px;
        font-weight: bold;
    }
    h3 {
        margin: 20px;
        text-align: center;
    }
    
    @media (max-width: 1024px ) {
        button {
            margin-right: 11%;
        }
    }
    
`
const PublishContainer = styled.div`
    width: 80%;
    background-color: rgba( 240, 233, 233, 0.6 ) ;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 3.5px );
    -webkit-backdrop-filter: blur( 3.5px );
    margin: 10px;
    max-width: 800px;
    border-radius: 5px;
    display: flex;
    text-align: justify;
    text-overflow: ellipsis;

    img {
        width: 120px;
        height: 100%;
        border: 2px;
        object-fit: cover;
        padding: 2px;
    }
`

const InfoPublish = styled.div `
    padding: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-right: 5px;
    /* div{
        display: flex;
        width: 100%;
        justify-content: space-between;
    } */
    p{
    display: -webkit-box;
    -webkit-line-clamp: 3;
    overflow: hidden;
    -webkit-box-orient: vertical; 
    }
    h4 {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        overflow: hidden;
        -webkit-box-orient: vertical; 
    }
    
    h6 {
        margin-top: 5px;
        background-color: lightgray;
        border-radius: 2px;
        font-size: 14px;
    }

    @media (max-width: 320px) {
        p{
            display: none;
        }
    }
`

const InfiniteScroll = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

`

export {
    Container,
    PublishContainer,
    InfoPublish,
    InfiniteScroll
}