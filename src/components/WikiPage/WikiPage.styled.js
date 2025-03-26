import styled from 'styled-components';

export const WikiPageContainer = styled.div`
    max-width: 300px;
    height: 83vh;
    border: 1px solid black;
    padding: 25px 20px 25px 17px;
    overflow: hidden;
    margin: 20px;
    min-width: 300px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(255, 255, 255, .75);
    position: relative;
    overflow-y: scroll;
    overflow-x: hidden;
    
    h5 {
        font-family: "Fredoka", sans-serif;
        font-weight: 550;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        margin: 0 0 20px 0;
        text-align: center;
        font-size: 1.7em;
        width: fit-content;
    }

    .click-num {
        font-family: "Fredoka", sans-serif;
        font-weight: 600;
        position: absolute;
        right: 3px;
        top: 5px;
        padding: 1px 4px 1px 4px;
        margin: 0;
        margin-right: 2px;
        font-weight: 800;
        border-radius: 5px;
        /* border: 2px solid rgb(242, 125, 38, 1); */
        background-color: rgb(242, 195, 58, 1);
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
    }

    .infobox-above {
        margin-top: 0;
    }

    .trow {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .infobox-image {
        flex-direction: column;
    }

    #pageContent{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        section{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            overflow: hidden;

            .mw-file-description{
                width: 100%;
                display: flex;
                flex-direction: column;
                flex-wrap: nowrap;
                align-items: center;
                /* img{
                    width: 100%;
                } */
            }

            figure{
                width: 100%;
            }

            .hatnote{
                display: none;
            }

            table {
                display: flex;
                width: 100%;
                flex-direction: column;
                align-items: center;

            tbody {
                display: flex;
                width: 100%;
                flex-direction: column;
                align-items: center;

                tr{
                    width: 100%;
                    display: flex;
                    align-items: flex-start;
                    justify-content: center;
                    flex-wrap: nowrap;

                    td{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-overflow: ellipsis;
                }

                .infobox-full-data, .infobox-above{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    flex-wrap: nowrap;
                    align-items: center;
                    justify-content: flex-start;
                }
                }
            }
        }
        }

    }

    .metadata {
        display: none;
    }

    #additionalImages{
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }
`

export const InfoBox = styled.div`
    width: 100%;
    height: auto;
    max-width: 20em;

    img {
        border: 0;
        vertical-align: middle;
        height: auto;
        width: 100%;
    }
`


