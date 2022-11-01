import React from "react";
import ReactDom from "react-dom";
import Button from "../Button/Button";
import { FocusScope } from "react-aria";

// import styles from "./modal.css";
import "./modal.css";

function Modal({ onClose, textValue, onPickJokeClick }) {
	return ReactDom.createPortal(
		<>
			<div className='wrapper' aria-hidden='true'>
				<div className='backdrop' aria-label='backdrop' aria-required='true'>
					<FocusScope contain autoFocus>
						<dialog open id='modal'>
							<main className='content'>
								<h1 className='header'>
									How <strong>bad </strong>can a joke really be?
								</h1>
								{
									textValue &&
										<p className='text'>{textValue}</p>
								}
								<div className='modal-button'>
									<Button
										aria-label={"button to pick a joke"}
										aria-required='true'
										label={"Pick a joke"}
										onClick={onPickJokeClick} />
									<Button
										aria-label={"close button"}
										aria-required='true'
										label={"Hide me"}
										onClick={onClose} />
								</div>
							</main>
						</dialog>
					</FocusScope>
				</div>
			</div>
		</>,
		document.body
	);
}

export default Modal;
