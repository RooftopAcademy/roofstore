import { render, screen, cleanup } from '@testing-library/react';
import axiosMock from 'axios'
import { BrowserRouter } from 'react-router-dom';
import CartPage from './CartPage';
import App from "../../App"
import { AuthContext } from "../../context/AuthContext"

const MockCartPage = () => {
    return(
        <BrowserRouter>
            <CartPage />
        </BrowserRouter>
    )
}

const mockResponse = {
    data : [
        {
            id : 1,
            image: "https://http2.mlstatic.com/D_Q_NP_2X_649806-MLA47931899819_102021-G.webp",
            title: "Notebook Hp 14-cf2074la Intel Core I5 10210u 8gb 256gb Win10",
            price: 99.999,
            discount: "8% OFF",
            installments: "9x $ 11.111 sin interés",
            freeShipping: true,
            fullShipping: true,
            cant: 1
        },
        {
            id: 2,
            image: "https://http2.mlstatic.com/D_Q_NP_2X_975344-MLA47584874405_092021-G.webp",
            title: "Notebook Lenovo IdeaPad S340-14API  platinum gray 14', AMD Ryzen 3 3200U  8GB de RAM 1TB HDD, AMD Radeon RX Vega 3 1366x768px Windows 10 Home",
            price: 77.999,
            discount: "8% OFF",
            installments: "",
            freeShipping: false,
            fullShipping: false,
            cant: 1
        },
    ]
}

describe("CartPage", () => {

    beforeEach( async () => {
        axiosMock.get.mockResolvedValueOnce(mockResponse)
        render(<MockCartPage/>)
    })

    afterEach(cleanup)

    it("should render a product", async () => {
        const divElement = await screen.findByTestId("cart-product-0")
        expect(divElement).toBeInTheDocument()
    })

    it("should render products item", async () => {
        const divElements = await screen.findAllByTestId(/cart-product/i)
        expect(divElements.length).toBe(2)
    })
})

describe("Test the route: /cart", () => {

  test('should render <CartUnlogged /> if user is not authenticated', () => {
    const user = null
    window.history.pushState({}, "CartPage", "/cart")

    render(
    <AuthContext.Provider value={{ user }}>
        <App />
    </AuthContext.Provider>
    )

    const loginTitle = screen.getByText(
        /Para agregar al carrito, ingresá a tu cuenta/i
    )
    expect(loginTitle).toBeInTheDocument()
    expect(window.location.pathname).toBe("/cart")
  })

  test("should render <CartPage /> with a product if user is authenticated", async () => {
    const user = { username: "pepito", password: "secret" }

    axiosMock.get.mockResolvedValueOnce(mockResponse)

    window.history.pushState({}, "CartPage", "/cart")

    render(
      <AuthContext.Provider value={{ user }}>
        <App />
      </AuthContext.Provider>
    )

    const divElement = await screen.findByTestId("cart-product-0")
    expect(divElement).toBeInTheDocument()
    expect(window.location.pathname).toBe("/cart")
  })
})