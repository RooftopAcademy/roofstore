import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import NavigationPage from './NavigationPage'


const MockNavigationPage = () => {
    return (
        <BrowserRouter>
            <NavigationPage />
        </BrowserRouter>
    )
}

describe('Test NavigationPage', () => {

    beforeEach(() => {
        render(<MockNavigationPage />)
    })

    test('should render a title with the text "Tu historial"', () => {
        const input = screen.getByText("Tu historial")
        expect(input).toBeInTheDocument()
    })

    test('should render the text "Administrar" with the link "/navigation/admin"', () => {
        const element = screen.getByText("Administrar")
        const href = element.attributes["href"].value
        expect(href).toBe("/navigation/admin");
    })
})
