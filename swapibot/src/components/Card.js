import React from 'react';
import Cardlist from './Cardlist';

const Card = ({ character }) => {
	console.log(character);
	return (
		<div className='tc'>
			<h1>Party Member</h1>
			<p>Name: {character}</p>
			<p>detail1</p>
			<p>detail2</p>
			<p>detail3</p>
			<p>detail4</p>
		</div>
	);
};

export default Card;