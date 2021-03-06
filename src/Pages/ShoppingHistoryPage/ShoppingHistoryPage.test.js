import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ShoppingHistoryPage from './ShoppingHistoryPage'
import App from "../../App"
import { AuthContext } from "../../context/AuthContext"

describe('<ShoppingHistoryPage/>',()=>{
  let component
  beforeEach(()=>{
    component = render(
      <BrowserRouter>
        <ShoppingHistoryPage/>
      </BrowserRouter>
    )
  })

  test('Menu has a title',()=>{
    const title = screen.getByText('Mis Compras')
    expect(title).toBeDefined()
  })

  test('Has a navigation icon', ()=>{
    const nav = component.container.querySelector('a')
    const icon = component.container.querySelector('i')
    expect(nav).toContainElement(icon)
  })

  test('Has preview of previous purchases', ()=>{
    const card = component.container.querySelector('.shopping-history-item')
    expect(card).toBeDefined()
  })
})

describe(
  "Test the route: /shopping-history" , () => {

    test("should render <LoginPage /> if user is not authenticated and path to be /login", () => {
      const user = null
      window.history.pushState({}, "ShoppingHistoryPage", "/shopping-history")

      render(
        <AuthContext.Provider value={{ user }}>
          <App />
        </AuthContext.Provider>
      )

      const loginTitle = screen.getByText(
        /Ingresá tu teléfono, e‑mail o usuario/i
      )
      expect(loginTitle).toBeInTheDocument()
      expect(window.location.pathname).toBe("/login")
    })

    test("should render <ShoppingHistoryPage /> with 'Mis Compras' text in the menu if user is authenticated", () => {
      const user = { username: "pepito", password: "secret" }
      window.history.pushState({}, "ShoppingHistoryPage", "/shopping-history")

      render(
        <AuthContext.Provider value={{ user }}>
          <App />
        </AuthContext.Provider>
      )

      const menuTitle = screen.getByText(/Mis Compras/i)
      expect(menuTitle).toBeInTheDocument()
      expect(window.location.pathname).toBe("/shopping-history")
    })
  }
)
