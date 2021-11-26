import { render } from "@testing-library/react";
import InfoVotation from "./InfoVotation";

describe("InfoVotation", () => {
	let component;
	beforeEach(() => {
		component = render(<InfoVotation />);
	});

	it("should render a title that says: ¿Te fue útil la información ?", async () => {
		const title = component.getByText("¿Te fue útil la información?");
		expect(title).toBeInTheDocument();
	});

	it("should render two buttons, showing Yes and No respectively", async () => {
		const buttons = component.getAllByRole("button");
		expect(buttons[0]).toHaveTextContent("Si");
		expect(buttons[1]).toHaveTextContent("No");
	});
});
