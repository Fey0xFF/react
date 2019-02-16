import React from 'react';

const Card = ({ name }) => {
		return (
			<div>
				<h1>Character</h1>
				<p>{name}</p>
				<p>Age</p>
				<p>Birth Place</p>
				<p>Home World</p>
			</div>
	)
}

export default Card;