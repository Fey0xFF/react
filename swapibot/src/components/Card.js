import React from 'react';

const Card = ({ character}) => {
	return (
		<div className='tc'>
			<h1>I'm a card!</h1>
			<p>Name: {character}</p>
			<p>detail1</p>
			<p>detail2</p>
			<p>detail3</p>
			<p>detail4</p>
		</div>
	);
};

export default Card;