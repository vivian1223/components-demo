import React, { useState } from 'react';
import classnames from 'classnames';

import { ReactComponent as CheckboxIcon } from '../../../images/icons/checkbox.svg';

import styles from './index.module.css';

interface CheckbooxProperty {
	initValue: boolean;
	action: () => void;
}

export const Checkbox: React.FC<CheckbooxProperty> = ({ initValue, action }) => {
	const [checkboxValue, setCheckboxValue] = useState(initValue);
	return (
		<div className={classnames(styles.checkbox, { [styles.showIcon]: !checkboxValue })}>
			<input type="checkbox" />
			<CheckboxIcon
				onClick={() => {
					setCheckboxValue(!checkboxValue);
					action();
				}}
			/>
		</div>
	);
};
