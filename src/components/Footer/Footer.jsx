import React from 'react';
import './Footer.css';

function Footer() {
	return (
		<div className='footerContainer'>
			<div className='footerNav'>
				<ul id='nav'>
					<li>
						<div>
							<a href='/'>Home</a>
						</div>
					</li>
					<div className='navLinesBottom'>
						&nbsp;&nbsp;|&nbsp;&nbsp;
					</div>
					<li>
						<div>
							<a href='#aboutMe'>About</a>
						</div>
					</li>
					<div className='navLinesBottom'>
						&nbsp;&nbsp;|&nbsp;&nbsp;
					</div>
					<li>
						<div>
							<a href='#projects'>Projects</a>
						</div>
					</li>
					<div className='navLinesBottom'>
						&nbsp;&nbsp;|&nbsp;&nbsp;
					</div>
					<li>
						<div>
							<a href='#contact-form'>Contact</a>
						</div>
					</li>
					<div className='navLinesBottom'>
						&nbsp;&nbsp;|&nbsp;&nbsp;
					</div>
					<li>
						<div>
							<a href='https://www.linkedin.com/in/david-sheinbein/'>
								<i
									className='fa fa-linkedin-square'
									id='linkedInFooterSym'></i>
							</a>
						</div>
					</li>
					<div className='navLinesBottom'>
						&nbsp;&nbsp;|&nbsp;&nbsp;
					</div>
					<li>
						<div>
							<a href='https://github.com/davesheinbein'>
								<i
									className='fa fa-github'
									aria-hidden='true'
									id='gitHubFooterSym'></i>
							</a>
						</div>
					</li>
				</ul>
			</div>
			<hr id='footerline' />
			<div className='footerSubContainer'>
				<div className='leftFooter'>
					Created by D. Sheinbein
				</div>
				<div className='rightFooter'>
					All Rights Reserved, &copy;2020
				</div>
			</div>
		</div>
	);
}

export default Footer;
