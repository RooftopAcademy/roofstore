import { render, screen, within, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Navbar'

const MockNavbar = () => {
    return (
        <BrowserRouter>
            <Navbar/>
        </BrowserRouter>
    )
}

describe("Navbar test", () => {

    describe("Test for search bar", () => {

        beforeEach(() => {
            render(<MockNavbar/>)
        })

        it('should render a input text', () => {
            const inputElement = screen.getByRole("textbox")
            expect(inputElement).toBeInTheDocument()
        })

        it('should render a input text with "Estoy buscando..." placeholder', () => {
            const placeholder = screen.getByRole("textbox").attributes["placeholder"]
            expect(placeholder.value).toBe("Estoy buscando...")
        })
    })

    describe("Test for redirect links", () => {

        beforeEach(() => {
            render(<MockNavbar/>)
        })

        it('should render two links to redirect', () => {
            const anchorsElement = screen.getAllByRole("link")
            expect(anchorsElement.length).toBe(2)
        })
    })

    describe("Test for hamburger menu", () => {
        beforeEach(() => {
            render(<MockNavbar/>)
        })

        it("should render button hamburger menu", async () => {
            const buttonElement = screen.getByRole("checkbox", {hidden: true})
            expect(buttonElement).toBeInTheDocument()
        })

        it("should render menu mobile when clicked hamburger menu", async () => {
            const buttonElement = screen.getByRole("checkbox", {hidden: true})
            fireEvent.click(buttonElement)
            const textElement = screen.getByText("Bienvenido/a")
            expect(textElement).toBeInTheDocument()
        })

        it('should redirect to the main page when clicking on the logo', async () => {
            render(<MockNavbar/>)
            const logoElement = screen.getByTestId("LogoNavbar")
            expect(logoElement.getAttribute("href")).toBe("/")
        })
    })
})
