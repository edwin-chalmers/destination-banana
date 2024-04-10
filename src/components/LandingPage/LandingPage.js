import { Link } from 'react-router-dom'
import { StyledLanding } from './LandingPage.styled'
import { gsap } from 'gsap';
import Draggable from 'gsap/Draggable';
import InertiaPlugin from 'gsap-trial/InertiaPlugin'
import { CustomEase } from "gsap-trial/CustomEase";
import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { MotionPathHelper } from "gsap-trial/dist/MotionPathHelper";
import { ScrambleTextPlugin } from "gsap-trial/ScrambleTextPlugin";
import { useGSAP } from "@gsap/react/dist";
import { StyledLandingPage } from './LandingPage.styled';
import {GSDevTools} from "gsap-trial/GSDevTools"
import MonkeyThief from '../MonkeyThief/MonkeyThief'
import { useRef } from 'react'

gsap.registerPlugin(GSDevTools)
gsap.registerPlugin(Draggable, MotionPathPlugin, MotionPathHelper, InertiaPlugin, useGSAP,DrawSVGPlugin,ScrambleTextPlugin,CustomEase, MotionPathPlugin, DrawSVGPlugin);
gsap.config({trialWarn: false})
 
function LandingPage() {

   

    const monkeyThiefRef = useRef()
    const tl = gsap.timeline()
    tl.to(
        // monkeyThiefRef.current,
        '#monkey-thief'.current,
        { left: '500', duration: 3}
    );

 console.log(monkeyThiefRef.current)

    return (
        <>
            <MonkeyThief ref={monkeyThiefRef} id="#monkey-thief"/>
            <StyledLanding >

                    <section>
                        <p><span>1.</span> Click the <span>logo</span> to start your journey ☝️</p>
                        <p><span>2.</span> Each link will bring you closer to your destination: <span>banana</span>!</p>
                        <p><span>3.</span> Get to banana in as <span>few</span> clicks as possible.</p>
                        <p>The game pulls data from wikipedia and may contain content that is not suitable for everyone. Player discretion advised.</p>
                    </section>
                        {/* <button>Start</button> */}
                    {/* <img id='beach' src='/assets/beach_light.svg' /> */}
                    <Link id='link' to='/HomePage'></Link>
            </StyledLanding >
        </>
    )

}

export {LandingPage}