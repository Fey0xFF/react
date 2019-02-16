import React from 'react';
import Card from './Card';

const Cardlist = ({ party, partyArray, randPartyNums }) => {
	console.log('this is randParty', partyArray);
	let charList = [];
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

	// console.log(randNumArray);

	function generateTeam(size, teamArray) {
		// for (let i = 0; i < size; i++) {
		// 	fetch(`https://swapi.co/api/people/${randNumArray[i]}`)
		// 		.then(response => response.json())
		// 		.then(char => teamArray[i] = char)
		// }
	}

	generateTeam(party, charList);
	// console.log(charList);
	// console.log(charList.length);

	return !charList.length ? 
	<h1>Loading</h1> :
	(
		<div>
			{
				charList.map((user, i) => {
					return (
						<Card 
							name={charList[i].name}
						/>
					);
				})
			}
		</div>
	)
};

export default Cardlist;