import React from 'react';

import { Header } from './components/organs/Header';
import { Checkbox } from './components/atoms/Checkboox';
import { ComponentCard } from './components/molecules/CompnentCard';

import styles from './App.module.css';

function App() {
	return (
		<div className={styles.app}>
			<Header />
			<ComponentCard
				title="Custom Checkbox"
				intro="This custom checkbox is builded by replacing the real input DOM with custom check icon and manipulating toggling state with react useState hook."
				content={
					<Checkbox classname={styles.checkbox} id="1" label="Checkbox example" action={() => {}} />
				}
			/>
		</div>
	);
}

export default App;
