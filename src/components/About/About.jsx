import React from 'react'
import './About.css'
import Superhero from '../Superhero/Superhero'
import Pdf from '../../images/Full Stack Developer Resume.pdf'

function About() {
    return (
        <div className='container'>
            <div className='subContainer'>
                <div className='textContainer'>
                    <h2 className='subTitle'>About Me</h2>
                    <p className='subText'>
                        I build new projects just to tickle my
                            <br />
                            brain and push my limits as a developer.
                            <br /> <br />
                            While I do freelance work, I still take
                            <br />
                            interviews in search of a great team
                            <br />
                            and projects that interest me.
                        </p>

                    <h2 className='subTitle'>Skills</h2>
                    <p className='subText'>
                        React, HTML5, CSS, JavaScript,
                        <br />
                        Express, Node.js, Django, Mongoose,
                        <br />
                        MongoDB, Python, PostreSQL,
                        <br />
                        Git, GitHub, MongoDB Atlas, Postman,
                        <br />
                        Heroku, AWS, Third Party APIs,
                        <br />
                        Wireframing, Adobe Creative Suite
                    </p>
                </div>
                {/* SVG input below */}
                <div className='svgContainer'>
                    <Superhero />
                </div>
            <h3 className='resumeDlText'>Full-Stack Developer with primary focus on MERN Stack <br></br>
                <a className='resumeDlLink' href={Pdf} target="_blank" rel="noopener noreferrer"> Download Resume</a>
            </h3>
            </div>
        </div>
    )
}

export default About;
