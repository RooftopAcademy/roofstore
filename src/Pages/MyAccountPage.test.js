import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MyAccountPage from './Public/MyAccountPage';

describe('<MyAccountPage url="/my-account"/>', () => {
    let component
    beforeEach(() => {
        component = render (
            <BrowserRouter>
                <MyAccountPage/>
            </BrowserRouter>
        )
    })
    test('The page have images', async () => {
        const img = component.container.querySelector(['img'])
        expect(img).toBeInTheDocument()
        expect(img).toHaveAttribute['alt']
    });

    test('The page have "compras" section', async () => {
        const text = component.container.querySelector(['p'])
        expect(text).toBeInTheDocument()
    });

})
