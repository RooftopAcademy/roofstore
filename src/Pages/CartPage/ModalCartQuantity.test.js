import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CartItem from './CartItem';
import userEvent from '@testing-library/user-event'

const item = {
  "id" : 1,
  "image": "https://http2.mlstatic.com/D_Q_NP_2X_649806-MLA47931899819_102021-G.webp",
  "title": "Notebook Hp 14-cf2074la Intel Core I5 10210u 8gb 256gb Win10",
  "price": 99.999,
  "discount": "8% OFF",
  "installments": "9x $ 11.111 sin interés",
  "freeShipping": true,
  "fullShipping": true,
  "cant": 1
}

describe("ModalCartQuantity", () => {
  beforeEach(() =>
    render (
      <BrowserRouter>
        <CartItem item={item} />
      </BrowserRouter>
    )
  )

  test("render the modal when clicking on the select quantity button.", () => {
    const openModalBtn = screen.getByText(/1 u./i)
    userEvent.click(openModalBtn)
    const modalCartQuantity = screen.getByTestId('modal-cart-cuantity')
    expect(modalCartQuantity).toBeInTheDocument()
  })

  test("that it can close the modal once opened.", () => {
    const openModalBtn = screen.getByText(/1 u./i)
    userEvent.click(openModalBtn)
    const modalCartQuantity = screen.getByTestId('modal-cart-cuantity')
    const closeModalBtn = screen.getByTestId('modal-button-close')
    userEvent.click(closeModalBtn)
    expect(modalCartQuantity).not.toBeInTheDocument()
  })
})
