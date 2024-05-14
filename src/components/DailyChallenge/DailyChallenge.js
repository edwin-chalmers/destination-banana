import './DailyChallenge.css'
import { getFeatured } from '../../ApiCalls'
import { useGlobalProps } from '../..'
import { useNavigate } from 'react-router-dom'
import LandingButton from '../LandingButton/LandingButton'
import { gsap } from 'gsap';
import MonkeyThief from '../MonkeyThief/MonkeyThief'
import { useEffect,} from 'react'

export default function DailyChallenge({ setBtnDesc, description}) {
    const {startTitle, setStartTitle, setGameType} = useGlobalProps()
    const navigate = useNavigate()
    let featuredArticles
    
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0'); 
 
    const playDailyChallenge = async () => {
        setGameType('Daily_Challenge')
        featuredArticles = await getFeatured(`${year}/${month}/${day}`)
        setData()
    }

    const setData = async () => {
        await setStartTitle(featuredArticles.tfa.title)

        const monkeyThief = document.getElementById('monkeyThief')
        const tl = gsap.timeline();
        tl.to(
            monkeyThief,
            { left: '-500', delay: 0, duration: .75 }
        )
        gsap.to('#c', {
            delay: 0.25,
            duration: 0.25,
            x: -2000,
        })
        tl.to(
            monkeyThief,
            { left: '-3000', top: '1500', scale: '15', duration: '.5s' }, "+=.5"
        )
        tl.to(
            monkeyThief,
            {
                left: '4000', duration: 2, onComplete: function () {
                    if (document.getElementById('monkeyThief')) {
                        document.getElementById('monkeyThief').remove()
                        navigate('/HomePage')
                    }
                } 
            }, "+=.5"
        )
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
                backgroundcolor="#7ff1f4"
                boxshadow="#61dbdb"
                goToPage={playDailyChallenge}
                setBtnDesc={setBtnDesc}
                description={description}
            />
        </>
    )
}