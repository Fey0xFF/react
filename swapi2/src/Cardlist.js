import React from 'react';
import Card from './Card';

const Cardlist = ({ party, randCharValue }) => {
	const charList = [];
	
	function generateTeam(size) {
		for (let i = 0; i < size; i++) {
			charList[i] = "char"
		}
	}

	generateTeam();
	console.log(randCharValue);

	return (
		<div>
			<Card />
			<Card />
		</div>
	)
}

export default Cardlist;