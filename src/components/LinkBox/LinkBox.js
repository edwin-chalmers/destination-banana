import { StyledLinkContainer } from './LinkBox.styled'
import PropTypes from 'prop-types'
import { gsap } from 'gsap'
import {useGSAP, useRef, useEffect} from 'react'


export default function LinkBox({ linkList, updatePages, checkForWin }) {
    const clickCount = document.querySelector('#click-counter');
    let keyTicker = 0

    let destTop, destLeft, bananaDest;

    if (clickCount) {
        bananaDest = clickCount.getBoundingClientRect();
    
        destTop = bananaDest.top;
        destLeft = bananaDest.left;
    } else {
        console.error("Element with ID 'click-counter' not found.");
    }

    function handleClick(event) {
        checkForWin(event.target.textContent)
        updatePages(event.target.textContent)

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
          },
          {
              scale: '1',
              y: '-60',
              x: destLeft -250,
              duration: '1.5',
              ease: 'sine.inOut'
          })

    }
    
    const linkTails = linkList.map((link) => {
        keyTicker += 1;
        return (
            <>
                <div className='link-background'></div>
                <a key={keyTicker} onClick={(event) => {
                    event.preventDefault()
                    handleClick(event)
                }} href={link.url}>{link.title}</a>
            </>
        )
    })

   
    // const linkBackgrounds = querySelectorAll('.link-background')

    // linkBackgrounds.forEach(function (element){
    //     const tl = gsap.timeline({paused:true});
    //     tl.to(element, 0.2, {backgroundColor:"yellow"})
    //     .to(element, 0.2, {height:100})
    //     .to((element).find("div"), 0.2, {color:"red", rotation:360, y:40})
    //     element.animation = tl;
    // })
    
    // (".link-background").mouseenter(function(){
    //     this.animation.play();
    // })
    
    // (".link-background").mouseleave(function(){
    //     this.animation.reverse();
    // })

   


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