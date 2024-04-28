import { StyledNavButton } from './NavButton.styled'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export default function NavButton({ buttonText, focusPage, pages }) {
    let extraClicks = 0

    function handleClick() {
        const displayedPages = pages.filter((page) => {

            return page.isDisplayed
        })
        displayedPages.length > 1 && focusPage(0) 
    }

    return (
        <>
            <StyledNavButton onClick={handleClick} onKeyDown={(e) => {
                                                                                        
                                                                    if(e.code === 'Space' || e.code === 'Enter') {
                                                                        e.preventDefault()
                                                                        handleClick()
                                                                    }
                                                                }}>
                    <p>Back</p>
                    <img src="/assets/future_white_48dp.svg" alt='undo icon'/>
            </StyledNavButton>
        </>
    )
}

NavButton.propTypes = {
    pages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        isCurrent: PropTypes.bool,
        isDisplayed: PropTypes.bool,
        stringForDOM: PropTypes.object,
        title: PropTypes.string
    })).isRequired,
    buttonText: PropTypes.string.isRequired,
    focusPage: PropTypes.func.isRequired,
}

