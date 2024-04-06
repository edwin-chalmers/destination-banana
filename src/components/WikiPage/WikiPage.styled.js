import styled from 'styled-components';

export const WikiPageContainer = styled.div`
    width: 300px;
    height: 88vh;
    border: 1px solid black;
    padding: 25px;
    overflow: hidden;
    margin: 20px;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5px;
    
    h3 {
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        margin: 0 0 20px 0;
        text-align: center;
        font-size: x-large;
    }

    a {
        margin-top: 1px;
        margin-bottom: 1px;
        text-decoration: none;
        color: rgb(53,98,201);
        pointer-events: none;
    }

    .metadata {
        display: none;
    }
`

export const InfoBox = styled.div`
    width: 100%;
    height: auto;
    max-width: 20em;

    img {
        border: 0;
        vertical-align: middle;
        height: auto;
        width: 100%;
    }
`
