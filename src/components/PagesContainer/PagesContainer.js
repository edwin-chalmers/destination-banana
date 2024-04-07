import WikiPage from '../WikiPage/WikiPage'
import './PagesContainer.css'
import { StyledPagesContainer } from './PagesContainer.styled'
import { gsap } from 'gsap';
import { useRef } from 'react'

export default function PagesContainer({ pages, focusPage, animatePages, slidePage }) {

    // Draggable.create("#pages", {
    //     type: "x,y", // Allows dragging on both x and y axis. Use "x" or "y" for one axis.
    //     bounds: "#mainContent", // Specify the ID or class of the container to constrain dragging
    //     edgeResistance: 0.65, // How much resistance when dragging past the bounds (0-1)
    //     inertia: true, // Apply inertia to the dragging motion
    //     zIndexBoost: false
    //   });

    const pagesRef = useRef()
    animatePages(pagesRef)


    const filteredPages = pages.filter(page => page.isDisplayed === true)

    const pagesDisplay = filteredPages.map((page) => {
        return (
            
                <WikiPage
                    key={page.id}
                    id={page.id}
                    stringForLinks={page.stringforLinks}
                    stringForDOM={page.stringForDOM}
                    isCurrent={true}
                    isDisplayed={true}
                    title={page.title}
                    focusPage={focusPage}
                    slidePage={slidePage}
                />
        )
    })

    return (
        <StyledPagesContainer ref={pagesRef}>
            {pagesDisplay}
        </StyledPagesContainer>
    )
}