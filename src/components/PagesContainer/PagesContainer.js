import WikiPage from '../WikiPage/WikiPage'
import { StyledPagesContainer } from './PagesContainer.styled'
import { gsap } from 'gsap'
import {useGSAP, useRef, useEffect} from 'react'

export default function PagesContainer({ pages, focusPage }) {

    const containerRef = useRef(null); // Ref for the container
    const clickCount = document.querySelector('#click-counter');

    let destTop, destLeft, bananaDest;

    if (clickCount) {
        bananaDest = clickCount.getBoundingClientRect();
    
        destTop = bananaDest.top;
        destLeft = bananaDest.left;
    } else {
        console.error("Element with ID 'click-counter' not found.");
    }


const banana = useRef()

    useEffect(() => {
        const banana = document.createElement('p')
        banana.textContent= '+🍌'
        banana.id = 'banana'
        console.log(containerRef)
        containerRef.current.appendChild(banana)
        const tl = gsap.timeline({
            onComplete: () => {
                containerRef.current.removeChild(banana);
            }
        });
        tl.fromTo('#banana', {
            scale: '5',
            filter: 'drop-shadow(2px 4px 3px black)',
            y: '32px',
            x: '74px',
        },
        {
            scale: '1',
            y: '-60',
            x: destLeft -250,
            duration: '1.5',
            ease: 'sine.inOut'
        })
    }, [pages.length])

    useEffect(() => {
        console.log(containerRef.length)
        gsap.fromTo(
            containerRef.current,
            { left: '-250' },
            { duration: 1, left: '330', ease: 'power3.out', delay: 1.5 }
        );
    }, []);

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