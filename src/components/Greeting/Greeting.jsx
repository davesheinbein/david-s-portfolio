import React, { Component } from "react";
import './Greeting.css';

export default class Greeting extends Component {
    render() {
        return (
            <div className="headingContainer">
                <h1 className='headingText'>David Sheinbein</h1>
                <ul id="navigation">
                    <li>
                        <a href="#aboutMe">About Me</a>
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