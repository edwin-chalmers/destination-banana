import { StyledWin } from "./Win.styled"
import { gsap } from 'gsap'
import { useRef } from 'react'
import LandingButton from "../LandingButton/LandingButton"
import PropTypes from 'prop-types'
import RunningMonkeys from '../RunningMonkeys/RunningMonkeys';

export default function Win({ resetGame, pages }){
    const winRef = useRef()

    function refreshPage() {
        window.location.reload();
      }

    return (
        <>
        <StyledWin ref={winRef}>

            <h5>YOU WIN!!!</h5>
            <h6>{` In ${pages.length - 1} clicks`}</h6>
            <div>
                <LandingButton 
                    className='newGame' 
                    buttonName={"new game"} 
                    buttonAlt={"new game"} 
                    backgroundcolor="#7ff1f4"
                    boxshadow="#61dbdb"
                    goToPage={() => resetGame()}
                />
            </div>
        <RunningMonkeys />
      </StyledWin>
      </>
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


