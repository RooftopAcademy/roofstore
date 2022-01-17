import { render, screen } from '@testing-library/react';
import App from './App';

import useFetch from './hooks/useFetch';

// Mock de useFetch
jest.mock('./hooks/useFetch', () => {
  return jest.fn();
});

// Mock de window.scrollTo
window.scrollTo = jest.fn();

// Mock de geolocation
const mockGeolocation = {
  getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
    Promise.resolve(
      success({
        coords: {
          latitude: 51.1,
          longitude: 45.3
        }
      })
    )
  )
};
global.navigator.geolocation = mockGeolocation;

// Mock de Firebase Cloud Messaging
jest.mock('./firebase.js', () => ({
  ...jest.requireActual('./firebase.js'),
  onForegroundMessage: jest.fn()
}));

const history = {
  meta: {
    totalItems: 39,
    itemCount: 10,
    itemsPerPage: 10,
    totalPages: 2,
    currentPage: 1
  },
  links: {
    first: '/favorites',
    previous: '',
    next: '/favorites?page=2',
    last: '/favorites?page=4'
  },
  items: [
    {
      id: 1,
      shoppingDate: '14 de Octubre',
      products: [
        {
          productId: 1,
          productName: 'Pellet Sanitario Vegetal Poopy Pets 25 Kg',
          img: '/images/pellet-pets.jpeg',
          shippingStatus: 'En camino',
          deliveryDate: 'Tu compra llega el 16 de Octubre'
        }
      ]
    },
    {
      id: 2,
      shoppingDate: '21 de Septiembre',
      products: [
        {
          productId: 2,
          productName: '/images/ruedas-silla.jpeg',
          img: '',
          shippingStatus: 'Entregado',
          deliveryDate: 'Llegó el 22 de Septiembre'
        }
      ]
    },
    {
      id: 3,
      shoppingDate: '19 de Septiembre',
      products: [
        {
          productId: 3,
          productName: 'Cable Usb Tipo C 2 Metros Carga Rapida',
          img: '/images/cable-usb.jpeg',
          shippingStatus: 'Entregado',
          deliveryDate: 'Llegó el 20 de Septiembre'
        },
        {
          productId: 4,
          productName: 'Cable Hdmi 1,2m Macho Macho Full Hd 1080p - Polotecno',
          img: '/images/cable-hdmi.jpeg',
          shippingStatus: 'Entregado',
          deliveryDate: 'Llegó el 20 de Septiembre'
        }
      ]
    }
  ]
};

test('should render <HomePage />', () => {
  useFetch.mockResolvedValue({ data: history });
  render(<App />);
  const element = screen.getByText(/Visto recientemente/i)
  expect(element).toBeInTheDocument();
});
