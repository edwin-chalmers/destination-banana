import './WikiPage.css'
import LinkIcon from '../LinkIcon/LinkIcon'

export default function WikiPage ( { id, stringForDOM, isCurrent, isDisplayed, title, focusPage }) {
    console.log('id on creation', id)

    return isDisplayed && (
        <div className="wiki-page">
            <LinkIcon id={id} focusPage={focusPage} />
            {/* <img src={linkIcon} alt="chain link icon" onClick={() => focusPage(id)} /> */}
            {stringForDOM}
        </div>
    )
}


//   <div className="wiki-page" onClick={() => {
//     removePage(id)