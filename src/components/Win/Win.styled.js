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
    
    /* div {
        width: 50%;
        height: 50%;
        ${centerElements};
    } */
    
    h2 {
        background-color: rgba(254,209,0,1);
        padding: 100px;
        font-size: 100px;
        font-weight: 800;
        color: black;
    }

`