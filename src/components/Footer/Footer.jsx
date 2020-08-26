import React from 'react';
import './styles/Footer.css';

function Footer() {
	return (
		<div className='footerContainer'>
			<div className='footerNav'>
				<ul id='nav'>
					<li>
						<div>
							<a href='/'>
								<i
									className='fa fa-home selectA'
									aria-hidden='true'></i>
							</a>
						</div>
					</li>
					<div className='navLinesBottom'>|</div>
					<li>
						<div>
							<a href='#navigation'>
								<i
									className='fa fa-chevron-up selectB'
									aria-hidden='true'></i>
							</a>
						</div>
					</li>
					<div className='navLinesBottom'>|</div>
					<li>
						<div>
							<a href='#projects'>
								<i
									className='fa fa-file selectC'
									aria-hidden='true'></i>
							</a>
						</div>
					</li>
					<div className='navLinesBottom'>|</div>
					<li>
						<div>
							<a href='https://www.linkedin.com/in/david-sheinbein/'>
								<i
									className='fa fa-linkedin-square selectD'
									aria-hidden='true'
									id='linkedInFooterSym'></i>
							</a>
						</div>
					</li>
					<div className='navLinesBottom'>|</div>
					<li>
						<div>
							<a href='https://github.com/davesheinbein'>
								<i
									className='fa fa-github selectE'
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
