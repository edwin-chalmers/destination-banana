import WikiPage from '../WikiPage/WikiPage'
import { StyledPagesContainer } from './PagesContainer.styled'
import { gsap } from 'gsap'
import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react'

function PagesContainer({ pages, focusPage, clickAllowed, setClickAllowed}, ref) {
    const [linksReady, setLinksReady] = useState(false)
    setTimeout(() => {setLinksReady(true)}, 500)

    const containerRef = useRef(null)
    const pagesContainer = useRef(null);
    const[allowClick, setAllowClick] = useState(true)

      React.useImperativeHandle(ref, (arg) => ({
        childFunction: (arg) => childFunction(arg)
      }));

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
                { duration: 1, left: '340', ease: 'power3.out'}
            );
        }
    }, [pages.length]);

    useEffect(() => {
        if(pages.length > 1) {
            const tl = gsap.timeline()
            tl.fromTo(
                containerRef.current, 
                { left: '660' },
                { duration: 1, left: '340', ease: 'power3.out'}
            );
        }
    }, [pages.length - numDisplayedPages]);

    useEffect(() => {
        const tl = gsap.timeline()
        tl.fromTo(
            containerRef.current, 
            { left: '-250', opacity: 0 },
            { duration: 1, left: '340', opacity: 1, delay: 1},
        )
    }, [])

    const childFunction = (arg) => {
        if(allowClick) {
            setAllowClick(false)
            const tl = gsap.timeline()
            switch (arg) {
                case 'left':             
                    tl.to(
                        containerRef.current, 
                        { 
                            duration: 1,
                            left: '+=391.531', 
                            ease: 'power3.out',
                            onComplete: () => {setAllowClick(true)}
                        }
                    )
                break
                case 'right':             
                    tl.to(
                        containerRef.current, 
                        { 
                            duration: 1, 
                            left: '-=391.531', 
                            ease: 'power3.out',
                            onComplete: () => {setAllowClick(true)}
                        }
                    )
                break
            }
        }
    }

    useEffect(() => {
        setClickAllowed(allowClick)
    }, [allowClick]);

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
            {linksReady && pagesDisplay}
        </StyledPagesContainer>
    )
}

export default forwardRef(PagesContainer)