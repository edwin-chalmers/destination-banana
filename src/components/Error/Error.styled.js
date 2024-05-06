import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledError = styled.div`
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,1);
    font-family: "Fredoka", sans-serif;


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;

    h1 {
        font-size: 100px;
        margin: 0;
    }

    h2 {
        margin-top: 10px;
        margin-bottom: 0;
    }

    p {
        font-size: 1.2em;
        margin-top: 5px;
        margin-bottom: 5px;
        font-style: italic;
    }

    #goHome {
        margin-top: 30px;
    }
`   
