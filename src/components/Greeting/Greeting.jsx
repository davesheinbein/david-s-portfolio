import React, { Component } from "react";
import './Greeting.css';

export default class Greeting extends Component {
    render() {
        return (
            <div className="headingContainer">
                <h1>Hi, I am David Sheinbein</h1>
                <ul id="navigation">
                    <li>
                        <a href="#about">About Me</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact-form">Contact</a>
                    </li>
                </ul>
            </div>
        );
    }
}