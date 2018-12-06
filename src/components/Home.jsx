import React from 'react';
import List from './List';
import heroes from '../utils/heroes';
const options = [
	{ id: '1', value: 1 },
	{ id: '2', value: 2 },
	{ id: '3', value: 3 },
	{ id: '4', value: 4 }
];

const liRenderer = data => {
	return (
		<ul key={data.id} className="newList">
			<li>{data.hero}</li>
			<li>
				<img src={data.avatar} />
			</li>
			<li>{data.name}</li>
		</ul>
	);
};

const divRenderer = data => (
	<div key={data.hero}>
		{data.name}
		<div>
			<img src={data.avatar} />
		</div>
		<div>{data.name}</div>
		<div>{data.desc}</div>
	</div>
);
const itemRenderer = data => <div>{data.name}</div>;

class Home extends React.Component {
	render() {
		return (
			<div>
				<List
					heroes={heroes}
					itemRenderer={itemRenderer}
					divRenderer={divRenderer}
					liRenderer={liRenderer}
				/>
			</div>
		);
	}
}

export default Home;
