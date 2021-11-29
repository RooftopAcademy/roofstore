import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MenuMobile from "./MenuMobile";

describe("MenuMobile", () => {
	let component;

	beforeEach(() => {
		component = render(
			<BrowserRouter>
				<MenuMobile />
			</BrowserRouter>
		);
	});

	it("should include `/login` as href", () => {
		expect(component.getByText("Ingresá").closest("a")).toHaveAttribute(
			"href",
			"/login"
		);
	});

	it("should include `/register` as href", () => {
		expect(
			component.getByText("Creá tu cuenta").closest("a")
		).toHaveAttribute("href", "/register");
	});

	it("should include `/` as href", () => {
		expect(component.getByText("Inicio")).toHaveAttribute("href", "/");
	});

	it("should include `/offers` as href", () => {
		expect(component.getByText("Ofertas")).toHaveAttribute(
			"href",
			"/offers"
		);
	});

	it("should include `/shopping-history` as href", () => {
		expect(component.getByText("Historial")).toHaveAttribute(
			"href",
			"/shopping-history"
		);
	});
});
