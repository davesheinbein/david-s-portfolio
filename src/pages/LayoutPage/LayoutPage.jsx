import React, { Component } from 'react';
import Greeting from '../../components/Greeting/Greeting';
import Helloworld from '../../components/Helloworld/Helloworld';
import About from '../../components/About/About';
import Connections from '../../components/Connections/Connections';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import fireworks from '../../images/fireworks.gif';
import { Spring, animated } from 'react-spring/renderprops';
import waveA from '../../images/backgroundWavesA.png';
import waveB from '../../images/backgroundWavesB.png';
import './styles/LayoutPage.css';

console.log('Hello world...');
console.log(
	"If you're reading this then you're probable a programmer"
);
console.log(
	'Message me on LinkedIn: https:www.linkedin.comindavid-sheinbein and let me know if you find this!'
);

export default class Layout extends Component {
	render() {
		return (
			<div>
				<section className='side2'>
					<div className='main-container'>
						<Spring
							from={{ opacity: 0, marginTop: -500 }}
							to={{ opacity: 1, marginTop: 0 }}
							config={{ duration: 1000 }}>
							{(props) => (
								<div style={props}>
									<Greeting />
								</div>
							)}
						</Spring>
						<Spring
							from={{ opacity: 0 }}
							to={{ opacity: 1 }}
							config={{
								delay: 1000,
								duration: 1000,
							}}>
							{(props) => (
								<div style={props}>
									<Helloworld
										handleThemeChange={
											this.props.handleThemeChange
										}
									/>
								</div>
							)}
						</Spring>
						<div className='backgroundBox'>
							<div className='waves-container'>
								<Spring
									native
									from={{
										transform: 'translateX(-1400vw)',
									}}
									to={{
										transform: 'translateX(0vw)',
									}}
									config={{
										delay: 1000,
										duration: 200000,
									}}>
									{(props) => (
										<animated.div
											style={props}
											className='waveB'>
											<img src={waveB} alt='wave' />
										</animated.div>
									)}
								</Spring>
								<Spring
									native
									from={{
										transform: 'translateX(0vw)',
									}}
									to={{
										transform: 'translateX(-1400vw)',
									}}
									config={{
										delay: 1000,
										duration: 200000,
									}}>
									{(props) => (
										<animated.div
											style={props}
											className='waveA'>
											<img src={waveA} alt='wave' />
										</animated.div>
									)}
								</Spring>
							</div>
							<div className='fireworks-container'>
								<div className='fireworks'>
									<img src={fireworks} alt='fireworks' />
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='side1'>
					<div className='sub-container'>
						<Spring
							from={{ opacity: 0 }}
							to={{ opacity: 1 }}
							config={{ delay: 2000, duration: 1000 }}>
							{(props) => (
								<div style={props}>
									<About />
								</div>
							)}
						</Spring>
					</div>
				</section>
				<section className='side2'>
					<div className='sub-container'>
						<Spring
							from={{ opacity: 0 }}
							to={{ opacity: 1 }}
							config={{ delay: 3000, duration: 1000 }}>
							{(props) => (
								<div style={props}>
									<Connections />
								</div>
							)}
						</Spring>
					</div>
				</section>
				<section className='side1'>
					<div className='sub-container'>
						<Spring
							from={{ opacity: 0 }}
							to={{ opacity: 1 }}
							config={{ delay: 4000, duration: 1000 }}>
							{(props) => (
								<div style={props}>
									<Projects />
								</div>
							)}
						</Spring>
					</div>
				</section>
				<section className='side2'>
					<div className='sub-container'>
						<Spring
							from={{ opacity: 0 }}
							to={{ opacity: 1 }}
							config={{ delay: 5000, duration: 1000 }}>
							{(props) => (
								<div style={props}>
									<Contact />
								</div>
							)}
						</Spring>
					</div>
				</section>
				<section className='side2'>
					<div className='sub-container'>
						<Spring
							from={{ opacity: 0 }}
							to={{ opacity: 1 }}
							config={{ delay: 6000, duration: 1000 }}>
							{(props) => (
								<div style={props}>
									<Footer />
								</div>
							)}
						</Spring>
					</div>
				</section>
			</div>
		);
	}
}
