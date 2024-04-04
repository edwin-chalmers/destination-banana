import './LinkBox.css'

export default function LinkBox( {linkList} ) {
    console.log('linkList', linkList)
    const linkTails = linkList.map((link) => {
        const tail = link.split('/').slice(-1)
        console.log('tail', tail)
        return (
            <p>{tail}</p>
        )
    })


    return (
        <div className='link-container'>
            {linkTails}
        </div>
    )

}