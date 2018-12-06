import React from 'react';
import heroes from '../utils/heroes';

export default class List extends React.Component {
	render() {
		const { heroes = [], liRenderer, divRenderer, itemRenderer } = this.props;
		const typeItems = heroes.map(itemRenderer);
		const item = heroes.map(divRenderer);
		return <div>{item}</div>;
	}
}
