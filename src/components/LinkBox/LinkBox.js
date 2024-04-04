import './LinkBox.css'

export default function LinkBox( {linkList} ) {
    console.log('linkList', linkList)


   const linkTails = linkList.map((link) => {
    return <p>{link}</p>
   })


    return (
        <div className='link-container'>
            {linkTails}
        </div>
    )

}