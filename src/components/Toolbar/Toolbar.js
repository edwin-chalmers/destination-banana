import { StyledToolbar, StyledButton, StyledLogo, StyledEndpoint, StyledCounter } from './Toolbar.styled'
import NavButton from '../NavButton/NavButton'


export default function Toolbar( { focusPage, pages, backClicks }) {
    return (
        <StyledToolbar >
            <StyledEndpoint >
                <h2>Start Point:</h2>
                { pages.length > 0 && <p>{pages[0].title}</p> }
            </StyledEndpoint>
                <NavButton buttonText="back" focusPage={focusPage} pages={pages} />
                <StyledLogo src='/assets/wikilinks-logo.svg' alt='wikiLinks site logo'/>
                <StyledCounter >{`[${pages.length + backClicks}]`}</StyledCounter>
            <StyledEndpoint >
                <h2>Destination:</h2>
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