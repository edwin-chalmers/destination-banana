import { StyledWin } from "./Win.styled"
import { gsap } from 'gsap'
import { useRef } from 'react'

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