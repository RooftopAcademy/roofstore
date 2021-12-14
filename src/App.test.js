import { render, screen } from '@testing-library/react';
import App from './App';

test('should render <HomePage />', () => {
  render(<App />);
  const element = screen.getByText(/Visto recientemente/i)
  expect(element).toBeInTheDocument();
});
