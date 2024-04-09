import { StyledWin } from "./Win.styled"
import { gsap } from 'gsap'
import { useRef } from 'react'
import PropTypes from 'prop-types'

export default function Win({ animateWin, pages }){
    const winRef = useRef()
    animateWin(winRef)



    return (
        <StyledWin ref={winRef}>
            <div id="win-container" >
                <h2>
                    YOU WIN!!! 
                    <br/>
                    {` In ${pages.length} clicks`}
                </h2>
            </div>
        </StyledWin>
    )
}

Win.propTypes = {
    pages: PropTypes.shape({
       id: PropTypes.number.isRequired,
       isCurrent: PropTypes.bool.isRequired,
       isDisplayed: PropTypes.bool.isRequired,
       stringForDOM: PropTypes.object.isRequired,
       title: PropTypes.string.isRequired
    }).isRequired,
    animateWin: PropTypes.func.isRequired
}