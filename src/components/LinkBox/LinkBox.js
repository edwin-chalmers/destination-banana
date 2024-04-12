import { StyledLinkContainer } from './LinkBox.styled'
import PropTypes from 'prop-types'
import { gsap } from 'gsap'
import {useGSAP, useRef, useEffect} from 'react'


export default function LinkBox({ pages, linkList, updatePages, checkForWin }) {
    let clickCount
    let keyTicker = 0

    let destTop, destLeft, bananaDest;

    if (document.querySelector('#click-counter')) {
        clickCount = document.querySelector('#click-counter')
        bananaDest = clickCount.getBoundingClientRect();
    
        destTop = bananaDest.top;
        destLeft = bananaDest.left;
    }

    function handleClick(event) {
        checkForWin(event.target.textContent)
        updatePages(event.target.textContent)
}


    useEffect(() => {
        if(pages.length > 1) {
            const banana = document.createElement('p')
            banana.textContent= '+🍌'
            banana.id = 'banana'
            const mainPage = document.querySelector('#main-page')
            mainPage.appendChild(banana)
            const tl = gsap.timeline({
                onComplete: () => {
                    mainPage.removeChild(banana);
                }
            });
            tl.fromTo('#banana', {
                scale: '5',
                filter: 'drop-shadow(2px 4px 3px black)',
                y: '32px',
                x: '74px',
                zIndex: '100',
                position: 'absolute'
            },
            {
                scale: '1',
                y: '-60',
                x: destLeft -250,
                duration: '1.5',
                ease: 'sine.inOut',
                zIndex: '100',
                position: 'absolute'
            })
        }
        }, [pages])

    // }
    
    let linkTails
    if(linkList) {
        linkTails = linkList.map((link) => {
            keyTicker += 1;
            return (
                <>
                    <a key={keyTicker} onClick={(event) => {
                        event.preventDefault()
                        handleClick(event)
                    }} href={link.url}>{link.title}</a>
                </>
            )
        })
    } else {
        linkTails = <p> No Links to display here! Click the back button. </p>
    }

    return (
        <StyledLinkContainer id="links-container">
            <h3>Links</h3>
            {linkTails}
        </StyledLinkContainer>
    )
}

LinkBox.propTypes = {
    linkList: PropTypes.array.isRequired,
    updatePages: PropTypes.func.isRequired,
    checkForWin: PropTypes.func.isRequired,
}