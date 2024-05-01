import styled from 'styled-components';

export const StyledLinkContainer = styled.div`
  /* background: linear-gradient(to left, rgb(252, 184, 5, .6), 80%, rgb(252, 184, 5, .6)); */
  /* background: linear-gradient(to left, rgb(176, 204, 246, .9), 80%, rgb(146, 204, 246, .5)); */
  background-image: url(/assets/banana-wallpaper.jpg);
  background-size: 100%;
  background-color: rgb(255, 255, 255, .8);
  max-width: 322px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 322px;
  overflow-y: scroll;
  margin-top: 20px;
  z-index: 3;
  scrollbar-color: rgb(53,98,201);
  left: -330px;
  height: 88.5vh;
  border: 1px solid black;
  position: fixed;
  opacity: 0.9;

  /* &::before {
    z-index: -1;
    content: '';
    opacity: .4;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    background-image: url(/assets/banana-wallpaper.jpg);
    background-size: 50%; */
    /* background-attachment: fixed; */
  /* } */

  a {
    /* margin-top: 1px;
    margin-bottom: 1px; */
    /* border-top: 1px solid black; */
    text-decoration: none;
    color: black;
    background-color: rgba(255, 255, 255, .85);
    width: fit-content;
    padding: 2px 5px 2px 5px;
    border-radius: 10px;
    /* width: 100%; */
    font-weight: 600;

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

  h4 {
    background-color: rgba(255, 255, 255, .85);
    border-radius: 10px;
    font-size: 30px;
    /* border: 1px solid black; */
    border-bottom: 2px solid black;
    padding: 0 5px 0 0px;
    margin: 10px 0;
  }
`


