import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CartTotal from './CartTotal';


const MockCartTotal = ({priceTotal}) => {
    return (
        <BrowserRouter>
            <CartTotal 
                priceTotal={priceTotal} 
            />
        </BrowserRouter>
    )
}

describe("CartTotal", () => {
    it("should render the price total", async () => {
        render(
            <MockCartTotal 
                priceTotal={1500}
            />
        )
        const textElement = await screen.findByTestId("price-total")
        expect(textElement).toContainHTML("$ 1500")
    })
})