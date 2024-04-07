import { StyledWin } from "./Win.styled"
import { gsap } from 'gsap'
import { useRef } from 'react'

export default function Win({ animateWin }){
    const winRef = useRef()
    animateWin(winRef)

    return (
        <StyledWin ref={winRef}>
            <div id="win-container">
                <p>
                YOU WIN!!!
                </p>
            </div>
        </StyledWin>
    )
}