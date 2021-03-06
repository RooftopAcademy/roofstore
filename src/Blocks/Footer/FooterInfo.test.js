import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FooterInfo from './FooterInfo';

const MockFooterInfo = ( ) =>{
    return (
        <BrowserRouter>
            <FooterInfo />
        </BrowserRouter>
    )
}

describe( "Info", () => {
    
    beforeEach(() => {
        render(<MockFooterInfo />);
    })

    it("should render the component <FooterInfo/> with the text 'Términos y condiciones'", async () => {
        const footerInfo = screen.getByText("Términos y condiciones");
        expect(footerInfo).toBeInTheDocument();
    })

    it("should render the component <FooterInfo/> with the link '/ayuda/terminos-y-condiciones'", () => {
        const htmlValue = screen.getByText("Términos y condiciones")
        const variable = htmlValue.attributes["href"].value
        expect(variable).toBe("/ayuda/terminos-y-condiciones");
    })

    it("should render the component <FooterInfo/> with the text 'Cómo cuidamos tu privacidad'", async () => {
        const footerInfo = screen.getByText("Cómo cuidamos tu privacidad");
        expect(footerInfo).toBeInTheDocument();
    })

    it("should render the component <FooterInfo/> with the link '/privacy'", () => {
        const htmlValue = screen.getByText("Cómo cuidamos tu privacidad")
        const variable = htmlValue.attributes["href"].value
        expect(variable).toBe("/privacy");
    })

    it("should render the component <FooterInfo/> with the text 'Información al usuario financiero'", async () => {
        const footerInfo = screen.getByText("Información al usuario financiero");
        expect(footerInfo).toBeInTheDocument();
    })

    it("should render the component <FooterInfo/> with the link '/financial-user-info'", () => {
        const htmlValue = screen.getByText("Información al usuario financiero")
        const variable = htmlValue.attributes["href"].value
        expect(variable).toBe("/financial-user-info");
    })
    it("should render the component <FooterInfo/> with the text 'Defensa del Consumidor'", async () => {
        const footerInfo = screen.getByText("Defensa del Consumidor");
        expect(footerInfo).toBeInTheDocument();
    })

    it("should render the component <FooterInfo/> with the link '/ayuda/defensa-del-consumidor'", () => {
        const htmlValue = screen.getByText("Defensa del Consumidor")
        const variable = htmlValue.attributes["href"].value
        expect(variable).toBe("/ayuda/defensa-del-consumidor");
    })

})    



