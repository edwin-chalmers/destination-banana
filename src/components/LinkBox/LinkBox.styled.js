import styled from 'styled-components';

// Styled components
export const StyledLinkContainer = styled.div`
  background: white;
  max-width: 322px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 322px;
  height: 100vh;
  overflow: scroll;
  margin-top: 15px;
  position: relative;
  z-index: 3;
  scrollbar-color: rgb(53,98,201);

  a {
    margin-top: 1px;
    margin-bottom: 1px;
    text-decoration: none;
    color: black;

    &::before {
        content: '*';
      }
      
      &::after {
        content: '*';
      }
    
    &:hover {
      cursor: pointer;
      text-decoration: underline;
      color: rgb(53,98,201);
      font-weight: bold;
    }
  }
`


