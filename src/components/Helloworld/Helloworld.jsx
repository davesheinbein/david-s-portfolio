import React, { Component } from "react";
import headshot from '../../images/headshot.png';
import Computerguy from "./Computerguy/Computerguy";
import "./Helloworld.css";


export default class Helloworld extends Component {
    render() {
        return (
            <div className='introContainer' id='aboutMe'>
                <h1 className='introHeading'>Hello World...</h1>
                <div className="intro-wrapper">
                    <div className="left-column">
                        <img
                            id="profilePicture"
                            src={headshot}
                            alt="headshot"
                        ></img>
                        <h3 className='personalizedText'>Personalize Theme</h3>
                        <div id="theme-options-wrapper">
                            <div
                                id="light-mode"
                                className="theme-dot"
                                onClick={() => {
                                    this.props.handleThemeChange("light");
                                }}
                            ></div>
                            <div
                                id="black-mode"
                                className="theme-dot sampleName"
                                onClick={() => {
                                    this.props.handleThemeChange("black");
                                }}
                            ></div>
                            <div
                                id="transparent-mode"
                                className="theme-dot sampleName"
                                onClick={() => {
                                    this.props.handleThemeChange("transparent");
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
                                id="blue-mode"
                                className="theme-dot"
                                onClick={() => {
                                    this.props.handleThemeChange("blue");
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className="right-column">
                        <div className='rightContainer'>
                            {/* SVG input below */}
                            <div className='computerGuySvgContainer'>
                                <Computerguy />
                            </div>
                            <div id="introTextContainer">
                                <div id="corner-tl" className="corner"></div>
                                <div id="corner-tr" className="corner"></div>
                                <h2 className='boxTitle'>What I do</h2>
                                <p className='boxText'>
                                    I am a full-stack developer with a passion for designing modern
                                    highly responsive web-based user interfaces.
                                </p>
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