import React from 'react';

const Card = ({ charNum, name, gender, height, mass, hairColor, skinColor, eyeColor, birthYear }) => {
		return (
			<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
				<p className=''>{name}</p>
				<div className='f5 fw4 gray mt0'>
					<p>Gender: {gender}</p>
					<p>Height: {height}</p>
					<p>Mass: {mass}</p>
					<p>Hair Color: {hairColor}</p>
					<p>Skin Color: {skinColor}</p>
					<p>Eye Color: {eyeColor}</p>
					<p>Birth Year: {birthYear}</p>
				</div>
			</div>
	)
}

export default Card;