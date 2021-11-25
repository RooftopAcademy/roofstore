import { render, screen } from "@testing-library/react";
import TextLine from "./TextLine";

describe("TextLine", () => {
	beforeEach(() => {
		render(<TextLine text="Testing TextLine" className="txt-blue" />);
	});

	it("render the text passed in text prop", async () => {
		const textElement = screen.getByText("Testing TextLine");
		expect(textElement).toBeInTheDocument();
	});

	it("include the classes passed in className prop", async () => {
		const textElement = screen.getByText("Testing TextLine");
		expect(textElement).toHaveClass("txt-blue");
	});
});
