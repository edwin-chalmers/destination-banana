import Win from '../Win/Win'
import { useEffect, useState } from 'react'
import { WikiPageContainer} from './WikiPage.styled'
import PropTypes from 'prop-types'


export default function WikiPage ( { id, stringForDOM, isDisplayed, title, pages, focusPage, resetGame }) {


    return isDisplayed && (
        <WikiPageContainer id='page-container'>
            {title === "Banana" ?
                <Win pages={pages} resetGame={resetGame}/>
                :
                <>
                    <h5>{title}</h5>
                    <p className="click-num">{`${id}`}</p>
                    <div id='pageContent'>{stringForDOM}</div>
                </>
            }
        </WikiPageContainer>
    )

}

WikiPage.propTypes = {
    isDisplayed: PropTypes.bool.isRequired,
    stringForDOM: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
}