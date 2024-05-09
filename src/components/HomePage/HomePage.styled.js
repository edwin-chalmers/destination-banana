import styled from 'styled-components'

export const StyledHomepage = styled.div `
#backgroundContainer{
    z-index: 0;
    position: fixed;
    width: 100vw;
    height: 80vh;
}
    .background-container {
        top: 50px;
        overflow: visible;
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
    }

    #arrowContainer{
        background-color: #fcb805;
        width: 40px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        box-shadow: 2px 2px 7px black;
        height: 35px;
    }

    #pageSelection{
            width: 100vw;
            height: 29px;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
            position: relative;
            top: 70px;
            z-index: 10;
        #leftButton{
            width: 50vw;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            flex-wrap: nowrap;
        #leftNav{
            z-index: 5;
            filter: drop-shadow(2px 4px 6px black);
            clip-path: polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%);
            width: 30px;
            height: 30px;
            background: black;
                &:hover{
                    cursor: pointer;
                    filter: brightness(0.5);
                }
        }
    }

    #rightButton{
        width: 50vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        flex-wrap: nowrap;
        #rightNav{
            z-index: 5;
            filter: drop-shadow(2px 4px 6px black);
            clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%);
            width: 30px;
            height: 30px;
            background: black;
                &:hover{
                cursor: pointer;
                filter: brightness(0.5);
                }
            }
    }
}

    .running-monkey-1,
    .running-monkey-2,
    .running-monkey-3,
    .running-monkey-4,
    .running-monkey-5
     {
        background-image: url(/assets/running-monkey.png);
        background-size: cover;
        width: 100px;
        height: 100px;
        position: absolute;
        left: -300px;
        margin-top: 33%;
    }

    /* .running-monkey-4 {
        width: 300px;
        /* height: 300px; */
    /* } */ */

    .running-monkey-2 {
        margin-top: 40%;
        width: 120px !important;
        height: 120px !important;
    }

    .running-monkey-3 {
        margin-top: 36%;
    }

    .running-monkey-4 {
        width: 850px;
        height: 850px;
        left: -1000px;
        margin-top: 35%;
    }

    .running-monkey-5 {
        margin-top: 39%;
        width: 900px;
        height: 900px;
        left: -1000px;
    }

    .outer-container{
        width: 100%;
    }

    main {
        height: 100vh;
        overflow-x: scroll;
    }

    #confused-monkey {
        width:  300px;
        position: absolute;
        z-index: 10;
        transform: translate(0px, 0px);
    }

    #monkey-container {
        transform: translate(287px, -488px);
        z-index: 10;
    }

    #bad-link {
        width: 300px;
        padding: 20px;
        height: 130px;
        background: white;
        position: absolute;
        transform: translate(-200px, 190px);
        filter: drop-shadow(2px 4px 6px black);
        border-radius: 30px;
        background-color: black;
        border: 2px solid white;
        color: rgb(254, 209, 0);
        z-index: 9;

        h3{
            width: 223px;

            button {
                padding: 4px;
                margin-top: 30px;
                font-weight: 800;
                font-size: small;
                border: none;
                background-color: #bababa;
                border-radius: 2px;
                color: black;
                text-decoration: none;

                &:hover {
                    filter: invert();
                    cursor: pointer;
                }
            }
        }
    }

    #banana{
        position:absolute;
        top: 299px;
        left: 129px
     }

        #banana_LL::before{
            content: '🍌🍌🍌🍌🍌'
        }

        #banana_LL::after{
            content: '🍌🍌🍌🍌🍌'
        }

     .dot{
        z-index: 100;
        filter: drop-shadow(2px 4px 6px black);
     }

`






