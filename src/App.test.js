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
	screen.getByText(/How bad can a joke really be?/i);
	screen.getByText(/Pick a joke/i);
	screen.getByText(/Hide me/i);
});

test("should hide modal when button is selected", async () => {
	render(<App />);
	const linkElement = screen.getByText(/Show Modal/i);
	expect(linkElement).toBeInTheDocument();
	fireEvent.click(screen.getByText(/Show Modal/i));
	screen.getByText(/How bad can a joke really be?/i);
	screen.getByText(/Pick a joke/i);
	screen.getByText(/Hide me/i);

	fireEvent.click(screen.getByText(/Hide me/i));
	expect(
		screen.queryByText(/How bad can a joke really be?/i)
	).not.toBeInTheDocument();

	expect(screen.queryByText(/Hide me/i)).not.toBeInTheDocument();
});
