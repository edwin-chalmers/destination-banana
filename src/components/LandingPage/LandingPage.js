import { StyledLanding } from './LandingPage.styled'
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react/dist";
import { useNavigate } from 'react-router-dom'
import MonkeyThief from '../MonkeyThief/MonkeyThief'
import DailyChallenge from '../DailyChallenge/DailyChallenge';
import LandingButton from '../LandingButton/LandingButton';
import { useGlobalProps } from "../../index";
import { useRef, useEffect, useState } from 'react'

gsap.registerPlugin(useGSAP);


function LandingPage() {

    const {
        gameType,
        setGameType,
      } = useGlobalProps();

    const [btnDesc, setBtnDesc] = useState("The greedy Monkeys are after our bananas again. And this time they are taking them one link at a time. Can you make it to destination: “banana” to get them back??")
    const navigate = useNavigate()
    
    function playGame(e, type, mode) {  
        setGameType(mode)
        if(e.code === 'Space' || e.code === 'Enter' || type === 'click') {
            e.preventDefault()
            e.currentTarget.blur()
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
    }

    const goToHelp = (e) => {
        navigate('/Help')
    }



    return ( 
        <main>
            <MonkeyThief />
            <StyledLanding id='landingPage'>
                <div id='bananaContainer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 509.54 325.2">
                        <g id="a"/>
                        <g id="b">
                        <g id="c">
                        <path className="d" id="banStem" fill='#fcb805' d="M422.11,84.62c11.55,25.31,12.95,51.83,7.31,78.47-7.46,35.24-24.39,65.91-48.56,92.66-21.72,24.04-47.81,41.5-77.88,53.29-24.06,9.43-48.87,15.77-74.76,16.13-22,.31-43.77-1.89-64.93-9-18.76-6.3-36.69-14.09-52.71-25.79-10.5-7.67-20.01-16.48-28.2-26.63-2.42-3-3.46-6.25-2.71-10.21,1.2-6.37,2.26-12.78,2.92-19.22,.51-4.94,3.24-7.29,7.63-8.66,16.44-5.12,33.27-8.23,50.36-10.01,22.67-2.37,45.38-4.44,67.6-9.87,36.48-8.91,69.23-25.19,98.41-48.91,24.22-19.7,44.68-42.64,61.41-68.94,4.65-7.32,8.44-15.12,12.27-22.9,.88-1.78,2.02-3.42,3.04-5.13,14.94,4.38,28.69,10.57,37.38,24.51,.17,.27,.93,.16,1.42,.22Zm-38.21,74.14c3.99-10.62,8.86-18.75,10.23-28.13,.56-3.87-.02-7.55-4.66-8.6-4.41-1-6.36,1.97-7.64,5.48-9.12,24.99-22.26,47.29-40.78,66.76-29.44,30.93-65.11,50.23-106.2,60.14-28.09,6.77-56.42,6.34-84.79,1.87-7.01-1.1-12.03,.61-12.8,4.57-.79,4.05,2.52,7,9.71,8.75,11.35,2.76,22.89,4.53,34.52,5.19,34.96,1.98,68.21-4.82,100.23-19.04,46.35-20.58,80.16-53.88,102.19-96.99Z" />
                        <path className="f" id="banBody" fill='#233947' d="M422.11,84.62c-.49-.07-1.25,.04-1.42-.22-8.69-13.94-22.44-20.12-37.38-24.51,6.29-16.31,7.7-33.2,6.29-50.51-.7-8.64,3.91-11.49,11.89-7.81,7.71,3.55,15.39,7.19,23.04,10.87,5.04,2.42,6.49,6.02,4.35,10.97-7.94,18.4-10.19,37.41-6.32,57.11,.27,1.39,1.19,2.9-.45,4.1Z" />
                        <path className="e" fill='#f9fefd' d="M383.9,158.76c-22.02,43.11-55.83,76.41-102.19,96.99-32.02,14.21-65.27,21.02-100.23,19.04-11.63-.66-23.17-2.43-34.52-5.19-7.19-1.75-10.5-4.69-9.71-8.75,.77-3.96,5.79-5.68,12.8-4.57,28.37,4.47,56.7,4.91,84.79-1.87,41.1-9.91,76.77-29.21,106.2-60.14,18.52-19.46,31.67-41.77,40.78-66.76,1.28-3.5,3.22-6.48,7.64-5.48,4.63,1.05,5.22,4.73,4.66,8.6-1.37,9.38-6.24,17.51-10.23,28.13Z" />
                        </g>
                        <path d="M61.66,111.22c-2.22-3.76-5.47-6.6-9.76-8.52-4.28-1.91-9.48-2.87-15.58-2.87-5.68,0-10.94,.31-15.78,.92-4.83,.62-8.66,1.48-11.49,2.59-1.23,.51-2.43,1.39-3.6,2.62-1.17,1.24-2.12,2.63-2.85,4.17-.73,1.54-1.09,2.96-1.09,4.26,0,.55,.12,.94,.36,1.17,.24,.22,.69,.34,1.34,.34,1.23,0,3.49-.57,6.77-1.71,2.98-1.07,4.95-1.6,5.89-1.6h.68v.19c-.91,.49-1.64,1.09-2.19,1.8-.88,1.24-1.74,3.36-2.58,6.38L.19,160.06c-.13,.65-.19,1.12-.19,1.41,0,1.14,.37,2,1.12,2.58,1.17,1.04,3.58,1.92,7.23,2.63,3.65,.72,7.68,1.07,12.1,1.07,13.73,0,24.7-4.35,32.91-13.05,3.51-3.66,6.32-8.22,8.45-13.65,2.12-5.44,3.19-10.84,3.19-16.19s-1.11-9.87-3.34-13.64Zm-16.94,33.36c-1.45,3.63-3.52,6.83-6.21,9.59-1.43,1.43-2.95,2.6-4.58,3.5-1.62,.91-3.37,1.55-5.25,1.93-1.89,.37-4.24,.56-7.06,.56-1.17,0-2.23-.04-3.17-.1,1.14-1.4,1.97-2.63,2.48-3.7,.75-1.4,1.42-3.38,2-5.94,.2-.98,.32-1.58,.39-1.8l9.78-37.01c2.69,.16,5.08,1.16,7.16,3,2.08,1.83,3.7,4.34,4.87,7.52,1.17,3.18,1.76,6.72,1.76,10.61,0,4.26-.73,8.2-2.17,11.84Z" />
                        <path d="M105.65,151.39c-.84-.52-1.75-.78-2.72-.78-.78,0-2.31,.83-4.58,2.49-3.89,2.85-7.06,4.28-9.49,4.28-2.18,0-3.44-.97-3.8-2.92,.74,.36,1.48,.54,2.19,.54,1.59,0,3.45-.62,5.57-1.85,2.13-1.24,4.3-2.96,6.5-5.17,2.7-2.63,4.73-5.37,6.12-8.22,1.37-2.86,2.06-5.6,2.06-8.23,0-3.38-.86-6.03-2.6-7.96-1.74-1.93-4.13-2.9-7.18-2.9-4.22,0-8.64,1.52-13.25,4.58-3.73,2.53-6.88,5.69-9.44,9.49-2.18,3.25-3.91,6.73-5.19,10.44-1.28,3.72-1.92,7.06-1.92,10.01,0,3.86,1.22,6.96,3.65,9.28,2.44,2.32,5.68,3.48,9.74,3.48,1.62,0,3.47-.32,5.55-.95,2.08-.64,4.15-1.49,6.23-2.58,2.08-1.09,4.24-2.45,6.48-4.09,2.24-1.64,4.22-3.32,5.94-5.04,.94-.94,1.41-1.71,1.41-2.29,0-.55-.42-1.09-1.27-1.61Zm-21.08-1.41c0-1.98,.4-4.34,1.19-7.08,.8-2.75,1.83-5.5,3.1-8.26,2.14-4.57,3.73-6.86,4.77-6.86,.74,0,1.12,.89,1.12,2.68,0,1.91-.21,3.97-.64,6.18-.42,2.21-1,4.2-1.75,5.99-.94,2.72-2.27,5.14-3.99,7.25-.78,1.01-1.92,2.02-3.41,3.02-.26-1.26-.39-2.24-.39-2.92Z" />
                        <path d="M125.23,170.14c1.91-.1,3.66-1.03,5.23-2.8s2.36-3.69,2.36-5.77c0-1.43-.47-2.56-1.41-3.41-1.01-1.01-3.26-2-6.77-2.97-5.16-1.49-8.52-3.17-10.08-5.01-1.46-1.49-2.19-3.28-2.19-5.36,0-3.73,1.35-7.46,4.07-11.2,2.71-3.73,6.18-6.79,10.4-9.18,4.22-2.39,8.47-3.58,12.76-3.58,2.08,0,4.02,.49,5.84,1.46,1.82,.97,3.26,2.26,4.33,3.87,1.07,1.61,1.61,3.35,1.61,5.23s-.58,3.77-1.75,5.75c-1.17,1.98-2.64,3.63-4.41,4.94-1.77,1.31-3.45,1.97-5.04,1.97-.91,0-1.7-.2-2.36-.58-.67-.39-1-.81-1-1.27s.13-1.12,.39-2c.71-2.79,1.07-5.23,1.07-7.3s-.62-3.98-1.85-5.79c-1.59,1.1-2.63,1.98-3.12,2.63-1.23,1.43-2.19,3.05-2.87,4.86-.75,1.85-1.12,3.6-1.12,5.25,0,1.17,.27,2.1,.81,2.8,.54,.7,1.41,1.29,2.63,1.78,1.22,.49,3.06,1.02,5.53,1.61,4.12,1.01,7.03,1.98,8.71,2.92,.39,.23,.99,.7,1.8,1.41,1.23,1.33,1.85,3.05,1.85,5.16,0,2.24-.7,4.51-2.09,6.79-1.4,2.29-3.55,4.65-6.48,7.09-3.12,2.63-6.22,4.51-9.3,5.65-3.08,1.14-6.49,1.71-10.23,1.71s-6.44-.71-8.5-2.14c-2.06-1.43-3.09-3.38-3.09-5.84,0-1.75,.68-3.53,2.04-5.33s3.06-3.27,5.09-4.41c2.03-1.14,4.02-1.7,5.96-1.7,1.46,0,2.19,.33,2.19,.97,0,.33-.21,.86-.63,1.61-1.27,2.27-1.9,4.37-1.9,6.28,0,1.36,.5,2.66,1.51,3.9Z" />
                        <path d="M164.67,120.96l.19-.58c2.14-6.04,4-10.29,5.56-12.76,.75-1.17,1.79-2.21,3.12-3.12,2.5-1.59,4.86-2.39,7.07-2.39,1.3,0,2.29,.29,2.97,.88,.68,.58,1.02,1.43,1.02,2.54,0,.75-.49,2.27-1.47,4.57-1.67,3.83-2.91,7.42-3.72,10.76,.55,.07,1.09,.16,1.61,.29,1.95,.29,3.23,.62,3.85,1,.62,.37,.93,1.05,.93,2.02,0,1.72-.44,3.31-1.31,4.77-.88,1.46-2.03,2.53-3.46,3.22-1.07,.49-2.81,.81-5.21,.97-.42,1.27-.88,3-1.4,5.21-.29,1.95-.61,4.64-.96,8.09-.2,1.27-.29,2.45-.29,3.55,0,5.12,2.48,7.69,7.45,7.69h.44c.58,0,.88,.1,.88,.29,0,.52-.55,1.4-1.66,2.63-1.1,1.23-2.32,2.32-3.65,3.26-1.43,.97-2.99,1.75-4.68,2.34-1.69,.58-3.22,.88-4.58,.88-3.42,0-6.19-1.15-8.32-3.46-2.13-2.3-3.2-5.36-3.2-9.15,0-1.62,.28-3.75,.85-6.38,.57-2.63,1.45-6.15,2.65-10.57,.2-.78,.41-1.6,.63-2.46s.36-1.37,.39-1.53c-1.3-.03-2.22-.31-2.78-.83s-.83-1.36-.83-2.53c0-2.04,.79-3.98,2.36-5.79,1.57-1.82,3.42-2.95,5.53-3.41Z" />
                        <path d="M196.89,168.53c-1.46-.1-2.79-.76-3.99-2-1.2-1.3-2.05-2.7-2.55-4.21-.5-1.51-.75-3.46-.75-5.87,0-5.36,1-11.4,2.99-18.14,2-6.74,4.26-11.61,6.79-14.63,1.01-1.27,2.4-1.9,4.19-1.9,1.88,0,3.4,.86,4.55,2.58,1.15,1.72,1.73,3.98,1.73,6.77,0,4.12-.59,8.95-1.78,14.48-1.19,5.53-2.85,11.29-5,17.26-.84,2.4-1.88,4.03-3.11,4.87-.84,.52-1.83,.78-2.97,.78h-.1Z" />
                        <path d="M202.74,119.6c-3.05-.1-4.58-1.93-4.58-5.5,0-1.79,.45-3.85,1.34-6.21s1.91-4.1,3.04-5.23c.58-.62,1.18-1.05,1.78-1.31s1.37-.39,2.31-.39c1.62,0,2.82,.4,3.58,1.19,.76,.8,1.14,2.12,1.14,3.97,0,2.3-.4,4.49-1.19,6.55s-1.86,3.73-3.19,5.01c-1.33,1.28-2.7,1.92-4.09,1.92h-.15Z" />
                        <path d="M235.54,142.37l2.93-3.42c2.97-3.29,5.32-5.74,7.05-7.35,1.73-1.61,3.29-2.77,4.67-3.49s2.78-1.07,4.21-1.07c2.3,0,3.92,.62,4.86,1.85s1.41,3.38,1.41,6.43c0,1.27-.13,3.13-.39,5.6-.39,3.28-.58,6.36-.58,9.25,0,3.25,.16,5.88,.49,7.89,.23,1.23,.57,2.47,1.02,3.7,.32,1.17,.49,1.96,.49,2.39,0,.52-.19,.93-.58,1.22-1.01,.88-2.34,1.64-3.99,2.29-1.66,.65-3.05,.97-4.19,.97-1.85,0-3.53-.63-5.04-1.9-1.51-1.27-2.68-3.02-3.51-5.26-.83-2.24-1.24-4.77-1.24-7.6,0-1.88,.19-4.11,.58-6.67l-.19-.19c-1.4,1.56-2.52,2.79-3.38,3.7-.86,.91-1.66,1.77-2.41,2.58-3.64,4.16-6.72,7.9-9.25,11.25-.97,1.3-1.87,2.43-2.68,3.41-1.2,1.2-2.56,1.8-4.09,1.8-2.08,0-3.77-.78-5.06-2.34-1.3-1.56-1.95-3.57-1.95-6.04,0-1.53,.18-3.39,.54-5.6,.36-2.21,.83-4.57,1.44-7.08,.6-2.51,1.31-5.1,2.14-7.77,.83-2.66,1.73-5.19,2.7-7.6,1.49-3.99,3.31-7.11,5.45-9.35,1.46-1.46,3.23-2.19,5.31-2.19,3.38,0,5.06,2.19,5.06,6.57,0,3.21-.67,7.82-2.01,13.81l.19,.2Z" />
                        <path d="M316.04,158.65c-.09-.59-.19-1.37-.29-2.34-.09-.97-.16-1.83-.19-2.58-.03-.75-.05-1.85-.05-3.31,0-2.79,.1-5.8,.29-9.01,.15-1.35,.23-2.01,.24-2.01,0-1.35-.22-2.22-.68-2.59-.45-.37-1.55-.56-3.31-.56,1.33-2.14,2-4.17,2-6.09,0-2.59-1.34-4.74-4.02-6.45-2.68-1.7-6.09-2.55-10.25-2.55-4.93,0-10.06,1.77-15.38,5.3-5.16,3.44-9.45,7.63-12.86,12.56-2.04,3.02-3.65,6.11-4.82,9.26-1.17,3.15-1.75,5.87-1.75,8.18,0,3.73,1.18,6.81,3.55,9.25,2.37,2.43,5.38,3.65,9.01,3.65,1.79,0,3.74-.57,5.87-1.71,2.12-1.13,4.44-2.83,6.96-5.08,2.52-2.26,5.28-5.16,8.3-8.69l.18,.17c-.06,.53-.08,1.24-.08,2.11,0,8.38,2.5,12.57,7.5,12.57,1.85,0,3.67-.45,5.45-1.34,1.79-.9,3.65-2.3,5.6-4.21-.58-1.5-1.01-3.01-1.27-4.53Zm-15.38-14.66c-3.21,3.31-6.11,5.97-8.69,7.99-2.58,2.01-4.34,3.02-5.29,3.02-1.1,0-2.02-.59-2.75-1.76-.73-1.17-1.09-2.64-1.09-4.43,0-2.69,.88-5.76,2.65-9.2,1.77-3.44,4.17-6.8,7.18-10.08,1.08-1.1,1.87-1.65,2.39-1.65,.58,0,1.12,.57,1.61,1.72,.48,1.16,.73,2.43,.73,3.83,0,2.43-.91,5.03-2.73,7.79-.52,.97-.78,1.57-.78,1.8,0,.65,.63,.97,1.9,.97,1.04,0,2.73-.32,5.06-.97l.93-.29,.19,.19-1.31,1.07Z" />
                        <path d="M329.78,120.96l.19-.58c2.14-6.04,4-10.29,5.56-12.76,.75-1.17,1.79-2.21,3.12-3.12,2.5-1.59,4.86-2.39,7.07-2.39,1.3,0,2.29,.29,2.97,.88,.68,.58,1.02,1.43,1.02,2.54,0,.75-.49,2.27-1.47,4.57-1.67,3.83-2.91,7.42-3.72,10.76,.55,.07,1.09,.16,1.61,.29,1.95,.29,3.23,.62,3.85,1,.62,.37,.93,1.05,.93,2.02,0,1.72-.44,3.31-1.31,4.77-.88,1.46-2.03,2.53-3.46,3.22-1.07,.49-2.81,.81-5.21,.97-.42,1.27-.88,3-1.4,5.21-.29,1.95-.61,4.64-.96,8.09-.2,1.27-.29,2.45-.29,3.55,0,5.12,2.48,7.69,7.45,7.69h.44c.58,0,.88,.1,.88,.29,0,.52-.55,1.4-1.66,2.63-1.1,1.23-2.32,2.32-3.65,3.26-1.43,.97-2.99,1.75-4.68,2.34-1.69,.58-3.22,.88-4.58,.88-3.42,0-6.19-1.15-8.32-3.46-2.13-2.3-3.2-5.36-3.2-9.15,0-1.62,.28-3.75,.85-6.38,.57-2.63,1.45-6.15,2.65-10.57,.2-.78,.41-1.6,.63-2.46s.36-1.37,.39-1.53c-1.3-.03-2.22-.31-2.78-.83s-.83-1.36-.83-2.53c0-2.04,.79-3.98,2.36-5.79,1.57-1.82,3.42-2.95,5.53-3.41Z" />
                        <path d="M362,168.53c-1.46-.1-2.79-.76-3.99-2-1.2-1.3-2.05-2.7-2.55-4.21-.5-1.51-.75-3.46-.75-5.87,0-5.36,1-11.4,2.99-18.14,2-6.74,4.26-11.61,6.79-14.63,1.01-1.27,2.4-1.9,4.19-1.9,1.88,0,3.4,.86,4.55,2.58,1.15,1.72,1.73,3.98,1.73,6.77,0,4.12-.59,8.95-1.78,14.48-1.19,5.53-2.85,11.29-5,17.26-.84,2.4-1.88,4.03-3.11,4.87-.84,.52-1.83,.78-2.97,.78h-.1Z" />
                        <path d="M367.85,119.6c-3.05-.1-4.58-1.93-4.58-5.5,0-1.79,.45-3.85,1.34-6.21s1.91-4.1,3.04-5.23c.58-.62,1.18-1.05,1.78-1.31s1.37-.39,2.31-.39c1.62,0,2.82,.4,3.58,1.19,.76,.8,1.14,2.12,1.14,3.97,0,2.3-.4,4.49-1.19,6.55s-1.86,3.73-3.19,5.01c-1.33,1.28-2.7,1.92-4.09,1.92h-.15Z" />
                        <path d="M412.26,119.07c4.84,0,7.25,.57,7.25,1.7,0,1.3-1.09,2-3.26,2.09-2.63,.16-5.08,.91-7.35,2.24-2.27,1.33-4.29,3.15-6.06,5.45-1.77,2.3-3.15,4.9-4.14,7.79-.99,2.89-1.49,5.94-1.49,9.15,0,3.54,.83,6.39,2.48,8.54,1.66,2.16,3.81,3.24,6.48,3.24,2.47,0,4.63-1.27,6.48-3.8,1.85-2.53,2.78-5.48,2.78-8.86,0-2.76-.58-5.35-1.73-7.77s-2.83-4.46-5.04-6.11c-.94-.75-1.41-1.28-1.41-1.61,0-.45,.67-1.15,2-2.09,1.49-1.01,3.17-1.85,5.02-2.53,1.85-.68,3.41-1.02,4.67-1.02,1.46,0,2.85,.38,4.16,1.14,1.31,.76,2.47,1.85,3.48,3.26,1.01,1.41,1.78,3.04,2.31,4.87,.54,1.83,.8,3.79,.8,5.87,0,3.44-.65,6.84-1.95,10.2-1.3,3.36-3,6.08-5.11,8.16-2.73,2.63-6.01,4.78-9.86,6.45s-7.51,2.51-10.98,2.51-6.73-.58-10.05-1.75c-3.33-1.17-5.96-2.71-7.91-4.62-2.6-2.6-3.9-6.28-3.9-11.05,0-3.77,.93-7.53,2.78-11.3,1.85-3.77,4.36-7.18,7.52-10.25,3.17-3.07,6.65-5.49,10.47-7.25,3.81-1.77,7.67-2.65,11.56-2.65Z" />
                        <path d="M454.7,142.37l2.93-3.42c2.97-3.29,5.32-5.74,7.05-7.35,1.73-1.61,3.29-2.77,4.67-3.49s2.78-1.07,4.21-1.07c2.3,0,3.92,.62,4.86,1.85s1.41,3.38,1.41,6.43c0,1.27-.13,3.13-.39,5.6-.39,3.28-.58,6.36-.58,9.25,0,3.25,.16,5.88,.49,7.89,.23,1.23,.57,2.47,1.02,3.7,.32,1.17,.49,1.96,.49,2.39,0,.52-.19,.93-.58,1.22-1.01,.88-2.34,1.64-3.99,2.29-1.66,.65-3.05,.97-4.19,.97-1.85,0-3.53-.63-5.04-1.9-1.51-1.27-2.68-3.02-3.51-5.26-.83-2.24-1.24-4.77-1.24-7.6,0-1.88,.19-4.11,.58-6.67l-.19-.19c-1.4,1.56-2.52,2.79-3.38,3.7-.86,.91-1.66,1.77-2.41,2.58-3.64,4.16-6.72,7.9-9.25,11.25-.97,1.3-1.87,2.43-2.68,3.41-1.2,1.2-2.56,1.8-4.09,1.8-2.08,0-3.77-.78-5.06-2.34-1.3-1.56-1.95-3.57-1.95-6.04,0-1.53,.18-3.39,.54-5.6,.36-2.21,.83-4.57,1.44-7.08,.6-2.51,1.31-5.1,2.14-7.77,.83-2.66,1.73-5.19,2.7-7.6,1.49-3.99,3.31-7.11,5.45-9.35,1.46-1.46,3.23-2.19,5.31-2.19,3.38,0,5.06,2.19,5.06,6.57,0,3.21-.67,7.82-2.01,13.81l.19,.2Z" />
                        <path d="M494.79,152.27c1.79,.03,3.25,.39,4.38,1.07,1.14,.68,1.7,1.53,1.7,2.53,0,1.88-.59,3.79-1.78,5.72-1.19,1.93-2.7,3.54-4.55,4.82s-3.67,1.92-5.45,1.92c-1.4,0-2.56-.38-3.48-1.14-.92-.76-1.39-1.78-1.39-3.04,0-1.07,.29-2.41,.88-4.02,.58-1.61,1.28-3.03,2.09-4.26,.94-1.36,2.11-2.29,3.51-2.78,1.4-.55,2.73-.83,3.99-.83h.1Z" />
                        <path d="M497.9,139.91c-1.4,0-2.6-.49-3.6-1.46-1.01-.97-1.51-2.11-1.51-3.41s.41-2.79,1.22-4.67c.81-1.88,1.67-3.25,2.58-4.09,.94-.94,2.21-1.71,3.8-2.31,1.59-.6,3.12-.9,4.58-.9,3.05,0,4.58,.88,4.58,2.63v.1c-.1,1.82-.73,3.98-1.9,6.48-1.1,2.63-2.09,4.28-2.97,4.97-.75,.68-1.81,1.3-3.19,1.85-1.38,.55-2.57,.83-3.58,.83Z" />
                        <path d="M212.63,221.45v-.24c.71-.1,1.21-.2,1.51-.29,2.62-.72,5.42-2.18,8.37-4.39,2.66-2.01,4.61-4.17,5.84-6.47,1.24-2.31,1.85-4.93,1.85-7.89,0-2.11-.54-4.02-1.63-5.74-1.09-1.72-2.67-3.19-4.74-4.41-2.08-1.22-4.59-2.13-7.53-2.75-2.94-.62-6.22-.93-9.86-.93-6,0-11.43,.64-16.28,1.9-4.86,1.27-8.47,2.99-10.84,5.16-1.04,1.01-2.08,2.52-3.11,4.53-1.04,2.01-1.56,3.56-1.56,4.63,0,1,.66,1.51,1.99,1.51,.94,0,2.54-.46,4.78-1.37,.58-.32,.95-.5,1.12-.53-1.56,2.98-2.89,6.05-4,9.2l-5.69,17.53c-1.24,3.93-2.31,7.73-3.22,11.42-.91,3.68-1.36,6.03-1.36,7.03,0,1.79,.55,3.2,1.65,4.24,1.11,1.04,2.55,1.56,4.34,1.56,.84,0,1.7-.17,2.58-.49l.19,.19c-1.52,1.3-2.57,2.39-3.14,3.27-.18,.28-.33,.56-.45,.86-.27,.62-.4,1.27-.4,1.96,0,1.1,.7,2.13,2.09,3.09,1.4,.96,3.27,1.73,5.63,2.32,2.35,.58,4.81,.87,7.37,.87,3.06,0,6.72-.79,11.01-2.38,4.28-1.6,8.54-3.69,12.78-6.29,.1-.06,.2-.12,.29-.18,4.12-2.54,7.68-5.29,10.69-8.24,1.43-1.36,2.65-2.87,3.68-4.53,1.02-1.65,1.8-3.34,2.33-5.06,.54-1.72,.81-3.38,.81-4.97,0-7.95-5.7-12.66-17.09-14.12Zm-11.26-21.96c.62-.39,1.58-.58,2.88-.58,4.67,0,7.01,2.22,7.01,6.67,0,2.14-.78,4.34-2.35,6.6-1.57,2.25-3.77,4.37-6.61,6.35-2.27,1.59-4.25,2.39-5.97,2.39-.38,0-.77-.03-1.16-.1l6.2-21.33Zm-16.35,48.64c1.43-2.23,2.78-4.96,4.06-8.18,1.29-3.21,2.69-7.4,4.23-12.55,.13-.46,.26-.94,.39-1.46,.13-.52,.26-.99,.39-1.42,.81,.91,1.57,1.53,2.29,1.85,.71,.33,1.98,.67,3.79,1.02,1.98,.33,3.53,.73,4.65,1.22,1.12,.49,2.13,1.19,3.04,2.09,1.85,1.85,2.77,4.11,2.77,6.77,0,2.44-.6,4.95-1.8,7.55-1.2,2.6-2.76,4.84-4.68,6.72-1.3,1.26-2.68,2.18-4.16,2.75-1.48,.57-3.17,.85-5.09,.85-1.65,0-3.32-.18-4.99-.53-1.67-.36-4.47-1.14-8.4-2.34,1.53-1.53,2.7-2.97,3.51-4.34Z" />
                        <path d="M284.64,246.14c-.1-.59-.2-1.37-.29-2.34-.1-.97-.17-1.83-.2-2.58s-.05-1.85-.05-3.31c0-.44,0-.89,0-1.34,.02-2.4,.12-4.96,.29-7.67,.15-1.34,.23-2.01,.24-2.01,0-1.36-.23-2.22-.68-2.59-.46-.37-1.56-.56-3.31-.56,1.33-2.14,1.99-4.17,1.99-6.09,0-2.59-1.34-4.74-4.01-6.45-2.68-1.7-6.1-2.55-10.25-2.55-4.94,0-10.07,1.77-15.39,5.3-5.16,3.45-9.45,7.63-12.85,12.57-2.05,3.01-3.66,6.1-4.82,9.25-1.17,3.15-1.76,5.87-1.76,8.18,0,3.73,1.19,6.81,3.56,9.25,.17,.18,.35,.35,.53,.51,2.28,2.09,5.11,3.14,8.48,3.14,1.78,0,3.74-.57,5.86-1.7,2.13-1.14,4.45-2.84,6.97-5.09,1.41-1.27,2.91-2.75,4.49-4.43h0c1.22-1.31,2.48-2.72,3.8-4.26l.17,.17c-.05,.53-.08,1.24-.08,2.11,0,.16,0,.31,0,.46,.08,8.07,2.58,12.11,7.49,12.11,1.85,0,3.67-.45,5.46-1.34,1.78-.89,3.65-2.3,5.59-4.21-.58-1.5-1-3.01-1.26-4.53Zm-24.08-6.67c-2.58,2.01-4.34,3.02-5.28,3.02-1.11,0-2.02-.59-2.75-1.76-.73-1.17-1.1-2.64-1.1-4.43,0-2.69,.89-5.76,2.66-9.2,1.76-3.44,4.16-6.8,7.18-10.08,1.07-1.1,1.86-1.65,2.38-1.65,.59,0,1.12,.57,1.61,1.73,.49,1.15,.73,2.42,.73,3.82,0,2.43-.91,5.03-2.73,7.79-.52,.97-.78,1.57-.78,1.8,0,.65,.64,.97,1.9,.97,1.04,0,2.73-.32,5.07-.97l.92-.29,.2,.19-1.32,1.07c-3.21,3.31-6.11,5.98-8.69,7.99Z" />
                        <path d="M311.99,229.87l2.93-3.42c2.97-3.29,5.32-5.74,7.05-7.35,1.73-1.61,3.29-2.77,4.67-3.49s2.78-1.07,4.21-1.07c2.3,0,3.92,.62,4.86,1.85s1.41,3.38,1.41,6.43c0,1.27-.13,3.13-.39,5.6-.39,3.28-.58,6.36-.58,9.25,0,3.25,.16,5.88,.49,7.89,.23,1.23,.57,2.47,1.02,3.7,.32,1.17,.49,1.96,.49,2.39,0,.52-.19,.93-.58,1.22-1.01,.88-2.34,1.64-3.99,2.29-1.66,.65-3.05,.97-4.19,.97-1.85,0-3.53-.63-5.04-1.9-1.51-1.27-2.68-3.02-3.51-5.26-.83-2.24-1.24-4.77-1.24-7.6,0-1.88,.19-4.11,.58-6.67l-.19-.19c-1.4,1.56-2.52,2.79-3.38,3.7-.86,.91-1.66,1.77-2.41,2.58-3.64,4.16-6.72,7.9-9.25,11.25-.97,1.3-1.87,2.43-2.68,3.41-1.2,1.2-2.56,1.8-4.09,1.8-2.08,0-3.77-.78-5.06-2.34-1.3-1.56-1.95-3.57-1.95-6.04,0-1.53,.18-3.39,.54-5.6,.36-2.21,.83-4.57,1.44-7.08,.6-2.51,1.31-5.1,2.14-7.77,.83-2.66,1.73-5.19,2.7-7.6,1.49-3.99,3.31-7.11,5.45-9.35,1.46-1.46,3.23-2.19,5.31-2.19,3.38,0,5.06,2.19,5.06,6.57,0,3.21-.67,7.82-2.01,13.81l.19,.2Z" />
                        <path d="M392.49,246.14c-.1-.59-.2-1.37-.29-2.34-.1-.97-.17-1.83-.2-2.58-.03-.75-.05-1.85-.05-3.31,0-2.79,.1-5.79,.29-9.01,.16-1.34,.24-2.01,.25-2.01,0-1.36-.23-2.22-.68-2.59-.46-.37-1.56-.56-3.31-.56,1.33-2.14,1.99-4.17,1.99-6.09,0-2.59-1.34-4.74-4.02-6.45-2.67-1.7-6.09-2.55-10.25-2.55-4.93,0-10.06,1.77-15.38,5.3-5.16,3.45-9.45,7.63-12.86,12.57-2.04,3.01-3.65,6.1-4.82,9.25-1.16,3.15-1.75,5.87-1.75,8.18,0,3.73,1.19,6.81,3.56,9.25,2.37,2.43,5.37,3.65,9,3.65,1.79,0,3.74-.57,5.87-1.7,2.13-1.14,4.45-2.84,6.96-5.09,2.52-2.26,5.29-5.16,8.3-8.69l.18,.17c-.06,.53-.08,1.24-.08,2.11,0,8.38,2.5,12.57,7.5,12.57,1.85,0,3.67-.45,5.45-1.34,1.79-.89,3.66-2.3,5.6-4.21-.58-1.5-1-3.01-1.26-4.53Zm-15.39-14.66c-3.21,3.31-6.11,5.98-8.69,7.99s-4.34,3.02-5.28,3.02c-1.11,0-2.02-.59-2.75-1.76-.73-1.17-1.1-2.64-1.1-4.43,0-2.69,.89-5.76,2.65-9.2,1.77-3.44,4.17-6.8,7.19-10.08,1.07-1.1,1.86-1.65,2.38-1.65,.59,0,1.12,.57,1.61,1.73,.49,1.15,.73,2.42,.73,3.82,0,2.43-.91,5.03-2.73,7.79-.52,.97-.78,1.57-.78,1.8,0,.65,.64,.97,1.9,.97,1.04,0,2.73-.32,5.07-.97l.92-.29,.2,.19-1.32,1.07Z" />
                        <path d="M419.83,229.87l2.93-3.42c2.97-3.29,5.32-5.74,7.05-7.35,1.73-1.61,3.29-2.77,4.67-3.49s2.78-1.07,4.21-1.07c2.3,0,3.92,.62,4.86,1.85s1.41,3.38,1.41,6.43c0,1.27-.13,3.13-.39,5.6-.39,3.28-.58,6.36-.58,9.25,0,3.25,.16,5.88,.49,7.89,.23,1.23,.57,2.47,1.02,3.7,.32,1.17,.49,1.96,.49,2.39,0,.52-.19,.93-.58,1.22-1.01,.88-2.34,1.64-3.99,2.29-1.66,.65-3.05,.97-4.19,.97-1.85,0-3.53-.63-5.04-1.9-1.51-1.27-2.68-3.02-3.51-5.26-.83-2.24-1.24-4.77-1.24-7.6,0-1.88,.19-4.11,.58-6.67l-.19-.19c-1.4,1.56-2.52,2.79-3.38,3.7-.86,.91-1.66,1.77-2.41,2.58-3.64,4.16-6.72,7.9-9.25,11.25-.97,1.3-1.87,2.43-2.68,3.41-1.2,1.2-2.56,1.8-4.09,1.8-2.08,0-3.77-.78-5.06-2.34-1.3-1.56-1.95-3.57-1.95-6.04,0-1.53,.18-3.39,.54-5.6,.36-2.21,.83-4.57,1.44-7.08,.6-2.51,1.31-5.1,2.14-7.77,.83-2.66,1.73-5.19,2.7-7.6,1.49-3.99,3.31-7.11,5.45-9.35,1.46-1.46,3.23-2.19,5.31-2.19,3.38,0,5.06,2.19,5.06,6.57,0,3.21-.67,7.82-2.01,13.81l.19,.2Z" />
                        <path d="M500.34,246.14c-.1-.59-.2-1.37-.3-2.34-.09-.97-.16-1.83-.19-2.58-.03-.75-.05-1.85-.05-3.31,0-2.79,.1-5.79,.29-9.01,.15-1.34,.23-2.01,.25-2.01,0-1.36-.23-2.22-.69-2.59-.45-.37-1.55-.56-3.31-.56,1.33-2.14,2-4.17,2-6.09,0-2.59-1.34-4.74-4.02-6.45-2.68-1.7-6.09-2.55-10.25-2.55-4.93,0-10.06,1.77-15.38,5.3-5.16,3.45-9.45,7.63-12.86,12.57-2.04,3.01-3.65,6.1-4.82,9.25-1.17,3.15-1.75,5.87-1.75,8.18,0,3.73,1.18,6.81,3.55,9.25,2.37,2.43,5.38,3.65,9.01,3.65,1.79,0,3.74-.57,5.87-1.7,2.12-1.14,4.45-2.84,6.96-5.09,2.52-2.26,5.28-5.16,8.3-8.69l.18,.17c-.06,.53-.08,1.24-.08,2.11,0,8.38,2.5,12.57,7.5,12.57,1.85,0,3.67-.45,5.45-1.34,1.79-.89,3.65-2.3,5.6-4.21-.58-1.5-1-3.01-1.26-4.53Zm-15.39-14.66c-3.21,3.31-6.11,5.98-8.69,7.99s-4.34,3.02-5.28,3.02c-1.11,0-2.02-.59-2.76-1.76-.73-1.17-1.09-2.64-1.09-4.43,0-2.69,.88-5.76,2.65-9.2s4.17-6.8,7.18-10.08c1.08-1.1,1.87-1.65,2.39-1.65,.58,0,1.12,.57,1.61,1.73,.48,1.15,.73,2.42,.73,3.82,0,2.43-.91,5.03-2.73,7.79-.52,.97-.78,1.57-.78,1.8,0,.65,.63,.97,1.9,.97,1.04,0,2.73-.32,5.06-.97l.93-.29,.19,.19-1.31,1.07Z" />
                        </g>
                    </svg>
                </div>
                <section className='logline'>
                    <p>{btnDesc}</p>
                </section>
                <div className='landing-buttons'>
                    <LandingButton
                        className='startButton' 
                        buttonName={"start"} 
                        buttonAlt={"start"} 
                        backgroundcolor="#fcb805"
                        boxshadow="#ff931e"
                        goToPage={(e) => playGame(e, 'click', 'normal')} // Not sure how this works
                        setBtnDesc={setBtnDesc}
                        description={"The greedy Monkeys are after our bananas again. And this time they are taking them one link at a time. Can you make it to destination: “banana” to get them back??"}
                    />
                    <DailyChallenge 
                        goToPage={(e) => playGame(e, 'click', 'daily_challenge')}
                        setBtnDesc={setBtnDesc}
                        description={"A new global start point each day. Get to “banana” in the fewest clicks possible. Can you out-monkey your friends?"}
                    />
                    <LandingButton
                        goToPage={() => goToHelp()}
                        className='helpButton' 
                        buttonName={"help"} 
                        buttonAlt={"help"} 
                        backgroundcolor="#e5fdfb"
                        boxshadow="#bdeafd"
                        setBtnDesc={setBtnDesc}
                        description={"Everything else you need to know!"}
                    />
                </div>
                <p className="disclaimer">🍌Some content in the game is randomly sourced from wikipedia and is uncensored. Enter at your own risk.🍌</p>
            </StyledLanding >
        </main>
    )

}

export { LandingPage }