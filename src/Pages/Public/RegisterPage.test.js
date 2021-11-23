import { render, screen } from '@testing-library/react';
import Register from './RegisterPage'

it('render a input text', async () => {
    render(<Register />)
    const formInput = screen.getByLabelText(/Nombre/i)
    expect(formInput).toBeInTheDocument();
    expect(formInput).toHaveAttribute('type')
})

it('reder buttons with text "Validar"', async () => {
    render(<Register />)
    const buttons = screen.getAllByText('Validar')
    buttons.forEach(element => {
        expect(element).toBeInTheDocument();
    });

})