import WikiPage from '../WikiPage/WikiPage'
import './PagesContainer.css'

export default function PagesContainer({ pages }) {
console.log('pages in PC', pages)
    const pagesDisplay = pages.map((page) => {
        return (
            <WikiPage
                id={page.id}
                stringForLinks={page.stringforLinks}
                stringForDOM={page.stringForDOM}
                isCurrent={true}
                isDisplayed={true}
                title={page.endpoint}
            />
        )
    })

    return (
        <div className="pages-container">
            {pagesDisplay}
        </div>
    )
}