import React, { Component } from 'react';
import apromas from 'resources/imgs/apromas.png';
import loadmax from 'resources/imgs/loadmax.png';
import './featured.scss';

class Featured extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isHovering: {}
		};
	}

	toggleHoverState(name, isHover = false) {
		this.setState({
			isHovering: {
				...this.state.isHovering,
				[name]: isHover
			}
		}, () => console.log('TOGGLE', name, this.state.isHovering[name]));
	}

	renderProject(path, img, alt, name, type, description) {
		const handleHover = (isHover) => {
			this.toggleHoverState(name, isHover);
		}

		const renderLink = (path, img, alt) => {
			return (
				<a className={'featured__link'} href={path} onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)} key='2'>
					<img className='featured__img' src={img} alt={alt} />
				</a>
			)
		}

		const renderDescription = (name, type, description) => {
			const show = this.state.isHovering[name] ? ' featured__hover' : ''

			return (
				<div className={'featured__details' + show} key='1'>
					<div className='featured__name'>{name}</div>
					<div className='featured__type'>{type}</div>
					<div className='featured__desc'>{description}</div>
				</div>
			)
		}

		return [
			renderDescription(name, type, description),
			renderLink(path, img, alt)
		];
	}

	render() {
		return (
			<section className='featured'>
				<div className='featured__projects'>
					{this.renderProject('https://apromas.com/', apromas, 'Apromas', 'Apromas', 'Website', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')}
					{this.renderProject('https://play.google.com/store/apps/details?id=com.loadmax', loadmax, 'LoadMax', 'Loadmax', 'Android App', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')}
				</div>
			</section>
		);
	}
}

export default Featured;
