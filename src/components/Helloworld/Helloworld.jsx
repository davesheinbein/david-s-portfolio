import React, { Component } from 'react';
import headshot from '../../images/headshot.png';
import Computerguy from './Computerguy/Computerguy';
import './Helloworld.css';

export default class Helloworld extends Component {
	render() {
		return (
			<div className='introContainer' id='aboutMe'>
				<h1 className='introHeading'>Hello World...</h1>
				<div className='intro-wrapper'>
					<div className='left-column'>
						<div className='actionsContainer'>
							<div className='picThemeContainer'>
								<div className='Profile'>
									<img
										id='profilePicture'
										src={headshot}
										alt='headshot'></img>
								</div>
								<div id='theme-options-wrapper'>
									<h3 className='personalizedText'>
										Choose Theme
									</h3>
									<div className='themeOptionsSubContainer'>
										<div
											id='light-mode'
											className='theme-dot'
											onClick={() => {
												this.props.handleThemeChange(
													'light'
												);
											}}></div>
										<div
											id='black-mode'
											className='theme-dot sampleName'
											onClick={() => {
												this.props.handleThemeChange(
													'black'
												);
											}}></div>
									</div>
									<div className='themeOptionsSubContainer'>
										<div
											id='red-mode'
											className='theme-dot sampleName'
											onClick={() => {
												this.props.handleThemeChange('red');
											}}></div>
										<div
											id='green-mode'
											className='theme-dot'
											onClick={() => {
												this.props.handleThemeChange(
													'green'
												);
											}}></div>
										<div
											id='blue-mode'
											className='theme-dot'
											onClick={() => {
												this.props.handleThemeChange(
													'blue'
												);
											}}></div>
									</div>
									<div className='themeOptionsSubContainer'>
										<div
											id='wave-mode'
											className='theme-dot sampleName'
											onClick={() => {
												this.props.handleThemeChange(
													'wave'
												);
											}}></div>
										<div
											id='fire-mode'
											className='theme-dot sampleName'
											onClick={() => {
												this.props.handleThemeChange(
													'fire'
												);
											}}></div>
									</div>
								</div>
							</div>
							<div className='ctaBtn'>
								<button className='btnGitHub'>
									<a href='https://github.com/davesheinbein'>
										<i
											className='fa fa-github'
											aria-hidden='true'
											id='gitHubBtnSym'></i>
										GitHub
									</a>
								</button>
								<button className='btnLinkedIn'>
									<a href='https://www.linkedin.com/in/david-sheinbein/'>
										<i
											className='fa fa-linkedin-square'
											id='linkedInBtnSym'></i>
									</a>
									LinkedIn
								</button>
							</div>
						</div>
					</div>
					<div className='right-column'>
						<div className='rightContainer'>
							{/* SVG input below */}
							<div className='computerGuySvgContainer'>
								<Computerguy />
							</div>
							<div id='introTextContainer'>
								<div
									id='corner-tl'
									className='corner'></div>
								<div
									id='corner-tr'
									className='corner'></div>
								<h2 className='boxTitle'>What I do</h2>
								<p className='boxText'>
									I am a full-stack developer with a passion
									for designing modern highly responsive
									web-based user interfaces.
								</p>
								<div
									id='corner-br'
									className='corner'></div>
								<div
									id='corner-bl'
									className='corner'></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
