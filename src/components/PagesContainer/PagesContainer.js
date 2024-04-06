import WikiPage from '../WikiPage/WikiPage'
import './PagesContainer.css'

export default function PagesContainer({ pages, focusPage }) {

    // const filteredPages = pages.filter(page => page.isCurrent === true)
    // console.log('FP look here', filteredPages)

    console.log(pages)
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