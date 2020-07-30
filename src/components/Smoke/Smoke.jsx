import React, { Component } from "react";
import "./Smoke.css";
import SmokeVideo from './smoke.mp4'
import { Link } from 'react-router-dom';

export default class Smoke extends Component {
    render() {
        return (
            <div className='videoContainer'>
                <section>
                    <video
                        src={SmokeVideo}
                        autoplay='autoplay'
                        muted>
                    </video>
                    <div className='overlayText'>
                        <span>
                            <Link to='/main' className='NavLink'>
                                D
                            </Link>
                        </span>
                        <span>
                            <Link to='/main' className='NavLink'>
                                A
                            </Link>
                        </span>
                        <span>
                            <Link to='/main' className='NavLink'>
                                V
                            </Link>
                        </span>
                        <span>
                            <Link to='/main' className='NavLink'>
                                I
                            </Link>
                        </span>
                        <span>
                            <Link to='/main' className='NavLink'>
                                D
                            </Link>
                        </span>
                        <span>
                            &nbsp;
                        </span>
                        <span>
                            <Link to='/main' className='NavLink'>
                                S
                            </Link>
                        </span>
                        <span>
                            <Link to='/main' className='NavLink'>
                                H
                            </Link>
                        </span>
                        <span>
                            <Link to='/main' className='NavLink'>
                                E
                            </Link>
                        </span>
                        <span>
                            <Link to='/main' className='NavLink'>
                                I
                            </Link>
                        </span>
                        <span>
                            <Link to='/main' className='NavLink'>
                                N
                            </Link>
                        </span>
                        <span>
                            <Link to='/main' className='NavLink'>
                                B
                            </Link>
                        </span>
                        <span>
                            <Link to='/main' className='NavLink'>
                                E
                            </Link>
                        </span>
                        <span>
                            <Link to='/main' className='NavLink'>
                                I
                            </Link>
                        </span>
                        <span>
                            <Link to='/main' className='NavLink'>
                                N
                            </Link>
                        </span>
                        <div className='continueLink'>
                            <Link to='/main' className='NavLink'>
                                Click to continue
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}