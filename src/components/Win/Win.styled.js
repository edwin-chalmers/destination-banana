import styled from 'styled-components'

const centerElements = () => `
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledWin = styled.div`
    position: absolute;
    /* z-index: 10; */
    width: 100%;
    height: 102%;
    /* overflow: hidden !important; */
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: "Fredoka", sans-serif;
    font-weight: 550;
    /* background-color: rgba(254,209,0,1); */
    background-image: url(/assets/Island_with_Trees.svg);
    background-repeat: no-repeat;
    background-position: top 4% right 0%;
    margin-top: -10%;
    animation: pulsate .95s infinite;


    @keyframes pulsate {
        0%   { background-color: rgba(254, 209, 0, 1);}
        50%  { background-color: rgba(254, 209, 0, .4);}
        100% { background-color: rgba(254, 209, 0, 1);}
    }

    h5, h6 {
        font-size: 55px;
        z-index: 1;
        text-shadow:
        -2px -2px 0 #fff,  
        2px -2px 0 #fff,
        -2px  2px 0 #fff,
        2px  2px 0 #fff;
        border: none;
        margin-bottom: 5%;
    }
    
    h5 {
        font-size: 90px;
        top: 180px;
        margin: 0;
        font-weight: 700;
        line-height: .9;
    }

    /* .running-monkey-2 {
        margin-top: 40%;
        width: 120px !important;
        height: 120px !important;
    }

    .running-monkey-3 {
        margin-top: 16%;
    }

    .running-monkey-4 {
        width: 850px;
        height: 850px;
        left: -1000px;
        margin-top: 85%;
    } */

    h6 {
        margin-top: 0;
    }

    div {
        z-index: 1;
    }

    button {
        margin-bottom: 0%;;
    }

    #islandBackground {
        position: absolute;
        width: 700px;

        
    }

    /* #islandBackground {
        position: absolute;
        width: 700px;

        background-color: rgba(254,209,0,1);
        border-radius: 20px;
        border: 10px solid white;
    } */

`