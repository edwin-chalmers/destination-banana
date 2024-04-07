import { StyledToolbar, StyledButton, StyledLogo } from './Toolbar.styled'

export default function Toolbar( {focusPage }) {
    return (
        <StyledToolbar >
            <StyledLogo src='/assets/wikilinks-logo.svg' alt='wikiLinks site logo'/>
            <img src='/assets/undo_white.svg' className='undo-icon' alt='undo icon'/>
            <StyledButton onClick={() => {focusPage(0)}}>back</StyledButton>
        </StyledToolbar>
    )
}