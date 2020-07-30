import React from 'react'
import linkedinImg from '../../images/linkedinScreenshot.png'
import './Linkedin.css'

function Linkedin() {
    return (
        <div className='linkedInContainer'>
            <img
                src={linkedinImg}
                alt="LinkedIn Headshot"
                id='linkedInImage'
            ></img>
            <div className='linkedInText'>Connect With Me On LinkedIn</div>
            <div className='linkedInBtnTextContainer'><a className='linkedInBtnText' href="https://www.linkedin.com/in/david-sheinbein/">LinkedIn</a></div>
        </div>
    )
}

export default Linkedin
