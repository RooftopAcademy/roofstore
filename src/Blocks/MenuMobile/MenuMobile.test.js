import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MenuMobile from "./MenuMobile";

describe("MenuMobile", () => {
	it("should include the correct urls", () => {
		render(
			<BrowserRouter>
				<MenuMobile />
			</BrowserRouter>
		);

		expect(screen.getByText("Ingresá").closest("a")).toHaveAttribute(
			"href",
			"/login"
		);

		expect(screen.getByText("Creá tu cuenta").closest("a")).toHaveAttribute(
			"href",
			"/register"
		);

		expect(screen.getByText("Inicio")).toHaveAttribute("href", "/");

		expect(screen.getByText("Ofertas")).toHaveAttribute("href", "/offers");

		expect(screen.getByText("Historial")).toHaveAttribute(
			"href",
			"/shopping-history"
		);
	});
});
