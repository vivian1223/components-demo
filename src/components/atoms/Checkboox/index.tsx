import React, { useState } from 'react';
import classnames from 'classnames';

import { ReactComponent as CheckboxIcon } from '../../../images/icons/checkbox.svg';

import styles from './index.module.css';

interface CheckbooxProperty {
	id: string;
	action: () => void;
	label: string;
	classname: string;
}

export const Checkbox: React.FC<CheckbooxProperty> = ({ id, action, label, classname }) => {
	const [checkboxValue, setCheckboxValue] = useState(false);
	return (
		<>
			<label htmlFor={id} className={classnames(styles.label, classname)}>
				<div className={classnames(styles.checkbox, { [styles.showIcon]: !checkboxValue })}>
					<input type="checkbox" id={id} />
					<CheckboxIcon
						onClick={() => {
							setCheckboxValue(!checkboxValue);
							action();
						}}
					/>
				</div>
				<span>{label}</span>
			</label>
		</>
	);
};
