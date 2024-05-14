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
    background-color: ${props => props.backgroundcolor};
    box-shadow: 0px 15px 0px 0px ${props => props.boxshadow};

    &:active {
        transform: translateY(15px);
        box-shadow: 0px 0px 0px 0px ${props => props.boxshadow};
    }

    &:hover {
        cursor: pointer;
        filter: brightness(95%);
        /* filter: saturate(125%); */
    }

    &:focus {
        outline: 2px solid blue;
    }

    img {
        height: 40px;
    }

    p {
        background: none;
        border: none;
        font-family: "Fredoka", sans-serif;
        font-weight: 650;
        font-size: 3.75vh;
        cursor: pointer;
        margin-top: 5px;
    }
`