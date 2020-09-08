import React from 'react';
import linkedinImg from '../../images/linkedinScreenshot.png';
import githubImg from '../../images/github.png';
import './styles/Connections.css';

function Connections() {
	return (
		<div className='linkedInContainer'>
			<div className='iconSymbols'>
				<a href='https://www.linkedin.com/in/david-sheinbein/'>
					<i
						className='fa fa-linkedin-square'
						aria-hidden='true'
						id='linkedInSym'></i>
				</a>
				<h2 className='linkedInText'>Connect With Me!</h2>
				<div>
					<a href='https://github.com/davesheinbein'>
						<i
							className='fa fa-github'
							aria-hidden='true'
							id='gitHubSym'></i>
					</a>
				</div>
			</div>
			<div className='imagesContainer'>
				<div className='imgSubContainer'>
					<a href='https://www.linkedin.com/in/david-sheinbein/'>
						<img
							src={linkedinImg}
							alt='LinkedIn Headshot'
							id='linkedInGitImages'></img>
					</a>
					<h3 className='linkedInBtnTextContainer'>
						<a
							className='linkedInBtnText'
							href='https://www.linkedin.com/in/david-sheinbein/'>
							<i
								className='fa fa-linkedin-square'
								aria-hidden='true'></i>{' '}
							LinkedIn
						</a>
					</h3>
				</div>
				<div className='imgSubContainer'>
					<a href='https://github.com/davesheinbein'>
						<img
							src={githubImg}
							alt='LinkedIn Headshot'
							id='linkedInGitImages'></img>
					</a>
					<h3 className='linkedInBtnTextContainer'>
						<a
							className='linkedInBtnText'
							href='https://github.com/davesheinbein'>
							<i
								className='fa fa-github'
								aria-hidden='true'></i>{' '}
							Github
						</a>
					</h3>
				</div>
			</div>
		</div>
	);
}

export default Connections;
