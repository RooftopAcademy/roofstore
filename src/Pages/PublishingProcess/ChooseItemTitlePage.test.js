import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ChooseItemTitlePage from './ChooseItemTitlePage'
import userEvent from '@testing-library/user-event'
import { AuthContext } from "../../context/AuthContext"

import App from '../../App'

describe("Test the route: /sell/item-title without authenticated user, user is null", () => {

  const user = null

  beforeEach(() => {
    window.history.pushState({}, "ChooseItemTitlePage", "/sell/item-title")
    render(
      <AuthContext.Provider value={{ user }}>
        <App />
      </AuthContext.Provider>
    )
  })

  test('should render <LoginPage /> in the route: "/sell/item-title"', () => {
    const loginTitle = screen.getByText(
      "¡Hola! Ingresá tu teléfono, e‑mail o usuario"
    )
    expect(loginTitle).toBeInTheDocument()
    expect(window.location.pathname).toBe("/login")
  })
})

describe('Test the route: /sell/item-title with authenticated user', () => {
  const user = { username: 'malvavisco tostado'}
  beforeEach(() => {
    window.history.pushState({}, 'ChooseItemTitlePage', '/sell/item-title')
    render(
      <AuthContext.Provider value={{ user }}>
        <App />
      </AuthContext.Provider>
    )
  })

  test('render components of <ChooseItemTitle /> in the route: "/sell/item-title"', () => {
    const input = document.getElementsByTagName('textarea')[0]
    const continueBtn = document.getElementsByTagName('button')[0]
    const userGuideText = screen.getByText('Indicá tu producto, marca y modelo')
    expect(input).toBeInTheDocument()
    expect(continueBtn).toBeInTheDocument()
    expect(userGuideText).toBeInTheDocument()
    expect(window.location.pathname).toBe('/sell/item-title')
  })

  test('validate load data and switch to the main page ("/") clicking in button "Continuar".', () => {
    const userGuideText = screen.getByText('Indicá tu producto, marca y modelo')
    const continueBtn = document.getElementsByTagName('button')[0]
    const input = document.getElementsByTagName('textarea')[0]
    userEvent.type(input, 'Foo')
    userEvent.click(continueBtn)
    expect(input).not.toBeInTheDocument()
    expect(continueBtn).not.toBeInTheDocument()
    expect(userGuideText).not.toBeInTheDocument()
    expect(window.location.pathname).toBe('/')
  })
})

describe('Test the component page: <ChooseItemTitlePage />', () => {
  let component
  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <ChooseItemTitlePage />
      </BrowserRouter>
    )
  })

  test('render an user guide text "Indicá tu producto, marca y modelo".', () => {
    const userGuideText = screen.getByText('Indicá tu producto, marca y modelo')
    expect(userGuideText).toBeInTheDocument()
  })

  test('render an input of one line.', () => {
    const input = component.container.getElementsByTagName('textarea')[0]
    expect(input).toHaveAttribute('rows', '1')
  })

  test('render a help text below the input.', async () => {
    const input = component.container.getElementsByTagName('textarea')[0]
    const descriptionBelowInput = input.nextElementSibling.children[0].textContent
    expect(descriptionBelowInput).toBe('Evita incluir condiciones de venta.')
  })

  test('render a button with text content "Continuar"', () => {
    const continueBtn = component.container.querySelector('button[disabled]')
    expect(continueBtn).toHaveTextContent('Continuar')
  })

  test('that by not writing in the input the button is disabled', () => {
    const continueBtn = component.container.querySelector('button[disabled]')
    expect(continueBtn).toHaveAttribute('disabled')
  })

  test('that when writing in the input the button is enabled', () => {
    const continueBtn = component.container.querySelector('button[disabled]')
    const input = component.container.getElementsByTagName('textarea')[0]
    userEvent.type(input, 'Foo')
    expect(continueBtn).not.toHaveAttribute('disabled')
  })
})
