import styled from 'styled-components';

export const StyledLandingButton = styled.button`
    z-index: 10;
    
    min-width: 200px;
    height: 60px;

    border: none;
    outline: none;
    padding: 10px 50px;
    margin: 0 10px;

    border-radius: 100px;
    transition: all ease 0.05s;
    background-color: ${props => props.backgroundColor};
    box-shadow: 0px 15px 0px 0px ${props => props.boxShadow};

    &:active {
        transform: translateY(15px);
        box-shadow: 0px 0px 0px 0px ${props => props.boxShadow};
    }

    &:hover {
        cursor: pointer;
        /* filter: drop-shadow(0 0 10px white); */
    }

    img {
        height: 40px;
    }

    button {
        background: none;
        border: none;
        font-family: "Fredoka", sans-serif;
        font-weight: 650;
        font-size: 2.4em;
        cursor: pointer;
    }
`