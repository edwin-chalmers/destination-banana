import './LinkBox.css'
import { StyledLinkContainer } from './LinkBox.styled'

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
        <StyledLinkContainer>
            {linkTails}
        </StyledLinkContainer>
    )
}