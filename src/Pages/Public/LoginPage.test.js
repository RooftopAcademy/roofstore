import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from './LoginPage'

const MockLogin = () => {
    return (
        <BrowserRouter>
            <LoginPage />
        </BrowserRouter>
    )
}

it('render the input in form of login page', async () => {
    render(<MockLogin />)
    const formInput = screen.getByLabelText(/Telefono/i)
    expect(formInput).toBeInTheDocument();
    expect(formInput).toHaveAttribute('type')
})

it('reder a button with text "Continuar"', async () => {
    render(<MockLogin />)
    const button = screen.getByText(/Continuar/i)
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-blue")
})