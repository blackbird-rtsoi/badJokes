import React from "react";
import ReactDom from "react-dom";
import Button from "../Button/Button";
import jokes from "../../utils/jokes";

// eslint-disable-next-line
import styles from "./modal.css";

const Modal = ({ isShowing, closeModal }) =>
	isShowing
		? ReactDom.createPortal(
				<>
					<div className='wrapper'>
						<div className='backdrop'>
							<div className='modal' aria-label={"dialog"}>
								<div className='content'>
									<p className='header'>{jokes}</p>
									<div className='modal-button'>
										<Button
											aria-label={"close button"}
											onClick={closeModal}></Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</>,
				document.body
		  )
		: null;

export default Modal;
