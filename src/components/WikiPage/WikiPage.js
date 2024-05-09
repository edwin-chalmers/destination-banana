import Win from '../Win/Win'
import { useEffect, useState } from 'react'
import { WikiPageContainer} from './WikiPage.styled'
import { fetchPhotos } from '../../ApiCalls'
import PropTypes from 'prop-types'


export default function WikiPage ( { id, stringForDOM, isDisplayed, title, pages, focusPage }) {
    const[photos, setPhotos]=useState()
    let photoList, photoEls

    useEffect(() => {
        const getPhotos = async () => {
         photoList = await fetchPhotos(title)
         setPhotos(photoList)
        }
        getPhotos()
    }, [])

    if(photos){
    photoEls = photos.items.map((photo) => {
        let photoSrc
        if(photo.srcset){
        photoSrc = photo.srcset[0].src
        }

        if(photoSrc){
            return(
                <div id='additionalImages' key={Date.now()}>
                    <img src={photo.srcset[photo.srcset.length-1].src}></img>
                    <div>{photo.srcset[photo.srcset.length-1].url}</div>
                    {photo.caption && photo.caption.text}
                </div>
            )}
        })
    //  photos.items.forEach((photo) => {
    //     if(photo.caption){
    //     console.log('photo',photo.srcset[photo.srcset.length-1])
    // }
    // })
    }
    return isDisplayed && (
        <WikiPageContainer id='page-container'>
            {title === "Banana" ?
                <Win pages={pages}/>
                :
                <>
                    <h5>{title}</h5>
                    <p className="click-num">{`${id}`}</p>
                    <div id='pageContent'>{stringForDOM}</div>
                </>
            }
            {title != "Banana" && <>{photoEls}</>}
        </WikiPageContainer>
    )

}

WikiPage.propTypes = {
    isDisplayed: PropTypes.bool.isRequired,
    stringForDOM: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
}