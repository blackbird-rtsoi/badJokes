import React from "react";

// eslint-disable-next-line
import styles from "./button.css";

const Button = ({ onClick, children }) => {
	return (
		<button type='button' onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
