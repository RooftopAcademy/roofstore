import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";

describe("HomePage", () => {
	let component;

	beforeEach(() => {
		component = render(
			<BrowserRouter>
				<HomePage />
			</BrowserRouter>
		);
	});

	it("should include '/categories' as href", () => {
		expect(component.getByText("Ver más categorías").closest("a")).toHaveAttribute(
			"href",
			"/categories"
		);
	});

});
