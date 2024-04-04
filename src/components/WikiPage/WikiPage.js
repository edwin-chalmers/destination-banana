import './WikiPage.css'

export default function WikiPage ( { pageHTML }) {
    return (
        <div className="wiki-page">
            {pageHTML}
        </div>
    )
  }