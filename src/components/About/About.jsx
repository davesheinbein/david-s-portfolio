import React from 'react';
import './styles/About.css';
import skills from '../../constants/skills';
import Superhero from './Superhero/Superhero';
import Pdf from '../../images/Full Stack Developer Resume.pdf';

function About() {
	return (
		<div className='container'>
			<div className='subContainer'>
				<div className='textContainer'>
					<h2 className='subTitle'>About Me</h2>
					<p className='subText'>
						I build new projects in order to hone my skills
						and expand my horizons as a front-end developer.
						<br />
						<br />
						My interest in programing began in college when
						I was introduced to Python. Once out of college
						I decided to take a programing boot camp to
						expand my skills and pursue my interest in
						development.
						<br />
						<br />
						The skills I learned at{' '}
						<a href='https://generalassemb.ly/' id='gaLink'>
							General Assembly
						</a>{' '}
						gave me the ability pick up complicated
						programmatic concepts in short periods of time
						and take those concepts and build upon them.
					</p>

					<h2 className='subTitle'>Skills</h2>
					<div className='subText'>
						<div className='skillContainer'>
							{skills.map((skill) => (
								<div
									className='skills'
									value={skill}
									key={skill}>
									<div className='skill'>{skill}</div>
								</div>
							))}
						</div>
					</div>
				</div>
				{/* SVG input below */}
				<div className='svgContainer'>
					<Superhero />
				</div>
				<h3 className='resumeDlContainer'>
					<div className='resumeDlText'>
						Full-Stack Developer primarily focused on MERN
						Stack
					</div>
					<div className='downloadContainer'>
						<a
							className='resumeDlLink'
							href={Pdf}
							target='_blank'
							rel='noopener noreferrer'>
							Resume{' '}
							<i
								className='fa fa-arrow-circle-o-down resumeIcon'
								aria-hidden='true'></i>
						</a>
					</div>
				</h3>
			</div>
		</div>
	);
}

export default About;
