import React from 'react'
import linkedinImg from '../../images/linkedinScreenshot.png'
import githubImg from '../../images/github.png'
import './Connections.css'

function Connections() {
    return (
        <div className='linkedInContainer'>
            <div className='iconSymbols'>
                <a href="https://www.linkedin.com/in/david-sheinbein/">
                    <i className='fa fa-linkedin-square' id='linkedInSym'></i>
                </a>
                <h2 className='linkedInText'>Connect With Me!</h2>
                <div>
                    <a href="https://github.com/davesheinbein">
                        <i className="fa fa-github" aria-hidden="true" id='gitHubSym'></i>
                    </a>
                </div>
            </div>
            <div className='imagesContainer'>
                <div className='imgSubContainer'>
                    <img
                        src={linkedinImg}
                        alt="LinkedIn Headshot"
                        id='linkedInImage'
                    ></img>
                    <h3 className='linkedInBtnTextContainer'><a className='linkedInBtnText' href="https://www.linkedin.com/in/david-sheinbein/">LinkedIn <i className='fa fa-linkedin-square' ></i></a></h3>
                </div>
                <div className='imgSubContainer'>
                    <img
                        src={githubImg}
                        alt="LinkedIn Headshot"
                        id='linkedInImage'
                    ></img>
                    <h3 className='linkedInBtnTextContainer'><a className='linkedInBtnText' href="https://github.com/davesheinbein">Github <i className="fa fa-github" aria-hidden="true"></i></a></h3>
                </div>
            </div>
        </div>
    )
}

export default Connections
