import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FooterLogin from './FooterLogin';

const MockFooterLogin = ( ) =>{
    return (
        <BrowserRouter>
            <FooterLogin />
        </BrowserRouter>
    )
}

describe( "Login", () => {
    
    it("should render the component <FooterLogin/> with the text 'Ingresá'", async () => {
        render(<MockFooterLogin />);
        const footerlogin = screen.getByText("Ingresá");
        expect(footerlogin).toBeInTheDocument();
    })

    it("should render the component <FooterLogin/> with the link /login", () => {
        render(<MockFooterLogin  />);
        const htmlValue = screen.getByText("Ingresá")
        const variable = htmlValue.attributes["href"].value
        expect(variable).toBe("/login");
    })

    it("should render the component <FooterLogin/> with the text 'Creá tu cuenta'", async () => {
        render(<MockFooterLogin />);
        const footerlogin = screen.getByText("Creá tu cuenta");
        expect(footerlogin).toBeInTheDocument();
    })

    it("should render the component <FooterLogin/> with the link /register", () => {
        render(<MockFooterLogin />);
        const htmlValue = screen.getByText("Creá tu cuenta")
        const variable = htmlValue.attributes["href"].value
        expect(variable).toBe("/register");
    })
})