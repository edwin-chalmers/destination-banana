import LinkIcon from '../LinkIcon/LinkIcon'
import { WikiPageContainer} from './WikiPage.styled'

export default function WikiPage ( { id, stringForDOM, isCurrent, isDisplayed, title, focusPage }) {

    return isDisplayed && (
        <WikiPageContainer >
            <LinkIcon id={id} focusPage={focusPage} />
            <h3>{title}</h3>
            {stringForDOM}
        </WikiPageContainer>
    )

}

WikiPage.propTypes = {
    isDisplayed: PropTypes.bool.isRequired,
    stringForDOM: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
}