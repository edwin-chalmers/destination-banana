import styled from 'styled-components'

const centerElements = () => `
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledNavButton = styled.div`
    --button-color: gray;
    --hover-color: rgb(53, 98, 201);

    ${centerElements};
    flex-direction: column;

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
        color: var(--button-color); 
        font-weight: bold;
        font-size: small;
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
`;