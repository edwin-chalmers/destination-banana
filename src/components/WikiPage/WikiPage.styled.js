import styled from 'styled-components';

export const WikiPageContainer = styled.div`
    width: 300px;
    height: 83vh;
    border: 1px solid black;
    padding: 25px;
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
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        margin: 0 0 20px 0;
        text-align: center;
        font-size: x-large;
        width: fit-content;
    }

  

    .click-num {
        position: absolute;
        right: 10px;
        top: 10px;
        padding: 0;
        margin: 0;
        font-weight: 800;
        border-radius: 5px;
        border: 2px solid black;
        /* border-bottom: 3px solid black; */
    }

    .infobox-above {
        margin-top: 0;
    }

    a {
        margin-top: 1px;
        margin-bottom: 1px;
        text-decoration: none;
        color: rgb(53,98,201);
        pointer-events: none;
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


