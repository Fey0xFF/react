import React from 'react';

const Settings = ({ partySize }) => {

	return (
		<div className='tc'>
			<h1>Choose Party Size</h1>
			Size 1-5:<input type="number" min="1" max="5" pattern="[1-5]" onChange={partySize} />
		</div>
	);
};

export default Settings;