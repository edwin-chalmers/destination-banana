import styled from 'styled-components';

export const StyledLandingButton = styled.button`
    z-index: 10;
    
    min-width: 200px;
    height: 80px;

    border: none;
    outline: none;
    padding: 10px 50px;

    border-radius: 100px;
    transition: all ease 0.05s;
    background-color: ${props => props.backgroundColor};
    box-shadow: 0px 15px 0px 0px ${props => props.boxShadow};

    &:active {
    transform: translateY(15px);
    box-shadow: 0px 0px 0px 0px ${props => props.boxShadow};
    }

    img {
        height: 40px;

    }
`