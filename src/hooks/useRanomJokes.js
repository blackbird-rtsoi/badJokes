import { useState } from "react";
import jokes from "../utils/jokes";

const useRandomJokes = () => {
	const [textValue, setTextValue] = useState(" ");

	function changeTextValue() {
		setTextValue(jokes[Math.floor(Math.random() * jokes.length)]);
	}

	return {
		textValue,
		changeTextValue,
	};
};

export default useRandomJokes;
