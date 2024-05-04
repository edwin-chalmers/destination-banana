import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledToolbar = styled.nav`
    background-color: rgb(252, 284, 255, .7);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 0 20px;
    overflow: hidden;
    z-index: 2;
    position: absolute;
    width: 100%;
    /* opacity: 0.8; */

    .greedy-monkey {
        width: 80px;
        height: 80px;
        position: absolute;
        top: 100px;
    }
`

export const StyledLink = styled(Link) `
    width: 300px;
    height: 30px;
    background-image: url(/assets/DB-horizontal-w-banana.svg);
    background-repeat: no-repeat;
    background-size: auto;
`

export const StyledButton = styled.button`
    border: none;
    background-color: rgba(0,0,0,0);
    color: gray;
    font-weight: bold;
`

export const StyledLogo = styled.img`
    width: 300px;
`

export const StyledEndpoint = styled.div`
    padding: 1px;
    margin: 0px 45px 0px 20px;
    text-align: center;
    display: flex;
    align-items: center;
    
    h3 {
        margin: 0;
        font-size: 1.4em;
    }

    p {
        margin: 0 0 0 10px;
        font-size: 1.2em;
    }
`

export const StyledCounter = styled.p `
    color: rgb(53, 98, 201);
    margin-left: 5px;
    display: flex;

    h2 {
        margin: 0;
        color: black;
    }
`