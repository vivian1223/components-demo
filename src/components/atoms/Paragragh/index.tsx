import React from 'react';

import styles from './index.module.css';

interface ParagraphProps {
	text: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({ text }) => (
	<h2 className={styles.paragraph}>{text}</h2>
);
