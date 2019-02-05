import React from 'react';

const Settings = ({ partySize }) => {

	return (
		<div className='tc'>
			<h1>Choose Party Size</h1>
			Size:<input type="number" min="1" max="5" onchange={partySize}/>
		</div>
	);
};

export default Settings;