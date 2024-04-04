import './WikiPage.css'

export default function WikiPage ( { id, stringForDOM, isCurrent, isDisplayed, title }) {

    console.log('stringfordom', stringForDOM)
    return (
        <div className="wiki-page">
            {stringForDOM}
        </div>
    )
  }


//   <div className="wiki-page" onClick={() => {
//     removePage(id)