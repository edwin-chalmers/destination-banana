import { StyledWin } from "./Win.styled"
import { gsap } from 'gsap'
import { useRef } from 'react'

export default function Win({ animateWin }){
    const winRef = useRef()
    animateWin(winRef)

    return (
        <StyledWin ref={winRef}>
            YOU WIN!!!
        </StyledWin>
    )
}