import React, { Component } from "react";
import './Greeting.css';

export default class Greeting extends Component {
    render() {
        return (
            <div className="headingContainer">
                <div className='headingText'>Hello World, i'm David Sheinbein</div>
                <ul id="navigation">
                    <li>
                        <a href="#about">About Me</a>
                    </li>
                    <li className='navLines'>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li className='navLines'>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
                    <li>
                        <a href="#contact-form">Contact</a>
                    </li>
                </ul>
            </div>
        );
    }
}