import React from 'react';
import Card from './Card';

const Cardlist = ({ party, randCharValue }) => {
	const charList = [];
	let times = 0;
	let randNum = 0;
	let randNumArray = [];

	function genRand() {
		return Math.floor(Math.random()*87 + 1)
	}

	while (times < party) {
		while(true) {
			let newRand = genRand()
			if (randNumArray.includes(newRand) || newRand === 17) {
				console.log("duplicate")
			} else {
				randNumArray[times] = newRand
				break;
			}
		}
		times++;
	}

	console.log(randNumArray);

	function generateTeam(size) {
		for (let i = 0; i < size; i++) {
			fetch(`https://swapi.co/api/people/${randNumArray[i]}`)
				.then(response => response.json())
				.then(char => charList[i] = char)
		}
	}

	generateTeam(party);
	console.log(charList);

	return (
		<div>
			<Card />
			<Card />
		</div>
	)
}

export default Cardlist;