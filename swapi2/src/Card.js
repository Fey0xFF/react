import React from 'react';

const Card = ({ charNum, name, gender, height, mass, hairColor, skinColor, eyeColor, birthYear }) => {
		return (
			<div className='w-25 h-50 starText starYellow tc stormBG dib br3 pa3 ma2 grow bw2 shadow-5'>
				<h2 className="f3 underline">{name}</h2>
				<div className='f4 fw4 mt0'>
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