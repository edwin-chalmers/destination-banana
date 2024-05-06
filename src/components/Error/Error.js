import { StyledError } from "./Error.styled"
import { Link } from 'react-router-dom'
import LandingButton from "../LandingButton/LandingButton"
import { useState } from "react"

function Error() {

    const [btnDesc, setBtnDesc] = useState("Welcome to Destination: Bananas!")

    return (

        <StyledError>
                <h1>Error🍌404</h1>
                <h2>Destination: (not) Banana</h2>
                <p>The address could be misstyped or the page has been moved.</p>
                <Link id='goHome' to='/HomePage'>
                    <LandingButton 
                        buttonName={"home"} 
                        buttonAlt={"go home"} 
                        backgroundColor="#fcb805"
                        boxShadow="#ff931e"
                        setBtnDesc={setBtnDesc}
                        description={"Standard Game"}
                    />
                </Link>
        </StyledError>

    )
    
}

export {Error}