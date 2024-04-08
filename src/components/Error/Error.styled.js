import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledError = styled.div`
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,1);

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
        margin: 0;
    }

    #goHome {
        padding: 10px;
        margin-top: 30px;
        font-weight: 800;
        font-size: large;
        border: none;
        background-color: #bababa;
        border-radius: 2px;
        color: black;
        text-decoration: none;

        &:hover {
            background-color: rgb(254,209,0);
            cursor: pointer;
        }
    }
`   
