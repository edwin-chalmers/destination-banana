import { StyledError } from "./Error.styled"
import { Link } from 'react-router-dom'

function Error() {

    return (

        <StyledError>
                <h1>Error🍌404</h1>
                <h2>Destination not banana</h2>
                <p>The address could be misstyped or the page has been moved.</p>
                <Link id='goHome' to='/'>Go Home</Link>
        </StyledError>

    )
    
}

export {Error}