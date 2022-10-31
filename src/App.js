import "./App.css";
import Modal from "./components/Modal/Modal";
import useModal from "./hooks/useModal";
import useRandomJokes from "./hooks/useRanomJokes";

const message = "Show Modal";
function App() {
	const { isShowing, toggleModal } = useModal();
	const { textValue, changeTextValue } = useRandomJokes();
	return (
		<div className='App'>
			<button className='button-default' onClick={toggleModal}>
				{message}
			</button>
			{isShowing ? (
				<Modal
					isShowing={isShowing}
					closeModal={toggleModal}
					textValue={textValue}
					changeTextValue={changeTextValue}
				/>
			) : null}
		</div>
	);
}

export default App;
