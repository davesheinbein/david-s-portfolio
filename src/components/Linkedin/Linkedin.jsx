import React from 'react'
import linkedinImg from '../../images/linkedinScreenshot.png'
import './Linkedin.css'

function Linkedin() {
    return (
        <div className='linkedInContainer'>
            <h2 className='linkedInText'>Connect With Me On LinkedIn <i className='fa fa-linkedin-square'></i></h2>
            <img
                src={linkedinImg}
                alt="LinkedIn Headshot"
                id='linkedInImage'
            ></img>
            <h3 className='linkedInBtnTextContainer'><a className='linkedInBtnText' href="https://www.linkedin.com/in/david-sheinbein/">LinkedIn <i className='fa fa-linkedin-square'></i></a></h3>
        </div>
    )
}

export default Linkedin
