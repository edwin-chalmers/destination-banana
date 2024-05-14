import { StyledHelp } from './HelpPage.styled'
import { getFeatured } from '../../ApiCalls'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import jungleScene from './jungleScene.jpg'
export default function HelpPage() {
    return (
        <StyledHelp>
          <img id='backgroundImage' src={jungleScene}></img>
            <Link to="/">
                <button>back</button>
            </Link>
            <div className="help-page">
                <section className="game-rules">
                    <h3>Game Rules</h3>
                    <ol>
                        <li>Your destination is "banana."</li>
                        <li>The list on the left is every link from the corresponding wikipedia page.</li>
                        <li>Click a link to be taken to a new page</li>
                        <li>See a new list of links.</li>
                        <li>and on and on and on and banana and bananabanana</li>
                        <li>Click the back button to go back to the previous link. Keep in mind, though, that back clicks count!</li>
                        <li>Find "banana" and win!</li>
                    </ol>
                </section>
                <section className="about">
                    <h3>About</h3>
                    <ul>
                        <li>Game version 1.3</li>
                        <li>Developed by The Peel Posse</li>
                        <li>Please report bugs, improvements, and helpful suggestions to destinationbanana@gmail</li>
                    </ul>
                </section>
            </div>
        </StyledHelp>
    )
}