import { LinkButton } from "./LinkIcon.styled"
import PropTypes from 'prop-types'

function LinkIcon({ id, focusPage }) {
    return (
        <LinkButton onClick={() => {
            focusPage(id)
        }}>
            <img src='/assets/link-icon.svg' alt='time travel link icon'/>
        </LinkButton>
    )
}

export default LinkIcon

LinkIcon.propTypes = {
    id: PropTypes.number.isRequired,
    focusPage: PropTypes.func.isRequired,
}