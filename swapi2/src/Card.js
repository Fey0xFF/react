import React from 'react';

const Card = ({ charNum, name, gender, height, mass, hairColor, skinColor, eyeColor, birthYear }) => {
		return (
			<div>
				<h1>Character: {charNum}</h1>
				<p>Name: {name}</p>
				<p>Gender: {gender}</p>
				<p>Height: {height}</p>
				<p>Mass: {mass}</p>
				<p>Hair Color: {hairColor}</p>
				<p>Skin Color: {skinColor}</p>
				<p>Eye Color: {eyeColor}</p>
				<p>Birth Year: {birthYear}</p>
			</div>
	)
}

export default Card;