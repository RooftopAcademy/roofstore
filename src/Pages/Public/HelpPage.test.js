import { BrowserRouter } from "react-router-dom"
import HelpPage from "./HelpPage"
import { render, screen } from '@testing-library/react'

const MockHelpPage = () => {
    return (
        <BrowserRouter>
            <HelpPage />
        </BrowserRouter>
    )
}

describe('Test for help page', () => {
    beforeEach(() => {
        render(<MockHelpPage />)
    });

    it('should render a block with help options', () => {
        const block = screen.getByTestId('buys')
        expect(block).toBeInTheDocument()
        expect(block).toContainHTML('p')
    });

    it('should render a block with help options', () => {
        const block = screen.getByTestId('sells')
        expect(block).toBeInTheDocument()
        expect(block).toContainHTML('p')
    });

    it('should render a block with help options', () => {
        const block = screen.getByTestId('account')
        expect(block).toBeInTheDocument()
        expect(block).toContainHTML('p')
    });

    it('should render Links, each one has the href attribute', () => {
        const links = screen.getAllByRole('link')
        links.forEach(link => {
            expect(link).toHaveAttribute('href')
        });


    })

})
