import styled from 'styled-components';

export const StyledLinkContainer = styled.div`
  /* background: linear-gradient(to left, rgb(252, 104, 5, .6), 80%, rgb(252, 184, 5, .6)); */
  /* background: linear-gradient(to left, rgb(176, 204, 246, .9), 80%, rgb(146, 204, 246, .5)); */
  /* background-image: url(/assets/banana-background-3-revise.png); */
  /* background-size: 50%; */
  /* background: linear-gradient(to left, rgb(252, 154, 5, 1), 80%, rgb(252, 184, 5, .6)); */
  background-color: rgb(155,234,255, .9);
  max-width: 322px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 322px;
  overflow-y: scroll;
  margin-top: 30px;
  z-index: 3;
  scrollbar-color: rgb(53,98,201);
  left: -330px;
  height: 88.5vh;
  border: 1px solid black;
  position: fixed;
  border-radius: 20px;
  margin-left: 10px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  font-family: "Fredoka", sans-serif;
  font-weight: 550;

  a {
    text-decoration: none !important;
    color: black;
    background-color: rgba(255, 255, 255, .9);
    width: fit-content;
    max-width: 80%;
    padding: 0px 5px 1px 5px;
    margin: 2px 4px 1.5px 4px;
    border-radius: 10px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    
    &:hover {
      cursor: pointer;
      background-color: rgb(252,184,5);
    }
  }

  #link-tails {
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  h4 {
    background-color: rgb(252,184,5);
    border-radius: 5px;
    font-size: 30px;
    width: fit-content;
    padding: 1px 10px 3px 12px;
    margin: 17px 0 15px 0;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  }
`
