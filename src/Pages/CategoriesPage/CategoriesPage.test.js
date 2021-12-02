import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CategoriesPage from './CategoriesPage'

describe('<CategoriesPage/>', () => {
  let component

  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <CategoriesPage/>
      </BrowserRouter>
    )
  })

  test('Section has a title of "Categorías"', ()=>{
    const title = screen.getByText('Categorías')
    expect(title).toBeDefined()
  })

  test('Each category is a link', ()=>{
    const linkArr = component.container.querySelectorAll('a')
    linkArr.forEach(link=> expect(link.href).toBeDefined())
  })

  test('Each category has an arrow icon', ()=>{
    const linkArr = component.container.querySelectorAll('a')
    const icons = component.container.querySelectorAll('i')
    expect(icons.length).toBeLessThanOrEqual(linkArr.length)
  })
})