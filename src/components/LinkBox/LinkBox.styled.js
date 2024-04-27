import styled from 'styled-components';

export const StyledLinkContainer = styled.div`
  /* background: linear-gradient(to left, rgb(252, 184, 5, .6), 80%, rgb(252, 184, 5, .6)); */
  background: linear-gradient(to left, rgb(116,204,246, .8), 80%, rgb(116,204,246, .5));
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

  /* &::before {
    z-index: -1;
    content: '';
    opacity: .8;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    background: linear-gradient(to left, white, 70%, rgb(252, 184, 5, .5));
  } */

  a {
    margin-top: 1px;
    margin-bottom: 1px;
    /* border-top: 1px solid black; */
    text-decoration: none;
    color: black;
    width: 100%;

    /* &::before {
        content: '🍌 ';
      }
      
      &::after {
        content: ' 🍌';
      } */
    
    &:hover {
      cursor: pointer;
      background-color: rgb(252,184,5);
    }
  }

  p {
    font-weight: bold;
  }
`


