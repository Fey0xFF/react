import React from 'react';

const Card = ({ character }) => {
	return (
		<div className='tc'>
			<h1>I'm a card!</h1>
			<p>{character}</p>
		</div>
	);
};

export default Card;