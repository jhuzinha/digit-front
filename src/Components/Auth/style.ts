import styled from 'styled-components';
import { backgroundAnimation } from '../Home/style';

const Container = styled.div`
  /* background: rgb(62,77,75); */
  background: var(--background);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: 300% 200%;
  animation-name: ${backgroundAnimation};
  animation-duration: 7s;
  animation-iteration-count: infinite;
`;

const InputArea = styled.form`
    background: var(--bg_area_input);
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 3.5px );
    -webkit-backdrop-filter: blur( 3.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0 5px 0;
    padding: 10px;
`

const Navbar = styled.nav`
    display: flex;
    width: 100%;
    padding: 10px;
    align-items: initial;
`
const NavbarLink = styled.a`
    position: relative;
    margin-right: 20px;
    padding: 2px;
    & ::after{
        content: " ";
        width: 100%;
        height: 2px;
        background-color: black;
        position: absolute;
        bottom: 0;
        left: 0;
        transition: 0.5s ease-in-out;
    }
    &&:hover::after{
        width: 100%;
    }
`

export  {
    Navbar,
    InputArea,
    Container,
    NavbarLink 
}