import { StyledLinkContainer } from './LinkBox.styled'
import PropTypes from 'prop-types'
import { gsap } from 'gsap'
import {useGSAP, useRef, useEffect} from 'react'

export default function LinkBox({ linkList, updatePages, checkForWin }) {
    let keyTicker = 0

    function handleClick(event) {
        checkForWin(event.target.textContent)
        updatePages(event.target.textContent)
        gsap.fromTo(
            '#main-page',
            { left: '-65' },
            { duration: 1, left: '330', ease: 'power3.out'}
          )
          
    }
    
    const linkTails = linkList.map((link) => {
        keyTicker += 1;
        return<a key={keyTicker} onClick={(event) => {
                event.preventDefault()
                handleClick(event)
            }} href={link.url}>{link.title}</a>
    })

    return (
        <StyledLinkContainer id="links-container">
            <h1>Links</h1>
            {linkTails}
        </StyledLinkContainer>
    )
}

LinkBox.propTypes = {
    linkList: PropTypes.array.isRequired,
    updatePages: PropTypes.func.isRequired,
    checkForWin: PropTypes.func.isRequired,
}