import styled from 'styled-components'

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
`   
