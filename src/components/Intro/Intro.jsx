import React, { Component } from "react";
import "./Intro.css";
import headshot from '../../images/headshot.png'
import Computerguy from '../ComputerGuy/Computerguy'

export default class Intro extends Component {

    render() {
        return (
            <div className='introContainer' id='aboutMe'>
                <h1 className='introHeading'>Bio</h1>
                <div className="intro-wrapper">
                    <div className="left-column">
                        <img
                            id="profilePicture"
                            src={headshot}
                            alt="headshot"
                        ></img>
                        <div className='personalizedText'>Personalize Theme</div>
                        <div id="theme-options-wrapper">
                            <div
                                id="light-mode"
                                className="theme-dot"
                                onClick={() => {
                                    this.props.handleThemeChange("light");
                                }}
                            ></div>
                            <div
                                id="red-mode"
                                className="theme-dot sampleName"
                                onClick={() => {
                                    this.props.handleThemeChange("red");
                                }}
                            ></div>
                            <div
                                id="green-mode"
                                className="theme-dot"
                                onClick={() => {
                                    this.props.handleThemeChange("green");
                                }}
                            ></div>
                            <div
                                id="yellow-mode"
                                className="theme-dot"
                                onClick={() => {
                                    this.props.handleThemeChange("yellow");
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className="right-column">
                        <div className='rightContainer'>
                            <div className='computerGuySvgContainer'>
                                <Computerguy />
                            </div>
                            <div id="introTextContainer">
                                <div id="corner-tl" className="corner"></div>
                                <div id="corner-tr" className="corner"></div>
                                <div className='boxTitle'>What I do</div>
                                <div className='boxText'>
                                    I am a full-stack developer with a passion for designing modern
                                    highly responsive web-based user interfaces.
                            </div>
                                <div id="corner-br" className="corner"></div>
                                <div id="corner-bl" className="corner"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}