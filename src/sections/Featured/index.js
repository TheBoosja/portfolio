import React, { Component } from 'react';
import itPilot from 'resources/imgs/itpilot-logo.png';
import apromas from 'resources/imgs/apromas.png';
import loadmax from 'resources/imgs/loadmax.png';
import './featured.scss';

class Featured extends Component {
	renderLink(path, img, alt, isHeader) {
		return (
			<a className={'featured__link'} href={path}>
				<img className='featured__img' src={img} alt={alt} />
			</a>
		)
	}

	render() {
		const Description = (props) => {
			return (
				<div className='featured__details'>
					<div className='featured__name'>{props.name}</div>
					<div className='featured__type'>{props.type}</div>
					<div className='featured__desc'>{props.children}</div>
				</div>
			)
		}

		return (
			<section className='featured'>
					{/* {this.renderLink('https://www.itpilot.dk/', itPilot, 'itPilot', true)} */}
				<div className='featured__projects'>
					<Description name='Apromas' type='Website'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</Description>
					{this.renderLink('https://apromas.com/', apromas, 'Apromas')}
					<Description name='LoadMax' type='Android App'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</Description>
					{this.renderLink('https://play.google.com/store/apps/details?id=com.loadmax', loadmax, 'LoadMax')}
				</div>
			</section>
		);
	}
}

export default Featured;
