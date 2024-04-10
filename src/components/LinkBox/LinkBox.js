import { StyledLinkContainer } from './LinkBox.styled'
import PropTypes from 'prop-types'
import { gsap } from 'gsap'
import { useRef } from 'react'


export default function LinkBox({ linkList, updatePages, checkForWin }) {
    let keyTicker = 0

    function handleClick(event) {
        checkForWin(event.target.textContent)
        updatePages(event.target.textContent)
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