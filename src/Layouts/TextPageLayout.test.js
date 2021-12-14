import { render, screen} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import TextPageLayout from './TextPageLayout'

describe("TextPageLayout test", () => {

    it('should render a text passed by title prop', () => {
        render(
            <BrowserRouter>
                <TextPageLayout title="¿Con qué podemos ayudarte?"/>
            </BrowserRouter>
        )
        const title = screen.getByText("¿Con qué podemos ayudarte?")
        expect(title).toBeInTheDocument()
    })

    it('should render a content passed as child', () => {
        render(
            <BrowserRouter>
                <TextPageLayout>
                    <p>Contenido de prueba</p>
                </TextPageLayout>
            </BrowserRouter>
        )
        const child = screen.getByText("Contenido de prueba")
        expect(child).toBeInTheDocument()
    })

    it('should render a InfoVotation component if showInfoVotation prop is true', () => {
        render(
            <BrowserRouter>
                <TextPageLayout showInfoVotation={true} />
            </BrowserRouter>
        )
        const element = screen.queryByTestId("info-votation-block")
        expect(element).toBeInTheDocument()
    })

    it('should not render a InfoVotation component if showInfoVotation prop is false or omitted (false by default)', () => {
        render(
            <BrowserRouter>
                <TextPageLayout />
            </BrowserRouter>
        )
        const element = screen.queryByTestId("info-votation-block")
        expect(element).toBe(null)
    })
    
})
