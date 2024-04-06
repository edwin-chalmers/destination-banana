import './LinkBox.css'

export default function LinkBox( {linkList, updatePages} ) {
    let keyTicker = 0

    function handleClick(event) {
        updatePages(event.target.textContent)
    }
    
    const linkTails = linkList.map((link) => {
        keyTicker += 1;
        return <a key={keyTicker} onClick={(event) => {
            event.preventDefault()
            handleClick(event)
        }} href={link.url}>{link.title}</a>
    })

    return (
        <div className='link-container'>
            {linkTails}
        </div>
    )
}