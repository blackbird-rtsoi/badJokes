import "./App.css";
import Modal from "./components/Modal/Modal";
import useModal from "./hooks/useModal";

const message = "Show Modal";
function App() {
	const { isShowing, toggleModal } = useModal();
	return (
		<div className='App'>
			<button className='button-default' onClick={toggleModal}>
				{message}
			</button>
			<Modal isShowing={isShowing} closeModal={toggleModal} />
		</div>
	);
}

export default App;
