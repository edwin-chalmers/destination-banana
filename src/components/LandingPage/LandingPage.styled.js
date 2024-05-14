import styled from 'styled-components';

export const StyledLanding = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    align-content: center;
    overflow: hidden;
    background-image: url(/assets/beach_light.svg);
    background-size: cover;
    background-position-y: 57%;
    /* position: fixed; */
    font-family: "Fredoka", sans-serif;
    font-weight: 550;
    font-size: 1.2em;

    #bananaContainer {
        z-index: 2;
        position: relative;
        margin-top: -10vh;
            width: 54vh;
            overflow: visible;
            &:focus{
                outline: none !important;
            }
        }

    section {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-top: -3vh;
        height: 15vh;
        width: 500px;
        padding: 1vh 4vw 1vh 4vw ; 
        background-color: rgba(255,255,255,0.7);
        border-radius: 1000px;
    }

    #beach {
        position: relative;
        top: -5%;
        left: 0;
        scale: 1;
    }

    .landing-buttons {
        margin-top: 2vh;
        display: flex;
    }

    .disclaimer {
        position: fixed;
        font-weight: 300;
        bottom: 3vh;
    }
`