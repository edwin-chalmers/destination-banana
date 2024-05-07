import styled from 'styled-components'

const centerElements = () => `
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledWin = styled.div`
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: "Fredoka", sans-serif;
    font-weight: 550;
    
    h1, h2 {
        font-size: 60px;
        z-index: 1;
        text-shadow:
        -2px -2px 0 #fff,  
        2px -2px 0 #fff,
        -2px  2px 0 #fff,
        2px  2px 0 #fff;
    }
    
    h1 {
        font-size: 100px;
        top: 180px;
        margin: 0;
    }

    h2 {
        margin-top: 0;
    }

    div {
        z-index: 1;
    }

    #islandBackground {
        position: absolute;
        width: 700px;

        background-color: rgba(254,209,0,1);
        border-radius: 20px;
        border: 10px solid white;
    }

`