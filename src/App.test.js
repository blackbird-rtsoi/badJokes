import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
	render(<App />);
	const linkElement = screen.getByText(/Show Modal/i);
	expect(linkElement).toBeInTheDocument();
});

test("should open Modal", async () => {
	render(<App />);
	const linkElement = screen.getByText(/Show Modal/i);
	expect(linkElement).toBeInTheDocument();
	fireEvent.click(screen.getByText(/Show Modal/i));
	screen.getByText(/Why don't eggs tell jokes/i);
	screen.getByText(/Let's hide this modal.../i);
});

test("should hide modal when button is selected", async () => {
	render(<App />);
	const linkElement = screen.getByText(/Show Modal/i);
	expect(linkElement).toBeInTheDocument();
	fireEvent.click(screen.getByText(/Show Modal/i));
	screen.getByText(/Why don't eggs tell jokes/i);
	screen.getByText(/Let's hide this modal.../i);

	fireEvent.click(screen.getByText(/Let's hide this modal.../i));
	expect(
		screen.queryByText(/Why don't eggs tell jokes/i)
	).not.toBeInTheDocument();

	expect(
		screen.queryByText(/Let's hide this modal.../i)
	).not.toBeInTheDocument();
});
