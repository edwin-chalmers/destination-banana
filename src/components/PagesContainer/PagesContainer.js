import WikiPage from '../WikiPage/WikiPage'
import './PagesContainer.css'
import { StyledPagesContainer } from './PagesContainer.styled'

export default function PagesContainer({ pages, focusPage }) {

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
            />
        )
    })

    return (
        <StyledPagesContainer id='pages-container'>
            {pagesDisplay}
        </StyledPagesContainer>
    )
}