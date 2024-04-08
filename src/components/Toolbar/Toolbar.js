import { StyledToolbar, StyledButton, StyledLogo, StyledEndpoint, StyledCounter } from './Toolbar.styled'
import NavButton from '../NavButton/NavButton'
import PropTypes from 'prop-types'

export default function Toolbar( { focusPage, pages, backClicks }) {
    return (
        <StyledToolbar >
            <StyledLogo src='/assets/DB-horizontal-w-banana.svg' alt='wikiLinks site logo'/>
            <NavButton buttonText="back" focusPage={focusPage} pages={pages} />
            <StyledCounter >
                <h2>{`${pages.length + backClicks} Clicks`}</h2>
                {`🍌`}
            </StyledCounter>
            <div>
                <StyledEndpoint >
                    <h2>Start Point:</h2>
                    { pages.length > 0 && <p>{pages[0].title}</p> }
                </StyledEndpoint>
                <StyledEndpoint >
                    <h2>Destination:</h2>
                    <p>Banana</p>
                </StyledEndpoint>
            </div>
        </StyledToolbar>
    )
}

Toolbar.propTypes = {
    pages: PropTypes.shape({
       id: PropTypes.number.isRequired,
       isCurrent: PropTypes.bool.isRequired,
       isDisplayed: PropTypes.bool.isRequired,
       stringForDOM: PropTypes.object.isRequired,
       title: PropTypes.string.isRequired
    }).isRequired,
    animateWin: PropTypes.func.isRequired
}