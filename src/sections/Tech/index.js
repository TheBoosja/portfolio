import React, { Component } from 'react';
import './tech.scss';

class Tech extends Component {
	render() {
		const icons = []
		for (let i = 0; i < 40; i++) {
			icons.push(<div className='tech__icon' />)
		}

		return (
			<section className='tech'>
				<h3 className='tech__heading'>Technology</h3>
				<div className='tech__items'>
					{icons}
				</div>
			</section>
		);
	}
}

export default Tech;
