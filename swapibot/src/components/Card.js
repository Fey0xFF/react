import React from 'react';
import Cardlist from './Cardlist';

const Card = ({ character, characterList }) => {
	return (
		<div>
			<h1>Party Member #</h1>
			<p>Name: {character}</p>
			<p>Gender: </p>
			<p>Height: </p>
			<p>Mass: </p>
			<p>Birth Year:</p>
		</div>
	);
};

export default Card;