import { StyledLandingButton } from "./LandingButton.styled"


export default function LandingButton({ playDailyChallenge, buttonName, buttonAlt, backgroundColor, boxShadow }) {

    return (
        <StyledLandingButton 
            onClick={playDailyChallenge}
            backgroundColor={backgroundColor} 
            boxShadow={boxShadow} 
        >
            <img src={`/assets/buttons/${buttonName}.svg`} alt={buttonAlt} />
        </StyledLandingButton>
    )

}