import styled from 'styled-components';

export const StyledLanding = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    align-content: center;
    overflow: hidden;
    background-image: url(/assets/beach_light.svg);
    background-size: 100%;
    background-position-y: 57%;
    position: fixed;

    font-family: "Fredoka", sans-serif;
    font-weight: 550;
    font-size: 1.2em;

    section {
        position: absolute;
        z-index: 1;
        top: 33%;
        left: 50%;
        transform: translate(-50%, -8%);
        text-align: center;
        margin-top: 10%;
        
        width: 500px;
        padding: 30px 80px 25px 100px ; 
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

    
    #bananaContainer{
        z-index: 1;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -95%);
        svg{
            width: 500px;
            position: relative;
            z-index: 1;
            overflow: visible;
            &:focus{
                outline: none;
            }
        }
    }

    a {
        position: absolute;
        z-index: 3;
        /* top: 50%; */
        /* left: 50%; */
        width: 500px;
        height: 320px;
        transform: translate(8%, 0%);
        /* background-position: center; */
        /* background-repeat: no-repeat; */
        /* background-size: cover; */
        /* overflow: visible; */
        background: black;
    }

    .landing-buttons {
        margin-top: 530px;
        display: flex;
    }

    .disclaimer {
        font-weight: 300;
        margin-top: 100px;
    }

`