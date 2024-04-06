import { StyledToolbar, StyledButton } from './Toolbar.styled'

export default function Toolbar( {focusPage }) {
    return (
        <StyledToolbar >
            <img src='/assets/undo_white.svg' className='undo-icon' alt='undo icon'/>
            <StyledButton onClick={() => {focusPage(0)}}>back</StyledButton>
        </StyledToolbar>
    )
}