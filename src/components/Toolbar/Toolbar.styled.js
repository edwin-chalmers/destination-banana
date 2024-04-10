import styled from 'styled-components';

export const StyledToolbar = styled.nav`
    background-color: rgba(254,255,255,0.8);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 0 20px;
    #banana {
        position: absolute;
        left: 925px;
        top: 0; 
    }
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
    margin: 0px 20px 0px 20px;
    text-align: center;
    display: flex;
    align-items: center;
    
    h2 {
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