import React from 'react';

import { Header } from './components/organs/Header';
import { Checkbox } from './components/atoms/Checkboox';
import { ComponentCard } from './components/molecules/CompnentCard';

import './App.css';

function App() {
	return (
		<div className="app">
			<Header />
			<ComponentCard
				title="Custom Checkbox"
				intro="This custom checkbox is builded by replacing the real input DOM with custom check icon and manipulating toggling state with react useState hook."
				content={<Checkbox initValue={false} action={() => {}} />}
			/>
		</div>
	);
}

export default App;
