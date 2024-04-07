import styled from 'styled-components'
// import { accentColor } from '/assets/Global.styled'

const centerElements = () => `
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledNavButton = styled.div`
    --button-color: #bababa;
    --hover-color: rgb(53, 98, 201);

    ${centerElements};
    flex-direction: column;
    margin: 0 15px 0 15px;
    
    div {
        width: 40px;
        height: 40px;
        background-color: var(--button-color);
        border-radius: 3px;
        ${centerElements}
    }
    
    img {
        width: 30px;
    }
    
    p {
        margin: 0;
        color: rgb(0,0,0,0); 
        font-weight: bold;
        font-size: small;
    }
    
        &:hover {
    
            p {
                color: var(--hover-color);
                cursor: pointer;
            }
    
            div {
                cursor: pointer;
                background-color: var(--hover-color);
            }
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