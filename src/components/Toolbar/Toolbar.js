import { StyledToolbar, StyledButton, StyledLogo, StyledEndpoint} from './Toolbar.styled'
import NavButton from '../NavButton/NavButton'

export default function Toolbar( { focusPage, pages }) {

    return (
        <StyledToolbar >
                <StyledEndpoint >
                    <h2>Start:</h2>
                    { pages.length > 0 && <p>{pages[0].title}</p> }
                </StyledEndpoint>
                <NavButton buttonText="back" buttonImage="/assets/history_white_48dp.svg" onClick={() => {focusPage(0)}}/>
                <StyledLogo src='/assets/wikilinks-logo.svg' alt='wikiLinks site logo'/>
                <NavButton buttonText="next" buttonImage="/assets/future_white_48dp.svg" />
            <StyledEndpoint >
                <h2>End:</h2>
                <p>🍌 Banana 🍌</p>
            </StyledEndpoint>
            {/* <NavButton >
                <img src='/assets/history_white_48dp.svg' alt='undo icon'/>
            </NavButton> */}
            {/* <img src='/assets/undo_white.svg' className='undo-icon' alt='undo icon'/>
            <StyledButton onClick={() => {focusPage(0)}}>back</StyledButton> */}
        </StyledToolbar>
    )
}