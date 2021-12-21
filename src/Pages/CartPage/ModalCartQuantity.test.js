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
    const modalCartQuantity = screen.getByTestId('modal-cart-quantity')
    expect(modalCartQuantity).toBeInTheDocument()
  })

  test("that it can close the modal once opened.", () => {
    const openModalBtn = screen.getByText(/1 u./i)
    userEvent.click(openModalBtn)
    const modalCartQuantity = screen.getByTestId('modal-cart-quantity')
    const closeModalBtn = screen.getByTestId('modal-button-close')
    userEvent.click(closeModalBtn)
    expect(modalCartQuantity).not.toBeInTheDocument()
  })

  test("the number of modal options are less than 8.", () => {
    const openModalBtn = screen.getByText(/1 u./i)
    userEvent.click(openModalBtn)
    const modalContainerQuantities = screen.getByTestId('modal-container-quantities')
    expect(modalContainerQuantities.childElementCount).toBeLessThan(8)
  })

  test("that it opens the second modal when clicking on the last option.", () => {
    const openModalBtn = screen.getByText(/1 u./i)
    userEvent.click(openModalBtn)
    const lastOption = screen.getByText(/Más de 6 unidades/i)
    userEvent.click(lastOption)
    const subModalCartQuantity = screen.getByTestId('submodal-cart-quantity')
    expect(subModalCartQuantity).toBeInTheDocument()
  })

  test("that it can close the second modal once opened.", () => {
    const openModalBtn = screen.getByText(/1 u./i)
    userEvent.click(openModalBtn)
    const lastOption = screen.getByText(/Más de 6 unidades/i)
    userEvent.click(lastOption)
    const subModalCartQuantity = screen.getByTestId('submodal-cart-quantity')
    const closeSubModalBtn = screen.getByTestId('submodal-button-close')
    userEvent.click(closeSubModalBtn)
    expect(subModalCartQuantity).not.toBeInTheDocument()
  })

  test("that when select the fourth option, the original amount changes on the page.", () => {
    const openModalBtn = screen.getByText(/1 u./i)
    userEvent.click(openModalBtn)
    const optionFour = screen.getByText(/4 unidades/i)
    const valueOption = optionFour.value
    userEvent.click(optionFour)
    const valueOpenModalBtn = openModalBtn.firstChild.nodeValue
    expect(valueOpenModalBtn).not.toBe(1)
    expect(valueOpenModalBtn).toBe(valueOption)
  })
})
