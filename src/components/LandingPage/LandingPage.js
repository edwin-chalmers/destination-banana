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
gsap.registerPlugin(GSDevTools)
gsap.registerPlugin(Draggable, MotionPathPlugin, MotionPathHelper, InertiaPlugin, useGSAP,DrawSVGPlugin,ScrambleTextPlugin,CustomEase, MotionPathPlugin, DrawSVGPlugin);
gsap.config({trialWarn: false})
 
function LandingPage() {
    // let link
    // setTimeout(() => {
    // link = document.querySelector('#link')

    // if(link){   
    //     MotionPathHelper.create('#link')
    //     gsap.to('#link', {
    //         motionPath: {
    //             alignOrigin: [0.5, 0.5],
    //             autoRotate: true,
    //         },
    //         transformOrigin: "50% 50%",
    //         duration: 5,
    //         ease: "power1.inOut",
    //         reversed: true,
    //     })
    // } 
    // }, 100);

    return (
        <>
            <StyledLanding >
                <img id='beach' src='/assets/beach_light.svg' />
                <Link id='link' to='/HomePage'></Link>
            </StyledLanding >
        </>
    )

}

export {LandingPage}