import styled from 'styled-components';

export const StyledLandingButton = styled.button`
    z-index: 10;
    min-width: 10vw;
    height: 7vh;
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
        filter: brightness(95%);
        /* filter: saturate(125%); */
    }

    img {
        height: 40px;
    }

    button {
        background: none;
        border: none;
        font-family: "Fredoka", sans-serif;
        font-weight: 650;
        font-size: 3.75vh;
        cursor: pointer;
    }
`