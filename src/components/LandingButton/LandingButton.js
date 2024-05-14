import { StyledLandingButton } from "./LandingButton.styled"


export default function LandingButton({ 
    goToPage, 
    buttonName, 
    buttonAlt, 
    backgroundcolor, 
    boxshadow,
    setBtnDesc,
    description
}) {

    return (
        <StyledLandingButton 
            onClick={goToPage}
            backgroundcolor={backgroundcolor} 
            boxshadow={boxshadow}
            onMouseEnter={() => {
                if (typeof setBtnDesc === 'function') {
                  setBtnDesc(description);
                }
            }}
        >
            {/* <img src={`/assets/buttons/${buttonName}.svg`} alt={buttonAlt} /> */}
            <p>{buttonName}</p>
        </StyledLandingButton>
    )

}