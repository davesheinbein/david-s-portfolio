import React, { Component } from 'react';
import './Projects.css';
import steedfinder from '../../images/steedfinder.png';
import inspirations from '../../images/inspirations.png';
import twistsofrate from '../../images/twistsofrate.png';
import wargame from '../../images/wargame.png';
import neonstrobe from '../../images/neonstrobe.png';

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
							<img
								className='thumbnail'
								alt='checkers'
								src={steedfinder}></img>
							<div className='post-preview'>
								<div className='post-title'>
									Steed Finder
								</div>
								<div className='post-intro'>
									A horse marketplace bulletin board. People
									can post horses they have for sale and
									contact people directly to inquire about
									buying a horse.
								</div>
								<div className='viewMoreBtn'>
									<a
										href='https://github.com/davesheinbein/stead-finder-horse-buliten-board'
										target='_blank'
										rel='noopener noreferrer'>
										View More{' '}
										<i className='fas fa-long-arrow-alt-right'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className='post'>
							<img
								className='thumbnail'
								alt='dark-game-secrets'
								src={inspirations}></img>
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
										href='https://github.com/davesheinbein/full-stack-web-app'
										target='_blank'
										rel='noopener noreferrer'>
										View More{' '}
										<i className='fas fa-long-arrow-alt-right'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className='post'>
							<img
								className='thumbnail'
								alt='twistsofrate'
								src={twistsofrate}></img>
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
										href='https://github.com/davesheinbein/TwistsOfRate'
										target='_blank'
										rel='noopener noreferrer'>
										View More{' '}
										<i className='fas fa-long-arrow-alt-right'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className='post'>
							<img
								className='thumbnail'
								alt='pokemon-creations'
								src={wargame}></img>
							<div className='post-preview'>
								<div className='post-title'>War Game</div>
								<div className='post-intro'>
									A easy to play game based on the card game
									War. Face off against against a computer!
									May the odds be in your favor!
								</div>
								<div className='viewMoreBtn'>
									<a
										href='https://github.com/davesheinbein/War-game'
										target='_blank'
										rel='noopener noreferrer'>
										View More{' '}
										<i className='fas fa-long-arrow-alt-right'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className='post'>
							<img
								className='thumbnail'
								alt='pokemon-creations'
								src={neonstrobe}></img>
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
										href='https://github.com/davesheinbein/neon-strobe-animation'
										target='_blank'
										rel='noopener noreferrer'>
										View More{' '}
										<i className='fas fa-long-arrow-alt-right'></i>
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
