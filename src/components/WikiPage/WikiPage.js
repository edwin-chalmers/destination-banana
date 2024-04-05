import './WikiPage.css'

export default function WikiPage ( { id, stringForDOM, isCurrent, isDisplayed, title, focusPage }) {

    return (
        {isCurrent} && 
            <div className="wiki-page" onClick={((id) => {
                focusPage(id)
            })}>
                {stringForDOM}
            </div>
    )
  }


//   <div className="wiki-page" onClick={() => {
//     removePage(id)