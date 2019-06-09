import React, { Component } from 'react';
import './navbar.scss';

class Navbar extends Component {
	render() {
		return (
			<nav className='navbar'>
				<div className='navbar__info'>
					<h2 className='navbar__title'>Mathias Iversen</h2>
					<span className='navbar__subtitle'>Programmer</span>
				</div>
			</nav>
		);
	}
}

export default Navbar;
