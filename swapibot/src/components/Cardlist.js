import React from 'react';
import Card from './Card';

const Cardlist = ({ currentChar, size }) => {
	function teamGenerator(size, teamObj) {
		for (let i = 0; i < size; i++) {
			let randChar = Math.floor(Math.random()*87) + 1
	    	fetch(`https://swapi.co/api/people/${randChar}`)
	      		.then(response => response.json())
	    		.then(char => teamObj[i] = char) 
		}
	};

	const teamObj = [];
	teamGenerator(size, teamObj);

	teamObj.forEach((item, index) => {
		return
	})

	return (
		<div>
			<Card 
				character={currentChar} 
			/>
		</div>
	)
}

export default Cardlist;