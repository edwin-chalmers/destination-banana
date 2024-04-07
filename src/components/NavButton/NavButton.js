import { StyledNavButton } from './NavButton.styled'

export default function NavButton({ buttonText, focusPage }) {

    return (
        <>
            <StyledNavButton onClick={() => {
                console.log('in click')
                focusPage(0)
            }}>
                <p>{buttonText}</p>
                <div>
                    <img src="/assets/future_white_48dp.svg" alt='undo icon'/>
                </div>
            </StyledNavButton>
        </>
    )
}