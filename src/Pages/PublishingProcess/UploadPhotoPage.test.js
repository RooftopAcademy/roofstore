import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import UploadPhotoPage from './UploadPhotoPage'

describe("UploadPhotoPage test", () => {
    window.URL.createObjectURL = jest.fn()

    afterEach(() => {
        window.URL.createObjectURL.mockReset()
    })

    beforeEach(() => {
        render(
            <UploadPhotoPage />
        )
    })

    it('should render a page title', () => {
        const element = screen.getByText("Subí buenas fotos de tu producto")
        expect(element).toBeInTheDocument
    })

    it('should render a button with the text "Agregar fotos"', () => {
        const element = screen.getByText("Agregar fotos")
        expect(element).toBeInTheDocument
    })

    it('test input file', async () => {
        let file = new File(['(⌐□_□)'], 'imagen.png', { type: 'image/png' })

        const inputElement = screen.getByLabelText("Agregar fotos")
    
        await waitFor(() =>
            fireEvent.change(inputElement, {
            target: { files: [file] },
            })
        )

        expect(inputElement.files[0].name).toBe("imagen.png")
        expect(inputElement.files.length).toBe(1)
    })

    it('if a file is selected, should render images', async () => {
        let file = new File(['(⌐□_□)'], 'imagen.png', { type: 'image/png' })

        const inputElement = screen.getByLabelText("Agregar fotos")

        await waitFor(() =>
            fireEvent.change(inputElement, {
            target: { files: [file] },
            })
        )

        let images = screen.getAllByRole("img")
        images.forEach((image) => {
            expect(image.getAttribute("alt")).toBe("imagen.png")
        })
    })

    it('if a file is selected, should render a button with the text "Confirmar"', async () => {
        let file = new File(['(⌐□_□)'], 'imagen.png', { type: 'image/png' })

        const inputElement = screen.getByLabelText("Agregar fotos")

        await waitFor(() =>
            fireEvent.change(inputElement, {
            target: { files: [file] },
            })
        )

        let element = screen.getByRole("button")
        expect(element.textContent).toBe("Confirmar")
    })

    it('if a file is selected, should render a input with a label text "Cargar más fotos"', async () => {
        let file = new File(['(⌐□_□)'], 'imagen.png', { type: 'image/png' })

        const inputElement = screen.getByLabelText("Agregar fotos")

        await waitFor(() =>
            fireEvent.change(inputElement, {
            target: { files: [file] },
            })
        )

        let element = screen.getByLabelText("Cargar más fotos")
        expect(element).toBeInTheDocument()
    })
})
