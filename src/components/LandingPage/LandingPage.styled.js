import styled from 'styled-components';

export const StyledLanding = styled.div `
    width: 100%;
    height: 100vh;
    align-content: center;
#beach{
    position: relative;
    top: 0;
    left: 0;
    scale: 0.90;
    margin-top: 120px;
}

#logo{
    position: absolute;
    scale: 0.90;
}

a{
    position: absolute;
    top: 0;
    left: 0;
    width: 1000px;
    height: 1000px;
    transform: translate(44%, -7%);
    background-image: url(/assets/banana_dude.svg);
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;    

    &:hover {
        cursor: pointer;
        filter: drop-shadow(2px 4px 6px black);
    }
}

`