import React, { Component } from 'react';
import loaderGif from '../../images/loader.gif';
import './styles/FullPageLoader.css';

export default class FullPageLoader extends Component {
	state = {};

	render() {
		return (
			<div className='loader-container'>
				<div className='loader'></div>
				<img src={loaderGif} alt='loading' />
			</div>
		);
	}
}
