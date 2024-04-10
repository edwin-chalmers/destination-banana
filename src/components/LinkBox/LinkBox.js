import { StyledLinkContainer } from './LinkBox.styled'
import PropTypes from 'prop-types'


export default function LinkBox({ linkList, updatePages, checkForWin }) {
    let keyTicker = 0

    function handleClick(event) {
        checkForWin(event.target.textContent)
        updatePages(event.target.textContent)
    }
    
    const linkTails = linkList.map((link) => {
        keyTicker += 1;
        return<a key={keyTicker} onClick={(event) => {
                event.preventDefault()
                handleClick(event)
            }} href={link.url}>{link.title}</a>
    })

    return (
        <StyledLinkContainer id="links-container">
            <h3>Links</h3>
            {linkTails}
        </StyledLinkContainer>
    )
}

LinkBox.propTypes = {
    linkList: PropTypes.array.isRequired,
    updatePages: PropTypes.func.isRequired,
    checkForWin: PropTypes.func.isRequired,
}