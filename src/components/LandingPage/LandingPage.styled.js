import styled from 'styled-components';

export const StyledLanding = styled.div `
    width: 100%;
    height: 100vh;
    align-content: center;
    overflow: hidden;
    background-image: url(/assets/beach_light.svg);
    background-size: 100%;
    background-position-y: 57%;;

    section {
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -10%);
        
        width: 500px;
        padding: 50px 80px 50px 100px ; 
        background-color: rgba(255,255,255,0.7);
        border-radius: 1000px;

        span {
            font-weight: 800;
        }
    }

    #beach {
        position: relative;
        top: -5%;
        left: 0;
        scale: 1;


    }

    a {
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
        overflow: visible;

        &:hover {
            cursor: pointer;
            filter: drop-shadow(10px 10px 50px white);
            width: 505px;
            height: 320px;
        }
    }

`