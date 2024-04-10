import { StyledMonkeyThief } from './MonkeyThief.styled'
import { useRef } from 'react'

export default function MonkeyThief() {

    const monkeyThiefRef = useRef()

    return (
        <StyledMonkeyThief id='monkeyThief' ref={monkeyThiefRef}>
            <img src='/assets/confused_monkey.svg' alt='Monkey Bro' />
        </StyledMonkeyThief>
    )
}