import React from "react";

// eslint-disable-next-line
import styles from "./button.css";

const text = "Let's hide this modal...";
const Button = ({ onClick }) => {
	return (
		<button type='button' onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;
