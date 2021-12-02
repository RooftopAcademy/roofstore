import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CreateAccountCard from "./CreateAccountCard";
describe("MenuMobile", () => {
	let component;

	beforeEach(() => {
		component = render(
			<BrowserRouter>
				<CreateAccountCard />
			</BrowserRouter>
		);
	});

	it("should include '/register' as href", () => {
		expect(
			component.getByText("Crear cuenta").closest("a")
		).toHaveAttribute("href", "/register");
	});

});