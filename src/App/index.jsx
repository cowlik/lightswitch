//
// App
// https://github.com/cowlik/lightswitch
//

import React, { useState } from 'react';
import './style.scss';
import LightBulb from '../LightBulb';
import LightSwitch from '../LightSwitch';

const App = () => {
	const [isLightOn, setIsLightOn] = useState(false);

	return (
		<main id="app">
			<LightBulb isLightOn={isLightOn}></LightBulb>
			<LightSwitch
				isLightOn={isLightOn}
				setIsLightOn={setIsLightOn}
			></LightSwitch>
		</main>
	);
};

export default App;
