import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import userEvent from '@testing-library/user-event'
import SearchHelp from "./SearchHelp"

describe('<SearchHelp />', () => {

  let rerenderSearchHelp

  beforeEach(() => {
    const { rerender } = render(
      <BrowserRouter>
        <SearchHelp />
      </BrowserRouter>
    )

    rerenderSearchHelp = rerender
  })

  test('render a placeholder that say "Buscá en Ayuda"', () => {
    const placeHolder = screen.getByPlaceholderText('Buscá en Ayuda')
    expect(placeHolder).toBeDefined()
  })

  test('render suggested results container when something is typed in search input', () => {
    const input = document.getElementById('search-help')
    userEvent.type(input, 'Bases')
    const suggestedResultContainer = document.getElementById('suggested-results')
    expect(suggestedResultContainer).toBeDefined()
  })

  test('render less than 7 suggested results (6 max.) when something is typed in search input', () => {
    const input = document.getElementById('search-help')
    userEvent.type(input, 'Bases')
    const anchors = screen.getAllByRole('link')
    expect(anchors.length).toBeLessThan(7)
  })

  test('clicking the arrow icon, the suggested result remains in search input', () => {
    const input = document.getElementById('search-help')
    userEvent.type(input, 'Bases')
    input.focus()
    const anchors = screen.getAllByRole('link')
    const suggestedText = anchors[0].children[1].innerHTML
    const arrowIconBtn = document.getElementById('suggested-results').children[1].children[1]
    userEvent.click(arrowIconBtn)
    expect(input.value).toBe(suggestedText)
  })

  test('clicking the button "X" clear the search input content', () => {
    const input = document.getElementById('search-help')
    userEvent.type(input, 'Bases')
    const clearInputContentBtn = document.getElementById('clear-input-content')
    userEvent.click(clearInputContentBtn)
    expect(input.value).toBe('')
  })

  test('should render "Estoy buscando..." text as placeholder when receive prop isHelpMode={false}', () => {
    rerenderSearchHelp(
      <BrowserRouter>
        <SearchHelp isHelpMode={false} />
      </BrowserRouter>
    )
    const placeHolder = screen.getByPlaceholderText('Estoy buscando...')
    expect(placeHolder).toBeDefined()
  })
})