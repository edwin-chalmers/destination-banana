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
    ${centerElements};
    
    h2 {
        background-color: rgba(254,209,0,1);
        padding: 100px;
        font-size: 100px;
        font-weight: 800;
        color: black;
        margin: 0;
        border-radius: 40px;
    }

    button {
        padding: 20px 40px 20px 40px;
        border: none;
        font-weight: 800;

        &:hover {
            cursor: pointer;
        }
    }

    #monkeyBro{
        width: 380px;
        position: relative;
        left: 150px;
        filter: drop-shadow(2px 4px 6px black);
    }
`