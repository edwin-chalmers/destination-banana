import styled from 'styled-components';



export const StyledToolbar = styled.nav`
    background-color: rgba(0,0,0,0);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1px;
`

export const StyledButton = styled.button`
    border: none;
    background-color: rgba(0,0,0,0);
    color: gray;
    font-weight: bold;
`

export const StyledLogo = styled.img`
    margin: 25px 0 15px 0;
    width: 150px;
`

export const NavButton = styled.div`
    width: 40px;
    height: 40px;
    background-color: gray;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 30px;
    }
`

export const StyledEndpoint = styled.div`
    padding: 1px;
`