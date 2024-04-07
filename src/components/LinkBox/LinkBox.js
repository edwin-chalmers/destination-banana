import './LinkBox.css'
import { StyledLinkContainer } from './LinkBox.styled'
import { gsap } from 'gsap';
import { useRef } from 'react'

export default function LinkBox( {linkList, updatePages} ) {
    const linksRef = useRef()
    // gsap.fromTo(linksRef.current, {left: '-300'}, {duration: .75, ease: 'bounce', left: '0'})


    let keyTicker = 0

    function handleClick(event) {
        updatePages(event.target.textContent)
    }
    
    const linkTails = linkList.map((link) => {
        keyTicker += 1;
        return<a key={keyTicker} onClick={(event) => {
                event.preventDefault()
                handleClick(event)
            }} href={link.url}>{link.title}</a>
    })

    return (
        <StyledLinkContainer ref={linksRef} id="links-container">
            {linkTails}
        </StyledLinkContainer>
    )
}



// return (
//     <StyledLinkContainer id="links-container">
//         {linkTails}
//     </StyledLinkContainer>
// )
// }