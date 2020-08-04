import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footerContainer'>
            <div className='footerNav'>
                <ul id="nav">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li className='navLines'>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
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
                    <li className='navLines'>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
                    <li>
                        <a href="https://www.linkedin.com/in/david-sheinbein/"><i className='fa fa-linkedin-square' id='linkedInFooterSym'></i></a>
                    </li>
                    <li className='navLines'>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
                    <li>
                        <a href="https://github.com/davesheinbein"><i className="fa fa-github" aria-hidden="true" id='gitHubFooterSym'></i></a>
                    </li>
                </ul>
            </div>
            <div className='footerSubContainer'>
                <div className='leftFooter'>Created by D. Sheinbein</div>
                <div className='rightFooter'>All Rights Reserved, &copy;2020 DavidSPortfolio</div>
            </div>
        </div>
    )
}

export default Footer
