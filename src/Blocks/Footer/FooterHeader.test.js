import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FooterHeader from './FooterHeader';

const MockFooterHeader = ( ) =>{
    return (
        <BrowserRouter>
            <FooterHeader />
        </BrowserRouter>
    )
}

describe( "Header", () => {
    
    it("should render the component <FooterHeader/> with the text '¡Comprá y vendé con la app!'", async () => {
        render(<MockFooterHeader />);
        const footerheader = screen.getByText("¡Comprá y vendé con la app!");
        expect(footerheader).toBeInTheDocument();

    })

    it("should render the component <FooterHeader/> with the link '/home'", () => {
        render(<MockFooterHeader />);
        const htmlValue = screen.getByRole("link")
        const variable = htmlValue.attributes["href"].value
        expect(variable).toBe("/home");
        
    })

})


