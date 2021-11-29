import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TermsAndConditionsPage from './TermsAndConditionsPage';


const MockTermsAndConditions = ( ) =>{
    return (
        <BrowserRouter>
            <TermsAndConditionsPage />
        </BrowserRouter>
    )
}
describe( "test", () => {
    
    it("should render the component <TermsAndConditionPage/> with the text 'Términos y condiciones de uso del Sitio'", async () => {
        render(<MockTermsAndConditions />);
        const title = screen.getByText("Términos y condiciones de uso del Sitio");
        expect(title).toBeInTheDocument();
    })
})  