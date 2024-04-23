import WikiPage from '../WikiPage/WikiPage'
import { StyledPagesContainer } from './PagesContainer.styled'
import { gsap } from 'gsap'
import {useGSAP, useRef, useEffect} from 'react'

export default function PagesContainer({ pages, focusPage }) {
    const containerRef = useRef(null)

    const numDisplayedPages = pages.reduce((acc, page) => {
        if(page.isDisplayed) {
            acc++
        }

        return acc
    }, 0)

    useEffect(() => {
        if(pages.length > 1){
            const tl = gsap.timeline()
            tl.fromTo(
                containerRef.current, 
                { left: '-63' },
                { duration: 1, left: '330', ease: 'power3.out'}
            );
        }
    }, [pages.length]);

    useEffect(() => {
        if(pages.length > 1) {
            console.log('here 12')
            const tl = gsap.timeline()
            tl.fromTo(
                containerRef.current, 
                { left: '660' },
                { duration: 1, left: '330', ease: 'power3.out'}
            );
        }
    }, [pages.length - numDisplayedPages]);

    useEffect(() => {
        const tl = gsap.timeline()
        tl.fromTo(
            containerRef.current, 
            { left: '-250' },
            { duration: 1, left: '330', delay: 1.5},
        )
    }, [])

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