import WikiPage from '../WikiPage/WikiPage'
import './PagesContainer.css'

export default function PagesContainer({ pages, focusPage }) {
console.log('pages in PC', pages)
    const pagesDisplay = pages.map((page) => {
        return (
            <WikiPage
                key={page.id}
                id={page.id}
                stringForLinks={page.stringforLinks}
                stringForDOM={page.stringForDOM}
                isCurrent={true}
                isDisplayed={true}
                title={page.endpoint}
                focusPage={focusPage}
            />
        )
    })

    return (
        <div className="pages-container">
            {pagesDisplay}
        </div>
    )
}