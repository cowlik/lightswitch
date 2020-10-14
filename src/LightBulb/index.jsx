//
// LightBulb
// https://github.com/cowlik/lightswitch
//

import React, { useEffect } from 'react';
import './style.scss';

const LightBulb = (props) => {
	const elem = document.getElementById('lightbulb');

	useEffect(() => {
		if (elem) {
			props.isLightOn
				? elem.classList.add('lightbulb--on')
				: elem.classList.remove('lightbulb--on');
		}
	});

	return <section id="lightbulb"></section>;
};

export default LightBulb;
