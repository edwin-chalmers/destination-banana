import { StyledNavButton } from './NavButton.styled'
import styled from 'styled-components'

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
                <p>{buttonText}</p>
                <div>
                    <img src="/assets/future_white_48dp.svg" alt='undo icon'/>
                </div>
            </StyledNavButton>
        </>
    )
}


