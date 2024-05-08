import { StyledWin } from "./Win.styled"
import { gsap } from 'gsap'
import { useRef } from 'react'
import LandingButton from "../LandingButton/LandingButton"
import PropTypes from 'prop-types'

export default function Win({ animateWin, pages }){
    const winRef = useRef()
    // animateWin(winRef)

    function refreshPage() {
        window.location.reload();
      }

    return (
        <StyledWin ref={winRef}>
            {/* <img id='monkeyBro' src='./assets/monkey_bro.svg'/> */}

            {/* <section>
                <button onClick={refreshPage}>New Game</button>
            </section> */}

            <h1>YOU WIN!!!</h1>
            <h2>{` In ${pages.length} clicks`}</h2>
            <div>
                <LandingButton 
                    className='newGame' 
                    buttonName={"new game"} 
                    buttonAlt={"new game"} 
                    backgroundColor="#7ff1f4"
                    boxShadow="#61dbdb"
                />
            </div>
            <img id="islandBackground" src="./assets/Island_with_Trees.svg"/>
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


