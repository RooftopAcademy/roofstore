import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import ConfirmClassification from './ConfirmClassification'

describe('<SearchHelp />', () => {
  let component
  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <ConfirmClassification />
      </BrowserRouter>
    )
  })

  test('render an user guide text "Confirmá la clasificación de tu producto"', () => {
    const userGuideText = screen.getByText('Confirmá la clasificación de tu producto')
    expect(userGuideText).toBeDefined()
  })

  test('Category tree, maximum 3 levels', () => {
    const classificationLevels = document.getElementsByClassName('js-classification').length
    expect(classificationLevels).toBeLessThan(4)
  })

  test('category indicated is in bold', () => {
    const categoryIndicated = component.getByText('Tu publicación')
    expect(categoryIndicated).toHaveClass('txt-bold')
  })

  test('render two buttons', () => {
    const numOfButtons = screen.getAllByRole('button')
    expect(numOfButtons).toHaveLength(2)
  })

  test('render a button for approve classifications', () => {
    const approveClassificationsBtn = document.getElementsByClassName('js-btn-approve')[0]
    expect(approveClassificationsBtn).toBeDefined()
  })

  test('render approve button with 100% of width', () => {
    const approveClassificationsBtn = document.getElementsByClassName('js-btn-approve')[0]
    expect(approveClassificationsBtn).toHaveClass('w-100')
  })

  test('render a button for modify classifications', () => {
    const modifyClassificationsBtn = document.getElementsByClassName('js-btn-modify')[0]
    expect(modifyClassificationsBtn).toBeDefined()
  })

  test('render modify button with 100% of width', () => {
    const modifyClassificationsBtn = document.getElementsByClassName('js-btn-modify')[0]
    expect(modifyClassificationsBtn).toHaveClass('w-100')
  })
})
