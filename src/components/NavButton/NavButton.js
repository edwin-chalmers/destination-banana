import { StyledNavButton } from './NavButton.styled'

export default function NavButton({ buttonText, buttonImage }) {

    return (
        <>
        <StyledNavButton>
            <p>{buttonText}</p>
            <div>
                <img src={buttonImage} alt='undo icon'/>
            </div>
        </StyledNavButton>
        </>
        
    )

}