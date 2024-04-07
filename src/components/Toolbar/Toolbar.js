import { StyledToolbar, StyledButton, StyledLogo} from './Toolbar.styled'
import NavButton from '../NavButton/NavButton'

export default function Toolbar( {focusPage }) {
    return (
        <StyledToolbar >
            <NavButton buttonText="back" buttonImage="/assets/history_white_48dp.svg" onClick={() => {focusPage(0)}}/>
            <StyledLogo src='/assets/wikilinks-logo.svg' alt='wikiLinks site logo'/>
            <NavButton buttonText="next" buttonImage="/assets/future_white_48dp.svg" />
            {/* <NavButton >
                <img src='/assets/history_white_48dp.svg' alt='undo icon'/>
            </NavButton> */}
            {/* <img src='/assets/undo_white.svg' className='undo-icon' alt='undo icon'/>
            <StyledButton onClick={() => {focusPage(0)}}>back</StyledButton> */}
        </StyledToolbar>
    )
}