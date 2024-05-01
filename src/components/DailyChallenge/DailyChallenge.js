import './DailyChallenge.css'
import { getFeatured } from '../../ApiCalls'
import { useEffect } from 'react'
import { useGlobalProps } from '../..'
import { useNavigate } from 'react-router-dom'
import LandingButton from '../LandingButton/LandingButton'


export default function DailyChallenge() {
    const {startTitle, setStartTitle} = useGlobalProps()
    const navigate = useNavigate()
    let featuredArticles
    
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0'); 
 
    const playDailyChallenge = async () => {
        featuredArticles = await getFeatured(`${year}/${month}/${day}`)
        setData()
    }

    const setData = async () => {
        await setStartTitle(featuredArticles.tfa.title)
        navigate('/HomePage')
    }

    useEffect(() => {
        if(startTitle){
        }
    }, [startTitle])
            

    return (
        <>   
            <LandingButton
                className='dailyChallengeButton' 
                buttonName={"daily-challenge"} 
                buttonAlt={"daily challenge"} 
                backgroundColor="#7ff1f4"
                boxShadow="#61dbdb"
                playDailyChallenge={playDailyChallenge}
            />
        </>
    )
}