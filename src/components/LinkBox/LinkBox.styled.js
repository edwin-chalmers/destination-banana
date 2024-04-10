import styled from 'styled-components';

export const StyledLinkContainer = styled.div`
  background: white;
  max-width: 322px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 322px;
  overflow: scroll;
  margin-top: 20px;
  z-index: 3;
  scrollbar-color: rgb(53,98,201);
  left: -330px;
  height: 88.5vh;
  border: 1px solid black;
  position: fixed;

  a {
    margin-top: 1px;
    margin-bottom: 1px;
    text-decoration: none;
    color: black;
    width: 100%;

    &::before {
        content: '🍌 ';
      }
      
      &::after {
        content: ' 🍌';
      }
    
    &:hover {
      cursor: pointer;
      background-color: yellow;
    }
  }

  p {
    font-weight: bold;
  }
`


