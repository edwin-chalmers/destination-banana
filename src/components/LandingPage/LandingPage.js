import { Link } from 'react-router-dom'
import { StyledLanding } from './LandingPage.styled'
import { gsap } from 'gsap';
import Draggable from 'gsap/Draggable';
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { useGSAP } from "@gsap/react/dist";
import MonkeyThief from '../MonkeyThief/MonkeyThief'
import { useRef, useEffect } from 'react'

gsap.registerPlugin(Draggable, MotionPathPlugin, MotionPathHelper, useGSAP);
gsap.config({trialWarn: false})
 
function LandingPage() {

    useEffect(() => {
        const tl = gsap.timeline();
        tl.to(
            '#monkeyThief',
            { left: '-500', delay: 1, duration: .75 }
        )
        tl.to(
            '#monkeyThief',
            { left: '-3000', top: '1500', scale: '15', duration: '.5s' }, "+=.5"
        )
        tl.to(
            '#monkeyThief',
            { left: '4000', duration: 3, onComplete: function() {
                document.getElementById('monkeyThief').remove();
            } }, "+=.5"
        );
    }, [])

    return (
        <main>
            <MonkeyThief />
            <StyledLanding >
                    <section>
                        <p><span>1.</span> Click the <span>logo</span> to start your journey ☝️</p>
                        <p><span>2.</span> Each link will bring you closer to your destination: <span>banana</span>!</p>
                        <p><span>3.</span> Get to banana in as <span>few</span> clicks as possible.</p>
                        <p>The game pulls data from wikipedia and may contain content that is not suitable for everyone. Player discretion advised.</p>
                    </section>
                    <Link id='link' to='/HomePage'></Link>
            </StyledLanding >
        </main>
    )

}

export {LandingPage}