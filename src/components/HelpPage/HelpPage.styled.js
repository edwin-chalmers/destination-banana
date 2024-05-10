import styled from 'styled-components';

export const StyledHelp = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    /* align-items: center; */

    .about,
    .game-rules {
        z-index: 1;   
        padding: 2vh 1vw 2vh 3vw; 
        background-color: rgba(255,255,255,0.7);
        border-radius: 30px;
        margin-top: 0;
        /* display: flex;
        flex-direction: column; */
        /* justify-content: center; */ 
        height: fit-content;
        position: relative;
        font-family: "Fredoka", sans-serif;
        font-weight: 550;
        font-size: 1.2em;
    }

    .game-rules {
        /* margin-top: 10vh; */
        margin-left: 15vw;
        width: 40vw;
    }

    .about {
        margin-left: 45vw;
        /* margin-top: 5%; */
        width: 35vw;
    }
    
    li, ul {
        padding: 0;
        margin-left: 0px;
        margin-bottom: 7px;

        ::marker {
            margin-right: 2px;
        }
    }

    ol, ul {
        padding: 0;
    }

    ol {
        list-style-position: inside;
    }

    ul {
        margin-left: 10px;
    }

    h3 {
        padding: 0;
        margin-left: 0;
        margin-top: 0vh;
        margin-bottom: 10px;
    }

    .jungle-scene {
        z-index: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
    }
`