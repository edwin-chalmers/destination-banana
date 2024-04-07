import styled from 'styled-components';

export const StyledLandingPage = styled.main`
    width: 100%;
    height: 100vh;
    overflow: hidden;

    #logo-container {
        z-index: 1;
    }

    svg {
        overflow: visible
    }

    .copy-motion-path {
        border-radius: 8px;
        background-color: rgba(85, 85, 85, 0.6);
        color: rgb(255, 255, 255);
        cursor: pointer;
        padding: 6px 12px;
        font-family: "Signika Negative", Arial, sans-serif;
        position: fixed;
        left: 50%;
        transform: translate(-50%, 0px);
        font-size: 19px;
        bottom: 180px;
        z-index: 10;
    }

    div{
        width: 100%;
        height: 100vh;
    }
    #circle {
    border-radius: 100px;
    background: #dbdbdb;
    height: 210px;
    width: 260px;
    position: absolute;
    z-index: 0;
    top: 12px;
    left: 2000px;
    box-shadow: #dbdbdb 0 0 20px 20px;
    }
`