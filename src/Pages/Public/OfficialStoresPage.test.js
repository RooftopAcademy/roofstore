import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import OfficialStores from './OfficialStoresPage'


const MockOfficialStores = () => {
    return (
        <BrowserRouter>
            <OfficialStores />
        </BrowserRouter>
    )

}





describe('Test of official stores page', () => {

    beforeEach(() => {
        render(<MockOfficialStores />)
    })

    test('Search input must be in the document', () => {
        const input = screen.getByPlaceholderText('Buscar Tiendas')
        expect(input).toBeInTheDocument()
        expect(input).toHaveAttribute('type', 'text')
    })

    test('Buttons with text "Ver todas" must be rendered', () => {
        const buttons = screen.getAllByText('Ver todas')
        buttons.forEach(button => {
            expect(button).toBeInTheDocument()
            expect(button).toHaveClass('bg-blue txt-white round')
        });
    })

    test('A button with text "Ver todas las tiendas" must be in the document', () => {
        const button = screen.getByText('Ver todas las tiendas')
        expect(button).toBeInTheDocument()
    })

    test('Links cards must be in the document', () => {
        const cards = screen.getAllByRole('link')
        cards.forEach(card => {
            expect(card).toBeInTheDocument()
        }
        )
    })
})


