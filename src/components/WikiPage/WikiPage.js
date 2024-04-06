import './WikiPage.css'
import LinkIcon from '../LinkIcon/LinkIcon'
import styled from 'styled-components'
import { InfoBox, WikiPageContainer } from './WikiPage.styled'

export default function WikiPage ( { id, stringForDOM, isCurrent, isDisplayed, title, focusPage }) {

    return isDisplayed && (
        <WikiPageContainer >
            <LinkIcon id={id} focusPage={focusPage} />
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
