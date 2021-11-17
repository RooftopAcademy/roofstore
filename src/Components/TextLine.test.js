import { render, screen } from "@testing-library/react";
import TextLine from "./TextLine";

it("render the text passed in text prop", async () => {
	render(<TextLine text="Testing TextLine" />);
	const textElement = screen.getByText("Testing TextLine");
	expect(textElement).toBeInTheDocument();
});

it("include the classes passed in className prop", async () => {
	render(<TextLine text="Testing TextLine" className="txt-blue" />);
	const textElement = screen.getByText("Testing TextLine");
	expect(textElement).toHaveClass("txt-blue");
});
