import React, { Component } from "react";
import "./Smoke.css";
import SmokeVideo from './smoke.mp4'

export default class Smoke extends Component {
    render() {
        return (
            <div>
                <section>
                    <video src={SmokeVideo} autoplay muted></video>
                    <h1>
                        <span>D</span>
                        <span>A</span>
                        <span>V</span>
                        <span>I</span>
                        <span>D</span>
                        <span>&nbsp;</span>
                        <span>S</span>
                        <span>H</span>
                        <span>E</span>
                        <span>I</span>
                        <span>N</span>
                        <span>B</span>
                        <span>E</span>
                        <span>I</span>
                        <span>N</span>
                    </h1>
                </section>
            </div>
        );
    }
}