// import "./App.css";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import useModal from "./hooks/useModal";
import useRandomJokes from "./hooks/useRanomJokes";

const message = "Show Modal";
function App() {
	const [ isShowing, toggleModal ] = useModal();
	const [ textValue, changeTextValue ] = useRandomJokes();
	return (
		<div className='App'>
			<Button
				label={message}
				onClick={toggleModal}
			/>
			{isShowing &&
				<Modal
					onClose={toggleModal}
					textValue={textValue}
					onPickJokeClick={changeTextValue}
				/>
			}
		</div>
	);
}

export default App;
