import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import HomePage from '../Public/HomePage'

const MockNavbar = () => {
    return (
        <BrowserRouter>
            <HomePage/>
        </BrowserRouter>
    )
}

describe("ProductItem", () => {
    it("should redirect to product detail when clicked a product", async () => {
        render(<MockNavbar/>)
        const divElement = screen.getByTestId("product-detail-1")
        expect(divElement.getAttribute("href")).toBe("/product/1")
    })
})