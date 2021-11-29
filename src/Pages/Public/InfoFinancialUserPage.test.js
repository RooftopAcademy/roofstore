import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import InfoFinancialUserPage from './InfoFinancialUserPage';


describe('<InfoFinancialUserPage url="/"/>', () => {
    let component
    beforeEach(() => {
        component = render (
            <BrowserRouter>
                <InfoFinancialUserPage/>
            </BrowserRouter>
        )
    })

    test('The page have text', async () => {
        const text = component.container.querySelector(['p'])
        expect(text).toBeInTheDocument()
    });
    test('The page have images', async () => {
        const img = component.container.querySelector(['img'])
        expect(img).toBeInTheDocument()
    });
    
})