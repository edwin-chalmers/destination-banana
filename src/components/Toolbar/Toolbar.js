import { StyledLink, StyledToolbar, StyledButton, StyledLogo, StyledEndpoint, StyledCounter } from './Toolbar.styled'
import NavButton from '../NavButton/NavButton'
import PropTypes from 'prop-types'
import DailyChallenge from '../DailyChallenge/DailyChallenge';
import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'


const Toolbar = React.forwardRef((props, navBar) => {
    const { focusPage, pages, backClicks, startTitle, setStartTitle } = props;
    // const [monkeyState, setMonkeyState] = useState(pages)

    const resetStartTitle = () => {
        setStartTitle('')
    }

    const linkRef = useRef(null)
    let destRight
    let monkeyDest

    if (linkRef.current) {
        monkeyDest = linkRef.current.getBoundingClientRect();
        destRight = monkeyDest.right;
    }

    return (
        <StyledToolbar id='navBar' ref={navBar}>
            <StyledLink onClick={resetStartTitle} to={'/'} alt='Destination: Banana site logo'/>
            <NavButton buttonText="back" focusPage={focusPage} pages={pages} />
            <StyledCounter ref={linkRef}>
                <h2 id='click-counter'>{`${pages.length - 1 + backClicks} Clicks`}</h2>
                {`🍌`}
            </StyledCounter>
            {pages.length > 1 &&
                <motion.div
                    key={pages}
                    style={{left:`${destRight}px`}}
                    className="greedy-monkey"
                    animate={{y: [0, -100, 0]}}
                    transition={{delay: .5, type: "tween", duration: 3}}>
                        <img src='/assets/greedy_monkey.svg' alt='Monkey Bro' />
                </motion.div>
            }
            <div>
                <StyledEndpoint >
                    <h3>Start Point:</h3>
                     <p>{ pages.length > 0 && pages[0].title }</p>
                </StyledEndpoint>
                <StyledEndpoint >
                    <h3>Destination:</h3>
                    <p>Banana</p>
                  
                </StyledEndpoint>
            </div>
        </StyledToolbar>
    )
})

Toolbar.propTypes = {
    pages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        isCurrent: PropTypes.bool,
        isDisplayed: PropTypes.bool,
        stringForDOM: PropTypes.object,
        title: PropTypes.string
     })).isRequired,
}

export default Toolbar