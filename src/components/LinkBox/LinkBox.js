import './LinkBox.css'

export default function LinkBox( {linkList, updatePages} ) {
    // const nowKey = Date.now()
    function handleClick(event) {
        updatePages(event.target.innerText)
    }
    
    const linkTails = linkList.map((link) => {

        return <p onClick={(event) => {
            handleClick(event)
        }}>{link}</p>
    })

    return (
        <div className='link-container'>
            {linkTails}
        </div>
    )
}