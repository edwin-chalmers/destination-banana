import { StyledNavButton } from './NavButton.styled'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export default function NavButton({ buttonText, focusPage, pages, setClickCount }) {
    let extraClicks = 0 
    return (
        <>
            <StyledNavButton disabled={true} onClick={() => {
                const displayedPages = pages.filter((page) => {
                    if (pages.length > 1) {extraClicks ++}
                    setClickCount = {extraClicks}

                    return page.isDisplayed
                })
                displayedPages.length > 1 
                    && focusPage(0) 

            }}>
                <div>
                    <p>Back</p>
                    <img src="/assets/future_white_48dp.svg" alt='undo icon'/>
                </div>
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
    setClickCount: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired,
    focusPage: PropTypes.func.isRequired,
}

