import { render, screen } from '@testing-library/react'
import { useRef } from 'react'
import { act } from 'react-dom/test-utils';
import Snackbar from './Snackbar'

describe("Snackbar test", () => {

    const messageText = 'Podés subir hasta 10 fotos de tu producto'

    let snackbarRef
    function HookWrapper() {
        snackbarRef = useRef(null)
        return null
    }

    beforeEach(() => {

        render(<HookWrapper />)

        render(
            <Snackbar
                ref={snackbarRef}
                message={messageText} />
        )
    })

    it('should render a snackbar with a text passed by prop', () => {
        const element = screen.getByText(messageText)
        expect(element).toBeInTheDocument
    })

    it('should not be visible if the show() function is not set', () => {
        const element = screen.getByText(messageText)
        expect(element.parentElement).toHaveClass("UploadPhotoPage-snackbar-v-hidden")
    })

    it('should be visible if the show() function is set', () => {
        const element = screen.getByText(messageText)
        expect(element.parentElement).toHaveClass("UploadPhotoPage-snackbar-v-hidden")

        act(() => {
            snackbarRef.current.show()
        })
        expect(element.parentElement).not.toHaveClass("UploadPhotoPage-snackbar-v-hidden")
    })

    it('when setting the show() function it should be visible for 3 seconds and then hidden', async () => {

        const element = screen.getByText(messageText)

        act(() => {
            snackbarRef.current.show()
        })
        expect(element.parentElement).not.toHaveClass("UploadPhotoPage-snackbar-v-hidden")

        await new Promise((resolve) => setTimeout(resolve, 3000))
        expect(element.parentElement).toHaveClass("UploadPhotoPage-snackbar-v-hidden")
    })
})
