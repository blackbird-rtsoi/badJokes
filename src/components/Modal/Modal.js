import React from "react";
import ReactDom from "react-dom";
import Button from "../Button/Button";
import useRandomJokes from "../../hooks/useRanomJokes";

// eslint-disable-next-line
import styles from "./modal.css";

function Modal({ closeModal }) {
	const { textValue, changeTextValue } = useRandomJokes();
	return ReactDom.createPortal(
		<>
			<div className='wrapper'>
				<div className='backdrop'>
					<div className='modal' aria-label={"dialog"}>
						<div className='content'>
							<h1 className='header'> How bad can a joke really be?</h1>
							<p className='text'>{textValue}</p>
							<div className='modal-button'>
								<Button
									aria-label={"close button"}
									children={"Pick a joke"}
									onClick={changeTextValue}></Button>
								<Button
									aria-label={"close button"}
									children={"Hide me"}
									onClick={closeModal}></Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>,
		document.body
	);
}

export default Modal;
