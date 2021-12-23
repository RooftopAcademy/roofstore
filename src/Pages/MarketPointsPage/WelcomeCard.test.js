import { render, screen, fireEvent } from '@testing-library/react';
import WelcomeCard from './WelcomeCard';

const mockedCloseWelcome = jest.fn()


describe('WelcomeCardPage', () => {
  it('should close the welcome card when clicked the close icon', () => {
    render(
      <WelcomeCard
        closeWelcome={mockedCloseWelcome}
      />
    )
    const iconElement = screen.getByTestId('close-welcome')
    const welcomeElement = screen.getByText('¡Te damos la bienvenida a Roofstore Puntos!')
    fireEvent.click(iconElement)
    expect(welcomeElement).toBeInTheDocument()
  })
}) 