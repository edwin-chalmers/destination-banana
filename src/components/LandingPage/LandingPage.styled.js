import styled from 'styled-components';

export const StyledLanding = styled.div `
    width: 100%;
    height: 100vh;
    align-content: center;
    overflow: hidden;

    section {
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -10%);
        
        width: 500px;
        padding: 50px 80px 50px 100px ; 
        background-color: rgba(255,255,255,0.5);
        border-radius: 1000px;

        span {
            font-weight: 800;
        }

    }

    #beach {
        position: relative;
        top: 0;
        left: 0;
        scale: 1;
        margin-top: 120px;
    }

    #logo {
        position: absolute;
        scale: 0.90;
    }

    a{
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 50%;
        width: 500px;
        height: 320px;
        transform: translate(-50%, -100%);
        background-image: url('/assets/DB-vertical-w-banana.svg');
        background-position: center; 
        background-repeat: no-repeat; 
        background-size: cover; 

        &:hover {
            cursor: pointer;
            filter: drop-shadow(10px 10px 50px white);
        }
    }

`