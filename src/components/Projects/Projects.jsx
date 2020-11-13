import React, { Component } from 'react';
import steedfinder from '../../images/steedfinder.png';
import inspirations from '../../images/inspirations.png';
import twistsofrate from '../../images/twistsofrate.png';
import wargame from '../../images/wargame.png';
import neonstrobe from '../../images/neonstrobe.png';
import calcScreen from '../../images/calcScreen.png';
import funFunct from '../../images/subHomeScreenshot.png';
import typeScript from '../../images/typescriptQuizScreenshot.png';
import netflixClone from '../../images/netflixCloneScreenshot.png';
import spotifyClone from '../../images/playlistScreenshot.png';
import amazonClone from '../../images/homeScreenshot.png';
import iMessage from '../../images/IMessageScreenshot.png';
import twitch from '../../images/fakeTwitchScreenshot.png';
import covid from '../../images/covidTrackerScreenshot.png';
import './styles/Projects.css';

export default class Projects extends Component {
	render() {
		return (
			<div className='projects' id='projects'>
				<h2 className='projectTitle'>
					A Few Past Projects
				</h2>
				<div className='post-wrapper'>
					<div>
						<div className='post'>
							<a
								href='https://covid-track-er.web.app/'
								target='_blank'
								rel='noopener noreferrer'>
								<img
									loading='lazy'
									className='thumbnail'
									alt='Twists-Of-Rate'
									src={covid}></img>
							</a>
							<div className='post-preview'>
								<div className='post-title'>
									Covid-19 Tracker
								</div>
								<div className='post-intro'>
									An application that tracks the global
									Covid-19 pandemic statistics and displays
									the data on a map that is easily
									accessible to anyone with the link.
								</div>
								<div className='viewMoreBtn'>
									<a
										href='https://covid-track-er.web.app/'
										target='_blank'
										rel='noopener noreferrer'>
										View More{' '}
										<i
											className='fa fa-long-arrow-right'
											aria-hidden='true'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className='post'>
							<a
								href='https://twists-of-rate.herokuapp.com/'
								target='_blank'
								rel='noopener noreferrer'>
								<img
									loading='lazy'
									className='thumbnail'
									alt='Twists-Of-Rate'
									src={twistsofrate}></img>
							</a>
							<div className='post-preview'>
								<div className='post-title'>
									Twists Of Rate
								</div>
								<div className='post-intro'>
									A site with detailed information about
									games, genres, consoles and the ability
									for users to blog about their favorite
									games.
								</div>
								<div className='viewMoreBtn'>
									<a
										href='https://twists-of-rate.herokuapp.com/'
										target='_blank'
										rel='noopener noreferrer'>
										View More{' '}
										<i
											className='fa fa-long-arrow-right'
											aria-hidden='true'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className='post'>
							<a
								href='https://react-typescript-quiz-app.netlify.app/'
								target='_blank'
								rel='noopener noreferrer'>
								<img
									loading='lazy'
									className='thumbnail'
									alt='calculator'
									src={typeScript}
									style={{
										objectPosition: '50% 30%',
									}}></img>
							</a>
							<div className='post-preview'>
								<div className='post-title'>
									React Typescript Quiz
								</div>
								<div className='post-intro'>
									Simple app utilizing the Open Trivia
									Database API and Styled-Components. The
									API generates Trivia questions and
									answers.
								</div>
								<div className='viewMoreBtn'>
									<a
										href='https://react-typescript-quiz-app.netlify.app/'
										target='_blank'
										rel='noopener noreferrer'>
										View More{' '}
										<i
											className='fa fa-long-arrow-right'
											aria-hidden='true'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className='post'>
							<a
								href='https://funfunctionalities.herokuapp.com/'
								target='_blank'
								rel='noopener noreferrer'>
								<img
									loading='lazy'
									className='thumbnail'
									alt='fun functionalities'
									src={funFunct}></img>
							</a>
							<div className='post-preview'>
								<div className='post-title'>
									Fun Functionalities
								</div>
								<div className='post-intro'>
									Application that explores different
									functionalities and there use cases.
									Utilizing react-spring and framer
									libraries to create flawless animations
									and transitions.
								</div>
								<div className='viewMoreBtn'>
									<a
										href='https://funfunctionalities.herokuapp.com/'
										target='_blank'
										rel='noopener noreferrer'>
										View More{' '}
										<i
											className='fa fa-long-arrow-right'
											aria-hidden='true'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className='post'>
							<a
								href='https://calculator-ds.herokuapp.com/'
								target='_blank'
								rel='noopener noreferrer'>
								<img
									loading='lazy'
									className='thumbnail'
									alt='calculator'
									src={calcScreen}></img>
							</a>
							<div className='post-preview'>
								<div className='post-title'>
									React Redux Calculator
								</div>
								<div className='post-intro'>
									A simple calculator built using React.js,
									React-Redux, and React-spring. Using the
									eval() method in order to calculate.
								</div>
								<div className='viewMoreBtn'>
									<a
										href='https://calculator-ds.herokuapp.com/'
										target='_blank'
										rel='noopener noreferrer'>
										View More{' '}
										<i
											className='fa fa-long-arrow-right'
											aria-hidden='true'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className='post'>
							<a
								href='https://neflix-clone-ds.web.app/'
								target='_blank'
								rel='noopener noreferrer'>
								<img
									loading='lazy'
									className='thumbnail'
									alt='Netflix'
									src={netflixClone}></img>
							</a>
							<div className='post-preview'>
								<div className='post-title'>
									Fakeflix - Netflix UI
								</div>
								<div className='post-intro'>
									Front-End UI interface Netflix Clone.
									Deployed to Firebase utilizing MovieDB,
									movie-trailer, react-youtube, and more.
								</div>
								<div className='viewMoreBtn'>
									<a
										href='https://neflix-clone-ds.web.app/'
										target='_blank'
										rel='noopener noreferrer'>
										View More{' '}
										<i
											className='fa fa-long-arrow-right'
											aria-hidden='true'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className='post'>
							<a
								href='https://i-message-ui.web.app/'
								target='_blank'
								rel='noopener noreferrer'>
								<img
									loading='lazy'
									className='thumbnail'
									alt='iMessage'
									src={iMessage}></img>
							</a>
							<div className='post-preview'>
								<div className='post-title'>
									iMessage Mock UI
								</div>
								<div className='post-intro'>
									Mock iMessage Frontend UI built utilizing
									React, Redux and more. Deployed to
									Firebase utilizing Firebase database
									authentication.
								</div>
								<div className='viewMoreBtn'>
									<a
										href='https://i-message-ui.web.app/'
										target='_blank'
										rel='noopener noreferrer'>
										View More{' '}
										<i
											className='fa fa-long-arrow-right'
											aria-hidden='true'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className='post'>
							<a
								href='https://mock-twitch-ui.web.app/'
								target='_blank'
								rel='noopener noreferrer'>
								<img
									loading='lazy'
									className='thumbnail'
									alt='twitch'
									src={twitch}></img>
							</a>
							<div className='post-preview'>
								<div className='post-title'>
									Mock Twitch UI
								</div>
								<div className='post-intro'>
									Mock Twitch front-end UI built with
									React.js that simulates the UI of a
									JohnDoe user profile with random YouTube
									videos included.
								</div>
								<div className='viewMoreBtn'>
									<a
										href='https://mock-twitch-ui.web.app/'
										target='_blank'
										rel='noopener noreferrer'>
										View More{' '}
										<i
											className='fa fa-long-arrow-right'
											aria-hidden='true'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className='post'>
							<a
								href='https://spotify-clone-ds.web.app'
								target='_blank'
								rel='noopener noreferrer'>
								<img
									loading='lazy'
									className='thumbnail'
									alt='spotify'
									src={spotifyClone}></img>
							</a>
							<div className='post-preview'>
								<div className='post-title'>
									Mock Spotify UI
								</div>
								<div className='post-intro'>
									Mock Spotify Front-end UI built utilizing
									React, Spotify API, and more. Hosted
									utilizing Firebase. Limited functionality
									while Spotify is also open.
								</div>
								<div className='viewMoreBtn'>
									<a
										href='https://spotify-clone-ds.web.app'
										target='_blank'
										rel='noopener noreferrer'>
										View More{' '}
										<i
											className='fa fa-long-arrow-right'
											aria-hidden='true'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className='post'>
							<a
								href='https://clone-ds.web.app/'
								target='_blank'
								rel='noopener noreferrer'>
								<img
									loading='lazy'
									className='thumbnail'
									alt='amazon'
									src={amazonClone}></img>
							</a>
							<div className='post-preview'>
								<div className='post-title'>
									Mock Amazon UI
								</div>
								<div className='post-intro'>
									Amazon Clone utilizing React, Redux, and
									more. Utilizing Firebase for database,
									user authentication, and hosting. Backend
									built using Firebase and Axios.
								</div>
								<div className='viewMoreBtn'>
									<a
										href='https://clone-ds.web.app/'
										target='_blank'
										rel='noopener noreferrer'>
										View More{' '}
										<i
											className='fa fa-long-arrow-right'
											aria-hidden='true'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className='post'>
							<a
								href='https://inspirations-website.herokuapp.com/'
								target='_blank'
								rel='noopener noreferrer'>
								<img
									loading='lazy'
									className='thumbnail'
									alt='Inspiratios'
									src={inspirations}></img>
							</a>
							<div className='post-preview'>
								<div className='post-title'>
									Inspirations
								</div>
								<div className='post-intro'>
									A repository of Gifs and Videos. People
									can post GIFs, Videos, and comments.
									Utilizing full CRUD functionality.
								</div>
								<div className='viewMoreBtn'>
									<a
										href='https://inspirations-website.herokuapp.com/'
										target='_blank'
										rel='noopener noreferrer'>
										View More{' '}
										<i
											className='fa fa-long-arrow-right'
											aria-hidden='true'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className='post'>
							<a
								href='https://horse-bulletin-board.herokuapp.com/'
								target='_blank'
								rel='noopener noreferrer'>
								<img
									loading='lazy'
									className='thumbnail'
									alt='Steed-Finder'
									src={steedfinder}></img>
							</a>
							<div className='post-preview'>
								<div className='post-title'>
									Steed Finder
								</div>
								<div className='post-intro'>
									An online marketplace for horses. For
									horse enthusiasts who are looking for a
									new horse as well as owners who want to
									place their horse in good hands.
								</div>
								<div className='viewMoreBtn'>
									<a
										href='https://horse-bulletin-board.herokuapp.com/'
										target='_blank'
										rel='noopener noreferrer'>
										View More{' '}
										<i
											className='fa fa-long-arrow-right'
											aria-hidden='true'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className='post'>
							<a
								href='https://davesheinbein.github.io/War-game/'
								target='_blank'
								rel='noopener noreferrer'>
								<img
									loading='lazy'
									className='thumbnail'
									alt='War-Game'
									src={wargame}></img>
							</a>
							<div className='post-preview'>
								<div className='post-title'>War Game</div>
								<div className='post-intro'>
									A easy to play game based on the card game
									War. Face off against against a computer!
									May the odds be in your favor!
								</div>
								<div className='viewMoreBtn'>
									<a
										href='https://davesheinbein.github.io/War-game/'
										target='_blank'
										rel='noopener noreferrer'>
										View More{' '}
										<i
											className='fa fa-long-arrow-right'
											aria-hidden='true'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className='post'>
							<a
								href='https://davesheinbein.github.io/neon-strobe-animation/'
								target='_blank'
								rel='noopener noreferrer'>
								<img
									loading='lazy'
									className='thumbnail'
									alt='Neon-Strobe-Animation'
									src={neonstrobe}></img>
							</a>
							<div className='post-preview'>
								<div className='post-title'>
									Neon Strobe Animation
								</div>
								<div className='post-intro'>
									A simple css animation that creates a
									strobe effect on letters. A flashy and
									easy to use animation for any situation.
								</div>
								<div className='viewMoreBtn'>
									<a
										href='https://davesheinbein.github.io/neon-strobe-animation/'
										target='_blank'
										rel='noopener noreferrer'>
										View More{' '}
										<i
											className='fa fa-long-arrow-right'
											aria-hidden='true'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
