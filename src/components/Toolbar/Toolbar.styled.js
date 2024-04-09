import styled from 'styled-components';

export const StyledToolbar = styled.nav`
    background-color: rgba(254,255,255,0.8);
    /* background: linear-gradient(to top, rgba(254,209,0,0), rgba(254,255,255,0.8)); */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 0 20px;
    /* background-color: aquamarine; */
    #banana {
        position: absolute;
        left: 925px;
        top: 0; 
    }
`

export const StyledButton = styled.button`
    border: none;
    background-color: rgba(0,0,0,0);
    color: gray;
    font-weight: bold;
`

export const StyledLogo = styled.img`
    /* margin: 0 0 0 20px; */
    width: 300px;
`

// export const NavButton = styled.div`
//     width: 40px;
//     height: 40px;
//     background-color: gray;
//     border-radius: 3px;
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     img {
//         width: 30px;
//     }
// `

export const StyledEndpoint = styled.div`
    padding: 1px;
    margin: 0px 20px 0px 20px;
    text-align: center;
    display: flex;
    align-items: center;

    
    h2 {
        margin: 0;
        font-size: large;
    }

    p {
        margin: 0 0 0 10px;
    }
`

export const StyledCounter = styled.p `
    color: rgb(53, 98, 201);
    margin-left: 5px;
    display: flex;

    h2 {
        margin: 0;
        color: black;
    }
`