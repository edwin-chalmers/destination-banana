import { StyledWin, NewGameButton } from "./Win.styled"
import { useRef } from 'react'
import { gsap } from 'gsap';
import Draggable from 'gsap/Draggable';
import InertiaPlugin from 'gsap-trial/InertiaPlugin'
import { CustomEase } from "gsap-trial/CustomEase";
import { DrawSVGPlugin } from "gsap-trial/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { MotionPathHelper } from "gsap-trial/dist/MotionPathHelper";
import { ScrambleTextPlugin } from "gsap-trial/ScrambleTextPlugin";
import { useGSAP } from "@gsap/react/dist";

import {GSDevTools} from "gsap-trial/GSDevTools"
gsap.registerPlugin(GSDevTools)
gsap.registerPlugin(Draggable, MotionPathPlugin, MotionPathHelper, InertiaPlugin, useGSAP,DrawSVGPlugin,ScrambleTextPlugin,CustomEase, MotionPathPlugin, DrawSVGPlugin);
gsap.config({trialWarn: false})


gsap.to('', {
    
})

export default function Win({ animateWin, pages, delayForStats }){
    const winRef = useRef()
    animateWin(winRef)

    

    return (
        <StyledWin ref={winRef}>
            <div id="win-container" >
                <img src='/assets/monkey_bro.svg' id='monkey-bro' />
                <h2>
                YOU WIN!!! 
                <br/>
                {` In ${pages.length} clicks`}
                </h2>
               {delayForStats && <NewGameButton >New Game 🍌</NewGameButton>}
 
            </div>
        </StyledWin>
    )
}