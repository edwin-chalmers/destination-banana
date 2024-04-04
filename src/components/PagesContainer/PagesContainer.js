import WikiPage from '../WikiPage/WikiPage'

export default function PagesContainer({ pages }) {

    const pagesDisplay = pages.map((page) => {
        console.log({page})
        return (
            <WikiPage
                id={page.id}
                stringForLinks={page.stringforLinks}
                stringForDOM={page.stringforDOM}
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