import React from 'react';
import Card from './Card';

const Cardlist = ({ currentChar, size }) => {
	function charFetcher(charList) {
		let randChar = Math.floor(Math.random()*87) + 1
	    fetch(`https://swapi.co/api/people/${randChar}`)
	      .then(response => response.json())
	      .then(char => console.log(char))
	};

	function teamGenerator(size) {
		console.log("team ran");
		const charList = {};
		for (let i = 0; i < size; i++) {
			charFetcher(charList[i])
		}
		console.log(charList)
	};


	teamGenerator(size);
	return (
		<div>
			<Card character={currentChar} />
		</div>
	)
}

export default Cardlist;