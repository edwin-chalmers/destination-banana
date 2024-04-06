import './LinkBox.css'

export default function LinkBox( {linkList, updatePages} ) {
    // const nowKey = Date.now()
    function handleClick(event) {
        updatePages(event.target.textContent)
    }
    
    const linkTails = linkList.map((link) => {
        return <a onClick={(event) => {
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