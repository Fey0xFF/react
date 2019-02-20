import React from 'react';
import Card from './Card';

const Cardlist = ({ partyArray }) => {

	console.log('this is randParty', partyArray);
	console.log('party array length', partyArray.length)
	return !partyArray.length ? 
	<h1>Loading</h1> :
	(
		<div>
			{
				partyArray.map((user, i) => {
					return (
						<Card 
							key={i}
							name={partyArray[i].name}
							gender={partyArray[i].gender}
							height={partyArray[i].height}
							mass={partyArray[i].mass}
							hairColor={partyArray[i].hair_color}
							skinColor={partyArray[i].skin_color}
							eyeColor={partyArray[i].eye_color}
							birthYear={partyArray[i].birth_year}
						/>
					);
				})
			}
		</div>
	)
};

export default Cardlist;