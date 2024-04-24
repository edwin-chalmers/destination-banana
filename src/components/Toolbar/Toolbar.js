import { StyledLink, StyledToolbar, StyledButton, StyledLogo, StyledEndpoint, StyledCounter } from './Toolbar.styled'
import NavButton from '../NavButton/NavButton'
import PropTypes from 'prop-types'
import DailyChallenge from '../DailyChallenge/DailyChallenge';


export default function Toolbar( { focusPage, pages, backClicks, startTitle, setStartTitle }) {
    const resetStartTitle = () => {
        setStartTitle('')
    }
    return (
        <StyledToolbar >
            <StyledLink onClick={resetStartTitle} to={'/'} alt='wikiLinks site logo'/>
            <NavButton buttonText="back" focusPage={focusPage} pages={pages} />
            <StyledCounter >
                <h2 id='click-counter'>{`${pages.length + backClicks} Clicks`}</h2>
                {`🍌`}
            </StyledCounter>
            <div>
                <StyledEndpoint >
                    <h2>Start Point:</h2>
                     <p>{ pages.length > 0 && <p>{pages[0].title}</p> }</p>
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
    pages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        isCurrent: PropTypes.bool,
        isDisplayed: PropTypes.bool,
        stringForDOM: PropTypes.object,
        title: PropTypes.string
     })).isRequired,
}