import styled from 'styled-components'

const centerElements = () => `
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledNavButton = styled.button`
    --transparent: rgba(0,0,0,0)
    --button-color: #bababa;
    --hover-color: rgb(254, 209, 0);
    width: 120px;
    height: 40px;
    background-color: var(--transparent);
    border: 2px solid rgba(0,0,0,0.01);
    border-radius: 3px;
    ${centerElements}

    ${centerElements};
    flex-direction: row;
    margin: 0 15px 0 15px;
    
    img {
        width: 30px;
        margin-left: 5px;
        filter: invert();
    }
    
    p {
        font-family: "Fredoka", sans-serif;
        font-weight: 600;
        margin: 0;
        color: black; 
        font-size: 1.6em;
    }
    
    &:hover {
        cursor: pointer;
        border: 2px solid var(--hover-color);
    }
`

const boxMixin = (size = '100px', backgroundColor = 'lightblue') => `
  width: ${size};
  height: ${size};
  background-color: ${backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`

const Box = styled.div`
  ${boxMixin('150px', 'tomato')};
  border: 2px solid black;
`

const AnotherBox = styled.div`
  ${boxMixin('200px', 'peachpuff')};
  border-radius: 10px;
`