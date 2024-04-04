import './LinkBox.css'

export default function LinkBox( {linkList, updateCurrentPage} ) {
    console.log('linkList', linkList)

    function handleClick(event) {
        updateCurrentPage(event.target.innerText)
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