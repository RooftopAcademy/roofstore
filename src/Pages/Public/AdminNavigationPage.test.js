import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import AdminNavigationPage from './AdminNavigationPage'


const MockAdminNavigationPage = () => {
    return (
        <BrowserRouter>
            <AdminNavigationPage />
        </BrowserRouter>
    )
}

describe('Test AdminNavigationPage', () => {

    beforeEach(() => {
        render(<MockAdminNavigationPage />)
    })

    test('should render a title with the text "Administrar tu historial"', () => {
        const input = screen.getByText("Administrar tu historial")
        expect(input).toBeInTheDocument()
    })

    test('should render a switch bar with the text "Registro de historial"', () => {
        const input = screen.getByText("Registro de historial")
        expect(input).toBeInTheDocument()
    })

    test('should render a button with the text "Borrar tu historial"', () => {
        const element = screen.getByRole("button")
        expect(element).toBeInTheDocument()
        expect(element.textContent).toBe("Borrar tu historial")
    })
})
