import WikiPage from '../WikiPage/WikiPage'
import { StyledPagesContainer } from './PagesContainer.styled'
import { gsap } from 'gsap'
import {useGSAP, useRef, useEffect} from 'react'

export default function PagesContainer({ pages, focusPage }) {

    const containerRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline()
        tl.fromTo(
            containerRef.current, 
            { left: '-65' },
            { duration: 1, left: '330', ease: 'power3.out'}
        );
    }, [pages.length]); 

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
                className='page-container'
            />
        )
    })

    return (
        <StyledPagesContainer ref={containerRef} id='main-page'>
            {pagesDisplay}
        </StyledPagesContainer>
    )
}