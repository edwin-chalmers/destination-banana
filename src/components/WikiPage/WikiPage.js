import './WikiPage.css'
import LinkIcon from '../LinkIcon/LinkIcon'
import { WikiPageContainer } from './WikiPage.styled'
import { useRef } from 'react'

export default function WikiPage ( { id, stringForDOM, isCurrent, isDisplayed, title, focusPage, slidePage }) {
    const titleRef = useRef()
    slidePage(titleRef)

    return isDisplayed && (
        <WikiPageContainer ref={titleRef}>
            <LinkIcon id={id} focusPage={focusPage} />
            <h3>{title}</h3>
            {stringForDOM}
        </WikiPageContainer>
    )

    // return isDisplayed && (
    //     <div className="wiki-page">
    //         <LinkIcon id={id} focusPage={focusPage} />
    //         {stringForDOM}
    //     </div>
    // )
}
