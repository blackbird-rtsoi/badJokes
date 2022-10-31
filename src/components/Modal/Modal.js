import React from "react";
import ReactDom from "react-dom";
import Button from "../Button/Button";
import { FocusScope } from "react-aria";
// eslint-disable-next-line
import styles from "./modal.css";

function Modal({ closeModal, textValue, changeTextValue, props }) {
	return ReactDom.createPortal(
		<>
			<div className='wrapper' aria-hidden='true'>
				<div className='backdrop' aria-label='backdrop' aria-required='true'>
					<FocusScope contain autoFocus>
						<dialog open id='modal'>
							<main className='content'>
								<h1 className='header'>
									{" "}
									How <strong>bad </strong>can a joke really be?
								</h1>
								<p className='text'>{textValue}</p>
								<div className='modal-button'>
									<Button
										aria-label={"button to pick a joke"}
										aria-required='true'
										children={"Pick a joke"}
										onClick={changeTextValue}></Button>
									<Button
										aria-label={"close button"}
										aria-required='true'
										children={"Hide me"}
										onClick={closeModal}></Button>
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
