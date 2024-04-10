import styled from 'styled-components'

export const StyledHomepage = styled.div `
    background-image: url(/assets/beach_backdrop1.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;

    #confused-monkey {
        width:  300px;
        position: absolute;
        z-index: 10;
        transform: translate(-300px, 0px);
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
        position: relative;
        transform: translate(-500px, 190px);
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

`






