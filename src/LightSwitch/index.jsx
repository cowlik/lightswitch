import React, { useEffect, useState } from 'react';
import './style.scss';

const LightSwitch = (props) => {
	const elem = document.getElementById('lightswitch');

	const handleClick = (event) => {
		props.setIsLightOn(!props.isLightOn);
	};

	useEffect(() => {
		document.title = `LightSwitch is ${props.isLightOn ? 'ON' : 'OFF'}`;

		if (elem) {
			props.isLightOn
				? elem.classList.add('lightswitch--on')
				: elem.classList.remove('lightswitch--on');
		}
	});

	return (
		<button id="lightswitch" onClick={handleClick}>
			<div className="lightswitch__screw lightswitch__screw-top"></div>
			<div className="lightswitch__toggle-container">
				<div className="lightswitch__toggle">
					<div className="lightswitch__toggle-down"></div>
					<div className="lightswitch__toggle-up"></div>
				</div>
			</div>
			<div className="lightswitch__screw lightswitch__screw-bottom"></div>
		</button>
	);
};

export default LightSwitch;
