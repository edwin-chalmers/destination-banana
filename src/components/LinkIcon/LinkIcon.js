
function LinkIcon({ id, focusPage }) {
    return (
        <div onClick={() => {
            console.log('id in click', id)
            focusPage(id)
        }}>
            <img src='/assets/link-icon.svg' alt='time travel link icon'/>
        </div>
    )
}

export default LinkIcon